import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';


export const FadeScreen = () => {

    const {opacity, fadeIn, fadeOut} = useFade();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.box,
                opacity: opacity
            }} />

            <View style={styles.containerButtons}>
                <Button
                    title="Fade In"
                    onPress={fadeIn}
                />
                <Button
                    title="Fade Out"
                    onPress={fadeOut}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: 10
    },
    containerButtons:{
        flexDirection: 'row',
        padding: 10
    },
    box: {
        backgroundColor: 'yellow',
        width: '20%',
        height: '20%'
    }
})
