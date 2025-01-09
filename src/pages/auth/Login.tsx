import LoginForm from "@/components/forms/auth-form/LoginForm";
import authBannerImage from "@/assets/images/auth-banner-image.jpeg";
import { Link } from "react-router";

const Login: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
      <div className="grid p-0 md:grid-cols-2">
        <div className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-balance text-muted-foreground">
                Login to your account
              </p>
            </div>
            <LoginForm />
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="underline underline-offset-4">
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="relative hidden bg-muted md:block">
          <img
            src={authBannerImage}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
