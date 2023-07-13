function identity<Type>(arg: Type): Type {
  return arg;
}

interface TestObject {
  id: number;
  name: string;
  email: string;

}


const stringIdentity = identity<string>('Hello World')
const numberIdentity = identity<number>(100)
const testObjectIdentity = identity<TestObject>({id: 1, name: 'scott', email: 'test@test.test'})


interface Shape {
  colour: string;
  surfaceArea: number;
  draw: () => void;
}

interface Square extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number
}

const square: Square = {
  colour: 'blue',
  surfaceArea: 25,
  length: 5,
  width: 5,
  draw: () => {
    console.log('I\'m a square')
  }
}

const circle: Circle = {
  colour: 'green',
  surfaceArea: 113.1,
  radius: 6,
  draw: () => {
    console.log(`I\'m a circle`)
  }
}

function renderShapes<Type extends Shape>(args: Type[]): void {
  args.forEach(arg => {
    arg.draw()
  });
}

