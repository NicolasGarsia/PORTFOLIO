import express from 'express'
import { pegar_usuario_funcao } from '../controladores/controlador_usuario.js'

const rotas_usuarios = express.Router()

rotas_usuarios.get('/:id', pegar_usuario_funcao)

export {rotas_usuarios}