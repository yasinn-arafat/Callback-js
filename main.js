function one(callback, value) {
  setTimeout(() => {
    console.log("one");
    callback(value + 10);
  }, 1000);
}

function two(callback, value) {
  setTimeout(() => {
    console.log("two");
    callback(value + 10);
  }, 1000);
}

function three(callback, value) {
  setTimeout(() => {
    console.log("three");
    callback(value + 10);
  }, 300);
}

function four(callback, value) {
  setTimeout(() => {
    console.log("four");
    callback(value + 10);
  }, 2000);
}

function five(callback, value) {
  setTimeout(() => {
    console.log("this is five");
    callback(value);
  }, 200);
}

function six(callback, value) {
  setTimeout(() => {
    console.log("six");
    callback(value + 10);
  }, 500);
}

function seven(callback, value) {
  setTimeout(() => {
    console.log("seven");
    callback(value + 10);
  }, 1000);
}
function eigth(callback, value) {
  setTimeout(() => {
    console.log("eigth");
    callback(value + 10);
  }, 500);
}
function nine(finalresult) {
  setTimeout(() => {
    console.log("nine", finalresult);
  }, 400);
}
function ten(callback, value) {
  setTimeout(() => {
    console.log("ten");
    callback(value + 10);
  }, 300);
}
function eleven(callback, value) {
  setTimeout(() => {
    console.log("eleven");
    callback(value + 10);
  }, 700);
}
function twelve(callback, value) {
  setTimeout(() => {
    console.log("twelve");
    callback(value + 10);
  }, 500);
}
function thirteen(callback, value) {
  setTimeout(() => {
    console.log("thirteen");
    callback(value + 10);
  }, 500);
}
function fourteen(callback, value) {
  setTimeout(() => {
    console.log("fourteen");
    callback(value + 10);
  }, 500);
}
function fifteen(callback, value) {
  setTimeout(() => {
    console.log("fifteen");
    callback(value + 10);
  }, 500);
}

// callback hell ------

five(function (r1) {
  four(function (r2) {
    three(function (r3) {
      one(function (r4) {
        two(function (r5) {
          fifteen(function (r6) {
            fourteen(function (r7) {
              thirteen(function (r8) {
                twelve(function (r9) {
                  eleven(function (r10) {
                    ten(function (r11) {
                      six(function (r12) {
                        seven(function (r13) {
                          eigth(function (r14) {
                            nine(r14);
                          }, r13);
                        }, r12);
                      }, r11);
                    }, r10);
                  }, r9);
                }, r8);
              }, r7);
            }, r6);
          }, r5);
        }, r4);
      }, r3);
    }, r2);
  }, r1);
}, 10);
