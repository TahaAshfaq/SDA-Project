// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import { User } from "./model.js"; // Ensure the path to your model is correct

// const app = express();
// const port = 2000;

// // Middleware to enable CORS
// app.use(cors());

// // Middleware to parse JSON bodies
// app.use(express.json());

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://Taha9753:Unchartered3.@tahacluster.wxaybwk.mongodb.net/mydb",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log(`The DB is connected with ${mongoose.connection.host}`);
//   } catch (error) {
//     console.error("DB connection error:", error);
//   }
// };

// connectDB();

// app.post("/submitform", async (req, res) => {
//   const { userName, email, password, interest } = req.body;
//   const user = new User({
//     userName,
//     email,
//     password,
//     interest,
//   });
//   try {
//     const data = await user.save();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Error saving user", error });
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import { User } from "./model.js";
// import { Jobs } from "./model.js";
// const app = express();
// const port = 2000;

// app.use(cors());

// app.use(express.json());

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://Taha9753:Unchartered3.@tahacluster.wxaybwk.mongodb.net/mydb",
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//     console.log(`The DB is connected with ${mongoose.connection.host}`);
//   } catch (error) {
//     console.error("DB connection error:", error);
//   }
// };

// connectDB();

// app.post("/submitform", async (req, res) => {
//   const { userName, email, password, interest } = req.body;
//   const user = new User({
//     userName,
//     email,
//     password,
//     interest,
//   });
//   try {
//     const data = await user.save();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: "Error saving user", error });
//   }
// });

// // app.get("/allusers", async (req, res) => {
// //   try {
// //     const users = await User.find();
// //     res.json(users);
// //   } catch (err) {
// //     res.status(500).send(err);
// //   }
// // });
// // AHMAR
// // app.get("/jobs", async (req, res) => {
// //   try {
// //     const jobs = await Jobs.find();
// //     console.log(jobs);
// //     res.status(200).json(jobs);
// //     // return jobs;
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching jobs", error });
// //   }
// // });

// app.get("/jobs", async (req, res) => {
//   try {
//     const jobs = await Jobs.find();
//     const formattedJobs = jobs.map((job) => ({
//       id: job.id,
//       companyname: job.companyname,
//       jobName: job.jobName,
//       jobDes: job.jobDes,
//       jobPrice: job.jobPrice,
//       jobTime: job.jobTime,
//     }));

//     res.status(200).json(formattedJobs);
//     // Export the formatted jobs array
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching jobs", error });
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { User, Jobs } from "./model.js"; // Ensure the path to your model is correct

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Taha9753:Unchartered3.@tahacluster.wxaybwk.mongodb.net/mydb",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`The DB is connected with ${mongoose.connection.host}`);
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

connectDB();

app.post("/submitform", async (req, res) => {
  const { userName, email, password, interest } = req.body;
  const user = new User({
    userName,
    email,
    password,
    interest,
  });
  try {
    const data = await user.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

// Define the route to fetch jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

app.get("/auth", async (req, res) => {
  try {
    const auth = await User.find();
    res.status(200).json(auth);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
