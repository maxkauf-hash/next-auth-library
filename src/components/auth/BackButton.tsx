"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { BackButtonProps } from "../../types";

export const BackButton = ({ href, label }: BackButtonProps): JSX.Element => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link to={href}>{label}</Link>
    </Button>
  );
};
