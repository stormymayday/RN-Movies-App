import { createStackNavigator } from "@react-navigation/stack";
import TopTabsNavigator from "./TopTabsNavigator";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import { ROUTES, COLORS } from "../constants";

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.white,
                headerBackTitle: "Back",
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen name={ROUTES.HOME} component={TopTabsNavigator} />
            <Stack.Screen
                name={ROUTES.MOVIE_DETAILS}
                component={MovieDetailsScreen}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
