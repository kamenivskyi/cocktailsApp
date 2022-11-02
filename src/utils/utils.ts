export const getFilteredDrinks = <T>(items: T, term: string) => {
  if (!term.trim().length || !Array.isArray(items)) {
    return items;
  }

  const visibleItems = items
    ? items.filter(({ name }: { name: string }) =>
        name.toLowerCase().includes(term.toLowerCase())
      )
    : items;

  return visibleItems;
};
