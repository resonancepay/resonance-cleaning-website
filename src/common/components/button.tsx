import Image from "next/image";
import Link from "next/link";
import { isValidElement } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "lime"
  | "glass"
  | "white"
  | "transparent";
type ButtonIcon = ReactNode | StaticImageData | string;

type BaseButtonProps = {
  children: ReactNode;
  leftIcon?: ButtonIcon;
  rightIcon?: ButtonIcon;
  variant?: ButtonVariant;
};

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = BaseButtonProps & {
  href: string;
  className?: string;
};

function renderIcon(icon: ButtonIcon | undefined) {
  if (!icon) {
    return null;
  }

  if (isValidElement(icon)) {
    return icon;
  }

  if (typeof icon === "string" || (typeof icon === "object" && "src" in icon)) {
    return (
      <Image
        src={icon}
        alt=""
        aria-hidden="true"
        className="h-4 w-4 object-contain"
      />
    );
  }

  return icon;
}

function getButtonClassName(variant: ButtonVariant) {
  const baseClassName =
    "inline-flex items-center justify-center no-underline rounded-[0.75rem] px-[1.35rem] py-[0.625rem] font-inter text-[0.95rem] font-bold tracking-[0.02em] transition duration-[180ms]";

  switch (variant) {
    case "secondary":
      return twMerge(
        baseClassName,
        "!bg-secondary-dark-green !text-on-primary hover:translate-y-[-1px] hover:saturate-[1.08]"
      );
    case "tertiary":
      return twMerge(
        baseClassName,
        "min-w-[10.5rem] !bg-tertiary-fixed !text-on-tertiary-fixed hover:translate-y-[-1px] hover:saturate-[1.16]"
      );
    case "lime":
      return twMerge(
        baseClassName,
        "min-h-10 rounded-[0.5rem] !bg-accent-lime px-6 py-2.5 text-sm leading-5 !text-primary hover:translate-y-[-1px] hover:saturate-[1.08]"
      );
    case "glass":
      return twMerge(
        baseClassName,
        "rounded-[0.5rem] border border-white/20 bg-white/10 px-8 py-4 text-base leading-6 !text-white backdrop-blur-[24px] hover:translate-y-[-1px] hover:bg-white/14"
      );
    case "white":
      return twMerge(
        baseClassName,
        "min-h-10 rounded-[0.5rem] border border-white bg-white px-6 py-2.5 text-sm leading-5 !text-primary hover:translate-y-[-1px] hover:bg-white/95"
      );
    case "transparent":
      return twMerge(
        baseClassName,
        "min-h-10 rounded-[0.5rem] border border-white/30 bg-transparent px-6 py-2.5 text-sm leading-5 !text-white hover:translate-y-[-1px] hover:bg-white/6"
      );
    case "primary":
    default:
      return twMerge(
        baseClassName,
        "!bg-primary !text-on-primary hover:translate-y-[-1px] hover:bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-container)_100%)]"
      );
  }
}

export function Button({
  children,
  className,
  leftIcon,
  rightIcon,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = twMerge(getButtonClassName(variant), className);

  return (
    <button type={type} className={buttonClassName} {...props}>
      {leftIcon ? (
        <span className="mr-2 inline-flex shrink-0 items-center">{renderIcon(leftIcon)}</span>
      ) : null}
      <span>{children}</span>
      {rightIcon ? (
        <span className="ml-2 inline-flex shrink-0 items-center">{renderIcon(rightIcon)}</span>
      ) : null}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  href,
  leftIcon,
  rightIcon,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={twMerge(getButtonClassName(variant), className)}>
      {leftIcon ? (
        <span className="mr-2 inline-flex shrink-0 items-center">{renderIcon(leftIcon)}</span>
      ) : null}
      <span>{children}</span>
      {rightIcon ? (
        <span className="ml-2 inline-flex shrink-0 items-center">{renderIcon(rightIcon)}</span>
      ) : null}
    </Link>
  );
}
