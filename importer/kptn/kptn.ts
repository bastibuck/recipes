import puppeteer from "puppeteer";
import { normalizeIngredients } from "../helper/normalizer";

const importKptn = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  // title
  const title = await page.$eval("[itemprop='name']", (title) =>
    title.textContent?.trim()
  );

  // image
  const image = await page.$eval("[itemprop='image']", (img) =>
    img.getAttribute("src")
  );

  // ingredients
  const ingredients = await page.$$eval<string[]>(
    ".kptn-ingredient",
    (ingredients) =>
      ingredients.map((ingredient) =>
        ingredient.textContent ? ingredient.textContent.trim() : ""
      )
  );

  const ingredientsNormalized = normalizeIngredients(ingredients);

  console.log({
    url,
    title,
    image,
    ingredientsNormalized,
  });

  await browser.close();
};

export default importKptn;
