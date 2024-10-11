import { Request, Response } from "express";
import footballData from "../dummy-data/football-data.json";

export const homePage = (req: Request, res: Response) => {
  res.status(200).send(`<h1>Home Page</h1>`);
};

export const getFootballData = (req: Request, res: Response) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber as string);
    let footballDataIndex: number;

    if (pageNumber) {
      footballDataIndex = pageNumber - 1;

      res.status(200).json({
        total_pages: footballData[footballDataIndex].total_pages,
        data: footballData[footballDataIndex].data,
      });
      return;
    }

    res
      .status(200)
      .json({ message: "Request received without page number query" });
  } catch (err: any) {
    res.status(400).json({ err });
  }
};
