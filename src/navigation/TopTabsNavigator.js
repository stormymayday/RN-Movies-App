import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ROUTES } from "../constants";

import MoviesScreen from "../screens/MoviesScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import TVShowsScreen from "../screens/TVShowsScreen";

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={ROUTES.MOVIES_TAB} component={MoviesScreen} />
            <Tab.Screen
                name={ROUTES.SEARCH_TAB}
                component={SearchResultsScreen}
            />
            <Tab.Screen name={ROUTES.TV_SHOWS_TAB} component={TVShowsScreen} />
        </Tab.Navigator>
    );
};

export default TopTabsNavigator;
