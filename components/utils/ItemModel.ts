export interface Item {
  id: string;
  name: string;
  inspectImageLink: string;
  lastLowPrice: number;
  description: string;
  sellFor: SellFor[];
  usedInTasks: UsedInTasks[];
  receivedFromTasks: ReceivedFromTasks[];
}

export interface SellFor {
  priceRUB: string;
  vendor: Vendor;
}

export interface UsedInTasks {
  id: string;
  name: string;
}
export interface ReceivedFromTasks {
  id: string;
  name: string;
}

export interface Vendor {
  name: string;
  normalizedName: String;
}
