const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
    </div>
  );
};

export default AuthLayout;
