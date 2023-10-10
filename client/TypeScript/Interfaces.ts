export type FunctionBooleanNoReturn = (param: boolean) => void
export type FunctionWithoutReturn = () => void

export type ArrNamesType = string[]

export interface DataAnswer { arrNames: ArrNamesType }

export interface AutocompleteType {
    loading: boolean | undefined;
    options: string[];
}

export interface ObjectChampData {
    [championName: string]: {
        id: string
        name: string
        blurb: string
        title: string
        partype: string
        version: string
        tags: string[]
        image: {
            url: string
            full: string
            sprite: string
        }
    }
}