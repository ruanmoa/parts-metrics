import xlsx from 'xlsx';
import { exportPrices } from './extractPrices.js';

export function exportToExcel(data, filePath) {
  try {

    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Resultados');

    xlsx.writeFile(workbook, filePath);

    console.log(`Arquivo Excel criado em: ${filePath}`);
  } catch (error) {
    console.error('Erro ao criar o arquivo Excel:', error);
    throw error;
  }
}