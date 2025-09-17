import express, { Request, Response } from "express";

const app = express();

app.get("/", (__: Request, res: Response) => {
  res.send("Hello World!!!");
});

export default app;