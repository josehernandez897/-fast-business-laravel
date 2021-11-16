import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";

import AuthScreen from "./src/Screens/Auth";
import jwtDecode from "jwt-decode";
import AppNavigation from "./src/Navigation/AppNavigation";
import AuthContext from "./src/context/AuthContext";
import { setTokenApi, getTokenApi, removeTokenApi } from "./src/api/token";
//import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
//import MyDrawer from "./src/MyDrawer/index";
//import {MyDrawer} from "./src/MyDrawer/MyDrawer"


export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if (token) {
        setAuth({
          token,
          idUser: jwtDecode(token).id,
        });
      } else {
        setAuth(null);
      }
    })();
  }, []);
  const login = (user) => {
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const logout = () => {
    if (auth) {
      removeTokenApi();
      setAuth(null);
    }
  }

  /*const authData = useMemo( () => ({
        auth,
        login, 
        logout,
      }),
      [auth]
  );  
  if(auth === undefined) return null;*/
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>{auth ? <AppNavigation/> : <AuthScreen />}</PaperProvider>
    </AuthContext.Provider>
  );
}

