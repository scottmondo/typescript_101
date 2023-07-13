//Simple Type
type Person = {
  name: string;
  age: number;
}

const person = {
  name: 'John',
  age: 25
}

//Type alias
type Name = string
type Age = number
type OtherPerson = {
  name: Name;
  age: Age;
}
const person1 = {
  name: 'Johnny',
  age: 42
}


//Union Type
type YetAnotherPerson = {
  name: string;
  age: number | string
}

const person2: YetAnotherPerson = {
  name: "Johnathan",
  age: '23'
}

const person3: YetAnotherPerson = {
  name: "Johnathaniel",
  age: 34
}