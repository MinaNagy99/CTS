import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface propsType {
  children: ReactNode;
}

export default function ProtectedRoute(props: propsType) {
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
}
