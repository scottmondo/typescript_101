interface StringArray {
  [index: number]: string;
}
 
const myStringArray: StringArray = {
  1: 'Hello World',
  2: 'Add some text here'
};

const secondItem = myStringArray[1];

interface NumberDictionary {
  [index: string]: number;
  length: number;
  //name: string;
}

const myNumberDictionary: NumberDictionary = {
  length: 5,
  test: 2,
  blah: 8,
  //testString: "test"
}

interface UnionDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

const myUnionDictionary: UnionDictionary = {
  length: 5,
  name: 'Test',
  test: 2,
  blah: 8,
  testString: 'AnotherTest'
}



  