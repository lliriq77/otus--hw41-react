import React from "react";

export interface ButtonI {
  label: string;
  disabled?: boolean;
  onButtonClick?: () => void;
}

export const Button = ({ label, disabled, onButtonClick }: ButtonI) => {
  return (
    <button data-testid="testbutt" onClick={onButtonClick} disabled={disabled}>
      {disabled ? "disabled" : label}
    </button>
  );
};
