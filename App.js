import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ListItem from './components/ListItem';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="back" size={30} color="#fff" />
                <Text style={{ color: 'white', fontSize: 20 }}>Chat</Text>
                <AntDesign name="shoppingcart" size={30} color="#fff" />
            </View>
            <View style={styles.session}>
                <ListItem></ListItem>
            </View>
           
            <View style={styles.footer}>
                <FontAwesome name="list" size={24} color="#fff" />
                <FontAwesome name="user" size={24} color="#fff" />
                <AntDesign name="back" size={24} color="#fff" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
    },
    session: {
        flex: 1,
    },
    footer: {
        backgroundColor: '#1BA9FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        height: 50,
    },
});
