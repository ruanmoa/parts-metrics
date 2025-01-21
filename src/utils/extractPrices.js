export function extractPrices(totalQuantity, product) {
  try {
    if (!Array.isArray(product) || product.length === 0) {
      throw new Error('Product is not a non-empty array');
    }

    let priceFound = null;
    let found = false;

    for(const variation of product[0].ProductVariations) {
      if(!found) {
        for(const pricing of variation.StandardPricing) {
          priceFound = pricing;
          console.log(`RUNNING: ${pricing.BreakQuantity}`);
          if (pricing.BreakQuantity >= totalQuantity) {
            found = true;
            break;
          }
        }
      }
    }
    console.log(`FOUND: ${priceFound.BreakQuantity} <--> TOTAL NEEDED: ${totalQuantity}`);

    const result = {
      partNumber: product[0].ManufacturerProductNumber,
      productURL: product[0].ProductUrl,
      isDiscontinued: product[0].IsDiscontinued,
      isObsolete: product[0].IsObsolete,
      isEndOfLife: product[0].IsEndOfLife,
      qttAvailable: product[0].QuantityAvailable,
      qttToPurchase: priceFound.BreakQuantity,
      unitPrice: priceFound.UnitPrice,
      totalCost: (priceFound.BreakQuantity > totalQuantity ) ? priceFound.TotalPrice : totalQuantity * priceFound.UnitPrice,
      qttRequired: totalQuantity,
      productCost: totalQuantity * priceFound.UnitPrice
    }

    return result;
  }
  catch(error) {
    console.error('Erro ao extrair preços:', error);
  }
}