import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, List, Portal, Modal, IconButton } from 'react-native-paper';
import { Todo as TODOs } from '../type';
import TodoForm, { fields } from './TodoForm';
import { v4 as uuids4 } from 'uuid';
import { TodoContext } from './Main';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ item, onDelete, onEdit }) => {
    return (
        <View style={styles.listItem}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity onPress={onEdit}>
                <IconButton icon="pen" size={24} iconColor="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <IconButton icon="delete" size={24} iconColor="red" />
            </TouchableOpacity>
        </View>
    );
};
const TodoList = () => {
    const { todos } = useContext(TodoContext);
    const nav = useNavigation();
    return (
        <View>
            <Button title="Add" onPress={() => nav.navigate('Create')} />
            {todos.map((t, idx) => (
                <ListItem
                    key={t.id}
                    item={t}
                    onEdit={() =>
                        nav.navigate('Update', { data: t, index: idx })
                    }
                    onDelete={() =>
                        nav.navigate('Delete', { data: t, index: idx })
                    }
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
    },
});

export default TodoList;
