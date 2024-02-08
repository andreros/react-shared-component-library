import React from "react";

export type TComponent2Props = {
  className?: string;
};

export const Component2: React.FC<TComponent2Props> = ({ className }) => {
  return <div className={className}>Component 2</div>;
};
