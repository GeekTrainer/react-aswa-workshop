# Getting started

During our workshop we will focus on deploying a project to [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps?WT.mc_id=academic-41542-chrhar). We will use a starter project with a site already created in React. After exploring the existing code and configuration, we'll deploy the project to Azure. Finally, we will add on server-side code with Azure Functions.

## Obtaining the starter code

This workshop is hosted inside the GitHub repository which contains the starter project you will use. It's configured as a [template](https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository), which means you can create a copy of it on your GitHub account with the click of a single button! Let's start by creating the repository you will use for this workshop, and then clone it locally so you can modify the code.

1. Navigate to the starting repository at [https://github.com/geektrainer/swa-workshop](https://github.com/geektrainer/swa-workshop)
1. In the upper right corner, select **Use this template**
1. Enter **swa-workshop** for the *Repository name* and select **Create repository from template**
1. Open a command or terminal window on your computer
1. Use the following commands to clone the repository and open the code in Visual Studio Code, replacing \<YOUR_GITHUB_HANDLE\> with your GitHub username

```bash
git clone https://github.com/<YOUR_GITHUB_HANDLE>/swa-workshop
cd swa-workshop
npm install
code .
```

## Exploring the code

The project for the workshop was created using the following techs:

- [React](https://reactjs.org/) as the front-end framework
- [Snowpack](https://www.snowpack.dev/) for managing the build process
- [Azure Static Web Apps CLI](https://github.com/Azure/static-web-apps-cli/blob/main/readme.md) to emulate Azure Static Web Apps locally

Let's take a look at a few of the files, and see what they're doing. You will notice the files are heavily commented to explain what they are doing.

### package.json

**package.json** stores the list of packages for the project and our scripts. Under dependencies you will notice *react* and *react-dom* for React, *snowpack* for Snowpack, and *@azure/static-web-apps-cli* for the Azure Static Web Apps CLI.

Under scripts you will notice *dev* and *build*. We will use *dev* when running the server locally. Our *dev* script starts the React application and the Azure Static Web Apps emulator. The *build* script will generate the HTML, CSS and JavaScript files when we deploy the project to Azure Static Web Apps.

> **NOTE:** When deploying to Azure Static Web Apps, the process will automatically run the *build* script from *package.json*

### src and public folders

The *src* folder contains the source code for our project which will be used by the build process, while *public* contains static files like HTML and CSS. This follows a common convention for full-stack applications.

### src/DogList.jsx

`DogList` is the React component responsible for displaying the list of dogs. `useState` is used to create a single stateful object called `dogs`, which will maintain the array of dog names. `useEffect` is a [React hook](https://reactjs.org/docs/hooks-effect.html) which allows us to execute code as part of the load process or when changes are made. In our case, `useEffect` will run on page load, and is responsible for obtaining the list of dogs.

### src/store.js

**store.js** simulates our store, a common pattern when creating full-stack web applications. We have a single function called `loadDogs`, which will load the list of dogs from the server. It also contains code to display error messages should something go wrong.


## Congratulations

You have successfully create a repository on GitHub and cloned it locally. Now we can add [server-side functionality with Azure Functions](2-functions.md).
