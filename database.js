// const sqlite3 = require('sqlite3').verbose()
// const db = new sqlite3.Database("db.sqlite",   () => {
//     console.log('Banco de Dados conectado')
//     db.run(`CREATE TABLE user (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name VARCHAR(50),
//         email VARCHAR(50),
//         password VARCHAR(50)
//      )` , (error) => {
//         if (error) {
//             console.error('Deu ruim')
//             return;
//         }
//         var insertQuery = "INSERT INTO user (name, email, password) VALUES (?,?,?)"
//         db.run(insertQuery, ["usuario1", "usuario1@email.com", "123456"])
//         db.run(insertQuery, ["admin", "admin@email.com", "123456"])
//         }
//     )

//   console.log('Rodou os SQLs')
     
// })

// module.exports = db

const mysql = require('mysql2')

const pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: 'senai-dev',
  waitForConnections: true,   // Espera por conexões disponíveis
  connectionLimit: 10,        // Limite máximo de conexões no pool
  queueLimit: 0               // Número máximo de conexões em espera (0 = ilimitado)
})

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting: ' + err.stack)
    return
  }
  console.log('Connected as id ' + connection.threadId)

  // Libera a conexão de volta para o pool após o uso
  connection.release()
})

module.exports = pool


