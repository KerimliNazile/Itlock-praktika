import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())

const purpleSchema = new Schema({
    soyad: { type: String, required: true }
}, { timestamps: true })

const Purples = mongoose.model('Purples', purpleSchema);

app.get('/purples', async (req, res) => {
    try {
        const purples = await Purples.find({})
        res.send(purples)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})





app.get('/purples/:id', async (req, res) => {
    try {
        const purples = await Purples.findById(req.params.id)
        res.send(purples)
    } catch (error) {
        res.status(500).json({ message: error })
    }
    
})



app.post('/purples', async (req, res) => {
    try {
        const purple = new Purples({
            soyad: req.body.soyad
        })
        await purple.save()
        res.send({ message: "created purple" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})





app.delete('/purple/:id', async (req, res) => {
    try {
        const purples = await Purples.findByIdAndDelete(req.params.id)
        res.status(500).json({ message: "Purple deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }


})






const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("Connect db"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log("Server connection")
})