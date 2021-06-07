import {loadingAC, LoadingActionType, loadingReducer, LoadingType} from "./loadingReducer";

let state: LoadingType;

beforeEach(()=> {
    state = {
        isLoading: false
    }
})

test("isLoading should be changed", ()=> {
    let action: LoadingActionType = loadingAC(true)
    let endState = loadingReducer(state, action)

    expect(endState.isLoading).toBe(true)
})