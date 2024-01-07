import {StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";

import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
    return (
        <>
            <StatusBar style={"light"}></StatusBar>
            <CategoriesScreen/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
