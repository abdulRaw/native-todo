import React, { createContext, useState, useCallback } from 'react';
import { Todo as TODOs, TodoContextType } from '../type';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './TodoListView';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import Auth from './Login';

export const TodoContext = createContext<TodoContextType | null>(null);

const Stack = createNativeStackNavigator();

const TodoScreen = () => {
    const [todoList, setTodoList] = useState<TODOs[]>([]);

    const saveTodo = useCallback((d: TODOs) => {
        setTodoList((prev) => [...prev, d]);
    }, []);

    const updateTodo = useCallback((d: TODOs, index: number) => {
        setTodoList((array) => {
            return [...array.slice(0, index), d, ...array.slice(index + 1)];
        });
    }, []);

    const deleteTodo = useCallback((d: TODOs, index: number) => {
        setTodoList((array) => {
            return [...array.slice(0, index), ...array.slice(index + 1)];
        });
    }, []);

    return (
        <TodoContext.Provider
            value={{ todos: todoList, saveTodo, updateTodo, deleteTodo }}
        >
            <Stack.Navigator initialRouteName="LOGIN">
                <Stack.Screen name="LOGIN" component={Auth} />
                <Stack.Screen name="Todo List" component={TodoList} />
                <Stack.Screen name="Create" component={AddTodo} />
                <Stack.Screen name="Update" component={UpdateTodo} />
                <Stack.Screen name="Delete" component={DeleteTodo} />
            </Stack.Navigator>
        </TodoContext.Provider>
    );
};

export default TodoScreen;
