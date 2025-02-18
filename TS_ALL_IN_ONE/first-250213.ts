//generic


function add<T extends number | string , K extends string >(x: T, y: K){
    return x+y;
}

// add(1,2);
add("1","2");


