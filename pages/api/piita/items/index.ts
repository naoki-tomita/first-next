import { NextApiRequest, NextApiResponse } from "next";
import { save, list } from "../../../../db/Piita";

interface PostRequestBody {
  title: string;
  body: string;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method.toLowerCase()) {
    case "post":
      return post(req, res);
    case "get":
      return get(req, res);
  }
  res.end();
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  const requestBody = req.body as PostRequestBody;
  await save(requestBody.title, requestBody.body);
  res.statusCode = 201;
  res.end();
}

async function get(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("content-type", "application/json;");
  res.statusCode = 200;
  const items = await list();
  res.end(JSON.stringify(items));
}
