import Drive from '@ioc:Adonis/Core/Drive'
export default class DownloadFileS3UseCase {
  private file_repository: any
  constructor(repository: any) {
    this.file_repository = repository
  }
  public async execute({ file_id }) {
    const file = await this.file_repository.show({ id: file_id })
    return Drive.use('s3').getStream(file.unique_name)
  }
}
