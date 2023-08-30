import React from 'react'
import { useForm,Controller } from 'react-hook-form'
import { Button, TextInput,View,Text } from 'react-native'
import { Todo } from '../type'
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().min(5).max(10).required(),
    description: yup.string().min(8).max(100).required(),
});


export type fields = Pick<Todo,"title">&Pick<Todo,"description">

interface TodoFormProps  {
    onSave : (d:fields)=>void
    }


const TodoForm = ({onSave}:TodoFormProps)=> {

    const {control,register,handleSubmit,reset, formState: { errors }} = useForm<fields>({resolver: yupResolver(schema),})

  return (
    <View>
         <Controller
        control={control}
        name="title"
        rules={{ required: 'title is required' }}
        render={({ field }) => (
          <TextInput
           
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
            placeholder="description"
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      {errors.description && <Text>{errors.description.message}</Text>}

      <Button title="Save" onPress={handleSubmit(onSave)} />
    </View>
  )
}

export default TodoForm