import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "firebaseConfig";

const registerUser = async ( email: string, password: string ) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user
    } catch (error) {
        throw error
    }
}

const loginUser = async ( email: string, password: string ) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user
    } catch (error) {
        throw error
    }
}
export {
    registerUser,
    loginUser
}