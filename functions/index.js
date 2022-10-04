const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IcxZFLtkWVcnPKe9QXNEUKSQRBOu13rKnekhCU7oHabHVB1evD1MDGiiTU17OkF2J0U1K4W4aKdjxmMHayE4wJ600LE0FrpwZ")

//API

//-APP config

const app = express();

//- Middleware

app.use(cors({ origin: true }));
app.use(express.json());

// -API routes

app.get('/', (request, response)=> response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) =>{
   const total = request.query.total;
   
   console.log('Payment Request Received BOOM!!!',total);

   const paymentIntent = await stripe.paymentIntents.create({
       amount:total,// subunit of the currency
       currency: "usd",
   });

   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

//example end point
//http://localhost:5001/challange-343c4/us-central1/api.
