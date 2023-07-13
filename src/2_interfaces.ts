//Declaration Merging
interface IPerson {
  name: string
}

interface IPerson {
  age: number
}

const person4: IPerson = {
  name: 'John',
  age: 34
}

//Extension
interface PersonNameInterface {
  name: string
 };
 
 interface PersoneAgeInterface {
  age: number
 };

interface AnotherPerson extends PersonNameInterface, PersoneAgeInterface {
}

const person5: AnotherPerson = {
  name: 'Johnny',
  age: 32,
}

