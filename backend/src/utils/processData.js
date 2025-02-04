import { extractPrices } from "./extractPrices.js";

/**
 * Processes the input data and extracts prices based on the number of equipment and query results.
 * 
 * @param {number} numberOfEquip - The number of equipment.
 * @param {Array} inputData - The input data containing product information.
 * @param {Array} queryResult - The query result containing product pricing information.
 * @returns {Array} - The processed data with extracted prices.
 */
export function processData(numberOfEquip, inputData, queryResult) {
  try {
    let data = [];

    for (const product of inputData) {
      const totalQuantity = numberOfEquip * product.partQuantity;

      const partNumberFound = queryResult.find(
        (item) => item.partNumber === product.partNumber
      );

      if (!partNumberFound || partNumberFound.data.ProductsCount === 0)
        continue;

      const result = extractPrices(
        totalQuantity,
        partNumberFound.data.ProductPricings
      );
      data.push(result);
    }

    return data;

  } catch (error) {
    console.error("Erro ao processar dados:", error);
    return [];
  }
}
