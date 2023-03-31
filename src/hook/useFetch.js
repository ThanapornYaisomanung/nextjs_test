import { useState } from "react"
import { httpClient } from "@/service/httpClient"

export const useFetch = () =>{
    const [resData, setResData] = useState([])

    const getResData = async () => {
        try {
            const {data} = await httpClient.get('/api/restaurants')
            console.log(data)
            setResData(data)

        } catch (error) {
            console.log(error)
        }
    }

    return {
        resData,getResData
    }
}