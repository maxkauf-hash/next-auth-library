"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Header } from "./auth/Header";
import { Social } from "./auth/Social";
import { BackButton } from "./auth/BackButton";
import { CardWrapperProps } from "../types";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps): JSX.Element => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="text-center">
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
