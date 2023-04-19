import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
const InputStyle = styled.input`
  border: 1px solid #000;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  :focus {
    border: 2px solid #ccc;
    transition: all 0.2s;
  }
  .box {
    width: 100%;
  }
`;
function Input({ control, name, ...props }) {
  const { field } = useController({
    name,
    control,
  });
  return <InputStyle id={name} {...props} {...field}></InputStyle>;
}

export default Input;
