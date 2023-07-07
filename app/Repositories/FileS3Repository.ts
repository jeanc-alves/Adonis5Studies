import { CrudRepository } from '@ioc:AdonisCrud/Crud/Repository'
import FileS3 from 'App/Models/FileS3'

@CrudRepository(FileS3)
export default class FileS3Repository {}
