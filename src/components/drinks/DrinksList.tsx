import React from "react";

import DrinklItem from "./DrinkItem";
import { withSpinner } from "hocs";
import { IDrinkItem } from "interfaces/drink";

interface IDrinksList {
  items: IDrinkItem[];
}

const DrinksList = ({ items }: IDrinksList): JSX.Element => (
  <div className="row">
    {items &&
      items.map((item: IDrinkItem) => (
        <DrinklItem item={item} key={item.name} />
      ))}
  </div>
);

const DrinksListWithSpinner = withSpinner(DrinksList);

export default DrinksListWithSpinner;
