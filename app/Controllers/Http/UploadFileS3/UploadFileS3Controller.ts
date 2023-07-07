import { HttpContext } from '@adonisjs/core/build/standalone'
import UploadFileS3UseCase from '@ioc:UploadFileS3UseCase'
import * as AWS from 'aws-sdk'
import { v4 as uuid } from 'uuid'
import Env from '@ioc:Adonis/Core/Env'
import fs from 'fs'
import Drive from '@ioc:Adonis/Core/Drive'
const bucket = Env.get('S3_BUCKET')

const s3 = new AWS.S3({
  region: Env.get('S3_REGION'),
  secretAccessKey: Env.get('S3_SECRET'),
  accessKeyId: Env.get('S3_KEY'),
})

export default class UploadFileS3Controller {
  public async upload(ctx: HttpContext) {
    try {
      const file = await ctx.request.file('file')
      const user = ctx.auth.user

      const name = uuid() + '.' + file?.extname
      let mimeType = file?.type + '/' + file?.subtype
      let fileType = mimeType

      await file?.move('uploads', { name: file.clientName, overwrite: true })

      const file_path = `uploads/${file?.clientName}`
      const fileContent = fs.readFileSync(file_path)
      const options = {
        Key: name,
        Bucket: bucket,
        ContentType: fileType,
        Body: fileContent,
        ACL: 'private',
      }

      await s3.putObject(options).promise()

      const url = await Drive.use('s3').getSignedUrl(name)
      const newFileS3 = {
        url: url,
        unique_name: name,
        file_name: file?.clientName,
        ext: file?.extname,
        user_id: user.id,
      }

      const item = await UploadFileS3UseCase.execute(newFileS3)
      return ctx.response.status(201).json({ message: 'File Upload Suceffuly!', file: item })
    } catch (error) {
      return ctx.response.status(422).json({ message: error.message })
    }
  }
}
