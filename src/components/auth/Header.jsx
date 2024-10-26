import { cn } from "../../lib/utils";
import { CardTitle } from "../ui/card";

export default function Header({ label }) {
  return (
    <CardTitle>
      <p className="text-3xl font-semibold text-center">Auth</p>
      <p className="text-muted-foreground">{label}</p>
    </CardTitle>
  );
}
