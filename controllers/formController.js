const {sendMail} = require("../config/mailer")

const submissions = []

const add =async (req, res) => {
  const body = req.body;
  if (!body.mobile_number || !body.email || !body.dob || !body.name) {
    return res.status(400).json({
      success: false,
      message: "Required Fields Missing!",
      error: 400,
    });
  }
  console.log(typeof(body.mobile_number))
  if (typeof(body.mobile_number) != "number" || body.mobile_number.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Invalid Mobile Number!",
      error: 400,
    });
  }
  const response = await sendMail(body.email);
  console.log(response)
  submissions.push(req.body)
  res.json({
    success: true,
    message: "Form Submitted Successfully!",
    error: 0,
  });
};

const list = (req, res) => {
    
  res.json({
    success: true,
    message: "Submission List Fetched Successfull!",
    data: submissions,
  });
};

module.exports = { add, list };
