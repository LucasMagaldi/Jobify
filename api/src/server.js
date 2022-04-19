import app from "./app.js";
import dotenv from 'dotenv';

import connectDB from './DB/connection.js'

dotenv.config();

const startDB = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        console.log('DB Connection runs well')
    }
    catch(err) {
        console.log(err);
    }
}

app.listen(process.env.PORT, () => {
    console.log('Running')
});



startDB();