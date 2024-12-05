import { Category } from "./interfaces"

const BASE_URL = "https://lottery-sixflags-back-production.up.railway.app/api"


export const getCattegory = async (titleCattegory: string): Promise<Category> => {
  const response = await fetch(`${BASE_URL}/prize/category/${titleCattegory}`, 
    {method: "GET"}
  )
  if(!response.ok){
    throw new Error('Error' + response.status)
  }
  return await response.json()

}