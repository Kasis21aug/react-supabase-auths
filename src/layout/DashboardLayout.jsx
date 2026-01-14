import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Sidebar from "../components/sidebar";

function DashboardLayout() {
     const [loading, setLoading] = useState(true);
     const navigate = useNavigate();

    useEffect(() => {
       const checkSession = async () => {
         const { data } = await supabase.auth.getSession();

         if (!data.session) {
             navigate("/login");
         } else {
             setLoading(false);
         }
    };

    checkSession();
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;




