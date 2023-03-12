const nodemailer = require("nodemailer")


const getTransporter = async ()=>{
    const testAccount = await nodemailer.createTestAccount()
    return nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",        //"smtp.ethereal.email",
        port: 587,
        secure:false,
        auth:{
            user:"rajeevanjana143@gmail.com",//testAccount.user,
            pass:"HIwSnCtahVbQyUNm"//testAccount.pass
    
        }
    })
}

const sendMail = async(sender)=>{
    const transporter = await getTransporter();
    const info = await transporter.sendMail({
        from:'"rajeev" <rajeev@example.com>',
        to:sender,
        subject:"Form Submitted Successfully!",
        text:`Hi ${sender}, Your Form has been submitted Successfully!`,
    })
    return info
}

module.exports ={ sendMail}