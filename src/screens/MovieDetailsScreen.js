import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const MovieDetailsScreen = () => {
    const route = useRoute();
    const { params } = route;
    const { result } = params;
    const {
        original_name,
        original_title,
        poster_path,
        overview,
        popularity,
        first_air_date,
        release_date,
    } = result;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {original_name ? original_name : original_title}
                </Text>
                <View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                        }}
                    />
                </View>
                <Text style={styles.text}>{overview}</Text>
                <Text style={styles.text}>
                    Popularity: {popularity} | Release Date:{" "}
                    {first_air_date ? first_air_date : release_date}
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 30,
    },
    image: {
        width: 280,
        height: 280,
        marginBottom: 30,
    },
    text: {
        paddingHorizontal: 15,
        marginBottom: 30,
    },
});

export default MovieDetailsScreen;
