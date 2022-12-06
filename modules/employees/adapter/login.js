export const adapterRequest = (data) => {
  return {
    nroDocument: data.nroDoc.toString(),
    accessCode: data.password.toString()
  };
};

export const adapterResponse = (data)=>{
  return {
    employeeAuth: data.data.employee,
    token: data.data.employeeToken
  }
}

