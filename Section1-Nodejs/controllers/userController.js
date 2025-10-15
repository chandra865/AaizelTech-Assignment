let users = [];

export const getUsers = (req, res) => {
    res.json({
    success: true,
    count: users.length,
    data: users,
  });
};

export const addUser = (req, res ) => {
    const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User added successfully",
    user: newUser,
  });
};
