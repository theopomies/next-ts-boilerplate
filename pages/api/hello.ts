// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

function handler(_req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json({ name: "Ken Kakura" });
}

export default handler;
