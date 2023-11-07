import { Dispatch, SetStateAction } from "react"


export const fetchChampions = async (setLoading: Dispatch<SetStateAction<boolean>>) => {
    setLoading(false)
}