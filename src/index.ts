import express, { Request, Response } from "express";

const app = express();

app.get("/", (__: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(80, () => {
  console.log(`Server running on http://localhost`);
});

export default app