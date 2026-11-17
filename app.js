import express from 'express'

const app = express()



// req => usko read krparahe hain   



app.use(express.json())



// database



let users = []



//create

app.post("/users", (req, res) => {

    const data = req.body

    users.push(data)

    if (data){
        users.push(data)
    }

    if (!data) {
        return res.status(400).json({
            status: "fail",
            message: "data is not provided"
        })
    }

    res.status(201).json({
        status: "success",
        message: "user created successfully"
    })
})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});