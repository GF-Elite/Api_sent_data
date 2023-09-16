const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());

const messages = [];

// Endpoint untuk menerima pesan baru
app.post("/api/message", (req, res) => {
  const { from, message } = req.body;
  if (!from || !message) {
    return res.status(400).json({ error: "Nama dan pesan harus diisi." });
  }

  const newMessage = { from, message };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

// Endpoint untuk mendapatkan semua pesan
app.get("/api/messages", (req, res) => {
  res.status(200).json(messages);
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
