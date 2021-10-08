import {
  INGREDIENTS_EXCLUDES,
  INGREDIENTS_MAP,
  INGREDIENTS_REPLACEMENTS,
} from "../constants";

export const normalizeIngredients = (ingredients: string[]): string[] => {
  return ingredients
    .filter(Boolean)
    .filter(
      (ingredient) =>
        !INGREDIENTS_EXCLUDES.some((excl) => ingredient.includes(excl))
    )
    .map((ingredient) => {
      INGREDIENTS_REPLACEMENTS.forEach((replace) => {
        ingredient = ingredient.replace(replace, "").trim();
      });

      return ingredient;
    })
    .map((ingredient) => {
      Object.entries(INGREDIENTS_MAP).forEach(([key, value]) => {
        ingredient = ingredient.replace(key, value).trim();
      });

      return ingredient;
    });
};
