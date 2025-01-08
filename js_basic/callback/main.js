const print = (callback) => {
  const result = callback(2);
  console.log('結果は', result);
};

function fn(number) {
  return number * 2;
}

debugger;
print(fn);
