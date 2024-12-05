import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getCattegory, sortPrices } from "./services/services"
import { Prize, Winner } from "./services/interfaces"

const useApis = () => {

  const [cattegory, setCattegory] = useState('')
  const [price, setPrice] = useState('');
  const [completePrize, setCompletePrize] = useState<Prize>()
  const [winners, setWinners] = useState<Winner[]>([])
  const [isLoading, setIsLoading] = useState(false)


  const { data, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: ()=>getCattegory(cattegory),
    retry: 1,
    enabled: cattegory !== ''
  })


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCattegory(e.target.value)
  }

  const handleChangePrize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(e.target.value)
  }
  const handleSort = () => {
    if(price !== '' && cattegory !== ''){
      setIsLoading(true)
      sortPrices(price).then(res => setWinners(res)).finally(() => setIsLoading(false))
    }
  }

  useEffect(() => {
    refetch()
  }, [cattegory])



  return {
    cattegory,
    data,
    handleChange,
    handleChangePrize,
    handleSort,
    setCompletePrize,
    completePrize,
    winners,
    isLoading,
  }
}

export default useApis