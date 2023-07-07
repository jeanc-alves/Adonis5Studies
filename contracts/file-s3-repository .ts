declare module '@ioc:FileS3Repository' {
  import FileS3Repository from 'App/Repositories/FileS3Repository'
  const FileS3RepositoryService: FileS3Repository
  export default FileS3RepositoryService
}
