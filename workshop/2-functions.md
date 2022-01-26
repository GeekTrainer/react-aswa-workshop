# Implementing Azure Functions for server-side code

The primary use case for Azure Static Web Apps is for full stack web applications, where much of the logic is on the client. However, there will always be a need for server-side code. Azure Static Web Apps supports this through [Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-overview), a serverless offering from Azure. Azure Functions automatically scale, eliminating the need to manage VMs and web servers.

## Adding Azure Functions to our project

Let's add server-side code by using Azure Functions. To do this, we'll take advantage of the Azure Functions extension in Visual Studio Code. We will create a new folder to hold our functions, create a new function, and then add the appropriate code. You will be creating an "HTTP trigger" function, which behaves similarly to a REST endpoint, allowing you to make HTTP calls to it.

1. Inside Visual Studio Code, create a new folder named **api** in the root of the project
1. Select the **Azure** icon to access the **FUNCTIONS** extension
1. If prompted, in the **FUNCTIONS** section, select *Sign in to Azure* and complete the authentication process
1. Select **Create New Project...**
1. Select **Browse** to select the folder that will contain your function project
1. Select **api** from the list of folders and then **OK**
1. Select **JavaScript** for the language
1. Select **HTTP Trigger** as the template for your project's first function
1. Enter **dogs** as the name
1. Select **Anonymous** as the authorization level

The project will be created, and a new file at *api/dogs* named *index.js* will be opened. We will replace the contents of this file with our code.

## Implementing our logic

A boilerplate function is created for us. We will now replace it with our own logic. What you will notice is the function has two parameters: `context`, which contains information about the execution of the function, and `req`, which stores information about the request. We will use the `res` property of `context` to generate a JSON payload to return to the user. The code contains comments explaining what each line does.

1. Replace the boilerplate code in **api/dogs/index.js** with code to return the array of dogs.

``` javascript
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
```

### Breaking down our code

We start by logging a message. Then, we set `context.res`, which is the object used to set how to respond to the request:

- `status` for the status message (200 by default)
- `body` for the payload, to which we add a property called `dogs` with our array
- `header` to set any additional information, such as the content type

## Starting the application locally

Let's test our application! We will start the dev server using the Azure Static Web Apps CLI, and see the page.

1. Inside Visual Studio Code, select *Terminal* > *New Terminal* to open an integrated terminal inside the editor
1. Enter the following command to start the local server:

```bash
npm run dev
```

1. After the project starts, navigate to [http://localhost:4280](http://localhost:4280) to see your project.

![Screenshot of starting page](./images/first-launch.png)

> **NOTE:** If your project loads with errors, or not at all, you may not have installed the [Azure Function Core Tools](https://www.npmjs.com/package/azure-functions-core-tools), authenticated with Azure Static Web Apps inside or VS Code, or have a [compatible version of Node.js](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2#node-version). If you run into a problem, double check these items and try again. 

## Your first deployment

You now have the application running locally! Next stop - [the cloud](./3-create-aswa.md)!
