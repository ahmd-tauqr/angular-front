import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-catelog',
  templateUrl: './product-catelog.component.html',
  styleUrls: ['./product-catelog.component.scss'],
})
export class ProductCatelogComponent implements OnInit {
  products = [
    {
      id: 1,
      title: 'Blue Tie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      price: '$40',
      category: ['office', 'extras'],
      colors: ['#441886', '#ca4356'],
      sizes: ['xl', 'l', 'm', 's'],
    },
    {
      id: 2,
      title: 'Purple Belt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      price: '$40',
      category: ['office', 'extras'],
      colors: ['#44a686', '#ca0056'],
      sizes: ['xl', 'l', 'm', 's'],
    },
    {
      id: 3,
      title: 'Blue Tie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      price: '$40',
      category: ['office', 'extras'],
      colors: ['#4bb886', '#ca4cc6'],
      sizes: ['xl', 'l', 'm', 's'],
    },
    {
      id: 4,
      title: 'Blue Tie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      price: '$40',
      category: ['office', 'extras'],
      colors: ['#441446', '#ca0f56'],
      sizes: ['xl', 'l', 'm', 's'],
    },
    {
      id: 5,
      title: 'Blue Tie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      price: '$40',
      category: ['office', 'extras'],
      colors: ['#442b86', '#ca3456'],
      sizes: ['xl', 'l', 'm', 's'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  buyNow(productId: number) {
    console.log('you just purchased product with id ' + productId);
  }
  addToCart(productId: number) {
    const count = 1;
    console.log(count + ' product with id ' + productId + ' is added to cart');
  }
}
