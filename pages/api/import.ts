import type { NextApiRequest, NextApiResponse } from "next";
import importKptn from "../../importer/kptn/kptn";

interface Result {
  ok: boolean;
  error?: string;
}

interface RequestBody {
  url: string;
}

const validUrls = {
  kptn: ["https://sharing.kptncook.com/"],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  if (req.method === "POST") {
    // TODO? auth requests?

    const body: RequestBody = req.body;

    // validate url
    if (
      !Object.values(validUrls)
        .flat()
        .some((url) => body.url.startsWith(url))
    ) {
      res.status(200).json({ ok: false, error: "Unsupported import URL" });
      return;
    }

    try {
      // kptn
      if (body.url.includes("sharing.kptncook.com")) {
        await importKptn(body.url);
      }
    } catch (error) {
      console.error("Error while importing --> ", error);
      res
        .status(200)
        .json({ ok: false, error: "Something went wront while importing" });
    }

    res.status(200).json({ ok: true });
  } else {
    res.status(200).json({ ok: false, error: "Unsupported method" });
  }
}
