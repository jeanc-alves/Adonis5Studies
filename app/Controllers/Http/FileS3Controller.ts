import { Crud } from '@ioc:AdonisCrud/Crud/Controller'
import FileS3Repository from '@ioc:FileS3Repository'

import FileS3Transformer from 'App/Transformers/FileS3Transformer'
import Event from '@ioc:Adonis/Core/Event'

@Crud({
  event: Event,
  repository: FileS3Repository,
  storeProps: ['url', 'file_name', 'unique_name', 'user_id'],
  updateProps: ['url', 'file_name', 'unique_name', 'user_id'],
  transformer: FileS3Transformer,
  validators: {},
})
export default class FileS3Controller {}
