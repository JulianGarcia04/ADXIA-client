export default function employeesAdapter(data) {
  const adapter = data.map((e) => {
    return [
      ...{
        id: e.id,
        name: e.name,
        lastname: e.surname,
        email: e.email,
        birthdate: e.birthDate,
        nroDoc: e.nroDocument,
        imageUrl: e.imageURL,
        type: e.type,
        tel: e.phone,
      },
    ];
  });

  console.log(adapter)
  return adapter;
}
