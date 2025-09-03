import { ComponentChild } from "preact";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: ComponentChild;
}) => {
  return (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  );
};
