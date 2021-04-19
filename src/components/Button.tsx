import React from "react";
import {
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	StyleSheet,
} from "react-native";
import colors from "../assets/colors";

interface ButtonProps extends TouchableOpacityProps {
	title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity style={styles.btn} activeOpacity={0.7} {...rest}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: colors.green,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 16,
		marginBottom: 22,
		height: 56,
		paddingHorizontal: 14,
	},
	buttonText: {
		color: colors.white,
		fontSize: 24,
	},
});
