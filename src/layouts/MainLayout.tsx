import Header from "@/components/shared/Header";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden p-4">
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
