import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentButtonProps extends RectButtonProps {
	title: string;
	active?: boolean /* interrogação é TypeScript para não-obrigatório */;
}

export function EnvironmentButton({
	title,
	active = false,
	...rest
}: EnvironmentButtonProps) {
	return (
		<RectButton
			style={[styles.container, active && styles.containerActive]}
			{...rest}>
			<Text style={styles.text}>{title}</Text>
		</RectButton>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.background,
		height: 40,
		width: 76,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		marginRight: 3,
	},
	containerActive: {
		fontFamily: fonts.heading,
		color: colors.green,
		backgroundColor: colors.green_light,
	},
	text: {
		color: colors.heading,
		fontFamily: fonts.heading,
	},
	textActive: {
		color: colors.green_dark,
		fontFamily: fonts.heading,
	},
});
