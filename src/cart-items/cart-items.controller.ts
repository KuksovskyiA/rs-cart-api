import {
    Controller,
    Get,
    Delete,
    Put,
    Body,
    Req,
    HttpStatus,
  } from '@nestjs/common';
  
  import { AppRequest } from '../shared';
  import { CartItemsService } from './services';
  
  @Controller('api/profile/:cartId/cart-items')
  export class CartItemsController {
    constructor(
      private CartItemsService: CartItemsService,
    ) {}
  

    @Get()
    async getCartItemsByCartId(@Req() req: AppRequest) {
      const items = await this.CartItemsService.getCartItemsByCartId(req.params.cartId);
  
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: { items },
      };
    }
  
    @Delete()
    async removeCartIemById(@Req() req: AppRequest) {
      const cartItems = await this.CartItemsService.removeCartIemById(req.params.cartId);
  
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: cartItems,
      };
    }
  
    @Put()
    async addItemToCart(@Req() req: AppRequest, @Body() body) {
      await this.CartItemsService.addItemToCart(req.params.cartId, body);
  
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
      };
    }
  }