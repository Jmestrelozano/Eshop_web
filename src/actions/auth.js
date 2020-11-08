import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase_config";
import { finishLoading, startLoading } from "./ui";

export const startwithemailandpassword = (email, password) => {
  return (dispatch) => {
    // setTimeout(() => {
    //   dispatch(login(123, "jorgecorreo"));
    // }, 3000);
    dispatch(startLoading())
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
     
      .then(async({ user }) => {
       await dispatch(login(user.uid, user.displayName));
       await dispatch(infoSearch(user.providerData))
       startLoading()
       dispatch(finishLoading())

      });
    
  };
};

export const startgooglelogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        console.log(user.providerData)
        dispatch(infoSearch(user.providerData))
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const infoSearch = (providerData) => {
  return {
    type: types.infoSearchProfile,
    payload:{
        providerData
    }

  };
};

export const StartRegisterWithEmailAndPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);
        await user.updateProfile({ displayName: name });
      })
      .catch((err) => console.log(err));
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout =() =>{
  return async(dispatch) =>{
  await  firebase.auth().signOut()

  dispatch(logout())
  }
}


export const logout = () =>{
  return{
  type:types.loggout
}
}