import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const MovieDetailsScreen = () => {
    const route = useRoute();
    return (
        <View>
            <Text>Movie Details Screen</Text>
            <Text>Params: {route.params.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default MovieDetailsScreen;
