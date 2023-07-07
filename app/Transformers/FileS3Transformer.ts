import { TransformerAbstract } from '@ioc:Adonis/Addons/Bumblebee'
import ProfileTransformer from './ProfileTransformer'

export default class FileS3Transformer extends TransformerAbstract {
  public defaultInclude = ['user']

  public async includeUser(model: any) {
    const user = await model.related('user').query().select(['id', 'name'])
    return this.collection(user, ProfileTransformer)
  }

  public transform(model: any) {
    return {
      id: model.id,
      nome: model.nome,
      email: model.email,
      cpf: model.cpf,
      createdAt: model.createdAt,
      status: model.status,
      telefone: model.telefone,
    }
  }
}
