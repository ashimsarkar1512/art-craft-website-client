import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
             
            const [user,setUser] =useState(null)

            const createUser=(email,password)=>{
                      
                                  return createUserWithEmailAndPassword(auth,email,password)
                       }



            useEffect(()=>{
                        const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
                             console.log('user in the on state chance',currentUser);
                             setUser(currentUser)
                            
                          })
                          return()=>{
                             unSubscribe();
                          }
                         },[])
              
              
                          const authInfo={
                                      user,
                                      createUser,
                                      
                          }

            return (
                        <AuthContext.Provider value={authInfo} >
                        {children}         
                     </AuthContext.Provider>
            );
};

export default AuthProvider;