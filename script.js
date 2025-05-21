function insert_Row() {
    //Write your code here
	const table = document.getElementById("sampleTable")
	const newRow = document.createElement("tr");
	 newRow.innerHTML = `
        <tr><td>New Cell1</td> 
		<td>New Cell2</td></tr>
      `;
      table.insertBefore(newRow, table.firstChild);
  
  
}
