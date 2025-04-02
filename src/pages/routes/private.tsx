import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import { auth } from "../../services/firebaseConnection";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}

export default function Private({ children }: PrivateProps): any {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user?.uid,
          email: user?.email,
        };

        localStorage.setItem("@reactlinks", JSON.stringify(userData));
        setLoading(false);
        setSigned(true);
      } else {
        console.log("Não tem user logado");
        setLoading(false);
        setSigned(false);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}
