import { getAllProdukS } from 'services/produk';
import { getAllProduk, setLoadingGlobal } from 'actions'

export const getAllDataProduk = () => async dispatch => {
    dispatch(setLoadingGlobal(true))
    try {
        const response = await getAllProdukS()
        dispatch(getAllProduk(response.data.payload));
        // message.success('Success Get Data!')
        dispatch(setLoadingGlobal(false))
    } catch (error) {
        dispatch(setLoadingGlobal(false))
        // message.error('Get Data Error!')
    }
};
