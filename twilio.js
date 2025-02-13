import twilio from "twilio";

const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN

const client = twilio(accountSid, authToken);
export async function sendTextToPhone(PhoneNumber, message) {
  await client.messages.create({
    body: message,
    to: PhoneNumber,
    from: "+18774751499",
  });

  return "Message sent to twilio";
}
