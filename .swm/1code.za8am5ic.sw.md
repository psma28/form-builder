---
title: 1.Code
---
The main languages used for this project are *JavaScript*, *HTML5* and *CSS3*, which means some standards should be applied to make maintenance and future implementations more bearable.

To help developers format the code, the proper tool is ***Prettier*** which can be directly installed in the local machine or in the code editor we want to use. For more detailed info: <https://prettier.io/>.

As a first implementation of this project, the used editor is Visual Studio Code (Check <https://code.visualstudio.com/> to look for info and download) so Prettier can be downloaded as an extension.

<p align="center"><img src="/.swm/images/image-2024-9-21-18-43-42-855.png"></p>

Then to set our editor to format code with Prettier we can simply right click into any of our editor tabs and select *"Format Document With..."*.

<p align="center"><img src="/.swm/images/image-2024-9-21-18-44-25-853.png"></p>

<p align="center"><img src="/.swm/images/image-2024-9-21-18-44-39-228.png"></p>

And then every time we want to format any of our code instances we simply repeat the same steps but clicking *"Format Document"* instead.

> &nbsp;**Note**: Since VS Code does not provide a similar way to format every file inside a folder we can install Format Files from the extensions tab.
>
> <p align="center"><img src="/.swm/images/image-2024-9-21-18-45-51-187.png"></p>

So now we have a way to make our code look more elegant, but what about a code analizer to check some issues with our code. Since React lets developers control the app flow it's more prone to show some issues up, so as a tool to help us detect those issues while coding we'll be using ESLint (More info at <https://eslint.org/>). The tool itself might be installed already if you've been following the documentation, since it's specified as a dependency in the <SwmPath>[package.json](/package.json)</SwmPath> file, but if not just execute the following command:

```
npm i
```

The file that configures ESLint behaviour within our dev enviroment is named <SwmPath>[eslint.config.js](/eslint.config.js)</SwmPath> and if we need to enable or disable some rules from the analizer we can modify it directly or install some plugins.

So, if we are coding and somehow made a mistake or flaw that will have a negative impact in the application when working, our editor (VS Code in this case) will warn us about these.

<p align="center"><img src="/.swm/images/image-2024-9-21-18-49-2-793.png"></p>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBZm9ybS1idWlsZGVyJTNBJTNBcHNtYTI4" repo-name="form-builder"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
