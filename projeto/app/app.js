const express = require("express")
const app = express()
const port = 8080


app.get('/sobre', (req, res)=>{
    res.send("<h1>Aula<h1>")
})

app.listen(port, ()=>{
    console.log("Ta Rodando")
})