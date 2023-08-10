export const exerciseOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aa39dd9339msh64a7c938913dca5p18195ajsn5105154eaf1a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };