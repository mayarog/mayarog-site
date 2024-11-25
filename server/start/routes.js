'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/api/newsletter/subscribe', 'NewsletterController.subscribe');
Route.get('/api/newsletter/unsubscribe/mailer/:email', 'NewsletterController.unsubscribe');

Route.get('*', async ({ response }) => {
  response.sendFile(__dirname, '../../dist/spa/index.html');
});
