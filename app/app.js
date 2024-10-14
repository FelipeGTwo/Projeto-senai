const express = require("express")
const app = express()
const port = 8080
const path = require('path');
const db = require('../database')


 app.get('/api-tester', (req, res) => {
     res.sendFile(path.join(__dirname, 'public/index.html'))
 })
  
// app.get('/', (req, res) => {
//     res.send('Funcionou essa p****!')
// })
  

app.use(express.json()); // Para permitir que o Express leia JSON no corpo das requisições

app.post('/tasks', (req, res) => {
    const dados = req.body
    body = req.body.id
    console.log(dados)
})


app.listen(port, () => {
    console.log(`Rodando ${port}`)
})

app.get('/tasks', (req, res, next) => {
   db.query("SELECT * FROM tasks", (error, row) => {
   	if(error) {
    	res.json(error)
    }
    res.send(row)
   })
 })

// app.post('/tasks', (req, res, next) => {
//  db.query("SELECT * FROM user WHERE id = ?", (error, row) => {
//    if(error) {
//     res.json(error)
//   }
//   res.send(row)
//  })
// })
 

//   app.get('tasks', (req, res) => {
// 	parametro = req.params.id
//   db.get("SELECT * FROM user WHERE id = ?", parametro, (error, row) => {
//   	if(error) {
//     	res.json(error)
//       return
//     }
//     res.send(row)
//   })
// })

