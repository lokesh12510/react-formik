import React from "react";
// import DateView from 'react-datepicker'
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";
// import 'react-datepicker/dist/react-datepicker.css'
import { DateTimePicker } from "@material-ui/pickers";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateTimePicker
              id={name}
              {...field}
              {...rest}
              label={label}
              value={value}
              onChange={(val) => setFieldValue(name, val._d.toISOString())}
            />
          );
        }}
      </Field>
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
}

export default DatePicker;
