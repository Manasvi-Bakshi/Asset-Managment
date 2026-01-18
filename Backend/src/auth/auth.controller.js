export async function login(req, res) {
  const { email } = req.body

  // temporary stub (we will replace with Microsoft auth later)
  if (!email) {
    return res.status(400).json({ message: "Email required" })
  }

  res.json({
    message: "Login successful",
    user: {
      email,
      role: "employee"
    }
  })
}
