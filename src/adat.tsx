export type AllapotTipus = "folyamatban" | "törölve" | "létrehozva" | "kész"
export interface TodoTipus {
    id: number,
    tennivalo: string,
    allapot: AllapotTipus
}

export const TODOLISTA: TodoTipus[] = [
    {
        id: 1,
        tennivalo: "Tanulni a dolgozatra",
        allapot: "folyamatban"
    },
    {
        id: 2,
        tennivalo: "takarítás",
        allapot: "folyamatban"
    },
    {
        id: 3,
        tennivalo: "contexes feladat önállóan",
        allapot: "folyamatban"
    },
    {
        id: 4,
        tennivalo: "edzés",
        allapot: "folyamatban"
    }
]