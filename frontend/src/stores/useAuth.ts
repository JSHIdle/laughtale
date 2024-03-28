import { create } from "zustand"
import {Token, User} from "../../types";
import useAuthLocalStorage from "./useAuthLocalStorage.ts";
import {To} from "react-router-dom";
type AuthState  ={
    user : User;
    token : Token;
}

type AuthAction  = {
    setUser: (user: User | null) => void;
    setToken: (token: Token) => void;
    getToken: () => Token;
    clear: () => void;
}

type AuthStore = AuthState & AuthAction;

export const useAuth = create<AuthStore>((set) => {
    const authLocalStorage = useAuthLocalStorage();

    return {
        user: null,
        token: null,
        setUser: (user = null ) => set(() => ({user})),
        setToken: (token: Token) =>{
            authLocalStorage.set({accessToken:token.accessToken});
            set({token: {...token}});
        },
        getToken: () => authLocalStorage.get(),
        clear: () => {
            authLocalStorage.clear();
           set({ user: null, token: null});
        }
    }
})