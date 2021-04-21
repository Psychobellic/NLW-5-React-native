import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from "react-native";

import { Header } from "../components/Header";
import { EnvironmentButton } from "../components/EnvironmentButton";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Load } from "../components/Load";

import { api } from "../services/api";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentProps {
	key: string;
	title: string;
}

interface PlantProps {
	id: string;
	name: string;
	about: string;
	water_tips: string;
	photo: string;
	environments: [string];
	frequency: {
		times: number;
		repeat_every: string;
	};
}

export function PlantSelect() {
	const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
	const [plant, setPlant] = useState<PlantProps[]>([]);
	const [filteredPlant, setFilteredPlant] = useState<PlantProps[]>(
		[]
	); /* Filtros em estado auxiliar, alivia requisições à api */
	const [envSelected, setEnvSelected] = useState("all");
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [loadingMore, setLoadingMore] = useState(false);
	const [loadedAll, setLoadedAll] = useState(false);

	function handleEnvSelected(environment: string) {
		setEnvSelected(environment);
		if (environment === "all") return setFilteredPlant(plant);
		const filtered = plant.filter((plant) =>
			plant.environments.includes(environment)
		);
		setFilteredPlant(filtered);
	}

	function handleFetchMore(distance: number) {
		if (distance < 1) return;
		setLoadingMore(true);
		setPage((oldValue) => oldValue + 1);
		fetchPlants();
	}

	async function fetchPlants() {
		const { data } = await api.get(
			`plants?_sort=name&_order=asc&_page=${page}&_limit=8`
		);
		if (!data) return setLoading(true);
		if (page > 1) {
			setPlant((oldValue) => [...oldValue, ...data]);
			setFilteredPlant((oldValue) => [...oldValue, ...data]);
		} else {
			setPlant(data);
			setFilteredPlant(data);
		}

		setLoading(false);
		setLoadingMore(false);
	}

	async function fetchEnvironment() {
		const { data } = await api.get(
			"plants_environments?_sort=title&_order=asc"
		);
		setEnvironments([
			{
				key: "all",
				title: "Todos",
			},
			...data,
		]);
	}

	useEffect(() => {
		fetchEnvironment();
	}, []);

	useEffect(() => {
		fetchPlants();
	}, []);

	if (loading) return <Load />;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Header />
				<Text style={styles.title}> Em qual ambiente </Text>
				<Text style={styles.subtitle}>
					você gostaria de colocar sua planta?
				</Text>
			</View>
			<View>
				<FlatList
					data={environments}
					renderItem={({ item }) => (
						<EnvironmentButton
							title={item.title}
							active={item.key === envSelected}
							onPress={() => handleEnvSelected(item.key)}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.environmentList}
				/>
			</View>
			<View style={styles.plants}>
				<FlatList
					data={filteredPlant}
					renderItem={({ item }) => <PlantCardPrimary data={item} />}
					showsVerticalScrollIndicator={false}
					numColumns={2}
					onEndReachedThreshold={0.1}
					onEndReached={({ distanceFromEnd }) =>
						handleFetchMore(distanceFromEnd)
					}
					ListFooterComponent={
						loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
					}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		marginHorizontal: 5,
	},
	title: {
		fontSize: 17,
		color: colors.heading,
		fontFamily: fonts.heading,
		lineHeight: 20,
		marginTop: 15,
	},
	subtitle: {
		fontFamily: fonts.text,
		fontSize: 17,
		lineHeight: 20,
		color: colors.heading,
	},
	header: {
		paddingHorizontal: 20,
	},
	environmentList: {
		height: 40,
		justifyContent: "center",
		paddingBottom: 5,
		marginVertical: 32,
		paddingHorizontal: 15,
	},
	plants: {
		flex: 1,
		justifyContent: "center",
	},
});
