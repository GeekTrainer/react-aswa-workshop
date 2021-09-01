# Azure Static Web Apps

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) is a preview service which allows you to automatically build and deploy full stack web applications from a GitHub repository to Azure. With Azure Static Web Apps you're able to develop using the front end framework you like (such as Angular, React or Vue.js), and have an integrated deployment pipeline using GitHub.

To help you get started, I've created a workshop based around this repository. It will walk you through the basic features.

## Scenario

We want to display a list of dog names on a page. We will start by running everything in the client and deploy our page to Azure. We'll then add server-side code through Azure functions and test it locally. We'll close by deploying our changes to Azure. All of this will be completed with just a few tools installed locally, GitHub, and of course Azure.

## Tooling

- [Node.js](https://nodejs.org/) to run Azure Functions Core Tools
- [Azure Function Core Tools](https://www.npmjs.com/package/azure-functions-core-tools)
- [Visual Studio Code](https://code.visualstudio.com/&WT.mc_id=academic-41542-chrhar)
  - [Azure Functions for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=academic-41542-chrhar) to add Azure Functions
  - [Azure Static Web Apps for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps&WT.mc_id=academic-41542-chrhar)
- [Azure account](https://azure.microsoft.com/free/students/?WT.mc_id=academic-41542-chrhar)
- [Git](https://git-scm.com/)
- [GitHub account](https://github.com/join)

## Core steps

1. [Obtain and explore the starter code](1-obtain-starter.md)
1. [Add Azure Functions for server functionality](2-functions.md)
1. [Create a Static Web App on Azure and deploy our code](3-create-aswa.md)
1. [Deploy updates to Azure](4-deploy-updates.md)

## Learn more

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps?WT.mc_id=academic-41542-chrhar)
- [Authentication and authorization for Azure Static Web Apps Preview](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?WT.mc_id=academic-41542-chrhar)
- [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api/?WT.mc_id=academic-41542-chrhar)
