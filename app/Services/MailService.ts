import Env from '@ioc:Adonis/Core/Env'
import Mail from '@ioc:Adonis/Addons/Mail'
const isDev = Env.get('NODE_ENV') === 'development'
const mail_test = Env.get('MAIL_TEST')
export default async function sendMail(to: string, subject: string, data, template_html) {
  await Mail.sendLater((message) => {
    message
      .from(Env.get('FROM_MAIL'))
      .to(isDev ? to : mail_test)
      .subject(subject)
      .htmlView(template_html, data)
  })
}
