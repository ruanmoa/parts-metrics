import xlsx from 'xlsx';

/**
 * Reads an Excel file and extracts data from the first sheet.
 *
 * @param {string} filePath - The path to the Excel file.
 * @returns {Array<Object>} An array of objects containing the extracted data.
 * Each object has the following properties:
 * - partNumber: {string} The part number.
 * - partQuantity: {number} The quantity of parts.
 * - descricao: {string} The description.
 * @throws Will throw an error if the file cannot be read or processed.
 */
export function inputReader(filePath) {
  try {
    const workbook = xlsx.readFile(filePath);

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(sheet);

    const inputData = data.map(row => ({
      partNumber: row.PartNumber,
      partQuantity: row.PartQuantity,
      description: row.Description
    }));

    return inputData;

  } catch (error) {
    console.error('Error loading Excel file:', error);
    throw error;
  }
}
