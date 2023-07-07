import { TransformerAbstract } from '@ioc:Adonis/Addons/Bumblebee'

export default class ProfileTransformer extends TransformerAbstract {
  public transform(model: any) {
    return {
      id: model.id,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
      status: model.status,
      name: model.name,
    }
  }
}
