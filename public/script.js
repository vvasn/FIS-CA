/*
Script for html files
Created by Ville Suoraniemi
 */


function goBack() {
    window.history.back();
}

function addToOrder() {

    //Generates and validates the productId
    var productId = "F" + document.getElementsByName("frame")[0].value + document.getElementsByName("framecolor")[0].value +
                    "K" + document.getElementsByName("keyboard")[0].value + document.getElementsByName("keyboardcolor")[0].value +
                    "S" + document.getElementsByName("screen")[0].value + document.getElementsByName("screencolor")[0].value;

    var check1 = productId.search("Model");
    var check2 = productId.search("Color");

    if (check1 == -1 && check2 == -1) {

        var table = document.getElementById("tbody");
        var amount = document.getElementsByName("amount")[0].value;

        for (var r = 0, n = table.rows.length; r < n; r++) {

            for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {

                var check3 = table.rows[r].cells[c].innerHTML;

                if (check3 == productId){

                    table.rows[r].cells[1].innerHTML = parseInt(table.rows[r].cells[1].innerHTML) + parseInt(amount);
                    document.getElementById("orderForm").reset();
                    return;

                }

            }

        }

        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = productId;
        cell2.innerHTML = amount;
        cell3.innerHTML = '<button class="w3-button w3-circle w3-tiny w3-red" type="button" onclick="deleteProduct(this)"><b>X</b></button>';

        document.getElementById("orderForm").reset();
    }

}

//Function for deleting rows from orderTable
function deleteProduct(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tbody").deleteRow(i-2);
}

//Function to read data from orderTable into xml format and submit it forward.
//Clear orderTable after.