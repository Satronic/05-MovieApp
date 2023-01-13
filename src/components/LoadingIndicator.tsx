import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native';

export const LoadingIndicator = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        }}>
            <ActivityIndicator color="green" size={60} />
            <Text style={{
                fontSize: 18
            }}>Cargando...</Text>
        </View>
    )
}
