import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl/FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "select an option", value: "" },
    { key: "Option 1", value: "Option 1" },
    { key: "Option 2", value: "Option 2" },
    { key: "Option 3", value: "Option 3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "rOption 1" },
    { key: "Option 2", value: "rOption 2" },
    { key: "Option 3", value: "rOption 3" },
  ];

  const checkboxOptions = [
    { key: "Option 1", value: "cOption 1" },
    { key: "Option 2", value: "cOption 2" },
    { key: "Option 3", value: "cOption 3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOptions: [],
    birthDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("required"),
    description: Yup.string().required("required"),
    selectOption: Yup.string().required("required"),
    radioOption: Yup.string().required("required"),
    checkboxOptions: Yup.array().required("required"),
    birthDate: Yup.date().required("required").nullable(),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("data:", values);
    onSubmitProps.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="email"
            name="email"
            variant="outlined"
            size="small"
          />
          <FormikControl
            control="textarea"
            label="description"
            name="description"
            variant="outlined"
            size="small"
          />
          <FormikControl
            control="select"
            label="select a Option"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Choose Options"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Select Options"
            name="checkboxOptions"
            options={checkboxOptions}
          />
          <FormikControl
            inputVariant="outlined"
            control="date"
            label="Pick a date"
            name="birthDate"
          />
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
