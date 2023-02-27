const express = require('express')
const twilioRouter = express.Router()
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
twilioRouter.post('/', async(req, res) => {
  console.log(req.body)
    try {
      console.log(req.body)
      let response = await client.messages.create({
        body: req.body.message,
        from: process.env.TWILIO_NUMBER,
        to: req.body.phone
      })
      console.log("response",response)
      res.status(200).json({
        response: response,
        message: `Message Sent To ${req.body.phone}`
      })
    } catch (err) {
      console.log(err);
      res.status(500).json({
        Error: err
      })
    }
  })

  module.exports = twilioRouter