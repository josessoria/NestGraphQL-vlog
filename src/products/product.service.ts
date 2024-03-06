import { Products } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  HttpStatus,
  Injectable,
  HttpException,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProductById(id: number): Promise<Products> {
    return this.prisma.products.findUnique({
      where: {
        id,
      },
    });
  }

  async getAllProducts(): Promise<Products[]> {
    return this.prisma.products.findMany();
  }

  async createProduct(data: Products) {
    return this.prisma.products.create({
      data,
    });
  }

  async updateProduct(id: number, data: Products) {
    const product = await this.getProductById(id);

    if (!product) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }

    try {
      this.prisma.products.update({
        where: {
          id,
        },
        data,
      });
      return 'Producto actualizado correctamente';
    } catch (error) {
      throw new BadRequestException('Error al actualizar el producto');
    }
  }

  async deleteProduct(id: number) {
    try {
      const product = await this.getProductById(id);

      if (!product) {
        throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
      }

      this.prisma.products.delete({
        where: {
          id,
        },
      });

      return 'Producto eliminado correctamente';
    } catch (error) {
      throw new BadRequestException('Error al borrar el producto');
    }
  }
}