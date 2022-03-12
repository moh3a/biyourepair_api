import { config } from "dotenv";
import nodemailer from "nodemailer";

config();
export const sendEmail = ({ from, to, subject, text }) => {
  const date = new Date().toISOString();

  const transporter = nodemailer.createTransport({
    service: process.env.SENDGRID_SERVICE,
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    html: `
      <div style="font-family: Arial, Helvetica, sans-serif">
        <div
          style="
            display:flex;
            justify-content:center;
            text-align: center;
            margin: 0 5rem 0 5rem;
            padding-bottom: 1rem;
            border-bottom: 1px black solid;
          "
        >
            <img
              style="width: 50px; height: 50px; margin:auto;"
              src="https://res.cloudinary.com/dyypyf2sg/image/upload/v1647099659/biyou_repair_png_bsszy9.png"
              alt="biyou repair logo"
            />
        </div>
        <div
          style="
          padding: 20px 0 20px 10px;
          margin-right: 2rem;
          margin-left: 2rem;
          "
          >
          ${text}
          </div>
          <div
          style="
          border-top: 1px black solid;
            padding-top: 1rem;
            margin: 0 5rem 0 5rem;
            text-align: center;
          "
        >
          envoyé par biyou-repair, le ${date.substring(0, 10)} ${date.substring(
      11,
      16
    )} GMT
        </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    }
  });
};