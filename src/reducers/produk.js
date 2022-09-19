import { GET_PRODUK } from 'actions'

export default (
    state = {
        dataList: [],
    },
    action
) => {
    switch (action.type) {
        case GET_PRODUK:
            return {
                ...state,
                dataList: action.dataList
            };
        default:
            return state;
    }
};