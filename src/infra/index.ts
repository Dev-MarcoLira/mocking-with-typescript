import Todo from "../domain/entities/todo"
import TodoRepository from "./repositories/todoRepository"
import TodoService from "./services/todoService"
import loki from 'lokijs'

const db = new loki('todo', {})
const todoRepository = new TodoRepository(db)
const todoService = new TodoService(todoRepository)

await Promise.all(
    [
        new Todo({
            text: 'I must meet Chaves da Silva',
            when: new Date('2021-01-21')
        }),

        new Todo({
            text: 'I must fix my old car',
            when: new Date('2021-02-21')
        }),

        new Todo({
            text: 'I must plan my trip to Europe',
            when: new Date('2021-03-22')
        })
    ]
        .map(todoService.create.bind(todoService))
)

const todoList = await todoService.list()