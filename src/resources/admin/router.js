const { Router } = require("express")

const router = Router()

const { signUp, signIn, getUser } = require("./controller")

router.post("/signup", signUp)

router.post("/signin", signIn)

router.get("/user", getUser)

module.exports = router