import React,{useMemo} from 'react'
import { useForm,Controller } from 'react-hook-form'
import { Button, TextInput,View,Text } from 'react-native'
import { MODES, Todo } from '../type'
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().min(5).max(10).required(),
    description: yup.string().min(8).max(100).required(),
});


export type fields = Pick<Todo,"title">&Pick<Todo,"description">

interface TodoFormProps  {
    onSave : (d:fields)=>void
    defaultValues?:fields
    modes?:MODES
    }


const TodoForm = ({onSave,defaultValues,modes}:TodoFormProps)=> {

    const {control,register,handleSubmit,reset, formState: { errors }} = useForm<fields>({
      resolver: yupResolver(schema),
      defaultValues})

      const {popupTitle,buttonName,editableAllFields} = useMemo(()=>{
        let obj = {popupTitle:"Add new Todo",buttonName:"Save",editableAllFields:true};
        if(modes===MODES.edit){
          obj.popupTitle ="Edit Todo item"
        }else if(modes===MODES.delete){
          obj.popupTitle ="Are you sure you want to delete"
          obj.buttonName="delete"
          obj.editableAllFields = false;

        }
        return obj
      },[modes])

     

  return (
    <View>
      <Text>{popupTitle}</Text>
      
         <Controller
        control={control}
        name="title"
        rules={{ required: 'title is required' }}
        render={({ field }) => (
          <TextInput
            
            editable={editableAllFields}
            placeholder="title"
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      {errors.title && <><Text>{errors.title.message}</Text></>}

      <Controller
        control={control}
        name="description"
        rules={{ required: 'description is required' }}
        render={({ field }) => (
          <TextInput
            editable={editableAllFields}
            placeholder="description"
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      {errors.description && <Text>{errors.description.message}</Text>}

      <Button title={buttonName} onPress={handleSubmit(onSave)} />
    </View>
  )
}




export default TodoForm