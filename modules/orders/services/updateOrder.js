import {config} from './config';

const updateOrder = async (data, fetcher)=> {
    fetcher.post(config.ORDER_SERVICE_URI , {
      clientId: "123",
      products: [],
    })
}

export default updateOrder;