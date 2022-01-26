# Making changes

At some point, you will need to make updates to your application. Fortunately, the process of deploying any changes to Azure Static Web Apps is integrated into GitHub through the workflow.

When you set up the project, a GitHub Action was created. If any new code is merged into your *main* branch, the action will run and deploy it to your live site. If you make a [pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request), a staging environment will be created, which is perfect for any last minute testing before going live.

We're going to focus on making changes directly to *main* to see how the deployment works. If you wish, you can explore how to manage [staging environments with pull requests](https://docs.microsoft.com/azure/static-web-apps/review-publish-pull-requests?WT.mc_id=academic-41542-chrhar).

## Making a change

Let's modify the page with a new message to demonstrate we've successfully deployed an update to the cloud.

1. Inside Visual Studio Code, open **src/App.jsx**
1. Immediately below the line which reads `TODO: Add message` (and before `</article>`), add the following:

  ```jsx
  {/* TODO: Add message */}
  <div>Hosted on Azure Static Web Apps</div>
  ```

1. Save all files by selecting *File* > *Save all*

## Pushing the change to GitHub and Azure Static Web Apps

With our change made, we can now push it to GitHub. This will start the deployment process, pushing it to Azure Static Web Apps.

1. Open a new integrated terminal in Visual Studio Code by selecting *Terminal* > *New terminal*
1. In the terminal, run the following commands to add and commit your changes locally, and push them to GitHub

  ```bash
  git add .
  git commit -m "Made change"
  git push
  ```

Behind the scenes, the GitHub Action will run and redeploy your website. After a few minutes, you can return to your browser window and refresh it to see your changes.

## Next steps

Congratulations! You have now pushed new updates to your website in the cloud. From here you can explore how to add a [custom domain](https://docs.microsoft.com/azure/static-web-apps/custom-domain?tabs=azure-dns&WT.mc_id=academic-41542-chrhar) to your site, [add a database](https://docs.microsoft.com/azure/static-web-apps/add-mongoose?WT.mc_id=academic-41542-chrhar), and [add security](https://docs.microsoft.com/learn/modules/publish-static-web-app-authentication/?WT.mc_id=academic-41542-chrhar).

For even more information on creating Azure Static Web Apps in VS Code, check out:
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps?WT.mc_id=academic-41542-chrhar)
- [Authentication and authorization for Azure Static Web Apps Preview](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization?WT.mc_id=academic-41542-chrhar)
- [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api/?WT.mc_id=academic-41542-chrhar)
