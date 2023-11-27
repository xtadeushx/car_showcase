import { Car } from "@/types";
export interface fetchCarsProps {
    manufacturer:string;
    year:number;
    fuel:string;
    limit:number;
    model:string;
}
const BASE_URL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars';

export async function fetchCars(filters: fetchCarsProps): Promise<Car[]> {
    const { manufacturer, year, fuel, limit, model } = filters;
    const headers = {
        'X-RapidAPI-Key': 'f900a3ae3bmsh3414472aa2a5e16p110d36jsnd833993f32e2',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
        const response = await fetch( `${BASE_URL}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, 
        {
            headers: headers,
        });
        
        const result = await response.json();
        return result
    
}
