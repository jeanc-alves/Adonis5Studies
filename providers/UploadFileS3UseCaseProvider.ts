import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class UploadFileS3UseCaseProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    const UploadFileS3UseCase = (
      await import('App/Controllers/Http/UploadFileS3/UploadFileS3UseCase')
    ).default
    const FileS3Repository = (await import('App/Repositories/FileS3Repository')).default
    return this.app.container.bind(
      'UploadFileS3UseCase',
      () => new UploadFileS3UseCase(new FileS3Repository())
    )
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
