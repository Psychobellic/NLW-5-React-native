import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
	const navigation = useNavigation();
	function handleMoveOn() {
		navigation.navigate("PlantSelect");
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.emoji}>{"\u{1F643}"}</Text>
				<Text style={styles.title}>Tudo Pronto!</Text>
				<Text style={styles.text}>
					Agora vamos começar a cuidar das suas plantas com muito carinho
				</Text>
			</View>
			<View style={styles.footer}>
				<Button name="Vamos" onPress={handleMoveOn} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
	},
	content: {
		justifyContent: "space-around",
	},
	emoji: {
		fontSize: 32,
		alignSelf: "center",
	},
	text: {
		fontFamily: fonts.text,
		textAlign: "center",
		fontSize: 17,
		paddingVertical: 30,
		paddingHorizontal: 35,
		color: colors.heading,
	},
	footer: {
		width: "100%",
		paddingHorizontal: 75,
	},
	title: {
		fontSize: 28,
		fontFamily: fonts.heading,
		textAlign: "center",
		color: colors.heading,
		lineHeight: 38,
		marginTop: 35,
	},
});
