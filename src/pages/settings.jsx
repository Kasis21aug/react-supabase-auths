import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Settings() {
  const [user, setUser] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Get current user
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();
  }, []);

  // Update email
  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      email: newEmail,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Confirmation email sent. Please check your new email to confirm."
      );
      setNewEmail("");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Settings</h2>

      <p>
        <strong>Current Email:</strong> {user.email}
      </p>

      <form onSubmit={handleUpdateEmail}>
        <input
          type="email"
          placeholder="New email address"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Email"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Settings;
