import axios from "axios"
import { ObjectChamp, ObjectChampWithSplashart, ObjectDataRequest, ObjectDataRequestSplashart } from "@/TypeScript/Interfaces";
import { Dispatch, SetStateAction } from "react";
const { REACT_API_URL, REACT_LOCAL_HOST } = process.env

axios.defaults.baseURL = REACT_API_URL || REACT_LOCAL_HOST;


console.log(process.env.REACT_API_URL)
interface Answer {
    id: string,
    champName: string,
    isPassive: boolean,
}

export const getAllChamps = async (setLoading: Dispatch<SetStateAction<boolean>>): Promise<ObjectDataRequest> => {
    try {
        const { data } = await axios.get(`/allchamps`);
        setLoading(false)
        return data
    } catch (err: any) {
        throw new Error(err?.message);
    }
}

export const getAllChampsToNickname = async (setLoading: Dispatch<SetStateAction<boolean>>): Promise<ObjectDataRequest> => {
    try {
        const { data } = await axios.get(`/allchampsnickname`);
        setLoading(false)
        return data
    } catch (err: any) {
        throw new Error(err?.message);
    }
}

export const getAllChampsToSplashart = async (setLoading: Dispatch<SetStateAction<boolean>>): Promise<ObjectDataRequestSplashart> => {
    try {
        const { data } = await axios.get(`/allchampssplashart`);
        setLoading(false)
        return data
    } catch (err: any) {
        throw new Error(err?.message);
    }
}

export const getLinkPassiveSkill = (name: string) => {
    return `http://ddragon.leagueoflegends.com/cdn/13.18.1/img/passive/${name}`
}

export const getLinkActiveSkill = (name: string) => {
    return `http://ddragon.leagueoflegends.com/cdn/13.18.1/img/spell/${name}.png`
}

export function randomRotation() {
    const num = Math.floor(Math.random() * 3);
    const arrayDeg = [-90, 90, 180]
    return `rotate(${arrayDeg[num]}deg)`
}

export const allIsUndefined = (answer: Answer): boolean | undefined => {
    if (!answer?.champName) {
        return true
    }
    return false
}


interface StyleAnsweredLetter { isAnswered: boolean; letter: string; tries: number; }

export const styleAnsweredLetter = (value: string, answered: StyleAnsweredLetter, correctAnswer: string) => {
    const wrongStyle = { color: "#9f5454 !important" }
    const correctStyle = { color: "#68914d !important" }
    const standardStyle = {}
    return !answered?.isAnswered ? standardStyle : value === correctAnswer ? correctStyle : value === answered?.letter ? wrongStyle : {}
}