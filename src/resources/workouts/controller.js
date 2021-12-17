const prisma = require("../../utils/database")

const getAll = async (req, res) => {
    try {
        const getAllWorkouts = await prisma.workout.findMany({
            include: {
                users: {
                    include: {
                        user: true
                    }
                }
            }
        })
        res.json(getAllWorkouts)
    } catch (error) {
        console.error({ error })
        res.json({ error })
    }
}

const createOne = async (req, res) => {
    console.log("body: ", req.body)
    try {
        const createOneWorkout = await prisma.workout.create({
            data: {
                date: new Date(req.body.date).toISOString(),
                description: req.body.description,
                difficulty: req.body.difficulty
            },
            include: {
                users: {
                    include: {
                        user: true
                    }
                }
            }
        })
        res.json(createOneWorkout)
    } catch (error) {
        console.error(error)
        res.json({ error })
    }
}

const updateOne = async (req, res) => {
    console.log("body: ", req.body)
    try {
        const updateOneWith = await prisma.workout.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                date: new Date(req.body.date),
                description: req.body.description,
                difficulty: req.body.difficulty
            },
            include: {
                users: {
                    include: {
                        user: true
                    }
                }
            }
        })
        res.json({ data: updateOneWith})
    } catch (error) {
        console.error(error)
        res.json({ error })
    }
}

const deleteOne = async (req, res) => {
    const targetId = parseInt(req.params.id)

    try {
        const deleteOneWorkout = await prisma.workout.delete({
            where: {
                id: targetId
            }
        })
        res.json({ message: "Delete has been successful" })
    } catch (error) {
        console.error(error)
        res.json({ error })
    }
}

const assignedUserToWotkout = async (req, res) => {
    const userId = parseInt(req.params.userId)
    const workoutId = parseInt(req.params.workoutId)

    console.log(userId, workoutId)

    try{
        const uToW = await prisma.usersOnWorkouts.create({
            data: {
                userId, workoutId
            }
        })
        res.json({ uToW })
    } catch (error) {
        console.error(error)
        res.json({ error })
    }
}

module.exports = {getAll, createOne, updateOne, deleteOne, assignedUserToWotkout}