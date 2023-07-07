import { Crud } from '@ioc:AdonisCrud/Crud/Controller'
import UserRepository from '@ioc:UserRepository'
import BaseTransformer from 'App/Transformers/BaseTransformer'
import Event from '@ioc:Adonis/Core/Event'
@Crud({
  event: Event,
  repository: UserRepository,
  storeProps: [],
  updateProps: [],
  transformer: BaseTransformer,
  validators: {},
})
export default class UserController {}
