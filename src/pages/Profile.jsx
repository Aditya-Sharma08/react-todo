import { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, loading, isAuthenticated } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>{user?.name}</h1>
          <h3>{user?.email}</h3>
        </div>
      )}
    </>
  );
};

export default Profile;
