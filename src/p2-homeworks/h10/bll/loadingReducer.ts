
export type LoadingActionType = ReturnType<typeof loadingAC>

export type LoadingType = {
    isLoading: boolean
}

const initState: LoadingType = {
    isLoading: false
};

export const loadingReducer = (state: LoadingType = initState, action: LoadingActionType): LoadingType => {
    switch (action.type) {
        case "SET-LOADING": {
            return {...state, isLoading: action.isLoading};
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean) => {
    return {type: "SET-LOADING", isLoading} as const
};