import { View, Text, Image, StyleSheet, Button } from "react-native";
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
            <View>
                <Text style={styles.name}>{original_title}</Text>
                <Text style={styles}>Popularity: {popularity}</Text>
                <Text style={styles}>Release Date: {release_date}</Text>
                <Button
                    title="More details"
                    onPress={() =>
                        navigation.navigate(ROUTES.MOVIE_DETAILS, {
                            result,
                            movieName: original_title,
                            id: id,
                        })
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
    },
});

export default ResultsDetail;
