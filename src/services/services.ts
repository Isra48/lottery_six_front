import { Category, Prize, Winner } from "./interfaces"

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


export const sortPrices = async (id: string): Promise<Winner[]> => {
  const response = await fetch(`${BASE_URL}/prize/raffle/${id}`, 
    {method: "GET"}
  )
  if(!response.ok){
    throw new Error('Error' + response.status)
  }
  return await response.json()

}

export const getPrice = async(id: string): Promise<Prize> => {
  const response = await fetch(`${BASE_URL}/prize/${id}`, 
    {method: "GET"}
  )
  if(!response.ok){
    throw new Error('Error' + response.status)
  }
  return await response.json()
}