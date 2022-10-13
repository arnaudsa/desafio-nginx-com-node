# desafio-nginx-com-node

#### Fazendo o setup do projeto
<br />
Baixar as dependências do projeto

```console
npm install
```

Para subir a aplicação é necessário ter o docker instalado, executar o comando abaixo para fazer o build de app.
```console
docker-compose up -d --build
```

### A aplicação possui dois endpoints um para listar os usuários e outro para cadastrar o usuário.
- Cadastrando um usuário
 ```console
 curl --location --request POST 'localhost:8080/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Priscila Helena",
    "email": "priscilahelena@gmail.com"
}'
 ```
- Listando um usuário
```console
curl --location --request GET 'localhost:8080/users'
```
