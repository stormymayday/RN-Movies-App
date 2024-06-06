import { View, Text, StyleSheet, Button } from "react-native";
import { ROUTES } from "../constants";

const MoviesScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Movies Screen</Text>
            <Button
                title="details"
                onPress={() => {
                    navigation.navigate(ROUTES.MOVIE_DETAILS);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default MoviesScreen;
