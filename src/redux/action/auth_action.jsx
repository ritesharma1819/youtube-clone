import firebase from 'firebase/compat/app'
import auth from '../../utils/firebase'

const login=()=>async dispatch =>{
    try{
    const googleprovider= new firebase.auth.GoogleAuthProvider()
    const res= await  auth.signInWithPopup(googleprovider)
    console.log(res)
    const accessToken= res.credential.accessToken
    const profile= {
       name: res.additionalUserInfo.profile.name,
       photoUrl: res.additionalUserInfo.profile.picture
    }

    dispatch({
        type: "LOGIN",
        payload: accessToken
    })
    dispatch({
        type: "LOAD_PROFILE",
        payload: profile
    })

    }
    catch(error){
      console.log(error)
    }
}

export default login;