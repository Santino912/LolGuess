import axios from "axios"
import { FunctionBooleanNoReturn } from "@/TypeScript/Types"


export const fetchChampions = async (setLoading: FunctionBooleanNoReturn) => {
    const value = await axios.get("https://www.leagueoflegends.com/page-data/es-es/champions/page-data.json")
    console.log(value)
    setLoading(false)
    return value
}