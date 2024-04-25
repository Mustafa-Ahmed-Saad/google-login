import { googleLogout } from "@react-oauth/google";

const Logout = () => {
  return <button onClick={() => googleLogout()}>logOut</button>;
};

export default Logout;
