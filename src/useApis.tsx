import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getCattegory, sortPrices } from "./services/services"
import { Prize, Winner } from "./services/interfaces"
const animationDuration = 5000; // Duración simulada de la carga en milisegundos (5 segundos)

const useApis = () => {

  const [cattegory, setCattegory] = useState('')
  const [price, setPrice] = useState('');
  const [isSuccess, setIsSuccess] = useState(false)
  const [completePrize, setCompletePrize] = useState<Prize>()
  const [winners, setWinners] = useState<Winner[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0); // Nuevo estado para el progreso



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
  const handleSort = async () => {
    if(price !== '' && cattegory !== ''){
      setIsLoading(true)


      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1; // Incrementa el progreso cada 50ms
        });
      }, animationDuration / 100);

      // Simula la carga de datos de la API
      await new Promise((resolve) => setTimeout(resolve, animationDuration));
      sortPrices(price).then(res => {
        setWinners(res)
        setIsSuccess(true)
      })
      setIsLoading(false);
      setProgress(100); // Asegura que el progreso llegue al 100%
      
    }
  }

  useEffect(() => {
    refetch()
  }, [cattegory])

  useEffect(() => {
    setIsSuccess(false);
    setProgress(0);
    setWinners([])
  }, [price, cattegory])


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
    isSuccess,
    progress,
    setIsLoading,
  }
}

export default useApis