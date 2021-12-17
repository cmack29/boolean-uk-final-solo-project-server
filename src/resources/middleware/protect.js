const jwt = require("jsonwebtoken");
const prisma = require("../../utils/database")

function protect(req, res, next) {
    console.log("INSIDE MIDDLEWARE: ", { headers: req.headers })
  
    const token = req.headers.authorization

    console.log("token", token)
  
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (err) {
        res.json(err)

    }

  
      console.log({ payload })
  
      // Find the authenticated user in our DB
      const user = await prisma.user.findUnique({
        where: {
          id: payload.id,
        },
      })



      if (user.role !== "ADMIN") {
          res.status(403).json("ERROR: You are not an admin, go away")
          return;
      }
  
      console.log({ userInMiddleware: user })
  
      req.user = user
  
      next()
    })
  }

  module.exports = {protect}