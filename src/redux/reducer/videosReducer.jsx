export const homeVideoReducer=(state={
    videos: [],
    nextPageToken: null,
    loading: false
},action)=>{
    const {type,payload}=action;
    switch(type){
        case "GET_VIDEOS":
            return{
                ...state,
                videos: payload.videos,
                nextPageToken: payload.nextPageToken,
            }
        default:
            return state;
        }
}