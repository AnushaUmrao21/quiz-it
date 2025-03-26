>Installed expo and the dependencies, then installed androd studio for android emulator.
>Used Chrome to download the home_page icon image.
>Used inline stylng for keeping the project simple and effective.
>I have created the file named App.js, to create and add the code for the desred input and output asked.
>Though it might not work on some devices or web, yet I am trying to saught it out.
> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
