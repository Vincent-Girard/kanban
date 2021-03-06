import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardService } from '../services/BoardService'
import { listService } from '../services/ListService'

export class BoardController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:boardId', this.getOne)
      .get('/:id/lists', this.getLists)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await boardService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  // ANCHOR why is it req.query
  async getAll(req, res, next) {
    try {
      return res.send(await boardService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      return res.send(await boardService.delete(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await boardService.getOne(req.params.boardId))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await boardService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async getLists(req, res, next) {
    try {
      const data = await listService.getLists({ board: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
