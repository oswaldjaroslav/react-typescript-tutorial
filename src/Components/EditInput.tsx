import React from "react";
import { Input } from "../styled-components";

const EditInput = ({ value, onChange }: any) => {
  return <Input value={value} onChange={onChange} />;
};

export default EditInput;
