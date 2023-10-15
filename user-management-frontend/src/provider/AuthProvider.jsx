import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userInfo = {
        users,
        loading,
        setUsers,
        signUp,
        logOut,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;