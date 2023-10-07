export interface Item {
  id: string;
  name: string;
  iconLink: string;
  inspectImageLink: string;
  sellFor: SellFor[];
  usedInTasks: UsedInTasks[];
  receivedFromTasks: ReceivedFromTasks[];
}

export interface SellFor {
  price: string;
  currency: string;
  source: string;
}

export interface UsedInTasks {
  id: string;
  name: string;
}
export interface ReceivedFromTasks {
  id: string;
  name: string;
}
