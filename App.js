
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

    createTest( 'Test 1', 'Monday', '03-07-2023', 'Physics', 'Chap#1 (Complete), Chap#2 (only equations of motion)');
createTest( 'Test 2', 'Wednesday', '05-07-2023', 'Physics', 'Chap#2 (All Remaning) with Numericals, Chap#3 (Complete)');
createTest( 'Test 3', 'Friday', '07-07-2023', 'Grammar', 'Articles and Do as Directed (All Tenses)');
createTest( 'Test 4', 'Saturday', '08-07-2023', 'Chemistry', 'Chap#2 (All covered topics)');
createTest( 'Test 5', 'Monday', '10-07-2023', 'Mathematics', 'Chap#1 (Exercise#1.6 [Q4 and 5] ), Chap#2 (Exercise#2.6)');
createTest( 'Test 6', 'Wednesday', '12-07-2023', 'Mathematics', 'Chap#2 (remaining), Chap#6 (All covered topics)');
createTest( 'Test 7', 'Friday', '14-07-2023', 'Chemistry', 'Chap#1 (Complete) with Numericals');
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

