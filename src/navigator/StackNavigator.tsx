import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { Movie } from '../interfaces/movieApiInterface';

// Definir los argumentos que recibe cada screen
export type RootStackParams = {
    HomeScreen: undefined;
    DetailsScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
    );
};