# Azure Static Web Apps

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) is a preview service which allows you to automatically build and deploy full stack web applications from a GitHub repository to Azure. With Azure Static Web Apps, you're able to develop using the front end framework you like (such as Angular, React or Vue.js), and have an integrated deployment pipeline using GitHub.

To help you get started, I've created a workshop based around this repository. It will walk you through the basic features of Azure Static Web Apps, and bring you one step closer to creating your own full stack web app.

## Scenario

Say you've just started working at a dog rescue, and you want to create a small web app where you display a list of dog names on a page. We'll get started by running everything in the client and deploying our page to Azure. We'll then add server-side code through Azure Functions and test our web app locally. Finally, we'll deploy our changes to Azure. All of this will be completed with just a few tools installed locally, GitHub, and of course Azure.

## Prerequisites

- [Node.js](https://nodejs.org/) to run Azure Functions Core Tools
- [Azure Function Core Tools](https://www.npmjs.com/package/azure-functions-core-tools)
- [Visual Studio Code](https://code.visualstudio.com/&WT.mc_id=academic-41542-chrhar)
  - [Azure Functions extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=academic-41542-chrhar) 
  - [Azure Static Web Apps extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps&WT.mc_id=academic-41542-chrhar)
- [Azure account](https://azure.microsoft.com/free/students/?WT.mc_id=academic-41542-chrhar)
- [Git](https://git-scm.com/)
- [GitHub account](https://github.com/join)

## Outline 

In this workshop, you will: 

1. [Obtain and explore the starter code](workshop/1-starting.md)
1. [Add Azure Functions for server functionality](workshop/2-functions.md)
1. [Create a Static Web App on Azure and deploy our code](workshop/3-create-aswa.md)
1. [Deploy updates to Azure](workshop/4-deploy-updates.md)

👉 Let's [get started](workshop/1-starting.md)!

