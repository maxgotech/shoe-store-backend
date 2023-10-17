import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const sequelize = require("./db/db");

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await sequelize.authenticate();
   //await sequelize.sync({ alter: true });
    await app.listen(7001);
  } catch (error) {
    console.log(error);
  }
};

start();
