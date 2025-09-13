import express, { Request, Response } from "express";

const app = express();

app.get("/", (__: Request, res: Response) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app