//callback function

function callback(){
    console.log("currently i am learning node js");
}

var add = function(a,b,callback){
    var result = a+b;
    console.log(result);
    callback();
}
add(3,5,callback)