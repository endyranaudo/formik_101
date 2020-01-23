import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormPage = () => (
  <div>
    <h1>Formik - Form Page</h1>
    <Formik
      initialValues={{ select: false }}
      /* VALIDATIONS */
      validate={values => {
        const errors = {};
        if (!values.select) {
          errors.select = 'Please select one of the options';
        }
        return errors;
      }}
      /* ON SUBMIT */
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="inputField">
            <label>
              <Field type="radio" name="select" value="yes" />
              YES
            </label>
          </div>
          <div className="inputField">
            <label>
              <Field type="radio" name="select" value="no" />
              NO
            </label>
          </div>
          <ErrorMessage name="select" component="div" className="errorMsg" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormPage;
