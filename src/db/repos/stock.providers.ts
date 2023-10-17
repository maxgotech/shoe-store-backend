import { Stock } from "../models";

export const stockProviders = [
    {
      provide: 'STOCK_REPOSITORY',
      useValue: Stock,
    },
  ];