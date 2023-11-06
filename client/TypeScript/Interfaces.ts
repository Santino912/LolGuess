import { Dispatch, SetStateAction } from "react"

export type FunctionBooleanNoReturn = (param: boolean) => void
export type FunctionWithoutReturn = () => void
export type AnsweredSkillObject = { id: string, name: string, champName: string, isPassive: boolean, letter: string }

export type ArrNamesType = string[]

export type CorrectAnswerType = {
    isPassive: false,
    champName: string,
    letter: string,
    title: string,
    id: string,
}

export interface StateAutocomplete {
    partype: string,
    title: string,
    image: string,
    name: string,
    tags: string[],
}
export interface ObjectChamp {
    id: string
    name: string
    label: string
    blurb: string
    title: string
    letter: string
    tags: string[]
    partype: string
    version: string
    defaultImage: string
    image: {
        url: string
        full: string
        sprite: string
    }
}

export interface ChampsSelectedType {
    partype: string
    tags: string[]
    image: string
    title: string
    name: string
}

export interface ObjectDataRequest {
    answerSkill: AnsweredSkillObject
    champsNames: ObjectChamp[]
    allChamps: ObjectChamp
    answer: ObjectChamp
    version: string
}



export interface ObjectChampWithSplashart extends ObjectChamp {
    nameOfSkin: string
    skinNum: number
}

export interface ObjectDataRequestSplashart {
    champsNames: ObjectChamp[]
    allChamps: ObjectChamp
    answer: ObjectChampWithSplashart
}

export interface ObjectStateChamp {
    tags: string[] | never[]
    name: string | undefined
    title: string | undefined
    image: string | undefined
    partype: string | undefined
}

export interface ObjectChampTries {
    tags: string[]
    name: string
    title: string
    image: string
    partype: string
}

export interface AutocompleteType {
    setChampsTries: Dispatch<SetStateAction<ChampsSelectedType[] | never[]>>
    setChampSelected: Dispatch<SetStateAction<ObjectStateChamp>>
    champsTries: ChampsSelectedType[] | never[]
    loading: boolean | undefined
    options: ObjectChamp[] | []

}

export interface AnswerChamp {
    tags: string[]
    name: string
    title: string
    image: string
    partype: string
    passive: string
}

export interface AnsweredResultChampInterface {
    correctAnswer: { isPassive: boolean; champName: string; letter: string; name: string; id: string }
    answered: {
        isAnswered: boolean,
        letter: string,
        tries: number
    }
    tries: number
}

export interface AnsweredResultNicknameInterface {

    tries: number
}