export default class UploadFileS3UseCase {
  protected repository: any
  constructor(repository: any) {
    this.repository = repository
  }
  async execute({ unique_name, url, file_name, user_id }) {
    return this.repository.store({ unique_name, url, file_name, user_id })
  }
}
