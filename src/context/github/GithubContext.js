import React, { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
 // const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
 // const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
}

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //GET inital user(testing users)
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  //setLoading
  //const setLoading = () => dispatch({type: 'SET_LOADING'})
  
  return <GithubContext.Provider
  value={{
      ...state,
      dispatch,
  }}>
  {children}
</GithubContext.Provider>


  // return (
  //   <GithubContext.Provider
  //     value={{
  //       users: state.users,
  //       loading: state.loading,
  //       fetchUsers,
  //     }}
  //   >
  //     {children}
  //   </GithubContext.Provider>
  // );

  //userState
  // const [users,setUsers] = useState([])
  // const [loading,setLoading] = useState(true)

  // const fetchUsers = async () => {
  //     const response = await fetch(`${GITHUB_URL}/users`,{
  //         headers: {
  //             Authorization: `token ${GITHUB_TOKEN}`
  //         }
  //     })

  //     const data = await response.json()
  //     setUsers(data)
  //     setLoading(false)
  // }

  // return <GithubContext.Provider
  //     value={{
  //        users,loading,fetchUsers
  //     }}>
  //     {children}
  // </GithubContext.Provider>
};
export default GithubContext;
