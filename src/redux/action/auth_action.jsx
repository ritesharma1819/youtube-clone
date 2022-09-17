import firebase from "firebase/compat/app";
import auth from "../../utils/firebase";

const login = () => async (dispatch) => {
  try {
    const googleprovider = new firebase.auth.GoogleAuthProvider();
    googleprovider.addScope(
      "https://www.googleapis.com/auth/youtube.force-ssl"
    );
    const res = await auth.signInWithPopup(googleprovider);
    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoUrl: res.additionalUserInfo.profile.picture,
    };

    localStorage.setItem("accesstoken", accessToken);
    localStorage.setItem("user", JSON.stringify(profile));

    dispatch({
      type: "LOGIN",
      payload: accessToken,
    });
    dispatch({
      type: "LOAD_PROFILE",
      payload: profile,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: "LOGOUT",
  });

  localStorage.removeItem("accesstoken");
  localStorage.removeItem("user");
};

export default login;
