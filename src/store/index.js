import React from "react"
import LoginStore from "./login.store.js";
import UserStore from "./user.store.js";
class RootStore{
    constructor(){
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
    }
}

const StoresContext = React.createContext(new RootStore())
export const useStore = () => {return React.useContext(StoresContext)}