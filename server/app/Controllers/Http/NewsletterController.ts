import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import sendUnsubMail from "App/Services/NewsletterUnsubMailer";

export default class NewsletterController {
  public async unsubscribe({ params, response }: HttpContextContract) {
    const email = params.email;

    if (!email) {
      return response.status(422).send("Email is required");
    }

    await sendUnsubMail(email);
    return response.send("Ok");
  }
}
