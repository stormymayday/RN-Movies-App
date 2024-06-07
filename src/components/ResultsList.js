import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = (props) => {
    const { results, navigation } = props;

    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={props.results}
                keyExtractor={(result) => {
                    return result.id;
                }}
                renderItem={({ item }) => {
                    return (
                        <ResultsDetail result={item} navigation={navigation} />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
});

export default ResultsList;
