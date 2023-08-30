export interface Todo {
    id:string,
    title:string,
    description:string,
    created:Date
}

export enum MODES{
    create,
    edit,
    delete
}

  export type TodoContextType = {
    todos: Todo[];
    saveTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo,idx:number) => void;
    deleteTodo: (todo: Todo,idx:number) => void;
  };