import React, { useContext } from 'react';
import { Button, Modal, Portal } from 'react-native-paper';
import TodoForm from './TodoForm';
import { MODES } from '../type';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from './Main';

const AddTodo = () => {
    const nav = useNavigation();
    const con = useContext(TodoContext);
    const onSave = (d) => {
        const id = d.title + d.description;
        const created = new Date();
        con.saveTodo({ ...d, id, created });
        nav.goBack();
    };
    return (
        <>
            <View>
                <Text>Add Todo</Text>
            </View>
            <Portal>
                <Modal visible={true}>
                    <TodoForm onSave={onSave} modes={MODES.create} />
                </Modal>
            </Portal>
        </>
    );
};

export default AddTodo;
