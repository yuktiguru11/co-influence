const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.post("/postLoginData", (req, res) => {
  res.json({ message: "Logged In!" });
  addUser(req.body);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

let dbConnection = ()=>{
    const uri = 'mongodb://localhost:27017/co-influence'; // Assuming MongoDB is running locally on the default port

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));
}

dbConnection();

const userSchema = new mongoose.Schema({
    mail : {type: String, required: true ,unique: true},
    password: {type: String, required: true }
})

const dataModal = new mongoose.model('User',userSchema);

let addUser = async(data)=>{
    console.log(data)
    await dataModal.create({
        userName : data.userName,
    mail : data.mail,
    password: data.password
    })
    console.log("Data Added")
}


