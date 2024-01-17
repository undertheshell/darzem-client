import React from "react";
import { useRoutes } from "./routes";
import { useAuth } from "../../auth/model/auth";
import { AppContext } from "../model/context";
import { Loader } from "../view/loading_view";

function App() {
  const links = [
    { text: 'Главная', path: '/main' },
    { text: 'Прочитанные', path: '/books-read' },
    { text: 'Библиотека', path: '/books' },
    { text: 'Атрибуты книг', path: '/book-attributes' }
]

  const { token, userId, userName, error, loading, logout, login, register, isAuthenticated } = useAuth();
  const routes = useRoutes(isAuthenticated);

  if(loading) return <Loader/>

  return (
    <AppContext.Provider value={{ token, userId, userName, login, logout, register, isAuthenticated, error, links }}>
      {routes}
    </AppContext.Provider>
  );
}

export default App;
