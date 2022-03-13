import sendEmail from "../utils/SendEmail.js";

export const GetEmail = (req, res) => {
  res.status(200).json({ success: false, message: "Nothing to show here" });
};

export const PostSendEmail = (req, res) => {
  if (req.headers["content-type"]) {
    const { to, subject, text } = req.body;
    const from = "biyourepair@gmail.com";
    if ((to, subject, text)) {
      sendEmail({ from, to, subject, text });
      res.status(200).json({ success: true, message: "Email envoyé" });
    } else {
      res.status(200).json({
        success: false,
        message: "Manque des paramètres pour envoyer l'email",
      });
    }
  } else {
    res
      .status(400)
      .json({ success: false, message: "This route only accepts json data." });
  }
};
