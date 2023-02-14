import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/product.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
