import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
import { TextField } from "@material-ui/core";

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      {/* <label htmlFor={name}>{label}</label> */}
      <Field
        label={label}
        component={TextField}
        multiline
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
}

export default Textarea;
