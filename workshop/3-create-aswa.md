# Create Azure Static Web App

With our code setup we can create our static web app. We'll be configuring a handful of options along the way. What will happen behind the scenes is this creation will create a [GitHub action](https://github.com/features/actions) by placing a YAML file in our repository. It's this action which will deploy our code whenever we make changes to the master or main branch.

## Deploying to Azure Static Web Apps

Let's setup our deployment! [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview?WT.mc_id=academic-41542-chrhar) manages deployment by using a GitHub Action. In a nutshell, every time you push or merge new code into your **main** branch a script will run to redeploy your code. We're going to use Visual Studio Code to set everything up in Azure.

1. Inside Visual Studio Code, select the Azure icon on your toolbar
1. In the **STATIC WEB APPS** section, select *Sign in to Azure* and complete the authentication process
1. Select **Create Static Web App**, which is represented as the **+** icon when you mouse over **STATIC WEB APPS**, which will launch the wizard inside Visual Studio Code to setup your static web app
1. Select your subscription, such as *Azure for Students*
1. Leave *react-aswa-workshop* as the name of the new static web and select *Enter*
1. Select *React* for the build preset

Congratulations! You've now created and deployed your site! The deployment process will take just a couple of minutes. The GitHub Action will be added to your repository on GitHub, and run the deployment process, which includes running the build script from *package.json*.

## Browsing your site

After a couple of minutes have passed, right click your new site in the Static Web Apps extension and select **Browse Site**. You can see your site live!

> **NOTE**: You will notice the URL is set to a random couple of words followed by a hex value. Fortunately, you can [setup your own custom domain](https://docs.microsoft.com/azure/static-web-apps/custom-domain?WT.mc_id=academic-41542-chrhar).

## Making changes

You've now deployed a website to the cloud! But of course no project is ever finished, and there will always be changes. Let's see how we can [make and deploy changes](4-deploy-updates.md).
