exports.handler = ( event, context, callback ) => {
  let user = null;
  const clientContext = context.clientContext;
  if ( clientContext && clientContext.user ) {
    user = clientContext.user;
  }
  if ( event.httpMethod !== 'POST' ) {
    if ( user !== null ) {

      // Try to call db and get data here

      callback( null, {
        statusCode: 200,
        body: "Hello " + user.user_metadata.full_name
      });
      return;
    }
    callback( null, {
      statusCode: 200,
      body: "Hello, World"
    });
    return;
  }
  if ( ! event.body ) {
    callback( null, {
      statusCode: 200,
      body: "Hello, Moogle with no letters"
    });
    return;
  }
  try {
    callback( null, {
      statusCode: 200,
      body: "Hello" + ( user !== null ? user.user_metadata.full_name : " World")
    });
  } catch (e) {
    callback( null, {
      statusCode: 200,
      body: "Hello, Fake Moogle" + e
    });
  }
}