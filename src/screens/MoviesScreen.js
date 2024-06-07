import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
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
            // console.log(response.data.results);

            setMovies(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <View>
            <ResultsList results={movies} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MoviesScreen;
