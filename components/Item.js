import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ItemProduct = ({ item }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 6,
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image source={item.image} />
                </View>

                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>{item.title}</Text>
                    <Text style={{ color: 'red' }}>Shop: {item.shop}</Text>
                </View>
            </View>
            <View style={{ borderWidth: 1, backgroundColor: '#F31111', justifyContent: 'center', width:88,height:38 }}>
                <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center'}}>
                    <Text  style={{ color: 'white'}}>Chat</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemProduct;

const styles = StyleSheet.create({
    container: {
        color: 'white',
    },
});
