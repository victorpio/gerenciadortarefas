const Tarefa = require('../model/tarefaSchema')

class TarefaController {

  async post(req, res) {

    const { status } = req.body;

    try {
      if (await Tarefa.findOne({ status }) and await Tarefa.findOne({ tarefaDesc }) )
        return res.status(400).send({ message: "Tarefa já cadastrada!" })

      const client = await Tarefa.create(req.body)

      return res.send({ client })
    }
    catch (error) {
      return res.status(400).send({ message: 'Algo deu errado na criação da tarefa!' })
    }
  }

  async list(req, res) {
    try {
      const info = await Tarefa.find()
      return res.status(200).json({ info })
    }
    catch (error) {
      return res.status(400).send({ message: 'Erro ao listar a tarefa.' })
    }
  }

  async listOne(req, res) {
    try {
      const info = await Tarefa.findById(req.params.id)
        .then(doc => {
          if (!doc) { return res.status(400).end(); }
          return res.status(200).json(doc)
        })
      return info

    }
    catch (error) {
      return res.status(400).send({ message: 'Erro ao listar a tarefa.' })
    }
  }

  async update(req, res) {
    try {
      const client = await Tarefa.findById(req.params.id)
      const model = client
        model.tarefaDesc = req.body.tarefaDesc,
        model.status = req.body.status,
        model.dataCriacao = req.body.dataCriacao
      model.save()
      return res.status(200).send({ model, message: 'Tarefa editada com sucesso.' })
    }
    catch (error) {
      return res.status(400).send({ message: 'Erro. Alteração não concluída. Por favor, tente novamente.' })
    }
  }

  async delete(req, res) {
    try {
      const client = await Cliente.findOneAndDelete(req.params.id)
      return res.status(200).send({ client })
    }
    catch (error) {
      return res.status(400).send({ message: 'Erro ao deletar tarefa. Por favor, tente novamente.' })
    }
  }
}

module.exports = new TarefaController()