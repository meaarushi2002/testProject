export async function fetchCars() {
    const headers= {
        'X-RapidAPI-Key': 'bb238318acmsh7366ccd8af711d7p193b53jsn42643f9b04b2',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',{
        headers: headers,
    });
    const result = await response.json();
    return result;
} 