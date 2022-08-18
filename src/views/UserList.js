import React, { useContext } from 'react'
import { ListItem, Avatar, Icon } from '@rneui/base'
import { View, FlatList, Alert } from 'react-native'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider>
                <ListItem.Chevron onPress={() => props.navigation.navigate("UserForm", user)} />
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon
                    name='edit'
                    color='#00aced'
                    onPress={() => props.navigation.navigate("UserForm", user)}
                />
                <Icon
                    name='delete'
                    color='red'
                    onPress={
                        () => Alert.alert('Excluir', 'deseja realmente excluir esse usuario', [
                            {
                                text: 'Sim',
                                onPress() {
                                   dispatch({
                                    type: 'deleteUser',
                                    payload: user,
                                   })
                                }
                            },
                            {
                                text: 'Não'
                            }
                        ])}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

// função delete não esta sendo usada porque não consigo ter acesso ao id
    // function confirmDelete(users) {
    //     Alert.alert('Excluir', 'deseja realmente excluir esse usuario',[
    //         {
    //             text: 'Sim',
    //             onPress(){
    //                 console.warn(users.id)
    //             }
    //         },
    //         {
    //             text: 'Não'
    //         }
    //     ])
    // }