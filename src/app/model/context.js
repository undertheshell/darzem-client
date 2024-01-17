import { createContext } from "react";

function noop(){}

export const AppContext = createContext({
    token: null,
    userId: null,
    userName: null,
    login: noop,
    register: noop,
    logout: noop,
    isAuthenticated: false,
    links: []
});