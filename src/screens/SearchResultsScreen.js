import { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const SearchResultsScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // const [value, setSelectedValue] = useState("movie");
    const [value, setSelectedValue] = useState("now_playing");

    const searchData = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/${value}?query=${searchTerm}&api_key=${process.env.API_KEY}`
            );
            // console.log(response.data.results);

            setData(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ paddingLeft: 15, marginTop: 20 }}>
                    Search Movie/Tv Show Name
                    <Text style={{ color: "red" }}>*</Text>
                </Text>
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchTermChange={setSearchTerm}
                />
                <Text style={{ paddingLeft: 15 }}>
                    Choose Search Type<Text style={{ color: "red" }}>*</Text>
                </Text>
                <Picker
                    selectedValue={setSelectedValue}
                    onValueChange={(itemValue) => {
                        // console.log(value);
                        return setSelectedValue(itemValue);
                    }}
                >
                    <Picker.Item label="Movie" value="movie" />
                    <Picker.Item label="Multi" value="multi" />
                    <Picker.Item label="TV" value="tv" />
                </Picker>
                <Button title="Search" onPress={searchData} />
                {data ? (
                    <ResultsList results={data} navigation={navigation} />
                ) : null}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default SearchResultsScreen;
