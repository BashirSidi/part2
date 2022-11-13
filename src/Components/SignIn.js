import React from 'react';
import { StyleSheet, Pressable, View } from "react-native";
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import Text from "./Text";
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto',
  },  
	inputField: {
    height: 40,
    padding: 10,
    color: 'lightblue',
    backgroundColor: 'white',
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 5,
		borderBottomWidth: 1,
  },
  login: {
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    paddingVertical: 10,
  },
  txtLogin: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Mininum 1 characters")
    .max(15, "Maximum 15 characters")
    .required('Please enter your username'),
    password: yup
    .string()
    .required('Please enter your password') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, Uppercase, Lowercase, Number and Special Case Character"
    ),
});

const Signin = ({onSubmit}) =>{
  const initialvalues = {
    username: '',
    password: '',
  }


  return (
    <View style={styles.container}>
    <View>
      <Formik
        initialValues={initialvalues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
          <Form>
            <FormikTextInput 
              style={styles.inputField}
              name="username" 
              placeholder="Username" 
            />
            <FormikTextInput 
              style={styles.inputField}
              secureTextEntry={true}
              name="password" 
              placeholder="Password" 
            />
            
            <Pressable style={styles.login} onPress={onSubmit}>
              <Text style={styles.txtLogin}>LOGIN</Text>
            </Pressable>
          </Form>
      </Formik>
    </View>
  </View>
  )
};

export default Signin;