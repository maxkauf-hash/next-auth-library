"use client";

import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = (): JSX.Element => {
  return (
    <footer className="flex items-center w-screen gap-x-2">
      <Button size="lg" className="w-full">
        <FcGoogle />
      </Button>
      <Button size="lg" className="w-full">
        <FaGithub />
      </Button>
    </footer>
  );
};
