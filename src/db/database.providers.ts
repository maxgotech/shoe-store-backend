import sequelize from "./db";

export const databaseProviders = [
    {
      provide: 'SEQUELIZE',
      useFactory: async () => {
        sequelize
      },
    },
  ];