const express = require("express");
const cors = require("cors"); // Middleware untuk mengatasi masalah CORS
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3002; // Ganti dengan nomor port yang Anda inginkan

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Simpan data pesan di sini (gunakan database jika diperlukan)
const messages = [
  { from: "User1", message: "Pesan pertama" },
  { from: "User2", message: "Pesan kedua" },
  // Tambahkan data pesan lainnya sesuai kebutuhan Anda
];

// Rute untuk mendapatkan semua pesan
app.get("/api/messages", (req, res) => {
  res.status(200).json(messages);
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
