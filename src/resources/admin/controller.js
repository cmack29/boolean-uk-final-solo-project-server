const prisma = require("../../utils/database")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { userName, password } = req.body
    console.log(req.body)

    if (!userName || !password) {
        res.status(400).json({ error: "ERROR: Missing email and/or password" })
    }

    const securePassword = await bcrypt.hash(password, 8)

    try{
        const user = await prisma.user.create({
            data: {
                userName,
                password: securePassword
            }
        })
        const token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })
        res.json({token})
    } catch (error) {
        console.error(error)
    }
}

const signIn = async (req, res) => {
    const { userName, password } = req.body
    console.log(req.body)

    if (!userName || !password) {
        res.status(400).json({ error: "ERROR: Missing email and/or password" })
    }

    // const securePassword = await bcrypt.hash(password, 8)

    try{
        const user = await prisma.user.findUnique({
            where: {
                userName
            }
        })

        if (!user) {
            res.status(401).json({ message: "Not authorised :("})
        }

        const userPassword = user.password

        const match = await bcrypt.compare(
            password,
            userPassword
        )
        console.log(match)

        if (match) {
            const token = jwt.sign(user, process.env.JWT_SECRET, {
                expiresIn: "1d"
            })
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: "Not authorised :("})
        }
    } catch (error) {
        console.error({ error });
    }
}

const getUser = async (req, res) => {
    
    try{
        const user = await prisma.user.findUnique({
            where: {
                id: user.id
            },
            select: {
                userName: true
            }
        })
        res.status(user)
    } catch (error) {
        console.error({ error })
        res.json({ error })
    }
}

module.exports = {signUp, signIn, getUser}