import axios from "axios"
import { FunctionBooleanNoReturn } from "@/TypeScript/Types"


export const fetchChampions = async (setLoading: FunctionBooleanNoReturn) => {
    setLoading(false)
}