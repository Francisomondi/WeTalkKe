import { config } from "dotenv";
import { connectDb } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "emma.thompson@example.com",
    username: "Emma Thompson",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "olivia.miller@example.com",
    username: "Olivia Miller",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "sophia.davis@example.com",
    username: "Sophia Davis",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "ava.wilson@example.com",
    username: "Ava Wilson",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "isabella.brown@example.com",
    username: "Isabella Brown",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "mia.johnson@example.com",
    username: "Mia Johnson",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "charlotte.williams@example.com",
    username: "Charlotte Williams",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "amelia.garcia@example.com",
    username: "Amelia Garcia",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "james.anderson@example.com",
    username: "James Anderson",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "william.clark@example.com",
    username: "William Clark",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "benjamin.taylor@example.com",
    username: "Benjamin Taylor",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "lucas.moore@example.com",
    username: "Lucas Moore",
    password: "123456",
    phone: "254740694770",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "henry.jackson@example.com",
    username: "Henry Jackson",
    password: "123456",
    phone: "254740694770",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "alexander.martin@example.com",
    username: "Alexander Martin",
    password: "123456",
    phone: "254740694770",
    
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "daniel.rodriguez@example.com",
    username: "Daniel Rodriguez",
    phone: "254740694770",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDb();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();