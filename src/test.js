function myFn(a, b) {
    const checkA = a % 2 === 0;
    const checkB = b % 2 === 0 ;

    if ( checkA && checkB ) return a * b;
    if ( !checkA && !checkB)  return a + b;
    return !checkA ? a : b;
}

console.log(myFn(29, 21));