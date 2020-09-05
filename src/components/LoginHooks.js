import React from "react";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
// import { logo } from "../img/google-icon.svg";

const clientId =
  "479069412043-jnfi2j72h5k14hs1ggr5qm6hle2hkhck.apps.googleusercontent.com";

export default function LoginHooks() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline'
  });

  return (
    <button onClick={signIn} className="button">
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}
