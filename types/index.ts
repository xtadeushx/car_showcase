
export interface Car {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: 2 | 4 | 6 | 8 | 10 | 12 | 16
    displacement: number
    drive: 'fwd' | 'rwd' | 'awd' | '4wd'
    fuel_type: 'gas' | 'diesel' | 'electricity'
    highway_mpg: number
    make: string
    model: string
    transmission: 'manual' | 'automatic'
    year: number


}