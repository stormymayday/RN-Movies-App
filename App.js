import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./src/navigation/HomeNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
});
