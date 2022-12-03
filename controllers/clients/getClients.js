const getClients = async function (data) {

  const adapter = data.map((e) => {
    return [
      ...{
        id: e.id,
        name: e.name,
        lastname: e.surname,
        nroDoc: e.nroDocument,
        tel: e.phone,
        businessPlace: e.business,
        adress: e.adress,
      },
    ];
  });

  return adapter;
};

export default getClients;
