require('dotenv').config(); // Load environment variables

const twilio = require('twilio');


const accountSid = process.env.TWILIO_ACCOUNT_SID; // Loaded from .env file
const authToken = process.env.TWILIO_AUTH_TOKEN; // Loaded from .env file
const client = twilio(accountSid, authToken);

// Phone numbers
const phoneNumbers = {
  customer: process.env.TWILIO_CUSTOMER_NUMBER, // Loaded from .env file
  emergency: process.env.TWILIO_EMERGENCY_NUMBER, // Loaded from .env file
};

// Function to make a call
const makeCall = async (type) => {
  const targetNumber = phoneNumbers[type];

  if (!targetNumber) {
    throw new Error('Invalid call type');
  }

  return client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml', // Replace with your TwiML URL
    to: targetNumber,
    from: process.env.TWILIO_VERIFIED_NUMBER, // Loaded from .env file
  });
};

module.exports = { makeCall };
