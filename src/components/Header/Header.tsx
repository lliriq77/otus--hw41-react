import React from "react";

export interface HeaderI {
  label: string;
  onButtonClick?: () => void;
}

export const Header = ({ label, onButtonClick }: HeaderI) => {
  return <h2 onClick={onButtonClick}>{label}</h2>;
};
