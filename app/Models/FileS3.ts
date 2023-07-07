import BaseCrudModel from './BaseCrudModel'
import { HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class FileS3 extends BaseCrudModel {
  public static table = 'files_s3'
  @column({ isPrimary: true })
  public id: number

  @column()
  public url: string

  @column()
  public file_name: string

  @column()
  public unique_name: string

  @column()
  public ext: string

  @column()
  public user_id: string

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
