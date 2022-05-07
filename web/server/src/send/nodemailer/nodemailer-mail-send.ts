import { Send, SendMailData } from "../send";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9c3b1f1f71b678",
    pass: "28864edae95ec6"
  }
});

export class NodemailerMailSend implements Send {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Feedback your application <contact@contact.com>',
            to: 'Diego <dev.diegosouza@gmail.com>', 
            subject, 
            html: body,
        });
    }
}