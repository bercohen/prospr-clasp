# Clasp Commands
```
nvm use node

clasp login
```

# Enable App Scripts API

1. Visit the Google Cloud Console: https://console.cloud.google.com/
2. Select your project from the project dropdown at the top of the page. If you don't have a project yet, you may need to create one.
3. In the left sidebar, click on "APIs & Services" and then click on "Dashboard."
4. Click on the "+ ENABLE APIS AND SERVICES" button.
5. In the search bar, type "Google Apps Script API" and select it from the results.
6. Click the "ENABLE" button to enable the Apps Script API for your project.
7. Wait for the API to be enabled. This may take a few minutes.

Once you've enabled the Apps Script API, you should be able to retry your script, and the 403 error should be resolved. If you recently enabled the API, wait a few minutes for the changes to propagate, and then retry your script.

Make sure that you have the necessary permissions to enable APIs for the project you're working with. If you encounter any issues or have further questions, feel free to ask!

https://script.google.com/home/usersettings

- In clasp dir

```jsx
./bash_update.sh <deployment number>
```
