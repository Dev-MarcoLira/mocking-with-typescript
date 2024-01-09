import Todo from "../../domain/entities/todo";
import TodoRepository from "../repositories/todoRepository";


export default class TodoService {

    #todoRepository: TodoRepository

    constructor(todoRepository: TodoRepository){
    
        this.#todoRepository = todoRepository
    }

    create(todoItem: any){
        if(!todoItem.isValid()){
            return {
                error: {
                    message: 'invalid data',
                    data: todoItem                    
                }
            }
        }

        const { when } = todoItem
        const today = new Date()
        
        const todo = {
            ...todoItem,
            status: when > today ? 'pending' : 'late'
        }

        return this.#todoRepository.create(todo)
    }

    async list(query?: any){
        return (await this.#todoRepository.list())
                .map(({ text, ...result }) => ({ text: text.toUpperCase(), ...result }))
    }

}