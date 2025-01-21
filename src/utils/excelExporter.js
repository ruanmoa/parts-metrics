import xlsx from 'xlsx';

/**
 * Exports data to an Excel file.
 *
 * @param {Array<Object>} data - The data to be exported to Excel.
 * @param {string} filePath - The file path where the Excel file will be saved.
 * @throws Will throw an error if there is an issue creating the Excel file.
 */
export function exportToExcel(data, filePath) {
  try {

    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Resultados');

    xlsx.writeFile(workbook, filePath);

    console.log(`Excel file created at: ${filePath}`);
  } catch (error) {
    console.error('Error creating Excel file:', error);
    throw error;
  }
}