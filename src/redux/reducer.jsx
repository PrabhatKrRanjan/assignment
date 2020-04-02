import data from './user.json';
import { CHANGE_PAGE } from './action'

const initialState = {
    page : 1,
    perPage: 5,
    userData : data
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }

        default:
            return state;
    }

}

export default reducer;