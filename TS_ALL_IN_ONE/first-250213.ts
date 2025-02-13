class A {
 aaa(){}
}

class B {
 bbb(){}
}

function aOrB(param: A|B){
    if(param instanceof A){
        param.aaa();
    }
}

aOrB(new A());
aOrB(new B());