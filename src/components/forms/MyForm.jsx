import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import ButtonHovers from '../Buttons/ButtonHover';

let schema = yup.object().shape({
  login: yup.string().required(),
    password: yup.string().min(6).max(10).required()
});

const initialValue = {
    login: '',
    password: ''
}

export const MyForm = () => {
    const hendleSubmit = (value, {resetForm}) => {
        // console.log(value);
        resetForm()
    }

    return (
      <Formik
        initialValues={initialValue}
        onSubmit={hendleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor="login">
            Login
            <Field type="text" name="login" />
            <ErrorMessage name="login" />
          </label>
          <label htmlFor="password">
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </label>
          <ButtonHovers type="submit" title="Submit"></ButtonHovers>
        </Form>
      </Formik>
    );
}