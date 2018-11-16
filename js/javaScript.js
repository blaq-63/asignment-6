/*
    Hylton Carboo
    Homework 6
*/


function calculateTable() {
  // change user input to number so its easy to calculate
  var min_x_start = Number(document.getElementById('min_x').value);
  var max_x_end = Number(document.getElementById('max_x').value);
  var min_y_start = Number(document.getElementById('min_y').value);
  var max_y_end = Number(document.getElementById('max_y').value);

  // vert swap min num and max num if user enters max number 1st
  if (min_y_start > max_y_end) {
    var tempNum = min_y_start;
    min_y_start = max_y_end;
    max_y_end = tempNum;
  }

  // horizantal num swap
  if (min_x_start > max_x_end) {
    var tempNum = min_x_start;
    min_x_start = max_x_end;
    max_x_end = tempNum;
  }

  // matrix for table
  var multiplictionMatrix = {};
  var x_num = max_x_end - min_x_start;
  var y_num = max_y_end - min_y_start;
  var num_Rows = Math.abs(x_num);
  var num_colums = Math.abs(y_num);
  // set ver & hor arrays
  var verticalArray = min_y_start;
  var arrayFixed = min_x_start;

  /**
   We are incrementing the colum array as we go and get the row array numbers to
   produce the answers.
  **/
  // go throught empty array
  var i = 0;
  while (i <= num_colums) {
    var tempararyArray = [];
    // current index
    var j = 0;
    while (j <= num_Rows) {
      var array = verticalArray * arrayFixed;
      tempararyArray[j] = array;
      arrayFixed++;
      j++;
    }
    multiplictionMatrix["row" + i] = tempararyArray;
    // array reseted
    arrayFixed = min_x_start;
    verticalArray++;
    i++;
  }
  multiply_Table(multiplictionMatrix);
  return false;
}



/**
Complete the table based on the user inputs
**/
function multiply_Table(multiplictionMatrix) {
  // change user input to number so its easy to calculate
  var min_x_start = Number(document.getElementById('min_x').value);
  var max_x_end = Number(document.getElementById('max_x').value);
  var min_y_start = Number(document.getElementById('min_y').value);
  var max_y_end = Number(document.getElementById('max_y').value);

  // vert swap min num and max num if user enters max number 1st
  if (min_y_start > max_y_end) {
    var tempNum = min_y_start;
    min_y_start = max_y_end;
    max_y_end = tempNum;
  }

  // horizantal num swap
  if (min_x_start > max_x_end) {
    var tempNum = min_x_start;
    min_x_start = max_x_end;
    max_x_end = tempNum;
  }
  var x_num = max_x_end - min_x_start;
  var y_num = max_y_end - min_y_start;
  var num_Rows = Math.abs(x_num);
  var num_colums = Math.abs(y_num);

  // filling multipplication table while inserting the numbers
  // in the first row and colum
  var complete_table = "";
  complete_table += "<table>";
  complete_table += "<tr><td></td>";
  var row_numbers = min_x_start;

  for (row_numbers; row_numbers <= max_x_end; row_numbers++) {
    complete_table += "<td>" + row_numbers + "</td>";
  }

  complete_table += "</tr>";
  var vertCol = min_y_start;
  var i = 0;
  while (i <= num_colums) {
    complete_table = complete_table + "<tr><td>" + vertCol + "</td>";
    var j = 0;
    while (j <= num_Rows) {
      complete_table = complete_table + "<td>" + multiplictionMatrix["row" + i][j] + "</td>";
      j++;
    }
    vertCol++;
    complete_table = complete_table + "</tdr>";
    i++;
  }

  complete_table += "</table>";
  $("#multiplication_table").html(complete_table);
}
