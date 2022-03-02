import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import ErrorText from "./FormikControl/ErrorText";

const SimpleForm = () => {
  const initialValues = {
    name: "",
    age: "",
    country: "",
    email: "",
    address: "",
    social: {
      facebook: "",
      instagram: "",
    },
    phoneNumbers: ["", ""],
    contacts: [""],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  // const validate = (values) => {
  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(
  //       values.email
  //     )
  //   ) {
  //     errors.email = "Invalid email Format!";
  //   }
  //   if (!values.age) {
  //     errors.age = "Required";
  //   }
  //   if (!values.country) {
  //     errors.country = "Required";
  //   }

  //   return errors;
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Invalid Email format"),
    country: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
    phoneNumbers: Yup.array().of(
      Yup.string().required("home contact field is required!"),
      Yup.string().required("office contact field is required!")
    ),
    contacts: Yup.array().of(Yup.number().required("Invalid Input!")),
    social: Yup.object().shape({
      facebook: Yup.string().required("Required"),
      instagram: Yup.string().required("Required"),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name">
              {(err) => {
                return <div className="error">{err}</div>;
              }}
            </ErrorMessage>
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <Field type="text" name="age" id="age" />
            <ErrorMessage name="age" />
          </div>
          <div className="form-control">
            <label htmlFor="country">Country</label>
            <Field type="text" name="country" id="country" />
            <ErrorMessage name="country" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" id="email" />
            <ErrorMessage name="email" component={ErrorText} />
          </div>
          <div className="form-control">
            <label htmlFor="instagram">Instagram</label>
            <Field type="text" name="social.instagram" id="instagram" />
            <ErrorMessage name="social.instagram" component={ErrorText} />
          </div>
          <div className="form-control">
            <label htmlFor="facebook">Facebook</label>
            <Field type="text" name="social.facebook" id="facebook" />
            <ErrorMessage name="social.facebook" component={ErrorText} />
          </div>
          <div className="form-control">
            <label htmlFor="primaryPh">primaryPh</label>
            <Field type="text" name="phoneNumbers[0]" id="primaryPh" />
            <ErrorMessage name="phoneNumbers[0]" component={ErrorText} />
          </div>
          <div className="form-control">
            <label htmlFor="secPh">secPh</label>
            <Field type="text" name="phoneNumbers[1]" id="secPh" />
            <ErrorMessage name="phoneNumbers[1]" component={ErrorText} />
          </div>

          <div className="form-control">
            <label htmlFor="contacts">Contacts</label>
            <FieldArray name="contacts">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { contacts } = values;
                return (
                  <div>
                    {contacts.map((contact, index) => (
                      <div key={index}>
                        <Field name={`contacts[${index}]`} />
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={() => push("")}>
                      Add
                    </button>
                  </div>
                );
              }}
            </FieldArray>
            <ErrorMessage name="contacts" component={ErrorText} />
          </div>

          <div className="form-control">
            <label htmlFor="address">Address</label>
            <Field name="address" component="textarea">
              {(props) => {
                const { field, meta } = props;
                return (
                  <div>
                    <textarea type={"text"} id="address" {...field} />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                );
              }}
            </Field>
          </div>
          <button
            type="submit"
            disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SimpleForm;
