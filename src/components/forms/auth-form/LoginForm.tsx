import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas/authSchema";
import type { z } from "zod";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import PasswordField from "@/components/shadcn/PasswordField";
import { storeToken } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import toast from "react-hot-toast";
import errorResponse from "@/lib/errorResponse";
import { useAxios } from "@/hooks/useAxios";
import Spinner from "@/components/Spinner";
import { useLocation, useNavigate } from "react-router";
import { defaultLoginRedirect } from "@/lib/staticData";

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const axios = useAxios();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { state } = useLocation();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (e: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post<{
        access: string;
        refresh: string;
      }>("/api/auth/login/", {
        email: e.email,
        password: e.password,
      });
      toast.success("Login successfully");
      form.reset();
      dispatch(
        storeToken({ accessToken: data?.access, refreshToken: data?.refresh }),
      );
      navigate(state?.pathname || defaultLoginRedirect);
    } catch (err) {
      toast.error(errorResponse(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email Address"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordField
                  placeholder="Password"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
