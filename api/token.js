import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { email, pass } = req.query;

  if (!email || !pass) {
    return res.status(400).json({
      success: false,
      message: "email & pass required"
    });
  }

  const token = jwt.sign(
    {
      email,
      time: Date.now()
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  res.status(200).json({
    success: true,
    token
  });
}
