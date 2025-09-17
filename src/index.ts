import app from "./app";

const port = 80;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});