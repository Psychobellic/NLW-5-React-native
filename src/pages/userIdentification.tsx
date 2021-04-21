import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function UserIdentification() {
	const [isFocus, setIsFocus] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [name, setName] = useState<string>();

	const nav = useNavigation();

	function handleSubmit() {
		nav.navigate("Confirmation");
	}

	function handleInputBlur() {
		setIsFocus(false);
		setIsFilled(!!name);
	}

	function handleInputFocus() {
		setIsFocus(true);
	}

	function handleInputChange(value: string) {
		setIsFilled(!!value);
		setName(value);
	}
	async function user() {
		return name;
	}
	return (
		<>
			<SafeAreaView style={styles.container}>
				<KeyboardAvoidingView
					style={styles.container}
					behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.content}>
							<View style={styles.form}>
								<View style={styles.header}>
									<Text style={styles.emoji}>
										{isFilled ? "\u{1F643}" : "\u{1F615}"}
									</Text>
									<Text style={styles.title}>
										Como podemos{"\n"} chamar você?
									</Text>
								</View>
								<TextInput
									style={[
										styles.input,
										((isFocus && isFilled) || isFilled) && {
											borderColor: colors.green,
										} /* Se estiver preenchido o nome, manter a borda verde, se não houver preenchimento, retorna ao cinza original */,
									]}
									placeholder="Digite seu nome"
									onBlur={handleInputBlur}
									onFocus={handleInputFocus}
									onChangeText={handleInputChange}
								/>
								<View style={styles.footer}>
									<Button name="Confirmar" onPress={handleSubmit} />
								</View>
							</View>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	content: {
		flex: 1,
		width: "100%",
	},
	form: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 54,
	},
	emoji: { fontSize: 38, marginTop: 50 },
	input: {
		borderBottomWidth: 1,
		borderColor: colors.gray,
		color: colors.heading,
		width: "100%",
		fontSize: 18,
		marginTop: 50,
		textAlign: "center",
		paddingVertical: 10,
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		textAlign: "center",
		color: colors.heading,
		fontFamily: fonts.heading,
		marginTop: 20,
	},
	footer: {
		width: "100%",
		alignSelf: "center",
		padding: 40,
		paddingHorizontal: 10,
	},
	header: { alignItems: "center" },
});
