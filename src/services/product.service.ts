import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../app/models/product.js';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Astérix, le Gaulois',
      description: 'Magnifique figurine d\'Astérix le Gaulois, peinte à la main.',
      price: 29.99,
      imageUrl: '../assets/products/figurine-asterix.jpg'
    },
    {
      id: 2,
      name: 'Astérix et le Romain',
      description: 'Figurine artisanale d\'Astérix en train de pratiquer son activité favorite : "Le lancer de Romain".',
      price: 69.99,
      imageUrl: '../assets/products/figurine-asterix-paf.jpg'
    },
    {
      id: 3,
      name: 'Obélix et son tonneau',
      description: 'Figurine d\'Obélix et d\'un tonneau dans le dos',
      price: 79.99,
      imageUrl: '../assets/products/figurine-obelixtonneau.jpg'
    },
    {
      id: 4,
      name: 'Le fidéle Idéfix',
      description: 'Idéfix, toujours présent et toujours aussi proche de ses amis',
      price: 26.99,
      imageUrl: '../assets/products/figurine-idefix.jpg'
    },
    {
      id: 5,
      name: 'La scène dans le menhir d\'or',
      description: 'Scène que l\'on connait tous dans le menhir d\'or',
      price: 109.99,
      imageUrl: '../assets/products/figurines-scene.png'
    },
    {
      id: 6,
      name: 'Lot de sept figurines',
      description: 'Un lot de 7 figurines de nos habitans du village',
      price: 49.99,
      imageUrl: '../assets/products/figurines-lotde7.png'
    }
  ];

  private selectedProductSubject = new BehaviorSubject<Product | null>(null);

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  setSelectedProduct(product: Product): void {
    this.selectedProductSubject.next(product);
  }

  getSelectedProduct(): Observable<Product | null> {
    return this.selectedProductSubject.asObservable();
  }
}