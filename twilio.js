import twilio from "twilio";

const accountSid = "ACaee60dedec560b4591b4394772f8b501";
const authToken = "b6047e81e3c9eaa71663a3b6fe6a202f";

const client = twilio(accountSid, authToken);
export async function sendTextToPhone(PhoneNumber, message) {
  await client.messages.create({
    body: message,
    to: PhoneNumber,
    from: "+18774751499",
  });

  return "Message sent to twilio";
}
