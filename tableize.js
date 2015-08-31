var data = require('./strings');
var people = data.mvp.people;
var companies = data.mvp.companies;
var array1 = data.mvp.people.split("\n");

// consructor
var Table = function(arr){
  this.arr = arr;
  this.rows = arr.length + 1;
};

//modules
Table.prototype.getColumns= function(){
  this.columns = this.arr[0].split(",").length;
  // console.log(this.columns);
  return this.columns;
  // }
};

Table.prototype.getColumnLength = function(){
  this.rowArr = [];
  this.lengthArr = [];
  var n = this.columns;
  var maxLength =0;
  for (var i = 0; i < this.arr.length; i++) {
    this.rowArr.push(this.arr[i].split(","));
  }
  for (var m = 0; m < n; m++) {
    for (var j = 0; j < this.rowArr.length; j++) {
      // console.log(this.rowArr[j][m]);
      if (this.rowArr[j][m].length > maxLength) {
        maxLength = this.rowArr[j][m].length;
      }
    }
    this.lengthArr.push(maxLength);
  }
  console.log(this.lengthArr);
  //   console.log("\n"+
  //  " "+this.rowArr[0][0]+ " \t \t | "+ this.rowArr[0][1]+ " \t| " + this.rowArr[0][2]+ "\n" ,
  //  Array(this.lengthArr[0]).join("-")+ " \t | "+Array(this.lengthArr[1]).join("-")+ "\t| "+Array(this.lengthArr[2]).join("-")+ "\n",
  //  this.rowArr[1][0]+ " \t | "+ this.rowArr[1][1]+ " \t| " + this.rowArr[1][2]+ "\n",
  //  this.rowArr[2][0]+ " \t | "+ this.rowArr[2][1]+ " \t| " + this.rowArr[2][2]+ "\n",
  //  this.rowArr[3][0]+ " \t | "+ this.rowArr[3][1]+ " \t| " + this.rowArr[3][2]+ "\n",
  //  this.rowArr[4][0]+ " \t \t | "+ this.rowArr[4][1]+ " \t| " + this.rowArr[4][2]+ "\n",
  //  this.rowArr[5][0]+ " \t | "+ this.rowArr[5][1]+ " \t| " + this.rowArr[5][2]+ "\n",
  //  this.rowArr[6][0]+ " \t\t | "+ this.rowArr[6][1]+ " \t| " + this.rowArr[6][2]+ "\n",
  //  this.rowArr[7][0]+ " \t | "+ this.rowArr[7][1]+ " \t\t| " + this.rowArr[7][2]+ "\n",
  //  this.rowArr[8][0]+ " \t | "+ this.rowArr[8][1]+ " \t| " + this.rowArr[8][2]+ "\n",
  //  this.rowArr[9][0]+ " \t | "+ this.rowArr[9][1]+ " \t| " + this.rowArr[9][2]+ "\n",
  //  this.rowArr[10][0]+ " \t"+ "\t"+" | "+ this.rowArr[10][1]+ " \t| " + this.rowArr[10][2]+ "\n");
};
Table.prototype.makeTable = function(){
  var finishedTable = [];

  for (var i = 0; i < this.arr.length ; i++) {
    // console.log(this.rowArr[i][0].length);
    if (i === 1) {
      finishedTable.push("----------------------------- \n");
    }else if(this.rowArr[i][0].length <= 6){
      // for (var j = 0; j < this.columns; j++) {
      //   // finishedTable.push(this.rowArr[i][0]+ " \t\t | "+ this.rowArr[i][1]+ " \t| " + this.rowArr[i][2]+ "\n" );
      //
      // }
        finishedTable.push(this.rowArr[i][0]+ " \t\t | "+ this.rowArr[i][1]+ " \t| " + this.rowArr[i][2]+ "\n" );
      // finishedTable.push("\t");
  }else if(this.rowArr[i][1].length < 6){

        finishedTable.push(this.rowArr[i][0]+ " \t | "+ this.rowArr[i][1]+ "\t\t| " + this.rowArr[i][2]+ "\n" );

  }else{
      finishedTable.push(this.rowArr[i][0]+ " \t | "+ this.rowArr[i][1]+ " \t| " + this.rowArr[i][2]+ "\n" );
    }
    // console.log("     \t    "+finishedTable.join("\t    "));
  }
  console.log("\t"+finishedTable.join("\t"));
};

//instances
newTable = new Table(array1);
newTable.getColumns();
newTable.getColumnLength();
newTable.makeTable();


// var array2 = [];
// // array2.split(",");
// for (var i = 0; i < array1.length; i++) {
//   array1[i].split(",");
// console.log(array1[i]);
// }
// }
// console.log(array1);
// console.log(array2);
