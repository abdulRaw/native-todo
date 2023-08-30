import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { MODES } from '../type';
import { TodoContext } from './Main';
import TodoForm from './TodoForm';

const DeleteTodo = ({ route }) => {
    const nav = useNavigation();
    const { deleteTodo } = useContext(TodoContext);
    const { index, data } = route.params;
    const onSave = (d) => {
        deleteTodo({ ...data, ...d }, index);
        nav.goBack();
    };

    return (
        <>
            <Portal>
                <Modal visible={true}>
                    <TodoForm
                        onSave={onSave}
                        modes={MODES.delete}
                        defaultValues={data}
                    />
                </Modal>
            </Portal>
        </>
    );
};

export default DeleteTodo;
