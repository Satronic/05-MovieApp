import React from 'react';
import { Cast } from '../interfaces/movieCreditsInterface';
import { View, Text, StyleSheet, Image } from 'react-native';

interface CastCardProps {
    actor: Cast;
}

export const CastCard = ({ actor }: CastCardProps) => {

    const urlActorProfile = `https://image.tmdb.org/t/p/w500${actor?.profile_path}`;

    return (
        <View style={styles.cardContainer}>
            <View >
                <Image
                    style={styles.image}
                    source={{
                        uri: urlActorProfile
                    }}

                />
            </View>
            <View style={styles.actorInfoContainer}>
                <Text style={styles.name}>{actor?.name}</Text>
                <Text style={styles.character}>{actor?.character}</Text>
                <Text style={styles.character}>{actor?.job}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
        marginRight: 5,
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 5
    },
    imageContainer: {
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5
    },
    actorInfoContainer: {
        paddingHorizontal: 10
    },
    name: {
        color: 'white',
        fontSize: 16,
        fontWeight: '800'
    },
    character: {
        color: 'white',
        fontSize: 12,
        fontWeight: '400'
    }
})