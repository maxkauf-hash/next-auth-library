import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../utils";

/**
 * Configuration des variantes de styles pour le bouton.
 * Utilise `cva` pour générer des classes en fonction des propriétés `variant`, `size`, et `rounded`.
 */
export const buttonVariants = cva("m-2 p-2 max-w-fit", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      none: "rounded-none",
      full: "rounded-full",
    },
  },
});

/**
 * Interface représentant les propriétés d'un composant Button.
 * Étend les propriétés HTML standards pour un bouton.
 *
 * @export
 * @interface ButtonProps
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Indique si le bouton doit être rendu comme un enfant d'un autre composant via le slot.
   *
   * @type {boolean}
   * @memberof ButtonProps
   */
  asChild?: boolean;

  /**
   * Détermine la variante de style du bouton (ex : 'default', 'destructive', etc.).
   *
   * @type {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'}
   * @memberof ButtonProps
   */
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";

  /**
   * Définit la taille du bouton (ex : 'sm', 'lg', 'icon').
   *
   * @type {'default' | 'sm' | 'lg' | 'icon'}
   * @memberof ButtonProps
   */
  size: "default" | "sm" | "lg" | "icon";

  /**
   * Définit le style de bordure arrondie du bouton (ex : 'sm', 'md', 'lg', 'none').
   *
   * @type {'sm' | 'md' | 'lg' | 'none'}
   * @memberof ButtonProps
   */
  rounded: "sm" | "md" | "lg" | "none" | "full";
  className?: string;
}

/**
 * Composant Button réutilisable avec des styles configurables basés sur les variantes.
 *
 * @export
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  rounded,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
};

export default { Button, buttonVariants };
