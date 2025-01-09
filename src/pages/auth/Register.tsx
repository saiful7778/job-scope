import authBannerImage from "@/assets/images/auth-banner-image.jpeg";
import RegisterForm from "@/components/forms/auth-form/RegisterForm";
import { Link } from "react-router";

const Register: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border bg-card text-card-foreground shadow">
      <div className="grid p-0 md:grid-cols-2">
        <div className="relative hidden bg-muted md:block">
          <img
            src={authBannerImage}
            alt="Image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Join with us</h1>
              <p className="text-balance text-muted-foreground">
                Create a new account
              </p>
            </div>
            <RegisterForm />
            <div className="text-center text-sm">
              Do you have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
