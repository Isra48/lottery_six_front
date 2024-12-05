import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { getCattegory } from "./services/services"

const useApis = () => {

  const [cattegory, setCattegory] = useState('')

  const { data, refetch } = useQuery({
    queryKey: ['category'],
    queryFn: ()=>getCattegory(cattegory),
    enabled: cattegory.length>0
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCattegory(e.target.value)
  }

  useEffect(() => {
    refetch()
  }, [cattegory])

  return {
    cattegory,
    data,
    handleChange
  }
}

export default useApis