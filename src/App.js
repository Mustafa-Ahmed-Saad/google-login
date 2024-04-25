// *************************************************** way 1: Google Login (using token) ***************************************************
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";

function App() {
  const login = useGoogleLogin({
    // we will get token
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse.access_token);
      // we get token from google here and the we will call backApiUrl
      // try {
      //   const response = await axios.get("<backendAPiUrl>", {
      //     headers: {
      //       Authorization: `Bearer ${tokenResponse.access_token}`,
      //     },
      //   });
      //   const data = await response.json();
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
    },
  });

  return (
    <>
      <button
        style={{
          padding: "10px",
          margin: "10px",
          display: "inline-block",
        }}
        onClick={() => login()}
      >
        Sign in with Google 🚀
      </button>
    </>
  );
}

export default App;

// *************************************************** way 2: Google Login (using credential) ***************************************************
// import { jwtDecode } from "jwt-decode";
// import { GoogleLogin } from "@react-oauth/google";

// function App() {
//   return (
//     <>
//       <GoogleLogin
//         onSuccess={(credentialResponse) => {
//           // we get credential here and we can call backApiUrl here like way:1
//           // we will get credential
//           const credentialDecode = jwtDecode(credentialResponse.credential);
//           console.log(credentialDecode);
//         }}
//         onError={() => {
//           console.log("Login Failed");
//         }}
//       />
//     </>
//   );
// }

// export default App;
