require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

const userRouter = require("./resources/admin/router")
const workoutRouter = require("./resources/workouts/router")

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors({origin: 'https://cmackgym.herokuapp.com'}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/", userRouter)
app.use("/workouts", workoutRouter)

app.get("*", (req, res) => {
  res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})
