"use client";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function BackButton({ href, label }) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link to={href}>{label}</Link>
    </Button>
  );
}
