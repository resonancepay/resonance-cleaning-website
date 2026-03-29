import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
};

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = BaseButtonProps & {
  href: string;
};

function getButtonClassName(variant: ButtonVariant) {
  switch (variant) {
    case "secondary":
      return "btn-secondary";
    case "tertiary":
      return "btn-tertiary";
    case "primary":
    default:
      return "btn-primary";
  }
}

export function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = [getButtonClassName(variant), className].filter(Boolean).join(" ");

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, href, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link href={href} className={getButtonClassName(variant)}>
      {children}
    </Link>
  );
}
