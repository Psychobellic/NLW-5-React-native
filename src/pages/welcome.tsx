import React, { useState } from "react";
import { SafeAreaView, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import wateringImg from "../assets/watering.png";
import colors from "../assets/colors";
import { Button } from "../components/Button";

export default function Welcome() {
	const [visible, setVisible] = useState(false);
	function handleVisibility() {
		setVisible(true);
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Gerencie {"\n"}
				suas plantas {"\n"}de forma fácil.
			</Text>
			{visible && <Image source={wateringImg} style={styles.image} />}
			<Text style={styles.subTitle}>
				Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
				sempre que precisar.
			</Text>
			<Button title={"Avançar"} onPress={handleVisibility} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
		justifyContent: "space-between",
		color: colors.heading,
		marginTop: 38,
	},
	subTitle: {
		fontSize: 18,
		textAlign: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		color: colors.heading,
	},

	image: {
		height: 292,
		width: 284,
	},
});
