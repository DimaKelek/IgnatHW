import {changeThemeAC, InitStateType, themeReducer} from "./themeReducer";

test("Theme should be changed in a project", () => {
    const startState: InitStateType = {
        theme: "dark"
    }

    const endState = themeReducer(startState, changeThemeAC("red"))
    expect(endState.theme).toBe("red")
})