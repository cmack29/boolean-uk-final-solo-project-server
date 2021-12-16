const { protect } = require("../middleware/protect")
const { Router } = require("express")

const router = Router()

const {getAll,
       createOne,
       updateOne, 
       deleteOne,
       assignedUserToWotkout} = require("./controller")

router.get("/", getAll)

router.post("/", protect, createOne)

router.put("/:id", protect, updateOne)

router.delete("/:id", protect, deleteOne)

router.post("/:userId/:workoutId", assignedUserToWotkout)

module.exports = router