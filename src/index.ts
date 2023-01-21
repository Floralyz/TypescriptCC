
//Basic types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x:any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1,'Brad', true]
//Tuple array
let employee:[number, string] []
employee = [
    [1,'Brad'],
    [2,'Krino'],
    [3,'Mihad'],
]

//Union
let pid: string | number = 22

//Enum
enum Direction2 {
    Up = 'Up',
    Down = 'Down', 
    Left = 'Left', 
    Right = 'Right',
}

//Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John',
}

//Type Assertion

let cid: any = 1
let customerId = <number>cid

