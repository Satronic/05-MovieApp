import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface GradientBackgroundProps {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: GradientBackgroundProps) => {

    const { colors, prevColors, setMainColors, setPrevMainColors } = useContext(GradientContext);

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.secondary, colors.primary, 'black']} // Lee los colores del contexto
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green'
    }
})