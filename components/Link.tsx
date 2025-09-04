import { ComponentChild } from "preact";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: ComponentChild;
}) => {
  return (
    <a href={href} className="px-4 py-2 rounded">
      {children}
    </a>
  );
};
