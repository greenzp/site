var Man = {
  name: "jack",
  age: 21,
  live: function(){
      console.log("i'm Jack. My age 21. And I'm a life!");
      }
};

var Student = {
    study: function(){
       console.log("i'm Jack. My age 21. And I'm a study!");
    }
};
Student.__proto__ = Object.create(Man);

console.log(Student.live());

function duckType(obj){
  if (hasOwnProperty("study")){
    console.log("I am Student")
  }
  else{
      console.log("I am Man")
  };
};
alert(duckType.call(Man));