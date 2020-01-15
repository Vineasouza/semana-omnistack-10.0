const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query params: request.query (filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração  de um registro)

app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello OmniStack' });
});

// porta de acesso http://localhost:3333/
app.listen(3333);