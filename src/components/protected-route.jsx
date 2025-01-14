/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser} from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user} = useUser(); // clerk hook used to get the loggend in user
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }
  // check onboarding process: 
  // after selecting the role , then one can access jobs and post-jobs url.
  if (
    user !== undefined &&
    !user?.unsafeMetadata?.role &&
    pathname !== "/onboarding"
  )
    return <Navigate to="/onboarding" />;

  return children;
};

export default ProtectedRoute;


