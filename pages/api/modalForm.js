const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}\r\n
  State: ${body.state}\r\n
  Tarrif: ${body.selectTariff}\r\n
  Tel: ${body.tel}\r\n
  Address: ${body.address}
`;
  const data = {
    to: "okno.na.kalinke@gmail.com",
    from: "pavlohram@inbox.lv",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

 await mail.send(data);
  
  res.status(200).json({ status: "OK" });
};
