const initState = {
    theme: "dark" as ThemeType
};

export const themeReducer = (state: InitStateType  = initState, action: ActionTypes): InitStateType => {
    switch (action.type) {
        case "THEME/CHANGE-THEME":
            return {...state, theme: action.theme}
        default: return state;
    }
};

// actions
export const changeThemeAC = (theme: ThemeType) => ({type: "THEME/CHANGE-THEME", theme} as const);

// types
type ActionTypes = ReturnType<typeof changeThemeAC>
export type ThemeType = 'dark' | 'red' | 'some'
export type InitStateType = typeof initState
