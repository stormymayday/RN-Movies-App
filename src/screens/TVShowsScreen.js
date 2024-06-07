import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import axios from "axios";
import ResultsList from "../components/ResultsList";

const TVShowsScreen = ({ navigation }) => {
    const [shows, setShows] = useState([]);

    const fetchShows = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/tv/airing_today?&api_key=${process.env.API_KEY}`
            );
            // console.log(response.data.results);

            setShows(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchShows();
    }, []);

    return (
        <View>
            <ResultsList results={shows} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TVShowsScreen;
