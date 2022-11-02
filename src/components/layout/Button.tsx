import React from "react";

interface IButton {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  [someProp: string]: any;
}

export const Button = ({
  type = "button",
  children,
  ...props
}: IButton): JSX.Element => (
  <button type={type} {...props}>
    {children}
  </button>
);
