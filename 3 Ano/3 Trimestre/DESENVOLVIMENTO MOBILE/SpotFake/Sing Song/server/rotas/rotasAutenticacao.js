import express from 'express'
import { registroFuncao, loginFuncao} from "../controladores/controlador_autenticacao.js";

const rotas_autenticacao = express.Router()

rotas_autenticacao.post('/registro', registroFuncao)
rotas_autenticacao.post('/login', loginFuncao)

export {rotas_autenticacao}