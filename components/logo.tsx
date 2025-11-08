import { asset } from "fresh/runtime";
import { ImgHTMLAttributes } from "preact";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../helpers/cn.ts";

const logoVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type LogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> &
  VariantProps<typeof logoVariants>;

export default function Logo(props: LogoProps) {
  return (
    <img
      src={asset("/logo.svg")}
      alt="Logo"
      {...props}
      class={cn(
        logoVariants({
          class: props.class,
          variant: props.variant,
          size: props.size,
        }),
      )}
    />
  );
}
