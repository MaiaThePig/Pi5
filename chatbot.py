from fastapi import FastAPI
from pydantic import BaseModel
import spacy
import nltk
from pymongo import MongoClient

client = MongoClient("mongodb+srv://formatBot:c0d4cf14f7a10c35c2aa562b8817ffae71f5e4976d416fb6fcb9fb69a79e88c8@formatbot.bmsbb.mongodb.net/")
db = client["chatbot_db"]
colecao = db["perguntas"]

nltk.download('all')
nltk.download("punkt")
nltk.download("stopwords")

nlp = spacy.load("pt_core_news_sm") #deixa a IA em portugues (https://spacy.io/models/pt) -> lista da IA treinada em pt

app = FastAPI()

class Pergunta(BaseModel):
    texto: str

class NovaPergunta(BaseModel):
    intencao: str
    perguntas: list
    resposta: str

#processamento do texto para o chatbot funcionar, usa o spacy e nltk
#para remover e corrigir palavras, deixando somente as com grande importancia
def processarTexto(texto):
    doc = nlp(texto.lower())
    palavras = [token.lemma_ for token in doc if not token.is_stop] #linha que permite isso
    return " ".join(palavras)

def identificarIntencao(pergunta):
    palavras = nltk.word_tokenize(pergunta.lower())
    palavras = [p for p in palavras if p not in nltk.corpus.stopwords.words("portuguese")] #remove coisas inuteis, como pontuaçoes, mas nao remove acentos se nao me engano,
#                                                                                           posso adicionar depois qualquer coisa

    todasIntencoes = list(colecao.find({}))

    for item in todasIntencoes:
        for frase in item["perguntas"]:
            if any(p in frase for p in palavras):
                return item
    return None

@app.post("/perguntar/")
async def perguntar(pergunta: Pergunta):
    perguntaProcessada = processarTexto(pergunta.texto)
    intencao = identificarIntencao(perguntaProcessada)

    if intencao:
        return {"resposta": intencao["resposta"]}
    else:
        return {"resposta": "Desculpe, não entendi sua pergunta. Pode reformular?"}

#log de ativação, so confere se da isso quando rodar basicamente
@app.get("/") 
def home():
    return {"message": "Chatbot online."}

@app.post("/cadastrar/")
async def cadastrarPergunta(nova: NovaPergunta):
    colecao.insert_one(nova.dict())
    return {"mensagem": "Pergunta cadastrada com sucesso."}

'''
dependencias (roda cada linha de cada vez, qualquer coisa cria uma venv se der algum erro):
pip install fastapi uvicorn nltk spacy pymongo
python -m pip install --upgrade pip
python -m spacy download pt_core_news_sm

codigo pra rodar: 
uvicorn chatbot_mongodb:app --reload
'''
