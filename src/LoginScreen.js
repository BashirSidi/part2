/* eslint-disable no-unused-vars */
import React from 'react';
import { useField, Form, Formik } from 'formik';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import * as yup from 'yup'

import FormikTextInput from './Components/FormikTextInput';
import naxumBanner from '../assets/naxumBanner.png';
import theme from './theme';


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


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto'
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
    backgroundColor: '#307ecc',
    alignItems: 'center',
    paddingVertical: 10,
  },
  txtLogin: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  }
});



const LoginScreen = ({onSubmit}) => {
  return (
    <View>
      <Image
        source={naxumBanner}
        style={{
          width: '70%',
          height: 100,
          resizeMode: 'contain',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 80,
          marginTop: 80,
        }}
      />
      <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView enabled>
        <Formik
        validationSchema={validationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
      >
        {({
          handleSubmit,
          isValid,
        }) => (
            <View>
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
          </View>
        )}
          </Formik>
          </KeyboardAvoidingView>
      </ScrollView>
    </View>
    </View>
  );
};

export default LoginScreen;
