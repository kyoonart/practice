var nAdd;
var t = function() {
    var n = 99;
    nAdd = function() {
        n++;
    }
    var t2 = function() {
        console.log(n)
    }
    return t2;
};

var a1 = t();
var a2 = t();

nAdd();

a1(); //99
a2(); //100