import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, HTMLAttributes } from "preact";
import { cn } from "../helpers/cn.ts";

const cardVariants = cva("", {
  variants: {
    variant: {
      playing: "h-60 w-60",
    },
  },
});

type AnchorProps = {
  as: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;
type SectionProps = {
  as: "section";
} & HTMLAttributes<HTMLElement>;
type ButtonProps = {
  as: "button";
} & HTMLAttributes<HTMLButtonElement>;

type CardProps = (AnchorProps | SectionProps | ButtonProps) &
  VariantProps<typeof cardVariants>;

export default function Card(props: CardProps) {
  // deno-lint-ignore no-explicit-any
  const Wrapper = props.as as any;

  return (
    <Wrapper
      {...props}
      class={cn(cardVariants({ variant: props.variant, class: props.class }))}
    />
  );
}
