import { AnchorHTMLAttributes, HTMLAttributes } from "preact";
import { Heading } from "../components/heading.tsx";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../helpers/cn.ts";
import Card from "../components/card.tsx";
import { asset } from "fresh/runtime";

const sideVariants = cva("grid gap-6 origin-top-left vt-name-[side]", {
  variants: {
    variant: {
      normal: "py-10 me-20 z-10 relative",
      shrink: "fixed left-0 top-0 translate-y-38 scale-35 z-0",
    },
  },
  defaultVariants: {
    variant: "shrink",
  },
});

type AnchorProps = {
  as: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;
type AsideProps = {
  as: "aside";
} & HTMLAttributes<HTMLElement>;

type Props = (AnchorProps | AsideProps) & VariantProps<typeof sideVariants>;

export default function Side({ as, ...props }: Props) {
  // deno-lint-ignore no-explicit-any
  const Wrapper = as as any;

  return (
    <Wrapper
      {...props}
      id="side"
      class={cn(sideVariants({ variant: props.variant, class: props.class }))}
    >
      <section class="vt-name-[playing]">
        <Heading variant="h3">
          <span>Playing</span>
        </Heading>
        <Card as="section" variant="playing">
          <img class="h-full w-full" src={asset("/logo.svg")} />
        </Card>
      </section>
      <section>
        <Heading variant="h3">
          <span class="inline-block vt-name-[pins]">Pins</span>
        </Heading>
      </section>
      <section>
        <Heading variant="h3">
          <span class="inline-block vt-name-[history]">History</span>
        </Heading>
      </section>
      <section>
        <Heading variant="h3">
          <span class="inline-block vt-name-[new]">New</span>
        </Heading>
      </section>
    </Wrapper>
  );
}
