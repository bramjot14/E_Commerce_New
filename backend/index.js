// server.js
const PORT = 5002;
const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require("path");
const cors = require('cors'); 
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ PostgreSQL Database Connection
const db = pgp({
  host: 'localhost',  
  port: 5432,
  database: 'ecommerce',  
  user: 'postgres',
  password: 'Chauhan@123',
});

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// ensure upload directory exists
const UPLOAD_DIR = path.join(__dirname, 'upload', 'images');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// Set up multer for file storage (writes to project/upload/images)
const storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
    cb(null, UPLOAD_DIR); 
  },
  filename: (req, file, cb) => {
    // preserve ext, generate unique filename
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${Math.round(Math.random()*1e9)}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit, adjust if needed
  fileFilter: (req, file, cb) => {
    // accept common image types only
    const allowed = /jpeg|jpg|png|webp/;
    const mimetype = allowed.test(file.mimetype);
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && ext) return cb(null, true);
    cb(new Error('Only image files (jpg, png, webp) are allowed'));
  }
});

// serve uploaded images at /images/<filename>
app.use('/images', express.static(UPLOAD_DIR));

// Upload endpoint - returns the full URL you can store in DB
app.post("/upload", upload.single('product'), (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: 0, error: "No file uploaded" });
    const imageUrl = `http://localhost:${PORT}/images/${req.file.filename}`;
    return res.json({
      success: 1,
      image_url: imageUrl,
      filename: req.file.filename,
      mime_type: req.file.mimetype,
      size: req.file.size
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: 0, error: 'Upload failed' });
  }
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js backend for React!');
});

// ✅ Get All Products (PostgreSQL)

app.get('/allProducts', async (req, res) => {
  try {
    const products = await db.any(`SELECT * FROM products`);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database Error" });
  }
});

app.get('/productdetail', async (req, res) => {
  try {
    const products = await db.any(`SELECT * FROM detailedproducts`);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database Error" });
  }
});

// app.get('/getCart', async (req, res) => {
//   try {
//     const cart = await db.any(`SELECT * FROM cart`);
//     res.json(cart);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({error: "Database error"});
//   }
// })

// app.get('/addCartItem', async (req, res) => {
//   try {
//     const cart = await db.any(`SELECT * FROM cart`);
//     res.json(cart);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({error: "Database error"});
//   }
// })

// app.get('/removeCartItem', async (req, res) => {
//   try {
//     const cart = await db.any(`SELECT * FROM cart`);
//     res.json(cart);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({error: "Database error"});
//   }
// })

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
