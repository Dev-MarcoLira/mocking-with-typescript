import Todo from "../../domain/entities/todo"

export default class TodoRepository {

    #schedule: Collection<any>
    constructor(db: Loki){

        this.#schedule = db.addCollection('schedule')
    }

    async list(){
        return this.#schedule.find().map(({ meta, $loki, ...result }) => result)
    }

    async create(data: Todo){
        return this.#schedule.insertOne(data)
    }


}