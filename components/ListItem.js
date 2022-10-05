import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { data } from '../data/listdata';
import ItemProduct from './Item';

const ListItem = () => {
    return (
        <View>
            <FlatList data={data} renderItem={ItemProduct} keyExtractor={(item) => item.id} />
            {/* <ItemProduct/> */}
        </View>
    );
};

export default ListItem;
