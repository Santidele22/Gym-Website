const XRapidAPIKey = import.meta.env.VITE_XRAPIdAPIYOUTUBEKEY;
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':XRapidAPIKey,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  export default options