declare module '@ioc:UserRepository' {
  import UserRepository from 'App/Repositories/UserRepository'
  const UserRepositoryService: UserRepository
  export default UserRepositoryService
}
