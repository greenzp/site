function Man(name, age, back) {
  this.name = name
  this.age = age;
  this.back = back;
};

var man = new Man("Josh", "24", "Life");
man.live = function(){
  console.log("i'm " + man.name + ". My age " + man.age + ". And I'm a live!")
};
man.live(); 

function Student(){
};

Student.prototype = man;

var student = new Student();
student.study = function(){
  console.log("i'm " + student.name + ". My age " + student.age + ". And I'm a study!")
};
student.study(); 

function duckType(obj){
  if (obj.hasOwnProperty("study")){
    console.log("I am Student")
  }
  else{
      console.log("I am Man")
  };
};

duckType(student)
duckType(man)