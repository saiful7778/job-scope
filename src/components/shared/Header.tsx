import { Link } from "react-router";
import { ModeToggle } from "../shadcn/ModeToggle";
import { Button } from "../shadcn/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, clearAuth } from "@/redux/features/auth/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-2 border-b py-2">
      <Link to="/" className="text-2xl font-bold">
        Logo
      </Link>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <AuthComponent />
      </div>
    </header>
  );
};

const AuthComponent = () => {
  const { accessToken, refreshToken } = useSelector(authSelector);
  const dispatch = useDispatch();

  const isLogged = !!accessToken && !!refreshToken;

  return isLogged ? (
    <>
      <Avatar>
        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
        <AvatarFallback>user</AvatarFallback>
      </Avatar>
      <Button onClick={() => dispatch(clearAuth())}>Logout</Button>
    </>
  ) : (
    <Button asChild>
      <Link to="/login">Login</Link>
    </Button>
  );
};

export default Header;
