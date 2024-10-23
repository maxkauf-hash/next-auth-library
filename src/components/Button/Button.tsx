import * as React from "react";

/**
 * Interface représentant les propriétés d'un composant Button.
 * Étend les propriétés HTML standards pour un bouton.
 *
 * @export
 * @interface ButtonProps
 */
export interface ButtonProps {
  children: React.ReactNode;
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
export const Button = ({
  children,
  className,
  variant,
  size,
  asChild = false,
  rounded,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`m-2 p-2 max-w-fit bg-${variant} text-${size} rounded-${rounded} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default { Button };
