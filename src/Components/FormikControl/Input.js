import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
import { TextField } from "@material-ui/core";

function Input(props) {
  const { label, name, type = "text", ...rest } = props;
  return (
    <div className="form-control">
      {/* <label htmlFor={name}>{label}</label> */}
      <Field
        component={TextField}
        label={label}
        id={name}
        name={name}
        {...rest}
        type={type}
      />
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
}

export default Input;
