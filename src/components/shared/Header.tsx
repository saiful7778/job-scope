import { Link } from "react-router";
import { ModeToggle } from "../shadcn/ModeToggle";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between gap-2 border-b py-2">
      <Link to="/" className="text-2xl font-bold">
        Logo
      </Link>
      <ModeToggle />
    </header>
  );
};

export default Header;
