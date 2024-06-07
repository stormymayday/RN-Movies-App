import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ROUTES } from "../constants";

const ResultsDetail = (props) => {
    const { result, navigation } = props;
    const { original_title, poster_path, popularity, release_date, id } =
        result;
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
                }}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{original_title}</Text>
                <Text>Popularity: {popularity}</Text>
                <Text>Release Date: {release_date}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate(ROUTES.MOVIE_DETAILS, {
                            result,
                            movieName: original_title,
                            id: id,
                        })
                    }
                >
                    <Text style={styles.buttonText}>More details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: 15,
        marginBottom: 15,
        alignItems: "center",
        width: "85%",
    },
    image: {
        width: "30%",
        height: 120,
        borderRadius: 5,
        marginRight: 15,
    },
    detailsContainer: {
        width: "70%",
    },
    name: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    button: {
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default ResultsDetail;
