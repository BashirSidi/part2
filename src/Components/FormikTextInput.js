import React from "react";
import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
	errorText: {
		marginTop: 5,
		color: theme.colors.danger,
	},
	txtError: {
		marginHorizontal: 20,
    marginVertical: 5,
	},
});

const FormikTextInput = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name);
	const showError = meta.touched && meta.error ? true : false;

	return (
		<View>
			<TextInput
				onChangeText={(value) => helpers.setValue(value)}
				onBlur={() => helpers.setTouched(true)}
				value={field.value}
				error={showError}
				{...props}
			/>
			<Text style={styles.txtError}>{showError && <Text style={styles.errorText}>{meta.error}</Text>}</Text>
		</View>
	);
};

export default FormikTextInput;