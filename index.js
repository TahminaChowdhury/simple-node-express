const express = require("express");
const cors =require("cors");
const app = express();

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;
app.get('/',(req, res) => {
    res.send("Hello I'm learning node express server")
})
const users =[
    {id: 0, name: "tahmina", email: "tahmina@gmail.com"},
    {id: 1, name: "shimu", email: "shimu@gmail.com"},
    {id: 2, name: "tashi", email: "tashi@gmail.com"},
    {id: 3, name: "tashu", email: "tashu@gmail.com"},
    {id: 4, name: "tamim", email: "tamim@gmail.com"},
    {id: 5, name: "tamimshimu", email: "tamimshimu@gmail.com"}
]

// use query parameter
app.get('/users',(req, res) => {
    const search =req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    
})

// app.Method
app.post('/users', (req, res)=> {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post",req.body)
    res.json(newUser);
})




// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user =users[id]
    res.send(user)
})



app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("yummy yummy tokt tok fazli")
})

app.listen(port, () => {
    console.log("listening to port", port)
})