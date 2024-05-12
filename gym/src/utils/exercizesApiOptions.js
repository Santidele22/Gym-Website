const XRapidAPIKey = import.meta.env.VITE_XRapidAPIKey;
const XRapidAPIHost = import.meta.env.VITE_XRapidAPIHost;
const url = "https://exercisedb.p.rapidapi.com/exercises?limit=100";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": XRapidAPIKey,
		"X-RapidAPI-Host": XRapidAPIHost,
	},
};

export default{
	url,options
}
