import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LottieView from "lottie-react-native";

import loadAnimation from "../assets/load.json";

import fonts from "../styles/fonts";
import colors from "../styles/colors";

export function Load() {
	return (
		<View style={styles.container}>
			<LottieView
				source={loadAnimation}
				autoPlay={true}
				loop
				style={styles.animation}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	animation: {
		backgroundColor: "transparent",
		width: 200,
		height: 200,
	},
});
