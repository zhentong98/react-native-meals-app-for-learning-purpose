import {StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style={"dark"}></StatusBar>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
