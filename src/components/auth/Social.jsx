"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <footer className="flex items-center w-screen gap-x-2">
      <Button size="lg" className="w-full" onClick={() => onClick("google")}>
        <FcGoogle />
      </Button>
      <Button size="lg" className="w-full" onClick={() => onClick("github")}>
        <FaGithub />
      </Button>
    </footer>
  );
}
