import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Op } from 'sequelize';

import { Product, Stock } from "src/db/models";
@Injectable()
export class StockService {
    constructor(@Inject('STOCK_REPOSITORY') private readonly stockRepository: typeof Stock) {}

    async findStock(userid:number,type:string){
      if( userid==null && type==null){
        const response = await this.stockRepository.findAll(
          {
            include:[
              {
                model:Product,as:'product'
              }
            ]
          }
        )
        if(response.length==0){
          throw new NotFoundException('No products found')
        }
        return response
      }

      if(userid==null){
        const response = await this.stockRepository.findAll(
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
        if(response.length==0){
          throw new NotFoundException('No products found')
        }
        return response
      }

      if(type==null){
        const response = await this.stockRepository.findAll(
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
        if(response.length==0){
          throw new NotFoundException('No products found')
        }
        return response
      }

      const response = await this.stockRepository.findAll(
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
      if(response.length==0){
        throw new NotFoundException('No products found')
      }
      return response
    }

}