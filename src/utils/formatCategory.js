const formatCategory = (category, matchChar, targetChar) => {
  const result = [];
  const arr = category.split('');

  arr.forEach(letter => result.push(letter === matchChar ? targetChar : letter));

  return result.join('');
}

export default formatCategory;