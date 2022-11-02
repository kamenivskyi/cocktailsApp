export interface IDrinkItem {
  id: number;
  name: string;
  imgUrl: string;
  category: string;
  glass?: string;
  iba?: string;
  type?: string;
  instructions?: string;
  ingredsAndMeasures?: IMeasureAndIngredient[];
}

export interface IMeasureAndIngredient {
  ingredient: string;
  measure: string;
}

export interface IIngredient {
  ingredient: string;
}

export interface IMesuare {
  measure: string;
}
