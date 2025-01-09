import Header from "@/components/shared/Header";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden p-4">
      <div className="container mx-auto">
        <Header />
        <main className="p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
