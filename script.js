function insert_Row() {
    const table = document.getElementById("sampleTable");

    // Create a new row
    const newRow = document.createElement("tr");

    // Create two new cells
    const cell1 = document.createElement("td");
    cell1.textContent = "New Cell1";

    const cell2 = document.createElement("td");
    cell2.textContent = "New Cell2";

    // Append cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Insert the new row at the top of the table body (before the first row)
    table.insertBefore(newRow, table.rows[0]);
}
