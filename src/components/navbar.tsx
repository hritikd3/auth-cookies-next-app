import Link from "next/link";
import Logout from "./logout";
import { getSession } from "@/action";


const Navbar=async ()=>{
  const session=await  getSession()
  // console.log(session) 
  return (
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
    {session.isLoggedIn &&  <Logout />}
    </nav>
  );
}

export default Navbar