export async function login(req, res) {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required"
    })
  }

  // Placeholder (later replace with Microsoft OAuth / Azure AD)
  res.json({
    success: true,
    user: {
      email,
      role: "admin"
    }
  })
}
