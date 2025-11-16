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


// ✅ Add Product (PostgreSQL) — matches your products table: id INTEGER PK, name, price, image, description
// app.post('/addProduct', async (req, res) => {
//   try {
//     // Expect fields: name, price, image, description
//     const { name, price, image, description } = req.body;

//     // Basic validation
//     if (!name || !price) {
//       return res.status(400).json({ success: false, error: "Missing required fields: name and price" });
//     }

//     // Insert into DB (price here is NUMERIC(10,2) in your schema)
//     const query = `
//       INSERT INTO products (name, price, image, description, created_at)
//       VALUES ($1, $2, $3, $4, now())
//       RETURNING id;
//     `;
//     const result = await db.one(query, [name, price, image || null, description || null]);

//     res.json({ success: true, productId: result.id });
//   } catch (error) {
//     console.error('addProduct error:', error);
//     res.status(500).json({ success: false, error: "Database Error" });
//   }
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




// ✅ Middleware to fetch user (PostgreSQL)

// const fetchUser = async (req, res, next) => {
//   const token = req.header('auth-token');
//   if (!token) {
//     return res.status(401).send({ error: "Please authenticate using a valid token" });
//   }
//   try {
//     const data = jwt.verify(token, 'secret_ecom');
//     req.user = data.user;
//     next();
//   } catch (error) {
//     res.status(401).send({ error: "Invalid authentication token" });
//   }
// };

// ✅ Add to Cart (PostgreSQL)

// app.post('/addtocart', fetchUser, async (req, res) => {
//   try {
//     const { itemId } = req.body;
//     const userId = req.user.id;

//     const query = `
//       INSERT INTO cart (user_id, product_id, quantity) 
//       VALUES ($1, $2, 1)
//       ON CONFLICT (user_id, product_id) 
//       DO UPDATE SET quantity = cart.quantity + 1;
//     `;
//     await db.none(query, [userId, itemId]);

//     res.json({ success: true, message: "Added to cart" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to add item to cart" });
//   }
// });

// ✅ Remove from Cart (PostgreSQL)

// app.post('/removefromcart', fetchUser, async (req, res) => {
//   try {
//     const { itemId } = req.body;
//     const userId = req.user.id;

//     const query = `
//       UPDATE cart SET quantity = quantity - 1 
//       WHERE user_id = $1 AND product_id = $2 AND quantity > 0;
//     `;
//     await db.none(query, [userId, itemId]);

//     res.json({ success: true, message: "Removed from cart" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to remove item from cart" });
//   }
// });

// ✅ Get Cart Data (PostgreSQL)

// app.post('/getcart', fetchUser, async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const query = `SELECT product_id, quantity FROM cart WHERE user_id = $1`;
//     const cartItems = await db.any(query, [userId]);

//     res.json(cartItems);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch cart data" });
//   }
// });


