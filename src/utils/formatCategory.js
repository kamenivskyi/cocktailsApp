const formatCategory = (category, matchChar, targetChar) => {
  const arrChars = category.split('');
  const result = arrChars.map(letter => letter === matchChar ? targetChar : letter);

  return result.join('');
}

export default formatCategory;