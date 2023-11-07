import axios from "axios"
import { ObjectDataRequest, ObjectDataRequestSplashart } from "@/TypeScript/Interfaces";
import { Dispatch, SetStateAction } from "react";

const baseURL = process.env.API_URL || "http://localhost:3001"

interface Answer {
    id: string,
    champName: string,
    isPassive: boolean,
}

export const getAllChamps = async (setLoading: Dispatch<SetStateAction<boolean>>): Promise<ObjectDataRequest> => {
    try {
        const { data } = await axios.get(`${baseURL}/allchamps`);
        setLoading(false)
        return data
    } catch (err: any) {
        throw new Error(err?.message);
    }
}

export const getAllChampsToNickname = async (setLoading: Dispatch<SetStateAction<boolean>>): Promise<ObjectDataRequest> => {
    try {
        const { data } = await axios.get(`${baseURL}/allchampsnickname`);
        setLoading(false)
        return data
    } catch (err: any) {
        throw new Error(err?.message);
    }
}

export const getAllChampsToSplashart = async (setLoading: Dispatch<SetStateAction<boolean>>): Promise<ObjectDataRequestSplashart> => {
    try {
        const { data } = await axios.get(`${baseURL}/allchampssplashart`);
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