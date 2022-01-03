export interface ITodoData {
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoReducer {
    todoData: [] | null,
    loading: boolean
}