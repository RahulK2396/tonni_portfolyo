export const  STORE_PORTFOLIO_DETAILS ="STORE_PORTFOLIO_DETAILS"


export function  storePortfolioDetils(payload){
    console.log('action', payload)
    return{
        type: STORE_PORTFOLIO_DETAILS,
        payload:payload
    }
}

