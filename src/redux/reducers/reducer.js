const INIT_STATE = {
    hours: []
};

export const hourReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_COURSE":
            return {
                ...state,
                hours:[...state.hours, action.payload]
            }
            
    
        default:
            return state;
    }
}