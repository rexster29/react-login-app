const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');

app.use(express.json());
app.use(cors());

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI)
.then(()=> {
    console.log(`MongoDB connected successfully`)
})
.catch(err => console.log(err))

const userRouter = require("./routes/user.routes");

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})