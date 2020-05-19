const mongoose = require('mongoose')

const tarefaSchema = new mongoose.Schema({

  tarefaDesc: { type: String, require: true, },
  status: { type: String, require: true },
  dataCriacao: { type: Date, required: true }

})

const Tarefa = mongoose.model('Tarefa', tarefaSchema)

module.exports = Tarefa;