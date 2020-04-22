import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

export default function Repositorio({data, onRefresh}){
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text numberOfLines={2} style={styles.description}>{data.description}</Text>

            <View style={styles.stats}>
                <View style={styles.stat}>
                    <Icon name="star" size={16} color="#333"/>
                    <Text style={styles.statCount}>{data.stars}</Text>
                </View>
                <View style={styles.stat}>
                    <Icon name="code-fork" size={16} color="#333"/>
                    <Text style={styles.statCount}>{data.forks}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.refresh} onPress={onRefresh}>
                    <Text style={styles.refreshText}>Atualizar</Text>
                    <Icon  name="refresh" size={18} color="#3813C2"/>
            </TouchableOpacity>
            
        </View>
    )
}

