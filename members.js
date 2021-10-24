//document.getElementById('this_project').style.color = 'blue';
var rowNum = 2

function addTable(){
  //document.getElementById('this_project').style.color = 'yellow';

  var table = document.getElementById('info_table');
  var newRow = table.insertRow(rowNum);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = document.getElementById('name').value;
  cell2.innerHTML = document.getElementById('phone').value;
  cell3.innerHTML = document.getElementById('email').value;
  cell4.innerHTML = document.getElementById('next_date').value;

  rowNum++;

  //document.getElementById('this_project').style.color = 'blue';
}