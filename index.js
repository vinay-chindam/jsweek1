console.log("how are you???")
let obj1={
    l:5,
    b:3,
    draw: function(){
        console.log("inside obj1 function")
    }
}


function createRectangle(){
    
    return rectangle={
        len:10,
        bre:5,
        draw(){

            console.log("drawing rectangle")
        }
    }
}

function Rectangle(len,bre){
    this.len=len
    this.bre=bre
    this.draw=function(){
        console.log("hello kaiso ho len and bre")
    }
}

let rect1=createRectangle()
console.log(rect1.draw())

let rect2=new Rectangle(20,30)
console.log(rect2.bre)

let obj2={
    name:"abdfds",
    city:"hyd",
    age:14,

}
let obj3={}

for(let key in obj2){
    obj3[key]=obj2[key]
    
}
console.log(obj3)

let dest=Object.assign({},obj3)
console.log(dest)
let dest2={...dest}
console.log(dest2)

// object cloning

