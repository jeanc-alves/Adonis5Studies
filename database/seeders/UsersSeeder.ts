import { v4 as uuidv4 } from 'uuid'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Profile from 'App/Models/Profile'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const root = await Profile.findBy('name', 'ROOT')
    const defaultProfile = await Profile.findBy('name', 'DEFAULT')

    const itens = [
      {
        id: uuidv4(),
        name: 'root',
        email: 'root@root.com',
        password: 'root123',
      },
      {
        id: uuidv4(),
        name: 'default',
        email: 'default@default.com',
        password: 'default123',
      },
    ]

    //create ROOT
    const newUserRoot = itens[0]
    const createdUserRoot = await User.create(newUserRoot)
    await createdUserRoot.related('profiles').attach([root?.id || ''])

    //create DEFAULT
    const newDefault = itens[1]
    const createdDefault = await User.create(newDefault)
    await createdDefault.related('profiles').attach([defaultProfile?.id || ''])
  }
}
