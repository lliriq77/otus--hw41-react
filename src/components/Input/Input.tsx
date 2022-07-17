import React from "react";

export const Input = () => {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    (document.querySelector("h2") as HTMLHeadElement).innerHTML =
      e.currentTarget.value || "Header";
  };
  return (
    <>
      <input type="text" onChange={handleChange}></input>
    </>
  );
};
