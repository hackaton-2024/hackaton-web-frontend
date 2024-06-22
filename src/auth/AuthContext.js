import { createContext, useReducer, useEffect, useCallback } from "react";
import { isValidToken, setSelectedAccount, setSession } from "./utils";
import axios from "../utils/axios";

export const AuthContext = createContext();

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

export const authReducer = (state, action) => {
  if (action.type === "INITIAL") {
    return {
      ...state,
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
    };
  }

  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  }

  return state;
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken")
          : "";

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get("/user");
        console.log(response.data);

        const user = response.data.user;

        dispatch({
          type: "INITIAL",
          payload: {
            isInitialized: true,
            isAuthenticated: true,
            user: user,
          },
        });
      } else {
        dispatch({
            type: "INITIAL",
            payload: {
              isAuthenticated: false,
              user: null,
              museum: null,
              selectedAccount: null,
            },
          })
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "INITIAL",
        payload: {
          isAuthenticated: false,
          user: null,
          museum: null,
          selectedAccount: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const logout = async () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, dispatch, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
