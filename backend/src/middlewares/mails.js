const nodemailer = require("nodemailer");

export const sendCredentialsMail = async (req,res,next)=>{

    console.log(req.body)

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'rockets.duitama@gmail.com', // generated ethereal user
      pass: 'ceausfhunocsfozh', // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Bienvenido Rocket 🚀" <rockets.duitama@gmail.com>', // sender address
    to: "felipeesantii@gmail.com", // list of receivers
    subject: "Rockets AthMan", // Subject line
    html: `
    <p>Hola ${req.body.name},</p>
    <p>Bienvenido a Rockets 🚀.</p>
    <p>Acabas de dar el paso inicial para convertirte en un 🚀 y llevar
     tu rendimiento fisico al otro nivel.</p>
    <p>Estas son tus credenciales de acceso:</p>
    <b>Username:</b> ${req.body.username}
    <b>Password:</b> ${req.body.password}`, // html body
  });

  return res.json({message:'Player registered successfully'})
}