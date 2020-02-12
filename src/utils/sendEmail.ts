import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || '',
  domain: 'sandbox6a140bd96b454e2a93d58fef6b8efe07.mailgun.org'
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: 'zkftlstpehdj@gmail.com',
    to: 'zkftlstpehdj@gmail.com',
    subject,
    html
  };
  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello! ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://vins.dev/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};
