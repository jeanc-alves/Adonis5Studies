import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthRepository from 'App/Repositories/AuthRepository'

export default class AuthController {
  protected repository
  constructor() {
    this.repository = new AuthRepository()
  }
  public async updatePassword(ctx: HttpContextContract) {
    return this.repository.updatePassword(ctx)
  }

  public async resetPassword(ctx: HttpContextContract) {
    return this.repository.resetPassword(ctx)
  }

  public async login(ctx: HttpContextContract) {
    const { auth, request, response } = ctx
    const email = request.input('email')
    const password = request.input('password')
    try {
      return this.repository.login({ email, password, auth })
    } catch (error) {
      return response.status(401).json({ message: error.message })
    }
  }

  public async me(ctx) {
    const { user } = ctx.auth
    return this.repository.me({ user })
  }
}
