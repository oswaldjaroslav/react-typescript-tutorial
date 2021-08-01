import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-left: -5px;
  background: transparent;
  outline: none;
  border-width: 0px 0px 2px;
  font-size: 14px;
`;

const EditInput = ({ value, onChange }: any) => {
  return <Input value={value} onChange={onChange} />;
};

export default EditInput;
