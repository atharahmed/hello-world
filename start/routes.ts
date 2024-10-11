/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Plan from '#models/plan'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return await Plan.firstOrFail()
})
