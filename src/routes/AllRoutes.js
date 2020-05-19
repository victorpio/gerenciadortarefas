const { Router } = require('express')
const ClienteController = require('../controller/TarefaController')
const app = Router()


// Rotas de Clintes.
app.post('/tarefa', TarefaController.post);
app.get('/tarefa', TarefaController.list);
app.delete('/tarefa/delete/:id', TarefaController.delete);
app.get('/tarefa/:id', TarefaController.listOne);
app.put('/tarefa/edit/:id', TarefaController.update);

module.exports = app;
