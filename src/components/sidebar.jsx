import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "220px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Dashboard</h3>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link to="/dashboard" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/dashboard/settings" style={{ color: "white" }}>
          Settings
        </Link>

        <button
          onClick={handleLogout}
          style={{
            marginTop: "20px",
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
