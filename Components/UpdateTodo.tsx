import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { MODES } from '../type';
import { TodoContext } from './Main';
import TodoForm from './TodoForm';

const UpdateTodo = ({ route }) => {
    const nav = useNavigation();
    const { updateTodo } = useContext(TodoContext);
    const { index, data } = route.params;
    console.log(index, data);
    const onSave = (d) => {
        updateTodo({ ...data, ...d }, index);
        nav.goBack();
    };

    return (
        <>
            <Portal>
                <Modal visible={true}>
                    <TodoForm
                        onSave={onSave}
                        modes={MODES.edit}
                        defaultValues={data}
                    />
                </Modal>
            </Portal>
        </>
    );
};

export default UpdateTodo;
