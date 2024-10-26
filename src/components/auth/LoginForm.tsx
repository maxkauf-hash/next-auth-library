import React from "react";
import { useState, useTransition } from "react";
import { login } from "../../api/apiRoutes.js";
import { CardWrapper } from "../CardWrapper.js";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form.js";
import { Input } from "../ui/input.js";
import { FormError } from "../FormError.js";
import { FormSuccess } from "../FormSuccess.js";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "../../schemas/loginUserSchema";
import { Button } from "../ui/button.js";
import { OnLoginSuccessProps } from "../../types";
import * as z from "zod";

export const LoginForm = ({ onLoginSuccess }: OnLoginSuccessProps) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = useForm({
    resolver: zodResolver(loginUserSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof loginUserSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        if (data.status !== 200) {
          setError(data.message);
        } else {
          if (!data.user.emailVerified) {
            setError("Please verify your email address first.");
          } else {
            setSuccess(data.message);
            onLoginSuccess(data.user);
          }
        }
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Welcome Back!"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/register"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="example@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
