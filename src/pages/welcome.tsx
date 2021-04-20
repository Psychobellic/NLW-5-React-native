import React from "react";
import {
	SafeAreaView,
	Text,
	Image,
	View,
	TouchableOpacity,
	Dimensions,
	StyleSheet,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function Welcome() {
	const nav = useNavigation();
	function handleStart() {
		nav.navigate("UserIdentification");
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.title}>
					Gerencie {"\n"}
					suas plantas de{"\n"}
					forma fácil
				</Text>

				<Image source={wateringImg} style={styles.image} resizeMode="contain" />

				<Text style={styles.subTitle}>
					Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
					sempre que precisar.
				</Text>

				<TouchableOpacity
					style={styles.btn}
					activeOpacity={0.7}
					onPress={handleStart}>
					<Feather name="chevron-right" style={styles.btnIcon} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		alignItems: "center",
	},
	container: {
		flex: 1,
		paddingTop: 15,
	},
	title: {
		fontSize: 28,
		textAlign: "center",
		justifyContent: "space-between",
		color: colors.heading,
		marginTop: 38,
		lineHeight: 34,
		fontFamily: fonts.heading,
	},
	subTitle: {
		fontSize: 18,
		textAlign: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		color: colors.heading,
		fontFamily: fonts.text,
		lineHeight: 24,
	},
	image: {
		height: Dimensions.get("window").width * 0.7,
	},
	btn: {
		backgroundColor: colors.green,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		marginBottom: 22,
		height: 51,
		paddingHorizontal: 18,
	},
	buttonText: {
		color: colors.white,
		fontSize: 24,
		fontWeight: "bold",
	},
	btnIcon: {
		fontSize: 24,
		color: colors.white,
	},
});
