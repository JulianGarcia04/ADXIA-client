import axios from 'axios';
import { config } from '~/services/config';

export const createOrder = async()=> {
  
}

export const updateOrder = async (data)=> {
  axios.post(config.ORDER_SERVICE_URI , {
    clientId: "123",
    products: [],
  })
}

export const deleteOrder = async (data)=> {

}

export const getOrders = async (data)=> {

}

export const getOrder = async (data)=> {

}

