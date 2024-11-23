

const pegar_usuario_funcao =(req, res)=>{
    const id_requisicao = req.params.id
    console.log('o id enviado foi', id_requisicao)
    res.send(true)
    return
}

export{pegar_usuario_funcao}