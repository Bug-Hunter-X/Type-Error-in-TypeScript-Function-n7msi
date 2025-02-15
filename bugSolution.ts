function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: any): number {
  if (typeof b === 'number') {
    return a + b;
  } else if (typeof b === 'string' && !isNaN(Number(b))) {
    return a + Number(b);
  } else {
    return a;
  }
}

let result1 = add(1, 2); // Correct usage
let result2 = addSafe(1, '2'); //Safe usage
let result3 = addSafe(1, "hello"); //Safe usage
console.log(result1, result2, result3); 