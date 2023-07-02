export const generateHttpOption = (token) => (
  {
    headers: {
      ContentType: 'application/json',
      Authorization: 'Bearer' + token
    }
  }
);