import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthChangedListner, signOutUser } from '../utils/firebase/firebase.utils';
import { useContext } from 'react/cjs/react.production.min';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};
    const navigate = useNavigate();

    useEffect(() => {

        return onAuthChangedListner((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
                navigate("/")
            }
            setCurrentUser(user)
        })

    }, [])

    return (
        <UserContext.Provider value={ value }> 
            { children } 
        </UserContext.Provider>
    )
}