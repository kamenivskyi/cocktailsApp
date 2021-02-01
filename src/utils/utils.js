export const filterDrinks = (items, term) => {
  if (!term.trim().length) {
    return items;
  }

  const visibleItems = items
    ? items.filter(({ name }) =>
        name.toLowerCase().includes(term.toLowerCase())
      )
    : items;

  return visibleItems;
};
