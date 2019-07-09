import { NextApiRequest, NextApiResponse } from "next";
import { getItem } from "../../../../db/Piita";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { id } } = req;
  const item = await getItem(parseInt(id as string, 10));
  res.setHeader("content-type", "application/json");
  res.status(200)
  res.end(JSON.stringify(item));
}
