import { Link } from "react-router";
import { ModeToggle } from "../shadcn/ModeToggle";
import { Button } from "../shadcn/ui/button";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-2 border-b py-2">
      <Link to="/" className="text-2xl font-bold">
        Logo
      </Link>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button asChild>
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
