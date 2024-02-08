import React from "react";
import clsx from "clsx";

export type TComponent1Props = {
  className?: string;
};

export const Component1: React.FC<TComponent1Props> = ({ className }) => {
  const rootClasses = clsx("component-1", className);

  return <div className={rootClasses}>Component 1</div>;
};
