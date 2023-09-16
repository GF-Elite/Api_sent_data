const express = require("express");
const cors = require("cors"); // Middleware untuk mengatasi masalah CORS
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001; // Ganti dengan nomor port yang Anda inginkan

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simpan pesan-pesan yang diterima di sini (gunakan database jika diperlukan)
const messages = [];

// Rute untuk menerima pesan
app.post("/api/message", (req, res) => {
  const { from, message } = req.body;

  if (!from || !message) {
    return res.status(400).json({ error: "Mohon isi semua kolom yang disediakan." });
  }

  // Simpan pesan
  messages.push({ from, message });

  res.status(200).json({ success: true, message: "Pesan berhasil diterima, terimakasih!" });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

