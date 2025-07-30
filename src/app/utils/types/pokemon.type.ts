export type Pokemon ={
    name: string,
    description: string,
    type : string[],
    attaque: {
        name:string,
        description: string,
        damage: number,
        type: string
    }
}