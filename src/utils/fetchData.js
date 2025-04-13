const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const dataJson = await response.json();
    return dataJson;
  } catch (err) {
    throw new Error("Error fetching data", err);
  }
};

export default fetchData;
