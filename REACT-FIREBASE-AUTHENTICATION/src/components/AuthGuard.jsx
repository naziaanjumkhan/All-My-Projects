import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth, db } from "../config/firebase-config";
import { Spin } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../zustand/useAuth";

const AuthGuard = () => {
  const [isLogin, setIsLogin] = useState(null);
  const {setUser} = useAuth()
  useEffect(() => {
    onAuthStateChanged(auth, async (session) => {
      if (session) {
        const ref = doc(db, "users", session.uid);
        const snap = await getDoc(ref);
        const payload = snap.data();
        payload.createdAt =  payload.createdAt.toDate()
        payload.email = session.email
        setUser(payload)
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  if (isLogin === null)
    return (
      <div className="flex items-center justify-center-safe h-screen">
        <Spin size="large" />
      </div>
    );

  if (isLogin === false) return <Navigate to="/login" />;
  return <Outlet />;
};

export default AuthGuard;
