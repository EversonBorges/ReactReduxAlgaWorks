import productMocks from '../../mocks/products.json'

export default function (state = productMocks.products, action) {
    switch (action.type) {
        case 'TOGGLE_PRODUCT':
            return state.map(product =>
                product.id === action.payload
                    ? { ...product, checked: !product.checked }
                    : product)
        default:
            return state
    }
}