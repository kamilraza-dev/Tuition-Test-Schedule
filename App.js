
function createTest(testNo, day, date, sub, topics){
    const testList = document.getElementById('test-list');

    const singleTest = `<li>
        <h3>
            ${testNo}
        </h3>
        <ul>
            <li>Day: <span class="blue">${day}</span></li>
            <li>Date: <span class="blue">${date}</span></li>
            <li>Subject: <span class="blue"><b>${sub}</b></span></li>
            <li>Topics: <span class="blue">${topics}</span></li>
        </ul>
    </li>`
    testList.innerHTML += singleTest;
}

function displayClassNine(){

    const downloadBtn = document.getElementById('download-button');
    downloadBtn.style.display = 'block'

    const timeTable = document.getElementById('table-container');
    timeTable.innerHTML = `<table>
    <tr>
        <th>DAY</th>
        <th>DATE</th>
        <th>SUBJECT</th>
        <th>TOPIC</th>
    </tr>
    <tr>
        <td>Monday</td>
        <td>03-07-2023</td>
        <td>Physics</td>
        <td class="last-cell">Chap#1 (Complete), Chap#2 (only equations of motion)</td>
    </tr>
    <tr>
        <td>Wednesday</td>
        <td>05-07-2023</td>
        <td>Physics</td>
        <td class="last-cell">Chap#2 (All Remaning) with Numericals, Chap#3 (Complete)</td>
    </tr>
    <tr>
        <td>Friday</td>
        <td>07-07-2023</td>
        <td>Grammar</td>
        <td class="last-cell">Articles and Do as Directed (All Tenses)</td>
    </tr>
    <tr>
        <td>Saturday</td>
        <td>08-07-2023</td>
        <td>Chemistry</td>
        <td class="last-cell">Chap#2 (All covered topics)</td>
    </tr>
    <tr>
        <td>Monday</td>
        <td>10-07-2023</td>
        <td>Mathematics</td>
        <td class="last-cell">Chap#1 (Exercise#1.6 [Q4 and 5] ), Chap#2 (Exercise#2.6)</td>
    </tr>
    <tr>
        <td>Wednesday</td>
        <td>12-07-2023</td>
        <td>Mathematics</td>
        <td class="last-cell">Chap#2 (remaining), Chap#6 (All covered topics)</td>
    </tr>
    <tr>
        <td>Friday</td>
        <td>14-07-2023</td>
        <td>Chemistry</td>
        <td class="last-cell">Chap#1 (Complete) with Numericals</td>
    </tr>
</table>`
}

function displayClassTen(){
    const downloadBtn = document.getElementById('download-button');
    downloadBtn.style.display = 'none'
    
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML =  `<h4 style="text-align: center; color: red;">"Your Time Table not Uploaded. It will upload soon"</h4><a href="https://wa.me/923196995115">To Contact Admin Click Here</a>`;

}

function downloadTable() {
    const table = document.querySelector('.table-container');
    const opt = {
        margin: 1,
        filename: 'table.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(table).save();
}

