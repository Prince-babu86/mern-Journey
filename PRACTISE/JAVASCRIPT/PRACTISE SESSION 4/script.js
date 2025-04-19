// // Practise session 4

function delayfnc(fn) {
  setTimeout(fn, 3000);
}

delayfnc(function () {
  console.log("print after 3 seconds ");
});

function counter(counts) {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let ans = counter();
ans();
ans();
ans();

function limiter(fn, limit) {
  let calledtimes = 0;
  return function () {
    if (calledtimes < limit) {
      calledtimes++;
      fn();
      console.log(calledtimes);
    } else {
      console.error("not work after 3 times");
    }
  };
}

let ansd = limiter(function () {
  console.log("only 3 times");
}, 3);

ansd();
ansd();
ansd();
ansd();

// create a map like method

let arr = [1, 2, 3, 4, 5];

function hap(arr, fnc) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(fnc(arr[i]));
  }
  return newarr;
}

let ans2 = hap(arr, function (value) {
  return value + 1;
});
