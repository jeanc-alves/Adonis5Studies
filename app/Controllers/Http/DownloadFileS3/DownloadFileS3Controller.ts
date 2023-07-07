import { HttpContext } from '@adonisjs/core/build/standalone'

import DownloadFileS3UseCase from '@ioc:DownloadFileS3UseCase'
export default class DownloadFileS3Controller {
  public async download(ctx: HttpContext) {
    try {
      const { id } = ctx.params

      const file_s3 = await DownloadFileS3UseCase.execute({ file_id: id })

      return ctx.response.stream(file_s3)
    } catch (error) {
      return ctx.response.status(422).json({ message: error.message })
    }
  }
}
