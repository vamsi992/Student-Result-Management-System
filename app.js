
var students = [
    {
        name: 'Tariq',
        rollNumber: 129,
        WT: 98,
        DBMS: 85,
        SE: 89,
        JAVA: 90,
        DSA: 90,

    },
    {
      name: 'ravi',
      rollNumber: 129,
      WT: 98,
      DBMS: 85,
      SE: 89,
      JAVA: 90,
      DSA: 90,

  },
    {
        name: 'Moiz',
        rollNumber: 211,
        WT: 87,
        DBMS: 86,
        SE: 67,
        JAVA: 96,
        DSA: 94,
    },
    {
        name: 'Ashraf',
        rollNumber: 113,
        WT: 98,
        DBMS: 86,
        SE: 67,
        JAVA: 96,
        DSA: 94,
        
    },
]
var main = document.getElementById('main')
var searched = document.getElementById("search")
function add() {
    for (var i = 0; i < students.length; i++) {
        main.innerHTML += `
    <tr>
    <td>${[i + 1]}</td>
    <td>${students[i].name}</td>
    <td>${students[i].rollNumber}</td>
    <td>${students[i].WT}</td>
    <td>${students[i].DBMS}</td>
    <td>${students[i].SE}</td>
    <td>${students[i].JAVA}</td>
    <td>${students[i].DSA}</td>

    <td>${students[i].WT + students[i].DBMS + students[i].SE + students[i].JAVA + students[i].DSA}</td>
    <td>${((students[i].WT + students[i].DBMS + students[i].SE + students[i].JAVA + students[i].DSA ) * 100 / 500).toFixed(2)}%</td>
    <td><input type="button" value="Delete" class="delBtn" onclick="deleteRow(this)"></td>
    <tr>
`};
}
add();
function search() {
    var found = false;
    for (i = 0; i < students.length; i++) {
        if (searched.value.toLowerCase() == students[i].name.toLowerCase()) {
            found = true;
            Swal.fire({
                title: `Student Found!`,
                title: `rollNumber: ${students[i].rollNumber}`,
                text: ` WT: ${students[i].WT} | DBMS: ${students[i].DBMS} | SE: ${students[i].SE} | JAVA ${students[i].JAVA} | DSA ${students[i].DSA} | Total: ${students[i].WT + students[i].DBMS + students[i].SE + students[i].JAVA + student[i].DSA} | Percentage: ${((students[i].WT + students[i].DBMS + students[i].SE + students[i].JAVA + student[i].DSA) * 100 / 500).toFixed(2)}%`,
                icon: 'success',
                confirmButtonText: 'Done'
            });
            searched.value = ""
        }
    }            
    if (found === false) {
        Swal.fire({
            icon: 'error',
            title: 'Error Finding Student',
            text: searched.value + ' Is Not In This List',
        })
        searched.value = ""
    }
}
function newStudent() {
    Swal.fire({
      title: 'Enter Student Details',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Roll Number">' +
        '<input id="swal-input3" class="swal2-input" placeholder="WT">' +
        '<input id="swal-input4" class="swal2-input" placeholder="DBMS">' +
        '<input id="swal-input5" class="swal2-input" placeholder="SE">' +
        '<input id="swal-input6" class="swal2-input" placeholder="JAVA">' +
        '<input id="swal-input7" class="swal2-input" placeholder="DSA">', 
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const rollNumber = document.getElementById('swal-input2').value;
        const WT = parseInt(document.getElementById('swal-input3').value);
        const DBMS = parseInt(document.getElementById('swal-input4').value);
        const SE = parseInt(document.getElementById('swal-input5').value);
        const JAVA = parseInt(document.getElementById('swal-input6').value);
        const DSA = parseInt(document.getElementById('swal-input7').value);

  
        if (isNaN(WT) || isNaN(DBMS) || isNaN(SE) || isNaN(JAVA) || isNaN(DSA)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter numeric values for subjects.',
          });
          return false; 
        }
  
        return [name, rollNumber, WT, DBMS, SE, JAVA, DSA];
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formValues = result.value;
  
        const student = {
          name: formValues[0],
          rollNumber: parseInt(formValues[1]),
          WT: parseInt(formValues[2]),
          DBMS: parseInt(formValues[3]),
          SE: parseInt(formValues[4]),
          JAVA: parseInt(formValues[5]),
          DSA: parseInt(formValues[6]),

        };
  
        students.push(student);
        const index = students.length - 1;
        main.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.WT}</td>
            <td>${student.DBMS}</td>
            <td>${student.SE}</td>
            <td>${student.JAVA}</td>
            <td>${student.DSA}</td>

            <td>${student.WT + student.DBMS + student.SE + student.JAVA + student.DSA}</td>
            <td>${((student.WT + student.DBMS + student.SE + student.JAVA + student.DSA) * 100 / 500).toFixed(2)}%</td>
            <td><input type="button" class="delBtn" value="Delete" onclick="deleteRow(this)"></td>
          </tr>
        `;
      }
    });
  }

  // Delete Function
function deleteRow(r) {
  if (confirm('Are you sure to delete this record ?')) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}}