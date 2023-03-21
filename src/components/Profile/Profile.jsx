import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../util/firebase";

const Profile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(Boolean(user))
    });

    return () => {
      listener()
    }
  }, [])
  const email = isAuthenticated && auth.currentUser.email
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Profile
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h1>Email: {email || "You haven't signed in"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
