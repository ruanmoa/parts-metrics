export function exportPrices(totalQtt, product) {
  try {

    let priceFound = null;
    let found = false;

    for(const variation of product[0].ProductVariations) {
      if(!found) {
        for(const pricing of variation.StandardPricing) {
          priceFound = pricing;
          console.log(`RUNNING: ${pricing.BreakQuantity}`);
          if (pricing.BreakQuantity >= totalQtt) {
            found = true;
            break;
          }
        }
      }
    }
    console.log(`FOUND: ${priceFound.BreakQuantity} <--> TOTAL NEEDED: ${totalQtt}`);

    const result = {
      partNumber: product[0].ManufacturerProductNumber,
      productURL: product[0].ProductUrl,
      isDiscontinued: product[0].IsDiscontinued,
      isObsolete: product[0].IsObsolete,
      isEndOfLife: product[0].IsEndOfLife,
      qttAvailable: product[0].QuantityAvailable,
      qttToPurchase: priceFound.BreakQuantity,
      unitPrice: priceFound.UnitPrice,
      totalCost: (priceFound.BreakQuantity > totalQtt ) ? priceFound.TotalPrice : totalQtt * priceFound.UnitPrice,
      qttRequired: totalQtt,
      productCost: totalQtt * priceFound.UnitPrice
    }

    return result;
  }
  catch(error) {
    console.error('Erro ao extrair preços:', error);
  }
}