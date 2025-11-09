import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "preact";
import { cn } from "../helpers/cn.ts";

const headingVariants = cva("text-heading font-display", {
  variants: {
    variant: {
      h1: "text-3xl lowercase",
      h2: "text-2xl text-medium",
      h3: "text-xl",
      h4: "text-lg",
      h5: "text-base",
      h6: "text-sm",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

export function Heading({ variant = "h1", ...props }: HeadingProps) {
  const Comp = variant ?? "h1";

  return (
    <Comp
      {...props}
      class={cn(headingVariants({ variant, className: props.class }))}
    />
  );
}
