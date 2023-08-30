import React,{useState} from 'react'
import { View,Text, Button, } from 'react-native'
import { Divider,List,Portal,Modal } from 'react-native-paper';
import { Todo as TODOs } from '../type';
import TodoForm, { fields } from './TodoForm';
import { v4 as uuids4 } from 'uuid';
const Todo = () => {
    const [list,setList] = useState<TODOs[]>([]);
    const [isAddTodo,setIsAddToDo] = useState<boolean>(false);
    const closeModal = ()=>{
        setIsAddToDo(false)
    }
    const containerStyle = {backgroundColor: 'white', padding: 20,margin:20};

    const onSave = (d:fields)=>{
        console.log(d)
        closeModal()
        setList((prev)=>{
            return [...prev,{id:prev.length+1+"hh",created:new Date(),...d}]
        })
    }

  return (
    <View>
        <Button title='Add Notes' onPress={()=>setIsAddToDo(true)}/>
        <Portal>
        <Modal visible={isAddTodo} onDismiss={closeModal} contentContainerStyle={containerStyle}>
            <TodoForm onSave={onSave}/>
        </Modal>
      </Portal>
        {
            list.map(t=>  <List.Item
                key={t.id}
                title= {t.title}
                description={t.description}
                left={props => <List.Icon {...props} icon="calendar" />}
              />)
        }
  </View>
  )
}

export default Todo