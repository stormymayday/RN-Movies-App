import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="i.e. James Bond, SCI"
                placeholderTextColor="#CCCCCC"
                style={styles.inputStyle}
                value={searchTerm}
                onChangeText={onSearchTermChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "gray",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 10,
        flexDirection: "row",
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
        color: "#CCCCCC",
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
});

export default SearchBar;
