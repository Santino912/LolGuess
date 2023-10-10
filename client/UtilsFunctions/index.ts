import axios from "axios"
import { DataAnswer, ObjectChampData } from "@/TypeScript/Interfaces";

export const getAllChamps = async (): Promise<ObjectChampData & DataAnswer | unknown> => {
    try {
        const { data } = await axios.get(`http://localhost:3001/allchamps`);

        return data
    } catch (err: unknown) {
        return err
    }
}