//document.getElementById('this_project').style.color = 'blue';
var rowNum = 2

function addTable(){
  //document.getElementById('this_project').style.color = 'yellow';

  var table = document.getElementById('task_table');
  var newRow = table.insertRow(rowNum);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  cell1.innerHTML = document.getElementById('new_member_name').value;
  cell2.innerHTML = document.getElementById('new_task_name').value;
  cell3.innerHTML = "Not Started";
  cell4.innerHTML = document.getElementById('new_due_date').value;
  cell5.innerHTML = "No";

  cell3.style.background = '#f76666ff';
  cell3.style.color = 'black';

  cell5.style.background = '#7ecd59ff';
  cell5.style.color = 'black';

  rowNum++;

  //document.getElementById('this_project').style.color = 'blue';
}