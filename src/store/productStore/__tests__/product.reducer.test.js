import { productsReducer, CATEGORIES_INITIAL_STATE } from '../product.reducer';

import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailed,
} from '../product.action';

describe('Product Reducer action tests', () => {
  test('fetchProductsStart', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };

    expect(
      productsReducer(CATEGORIES_INITIAL_STATE, fetchProductsStart())
    ).toEqual(expectedState);
  });

  test('fetchProductsSuccess', () => {
    const mockData = [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'test',
        items: [
          { id: 3, name: 'Product 3' },
          { id: 4, name: 'Product 4' },
        ],
      },
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      products: mockData,
    };

    expect(
      productsReducer(CATEGORIES_INITIAL_STATE, fetchProductsSuccess(mockData))
    ).toEqual(expectedState);
  });

  test('fetchProductsFailed', () => {
    const mockError = new Error('Error fetching products');

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };

    expect(
      productsReducer(CATEGORIES_INITIAL_STATE, fetchProductsFailed(mockError))
    ).toEqual(expectedState);
  });
});
