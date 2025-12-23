// import mongoose from 'mongoose';


// const db=process.env.MONGO_URL

// const connetToDb =async()=>{
//     try {
//         await mongoose.connect(db)  
//         console.log("Connect To Database");
          
//     } catch (error) {
//         console.log(error);
        
        
//     }
// };
// export default connetToDb; 

import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const db = process.env.MONGO_URL;

    // if (!db) {
    //   throw new Error("MONGO_URL is undefined");
    // }

    await mongoose.connect(db);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectToDb;
