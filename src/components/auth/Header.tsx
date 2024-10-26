import React from "react";
import { CardTitle } from "../ui/card";

export const Header = ({ label }: { label: string }): JSX.Element => {
  return (
    <CardTitle>
      <p className="text-3xl font-semibold text-center">Auth</p>
      <p className="text-muted-foreground">{label}</p>
    </CardTitle>
  );
};
