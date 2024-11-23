import Express from "express";
import cors from 'cors'
import { rotas_autenticacao } from "./rotas/rotasAutenticacao.js";
import { rotas_usuarios } from "./rotas/rotasUsuarios.js";

const app = Express()
app.use(Express.json())
app.use(cors())

//criarTabelas()

app.use('/autenticacao', rotas_autenticacao)
app.use('/usuario', rotas_autenticacao)


app.listen(8000);