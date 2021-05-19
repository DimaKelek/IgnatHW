import {UserType} from "../HW8";

const SortUpAC = () => {
    return {type: "SORT-UP"} as const
}
const SortDownAC = () => {
    return {type: "SORT-DOWN"} as const
}
const Check18AC = () => {
    return {type: "CHECK-18"} as const
}

type ActionsType = ReturnType<typeof SortUpAC> | ReturnType<typeof SortDownAC> | ReturnType<typeof Check18AC>

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            const newState = [...state].sort(
                (a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    else return 0;
                }
            )
            return newState
        }
        case 'SORT-DOWN': {
            const newState = [...state].sort(
                (a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    else return 0;
                }
            )
            return newState
        }
        case 'CHECK-18': {
            return state.filter(u => u.age >= 18)
        }
        default: return state
    }
}


