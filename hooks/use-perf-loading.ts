import { useState, useEffect } from 'react'

const usePerfLoading = () => {
  const [isPerf, setIsPerf] = useState(true)

  useEffect(() => {
    if (
      !matchMedia('(min-width: 768px)').matches
    ) {
      setIsPerf(true)
    } else {
      setIsPerf(false)
    }
  }, [])

  return isPerf
}

export default usePerfLoading