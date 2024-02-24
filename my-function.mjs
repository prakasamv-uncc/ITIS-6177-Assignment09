export const handler = async (event, context) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Prakasam Venkatachalam says '+ event['queryStringParameters']['keyword']),
  };
  return response;
};
