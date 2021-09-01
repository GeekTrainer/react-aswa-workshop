// parameters:
//   context - access our function, including logging messages
//             and the response (res)
//   req - the request object (we won't use it here)
module.exports = async function (context, req) {
    // Write a message to the log
    context.log('Returning a list of dogs');
  
    context.res = {
      // status: 200, /* Defaults to 200 */
      // body is the payload of what we return
      body: {
        // add a property called dogs with our array
        dogs: [
          'Sammy',
          'Roscoe',
          'Artichoke'
        ]
      },
      // flag the content type as JSON
      header: {
        'Content-Type': 'application/json'
      }
    };
  }