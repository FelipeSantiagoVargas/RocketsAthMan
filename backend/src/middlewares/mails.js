import User from "../models/User";

const nodemailer = require("nodemailer");

export const sendCredentialsMail = async (req, res, next) => {

  console.log(req.body)


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

  return res.json({ message: 'Player registered successfully' })
}

export const recoverPasswordMail = async (req, res, next) => {

  req.body.password = ''
  for (let i = 0; i < 20; i++) {
    req.body.password += String.fromCharCode(((Math.floor(Math.random()*100))%27)+64);
  }
  const newPassword = req.body.password
  req.body.password = await User.encryptPassword(req.body.password)


  const updateUser = await User.findOneAndUpdate({email:req.body.email},req.body,{ new: true })
  console.log(updateUser)


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
    from: 'Nueva Contraseña Rocket 🚀" <rockets.duitama@gmail.com>', // sender address
    to: "felipeesantii@gmail.com", // list of receivers
    subject: "Rockets AthMan", // Subject line
    html: `
  <p>Tu nueva contraseña de acceso a Rockets 🚀 es:.</p>
  <b>Password:</b> ${newPassword}`, // html body
  });

  return res.json({ message: 'Your password has been restored, please check your email' })
}