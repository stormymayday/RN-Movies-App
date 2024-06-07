import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import axios from "axios";
import ResultsList from "../components/ResultsList";

const MoviesScreen = ({ navigation }) => {
    const [value, setSelectedValue] = useState("now_playing");
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${value}?&api_key=${process.env.API_KEY}`
            );
            // console.log(response.data.results);

            setMovies(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [value]);

    return (
        <View>
            <Picker
                selectedValue={setSelectedValue}
                onValueChange={(itemValue) => {
                    // console.log(value);
                    return setSelectedValue(itemValue);
                }}
            >
                <Picker.Item label="Now Playing" value="now_playing" />
                <Picker.Item label="Popular" value="popular" />
                <Picker.Item label="Top Rated" value="top_rated" />
                <Picker.Item label="Upcoming" value="upcoming" />
            </Picker>
            <ResultsList results={movies} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MoviesScreen;
