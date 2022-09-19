import { GET_PRODUK } from 'actions'

export const getAllProduk = (dataList) => {
    return {
        type: GET_PRODUK,
        dataList
    };
}