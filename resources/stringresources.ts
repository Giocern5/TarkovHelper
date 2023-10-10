export interface StringResources {
  search: string;
  defaultSearch: string;
  itemSearch: string;
  bestVendorPrice: (name: string) => string;
  numOfQuests: (numQuests: number) => string;
  estimatedFleePrice: (price: string) => string;
}
