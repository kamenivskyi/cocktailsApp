import React from "react";
import { Link } from "react-router-dom";

import { encodeBase64 } from "utils/base64helpers";
import { withSpinner } from "hocs";

interface ICategory {
  category: string;
}
interface ICategories {
  items: ICategory[];
}

const Categories = ({ items }: ICategories): JSX.Element => (
  <div className="list-group">
    {items &&
      items.map(({ category }: ICategory) => {
        const categoryEncoded = encodeBase64(category);

        return (
          <Link
            to={`/category/${categoryEncoded}`}
            className="list-group-item list-group-item-action"
            key={category}
          >
            {category}
          </Link>
        );
      })}
  </div>
);

const CategoriesWithSpinner = withSpinner(Categories);

export default CategoriesWithSpinner;
