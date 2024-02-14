import { auth } from "../firebase"
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut ,
    getIdToken,
    signInWithCustomToken,
    sendPasswordResetEmail
} from "firebase/auth"

export const signUpUser = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    return user 
}

export const signInUser = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
}

export const signInUserWithToken = async (customToken) => {
    const user = await signInWithCustomToken(auth, customToken)
    return user
}

export const signOutUser = async () => {
    await signOut(auth)
    return null
}

export const unsubscribe = async (setCurrenUser, setIsLoading, setUserTokenID) => {
    onAuthStateChanged(auth, async (currentUser) => {
        //console.log('listener: ', currentUser);
        setCurrenUser(currentUser)
        let token = null
        if (currentUser) {
            token = await getIdToken(currentUser, true);
        }
        //console.log("token: ", token);
        setUserTokenID(token)
        setIsLoading(false)
    })
}

export const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return 'Reset link sent to your email.';
    } catch (error) {
        console.log(error);
        const errorMessage = error.message
        if (errorMessage === 'Firebase: Error (auth/network-request-failed).') {
            throw new Error("Couldn't send link. Check your internet connection.");
        }
        throw new Error('Error sending password reset email');
    }
  };