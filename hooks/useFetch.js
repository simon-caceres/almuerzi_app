import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    
    const getData =  async ()  => {
        const res = await fetch(url)
        const resJson = await res.json()
        setData(resJson)
        setLoading(false)
        }
    
    useEffect(() => {
        getData()
    }, []) 

    return {loading, data}
}

export default useFetch