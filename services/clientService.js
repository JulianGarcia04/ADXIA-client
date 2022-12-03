import axios from 'axios';
import { config } from '~/services/config';

export const createClient = async (data)=> {

  const client = await axios.post(`${config.CLIENT_SERVICE_URI}/client`, {
    name: data.name,
    surname: data.lastname,
    nroDocument: data.nroDocument,
    phoneNumber: data.phoneNumber,
    address: data.address,
    imageURL: data.imageURL,
    business: data.business
  });

  return client;
}

export const updateClient = async (data)=> {

}

export const deleteClient = async ({clientId})=> {


  axios.delete(`${config.CLIENT_SERVICE_URI}`)

}

export const getClients = async ()=> {

}