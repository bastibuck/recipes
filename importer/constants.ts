export const INGREDIENTS_EXCLUDES = [
  "Gemüsebrühe",
  "Knoblauch",
  "Lorbeer",
  "Lorbeerblatt",
  "Olivenöl",
  "Pfeffer",
  "Rapsöl",
  "Salz",
  "Sonnenblumenöl",
  "Weizenmehl",
];

export const INGREDIENTS_REPLACEMENTS = [
  "veganes ",
  "veganer ",
  "vegane ",
  "braune ",
  ", frisch",
  ", gestückelt",
];

export const INGREDIENTS_MAP: { [key: string]: string } = {
  ["Pflanzlicher Drink"]: "Milch",
  ["Speisezwiebel"]: "Zwiebel",
};
