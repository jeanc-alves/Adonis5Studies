import { TransformerAbstract } from '@ioc:Adonis/Addons/Bumblebee'
import ProfileTransformer from './ProfileTransformer'

export default class UserTransformer extends TransformerAbstract {
  public defaultInclude = ['profiles', 'empresa']

  public async includeProfiles(model: any) {
    const profiles = await model.related('profiles').query().select(['id', 'name'])
    return this.collection(profiles, ProfileTransformer)
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
