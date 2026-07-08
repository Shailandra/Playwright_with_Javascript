const ExcelJS = require('exceljs');


async function writeExcelTest(searchText, replaceText, filePath) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText)
    const cell = worksheet.getCell(output.row, output.column)
    cell.value = replaceText
    await workbook.xlsx.writeFile(filePath);

}

async function readExcel(worksheet, searchText) {

    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value == searchText) {
                // console.log(`row is ${rowNumber} and Column is ${colNumber}`)
                output.row = rowNumber;
                output.column = colNumber;

            }

        });
    });
    return output;
}

writeExcelTest("Mango", 'Banana 2', './tests/common/ExcelDownloadTest.xlsx')






//const url = 'https:\\rahulshettyacademy.com\upload-download-test\index.html'