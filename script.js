const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai';
const options = {
method: 'GET',
headers: {
'content-type': 'application/octet-stream',
'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

cloud_pct = response.cloud_pct
temp= response.temp
feels_like= response.feels_like
humidity= response.humidity
min_temp= response.temp
max_temp= response.max_temp
wind_speed=response.wind_speed
wind_degrees= response.wind_degrees
sunrise= response.sunrise
sunset= response.sunset

fetch(url, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));