// src/resources/strings.ts

import {StringResources} from './stringresources';

const strings: StringResources = {
  search: 'Search...',
  defaultSearch: 'ammo',
  itemSearch: 'Item Search',
  bestVendorPrice: (name: string) => `${name} pays the most for this item`,
  numOfQuests: (numQuests: number) => `Used in ${numQuests} quests`,
};

export default strings;
