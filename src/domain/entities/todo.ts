import { randomUUID } from 'node:crypto'

type todoType = {
    text: string
    when: Date
}

export default class Todo {

    public text: string
    public when: Date
    public status?: string
    public id?: string

    constructor({ text, when } : todoType){

        this.text = text
        this.when = when

        this.status = ''
        this.id = randomUUID()

    }

    public isValid(){
        return !!this.text && !isNaN(this.when.valueOf())
    }

}