import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}


try {
    mongoose.connect(`${process.env.URI_MONGO}`);
    console.log("Connect DB ok");
} catch (err) {
    console.log("Connect DB error", err);
}