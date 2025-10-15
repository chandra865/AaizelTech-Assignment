export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({
    success: true,
    filename: req.file.originalname,
    size: req.file.size,
    mimetype: req.file.mimetype,
    message: "File uploaded successfully",
  });
};