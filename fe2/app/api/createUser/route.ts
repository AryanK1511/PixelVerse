"use server";
import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://dashboard.neurelo.com/sign-in");
    await page.waitForSelector('input[name="identifier"]');

    await page.type('input[name="identifier"]', "vodoxoc564@huleos.com");
    await page.type('input[name="password"]', "Ttesttest@2");
    await page.click("#button-1010001");

    await page.waitForNavigation();

    await page.goto(
      "https://dashboard.neurelo.com/projects/prj_4e9f411a-8547-4851-bf34-945a6f18de3c/environments/env_04e32abb-d981-4bf4-afa4-3eb9439e6e26?tab=api-observability&defaultTimeRange=%22last_24_hours%22&operationName=createOneUsers&operationType=openapi&filters=%7B%22timeRange%22%3A%22last_24_hours%22%7D"
    );

    await sleep(5000);
    const elements = await page.$$(
      ".recharts-layer.recharts-bar-rectangle > path"
    );
    const matches: string[] = [];

    for (const element of elements) {
      await element.hover();
      const htmlContent = await page.content();
      const regexPattern =
        /\b\d{2}\/\d{2} \d{2}:\d{2} - \d{2}\/\d{2} \d{2}:\d{2}: \d+\b(?!\.\d+ms)/g;
      const foundMatches = htmlContent.match(regexPattern);
      console.log("foundMatches", foundMatches);
      if (foundMatches) {
        matches.push(...foundMatches);
      }
    }

    await browser.close();

    if (matches.length > 0) {
      return Response.json({
        calls: matches
          .map((match) => Number(match[match.length - 1]))
          .reduce((partialSum, a) => partialSum + a, 0),
      });
    } else {
      return Response.json({ message: "No matches found." });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    Response.json({ message: "Internal server error" });
  }
}
