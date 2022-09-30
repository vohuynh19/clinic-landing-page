import nodemailer from "nodemailer";
import { isEmpty } from "lodash";

const adminEmail = [
  "lynhan15041997@gmail.com",
  "minhdaothieu@gmail.com",
  "dao.thieu@digitalts.co",
  "admin@digitalts.co",
];

const mail = async (req: any, res: any) => {
  const { name, email, description } = req.body;

  if (isEmpty(name) || isEmpty(email) || isEmpty(description))
    return res.json({ status: 400 });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "nhacchungluu@gmail.com",
      pass: "tdbagfdedbihkhyi",
    },
  });

  const mainOptions = {
    from: name,
    to: adminEmail,
    subject: "Khách hàng mới from Clinic",
    text: `Bạn nhân được một email từ${email}`,
    html: `<p>${name}</p><p>${email}</p><p>${description}</p>`,
  };
  transporter.sendMail(mainOptions, (err: any) => {
    if (err) {
      res.json({ status: 400 });
    } else {
      res.json({ status: 200 });
    }
  });
};

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    await mail(req, res);
  }
}
