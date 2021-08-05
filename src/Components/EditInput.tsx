import React from "react";
import { Input } from "../styled-components";

const EditInput = ({ value, onChange, placeholder }: any) => {
  return <Input value={value} onChange={onChange} placeholder={placeholder} />;
};

export default EditInput;
