import { STORE_PORTFOLIO_DETAILS } from "./Action";


const initialState = {
    PortfolioDetails: []
}
const PotfolioReducer = (state = initialState, action) => {
    console.log('reducer', action.payload)
    switch (action.type) {

        case STORE_PORTFOLIO_DETAILS:
            return {
                ...state,
                PortfolioDetails: [action.payload],
            };
        default:
            return state;
    }
}
export default PotfolioReducer;