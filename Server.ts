import express from 'express'
import cors from 'cors';

import chatRouts from "./routes/chatRouts";

const port:number=3000;
const app=express();

app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // If you need to send cookies
}));

app.use(express.json());




app.use('/chat',chatRouts)


app.listen(port,()=>{
    console.log(`Server started at port : ${port}`);
})
app.use("/",(req,res)=>{

    res.status(404).send("Not Found");
})
