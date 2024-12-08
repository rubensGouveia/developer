import { GlobalsResponse, PageResponse } from "../types/fetchData.types";

export const fetchGlobalData = async (locale: string) => {
    try {
        const response = await fetch(`http://127.0.0.1:4000/global?locale=${locale}`);
        const data: GlobalsResponse = await response.json();
        return  data
    } catch(error){
        console.error(error)
        throw new Error('Failed to fetch global data');
    }  
  };
  
  export const fetchPageData = async (locale: string) => {
    try{
        const response = await fetch(`http://127.0.0.1:4000/pages?locale=${locale}`);
        const data:PageResponse[] = await response.json();
        return  data
    }catch(error){
        console.error(error)
        throw new Error('Failed to fetch page data');
    }
  };