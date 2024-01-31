import React from "react";

export type TComponent1Props = {
  className?: string;
};

export const Component1: React.FC<TComponent1Props> = ({ className }) => {
  return <div className={className}>Component 1</div>;
};
