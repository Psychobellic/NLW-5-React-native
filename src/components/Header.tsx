import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";
import userImg from "../assets/profile.png";
import fonts from "../styles/fonts";

export function Header() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.greeting}>Olá,</Text>
				<Text style={styles.userName}>Matheus</Text>
			</View>
			<Image source={userImg} style={styles.img} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 20,
		backgroundColor: colors.background,
		marginTop: getStatusBarHeight(),
	},
	greeting: {
		fontSize: 32,
		color: colors.heading,
		fontFamily: fonts.text,
	},
	userName: {
		fontSize: 36,
		fontFamily: fonts.heading,
		color: colors.heading,
		lineHeight: 40,
	},
	img: { width: 70, height: 70, borderRadius: 35 },
});
