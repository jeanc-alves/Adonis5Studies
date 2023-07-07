/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/', 'FileS3Controller')
  Route.group(() => {
    Route.post('/', 'UploadFileS3/UploadFileS3Controller.upload')
  }).prefix('uf')
  Route.group(() => {
    Route.get('/:id', 'DownloadFileS3/DownloadFileS3Controller.download')
  }).prefix('df')
})
  .prefix('files_s3')
  .middleware('auth')
