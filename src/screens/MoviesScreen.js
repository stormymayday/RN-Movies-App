import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Image,
    FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import { ROUTES } from "../constants";
import axios from "axios";
import ResultsList from "../components/ResultsList";

const MoviesScreen = ({ navigation }) => {
    // const [selectedValue, setSelectedValue] = useState("now_playing");
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/now_playing?&api_key=${process.env.API_KEY}`
            );
            console.log(response.data.results);

            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <View>
            <ResultsList results={movies} navigation={navigation} />
            <Button
                title="details"
                onPress={() => {
                    navigation.navigate(ROUTES.MOVIE_DETAILS, {
                        movieName: "Some Name",
                        id: "123",
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MoviesScreen;
