import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './product.service';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}