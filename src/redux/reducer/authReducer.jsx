const intialState={
    accessToken: null,
    user: null,
}

export const authReducer=(state= intialState , action)=>{
    const {type, payload}=action
    switch(type){
        case 'LOGIN':
            return {
                ...state,
                accessToken: payload
            }
        case 'LOAD_PROFILE':
            return {
                ...state,
                user: payload
            }
        default :
           return state
    }

}