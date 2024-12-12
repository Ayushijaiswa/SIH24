// controllers/callController.js
const { makeCall } = require('../Modules/callModel');
module.exports.call =(req, res) => {
	res.render("users/chatwithus.ejs");
};


// Function to handle call requests
const handleCallRequest = async (req, res) => {
  try {
    const { type } = req.body;
    const call = await makeCall(type);
    res.status(200).json({ message: `Call initiated: ${call.sid}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handleCallRequest };
