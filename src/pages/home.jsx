import { useEffect, useState } from "react";
import { supabase } from "../supabase";


function Home() {
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/login"); // not logged in
      } else {
        setUser(data.user);
      }
    };

    checkUser();
  }, []);

  

  if (!user) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dashboard</h2>
      <p>Welcome, <b>{user.user_metadata.full_name}</b> 👋</p>
    </div>
  );
}

export default Home;
