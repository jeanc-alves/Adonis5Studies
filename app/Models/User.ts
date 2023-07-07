import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import BaseCrudModel from './BaseCrudModel'
import Profile from './Profile'

export default class User extends BaseCrudModel {
  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public status: boolean

  @column()
  public rememberMeToken?: string

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @manyToMany(() => Profile, {
    localKey: 'id',
    pivotForeignKey: 'user_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'profile_id',
    pivotTable: 'user_profiles',
  })
  public profiles: ManyToMany<typeof Profile>
}
