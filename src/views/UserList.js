import { ListItem, Avatar } from '@rneui/base'
import React from 'react'
import { View, FlatList } from 'react-native'
import users from '../mock/data'
// import { ListItem } from 'react-native-elements'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id}>
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron onPress={() => props.navigation.navigate("UserForm")}></ListItem.Chevron>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}