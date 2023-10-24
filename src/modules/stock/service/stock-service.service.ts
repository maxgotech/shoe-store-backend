import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';

import { AddedProduct, Product, Stock } from "src/db/models";
@Injectable()
export class StockService {
    constructor(@Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock) {}

    async findStock(userid:number,type:string){
      if( userid==null && type==null){
        return this.stockRepository.findAll(
          {
            include:[
              {
                model:Product,as:'product'
              }
            ]
          }
        )
      }

      if(userid==null){
        return this.stockRepository.findAll(
          {
            where:{
              '$product.type$':{[Op.eq]:type}
            },
            include:[
              {
                model:Product,as:'product'
              }
            ]
          }
        )
      }

      if(type==null){
        return this.stockRepository.findAll(
          {
            where:{
              userId:userid
            },
            include:[
              {
                model:Product,as:'product'
              }
            ]
          }
        )
      }

      return this.stockRepository.findAll(
        {
          where:{
            userId:userid,
            '$product.type$':{[Op.eq]:type}
          },
          include:[
            {
              model:Product,as:'product'
            }
          ]
        }
      )
    }

}