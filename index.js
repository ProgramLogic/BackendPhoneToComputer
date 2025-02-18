import express from "express";
import cors from "cors";
import { sendTextToPhone } from "./twilio.js";
import twilio from 'twilio'

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`App is now Running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.json("Wred is a Good Programmer and will Work for Google one day!");
});

app.post("/send", async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const message = req.body.message;

    console.log({ phoneNumber });
    await sendTextToPhone(phoneNumber, message);

    console.log({ phoneNumber, message });
    res.json("Message Sent Sucsessfully");
  } catch (error) {
    console.log({ error });
    res.json(" There was an error sending the text: ");
  }
});
app.post("/sms",(req,res) => {
const { MessagingResponse } = twilio.twiml;
const twiml = new MessagingResponse();
console.log(req.body.Body)
twiml.message("Hallo")
res.type("text/xml").send(twiml.toString())
})

