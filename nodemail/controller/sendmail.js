import nodemailer from "nodemailer";

export const sendmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user:process.env.user,
        pass:prprocess.env.pass
      },
    });

    let info = await transporter.sendMail({
      from: 'Jay',
      to: "kashyapspace30@gmail.com",
      subject: "Hello KP",
      text: "Hello Patel",
    });

    res.send("Mail sent successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
