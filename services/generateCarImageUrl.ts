import { Car } from "@/types";
const BASE_URL = 'https://cdn.imagin.studio/getImage'
export const generateCarImageUrl = (car: Car, angle?: string) => {
  const { make, model, year } = car;
  const key = 'hrjavascript-mastery'
  const url = new URL(`${BASE_URL}?&customer=${key}&paintId=6w9&paintdescription=radiant-white`);

    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  } 