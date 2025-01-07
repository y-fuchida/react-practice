function fn(number) {
  return number * 2;
}

console.log(fn(10));

const fnArrow = (number) => {
  return number * 2;
};

console.log(fnArrow(10));

const fnArrow2 = (number) => number * 2;

console.log(fnArrow2(10));


const fnArrowObj = (number) => ({ number: number * 2 });

console.log(fnArrowObj(10));
