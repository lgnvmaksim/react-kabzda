type ActionType = {
    type: string
}

export const TOGGLE_CONST = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONST:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('Bad action type')
    }
    return state
}