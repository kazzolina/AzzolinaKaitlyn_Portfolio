const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
