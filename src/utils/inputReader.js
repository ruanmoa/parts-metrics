import xlsx from 'xlsx';

export function inputReader(filePath) {
  try {
    const workbook = xlsx.readFile(filePath);

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(sheet);

    const inputData = data.map(row => ({
      partNumber: row.PartNumber,
      qttPEqp: row.EquipmentQtt,
      descricao: row.Description
    }));

    return inputData;

  } catch (error) {
    console.error('Erro ao carregar o arquivo Excel:', error);
    throw error;
  }
}
