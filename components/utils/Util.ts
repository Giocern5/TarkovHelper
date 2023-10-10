import {SellFor} from './ItemModel';

export const getBestVendor = (items: SellFor[]) => {
  if (items.length === 0) {
    return null;
  }

  const bestVendor = items.reduce((max, sellFor) => {
    // Check if the vendor name is "Flea Market" and exclude it
    if (sellFor.vendor.name === 'Flea Market') {
      return max;
    }

    const price = parseFloat(sellFor.priceRUB);
    const currentMaxPrice = parseFloat(max.priceRUB);
    return price > currentMaxPrice ? sellFor : max;
  });

  return bestVendor;
};

export const priceToString = (price: string): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
