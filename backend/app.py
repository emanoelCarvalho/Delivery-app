from flask import Flask, Response, request, render_template
from flask_sqlalchemy import SQLAlchemy
import mysql.connector
import json

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:route@127.0.0.1/cardapio-database.sql'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    nome = db.Column(db.String(50))
    email = db.Column(db.String(100))
    telefone = db.Column(db.String(100))
    cpf = db.Column(db.String(100))
    endereco = db.Column(db.String(100))
    def to_json(self):
        return {"id": self.id, "nome": self.nome, "email": self.email, "telefone": self.telefone, "cpf": self.cpf, "endereco": self.endereco}


# Selecionar Tudo

@app.route('/') 
def index():
    render_template('index.html')

@app.route("/Users", methods=["GET"])
def seleciona_Users():
    Users_objetos = User.query.all()
    Users_json = [User.to_json() for User in Users_objetos]

    return gera_response(200, "Users", Users_json)

# Selecionar Individual
@app.route("/User/<id>", methods=["GET"])
def seleciona_User(id):
    User_objeto = User.query.filter_by(id=id).first()
    User_json = User_objeto.to_json()

    return gera_response(200, "User", User_json)

# Cadastrar
@app.route("/User", methods=["POST"])
def cria_User():
    body = request.get_json()

    try:
        User = User(nome=body["nome"], email= body["email"], telefone= body["telefone"], cpf= body["cpf"], endereco= body["endereco"])
        db.session.add(User)
        db.session.commit()
        return gera_response(201, "User", User.to_json(), "Criado com sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(400, "User", {}, "Erro ao cadastrar")


# Atualizar
@app.route("/User/<id>", methods=["PUT"])
def atualiza_User(id):
    User_objeto = User.query.filter_by(id=id).first()
    body = request.get_json()

    try:
        if('nome' in body):
            User_objeto.nome = body['nome']
        if('email' in body):
            User_objeto.email = body['email']
        if('telefone' in body):
            User_objeto.telefone = body['telefone']
        if('endereco' in body):
            User_objeto.endereco = body['endereco']
        
        
        
        db.session.add(User_objeto)
        db.session.commit()
        return gera_response(200, "User", User_objeto.to_json(), "Atualizado com sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(400, "User", {}, "Erro ao atualizar")

# Deletar
@app.route("/User/<id>", methods=["DELETE"])
def deleta_User(id):
    User_objeto = User.query.filter_by(id=id).first()

    try:
        db.session.delete(User_objeto)
        db.session.commit()
        return gera_response(200, "User", User_objeto.to_json(), "Deletado com sucesso")
    except Exception as e:
        print('Erro', e)
        return gera_response(400, "User", {}, "Erro ao deletar")


def gera_response(status, nome_do_conteudo, conteudo, mensagem=False):
    body = {}
    body[nome_do_conteudo] = conteudo

    if(mensagem):
        body["mensagem"] = mensagem

    return Response(json.dumps(body), status=status, mimetype="application/json")


app.run()