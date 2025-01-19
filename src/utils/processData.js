import { exportPrices } from "./extractPrices.js";

export function processData(numberOfEquip, inputData, queryResult) {
  try {
    let data = [];

    for (const product of inputData) {
      const totalQtt = numberOfEquip * product.qttPEqp;

      const partNumberFound = queryResult.find(
        (item) => item.partNumber === product.partNumber
      );

      if(partNumberFound.data.ProductsCount === 0)
        continue;

      const result = exportPrices(
        totalQtt,
        partNumberFound.data.ProductPricings
      );
      console.log(result);
      data.push(result);
    }

    return data;

  } catch (error) {
    console.error("Erro ao processar dados:", error);
    throw error;
  }
}
