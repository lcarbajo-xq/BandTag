import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const Redirect = () => {
  const router = useRouter()
  useEffect(() => {
    if (router.query.code) router.replace('/')
  }, [router])
  return <div>Redirected</div>
}

export default Redirect
