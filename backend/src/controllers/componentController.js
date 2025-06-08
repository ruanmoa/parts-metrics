import { inputReader } from '../utils/inputReader.js';
import { queryApiForComponents } from '../services/digikeyService.js';
import { exportToExcel } from '../utils/excelExporter.js';
import { processData } from '../utils/processData.js';

export async function getComponentDetails(req, res) {

  if (!req.file) {
    return res.status(400).json({ error: 'Arquivo Excel não enviado.' });
  }

  console.log(`Number of Equipments: ${req.body.numberOfEquipments}`);
  
  const filePath = req.file.path;
  const numberOfEquip = req.body.numberOfEquipments;

  try {
    const inputData = inputReader(filePath);
    const queryResult = await queryApiForComponents(inputData);
    const finalResult = processData(numberOfEquip, inputData, queryResult);

    const outputFilePath = `output/DIGIKEY-${Date.now()}.xlsx`;
    exportToExcel(finalResult, outputFilePath);

    res.json({
      message: 'Consulta realizada com sucesso.',
      resultFile: outputFilePath,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
}
