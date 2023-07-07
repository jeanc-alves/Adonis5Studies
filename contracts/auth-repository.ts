declare module '@ioc:AuthRepository' {
  import AuthRepository from 'App/Repositories/AuthRepository'
  const AuthRepositoryService: AuthRepository
  export default AuthRepositoryService
}
