const express = require('express');

const emailRoutes = require('./emailRoutes');

const app = express();

const cors = require('cors');
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors());

app.use(express.json());

app.use("/email", emailRoutes);

app.get("/", (req, res) => {
    res.send("hello!");
})

const PORT = process.env.PORT  || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})