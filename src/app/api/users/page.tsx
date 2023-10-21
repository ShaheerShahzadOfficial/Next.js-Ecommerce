import prisma from "../../../../lib/db/prisma";

export default async function handler(req: Request, res: any) {
  "use server";

  // if (req.method === "POST") {
  //   const { name, description, imageUrl, price } =
  //     typeof req.body == "string" ? JSON.parse(req.body) : req.body;

  try {
    //     // we can access db records with prisma functions
    //     const wish = await prisma.product.create({
    //       data: { name, description, imageUrl, price },
    //     });
    res.status(200).json({ wish: "" });
    console.log(":API handler", req);

    return res.status(200).json({ GV: "hELLO wORLD" });
  } catch (e) {
    res?.status(500).json(e);
  }
  // } else if (req.method === "GET") {
  //   console.log("hello wORLD")

  // }
}
