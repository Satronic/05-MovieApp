import React, { createContext, useState } from "react";
// import ImageColors from 'react-native-image-colors';

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
}

// Definir el tipo de datos
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [prevColors, setPrevColors ] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColors = ( colors: ImageColors ) => {
        setColors(colors)
    }

    const setPrevMainColors = ( colors: ImageColors ) => {
        setPrevColors(colors)
    }

    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColors,
                setPrevMainColors
            }}
        >
            {children}
        </GradientContext.Provider>
    )
}
