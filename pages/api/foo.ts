import { NextApiResponse, NextApiRequest } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.end(JSON.stringify({ foo: "bar", body: req.body }));
}
