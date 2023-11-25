import { Car } from "@/types";

export async function fetchCars(): Promise<Car[] | undefined> {
    const headers = {
        'X-RapidAPI-Key': 'f900a3ae3bmsh3414472aa2a5e16p110d36jsnd833993f32e2',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
 
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
            headers: headers,
        });
        
        const result = await response.json();
        return result
    
}