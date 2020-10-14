import { useState, useEffect } from 'react';

export const useRandomDrink = () => {
  const obj = useFetchDrinks('/random.php');

  return obj;
}

const useFetchDrinks = (url) => {
  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData(url).then((data) => {
      // console.log(data)
      setData(data);
      setLoading(false);
    });

  }, [])

  const fetchData = async (url) => {
    try {
      setLoading(true);

      const res = await fetch(`${baseUrl}${url}`);

      return res.json();
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  return { data, loading, error, doFetch: fetchData };
}

export default useFetchDrinks;