import React from "react";
import { cn } from "../../utils";

/*
 *  Interface représentant les propriétés d'un composant Button.
 *
 * @export
 * @interface ButtonProps
 * */
export interface ButtonProps {
  /**
   * Le type du bouton, qui peut être soit "button" (bouton classique) soit "submit" (soumission de formulaire).
   *
   * @type {'button' | 'submit'}
   * @memberof ButtonProps
   */
  type: "button" | "submit";

  /**
   * Le texte affiché sur le bouton.
   *
   * @type {string}
   * @memberof ButtonProps
   */
  label: string;

  /**
   * Indique si le bouton est désactivé. Si `true`, le bouton sera désactivé.
   * Cette propriété est optionnelle.
   *
   * @type {boolean}
   * @memberof ButtonProps
   */
  disabled?: boolean;

  /**
   * La variante de style du bouton. Peut être soit "primary" (bouton principal) soit "secondary" (bouton secondaire).
   *
   * @type {'primary' | 'secondary'}
   * @memberof ButtonProps
   */
  variant: "primary" | "secondary";
}

/**
 * Composant Button qui affiche un bouton avec des variantes de style.
 *
 * @export
 * @param {ButtonProps} props - Les propriétés du composant Button.
 * @returns {JSX.Element} Le JSX représentant un bouton avec des styles personnalisés.
 */
export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  disabled,
  variant,
}): JSX.Element => {
  return (
    <button
      type={type}
      className={cn(
        "p-2 rounded-md max-w-fit max-h-fit",
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-500 text-white"
      )}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
