import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import axios from "axios";
import ResultsList from "../components/ResultsList";

const TVShowsScreen = ({ navigation }) => {
    const [value, setSelectedValue] = useState("airing_today");
    const [shows, setShows] = useState([]);

    const fetchShows = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/tv/${value}?&api_key=${process.env.API_KEY}`
            );
            // console.log(response.data.results);

            setShows(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchShows();
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
                <Picker.Item label="Airing Today" value="airing_today" />
                <Picker.Item label="On The Air" value="on_the_air" />
                <Picker.Item label="Popular" value="popular" />
                <Picker.Item label="Top Rated" value="top_rated" />
            </Picker>
            <ResultsList results={shows} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default TVShowsScreen;
