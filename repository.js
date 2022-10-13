const { response } = require('express');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'test',
  host: 'db',
  database: 'sampledb',
  password: 'test',
  port: 5432,
});

pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";
    pool.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});

const getUsers = (request, response) => {
    const date = new Date()
    console.log(`${date.toISOString()} Consultando os usuários `);

    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) =>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body    
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email], (error, result, fields) => {
      if (error) {
        throw error
      }
      const date = new Date()
      console.log(`${date.toISOString()} Criando um novo usuário: ${name} email: ${email}`);
  
      response.status(201).send(`User added with ID: ${result.rows[0].id}`)
    })
}

module.exports = {
    getUsers, createUser
}
