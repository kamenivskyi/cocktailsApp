const useFilterDrinks = (items, term) => {
  if (!term.length) {
    return items;
  }

  const visibleItems = items ? items.filter(({ name }) => {
    return name.toLowerCase().includes(term.toLowerCase());
  }) : items;

  return visibleItems;
};

export default useFilterDrinks;