# TwilioQuest Extension Template
Interested in creating an extension for TwilioQuest? You've come to the right place! Using this repository as a template, you can create new levels, objectives, characters, and items in TwilioQuest.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting Started](#getting-started)
  - [Enabling extensions](#enabling-extensions)
- [Installing an Extension](#installing-an-extension)
  - [Installing an extension from git (GitHub)](#installing-an-extension-from-git-github)
  - [Installing a pre-packaged extension](#installing-a-pre-packaged-extension)
  - [Using an extension](#using-an-extension)
- [Creating an Extension](#creating-an-extension)
  - [Working on your extension locally](#working-on-your-extension-locally)
  - [Extension development topics](#extension-development-topics)
- [Extension Development Help](#extension-development-help)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting Started
**TwilioQuest Extensions** enable developers to create new content for TwilioQuest, and allow players to experience community-created content. If you are interested in either using or creating TwilioQuest extensions, the first step is to enable extensions in the TQ game client.

**NOTE:** TwilioQuest Extensions are only available in the **3.2** version of the game. As of spring 2021, the current stable version of the game is 3.1.x. You may need to use the launcher to select the "3.2 Preview" release channel to use a version of the game that supports extensions.

![Launcher for 3.2](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Flauncher-preview.png?alt=media&token=6aedd709-9ba2-4ab3-b935-2537a8f5ff2f)

### Enabling extensions

In the `Settings` UI (press the `3` key in-game), navigate to the `Extensions` submenu. Click the button there labeled `Enable Extensions`.

![Enable Extensions in the Settings UI](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fenable-extensions.png?alt=media&token=8cc8e5ea-ee56-4a39-ae92-91add950b040)

**IMPORTANT NOTE:** As indicated in the UI, make sure to only use extensions from trusted sources. Like "mods" from other games you may have played before (Minecraft, Skyrim, etc.), a TwilioQuest extension will be able to execute code on your computer. Exercise caution when installing an extension, just as you would using any third-party code on your computer.

Once you have enabled extensions, specify a folder on your computer where you will download and manage extensions. This should be the [full path name](https://en.wikipedia.org/wiki/Fully_qualified_name#Filenames_and_paths) to an empty folder on your computer (you should create such a folder first, if you haven't already).

![Specify a folder path for extensions](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fext-folder.png?alt=media&token=4936dd5c-d84c-459e-9179-4c545a64b297)

Once you have enabled extensions, you should see a listing of automatically-installed "base extensions", and a list of any extensions you have installed yourself. Now you are ready to use (or create) an extension!

## Installing an Extension
To install an extension, you will need to copy/clone/download an extension's contents to the extension folder you created in the [getting started section](#getting-started). An "extension" is just a folder that contains new assets and content for TwilioQuest. The structure of your extension folder might look something like this:

- {your root extension folder}
  - some-extension
    - ... a bunch of game assets/folders ...
    - `package.json`
  - another-extension
    - ...a bunch of game assets/folders ...
    - `package.json`
  - .bundled
    - ...this is a hidden directory, shouldn't have to mess with it...

"Installing" an extension is really just creating one of these folders!

### Installing an extension from git (GitHub)
A common way you might encounter an extension is in an open source code repository on GitHub. In fact, many of the built-in TwilioQuest content [is available this way](https://github.com/TwilioQuest/twilioquest-base). In this case, you might consider [cloning the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) into your extensions folder:

```bash
cd /path/to/extensions/folder
git clone https://github.com/TwilioQuest/twilioquest-base.git
```

Most extensions probably also require some code/dependencies from [npm](https://www.npmjs.com/). Installing these dependencies will require that you also install [Node.js and npm](https://nodejs.org/en/download/). After installing Node and npm, you should be able to install the extension's dependencies from the command line.

```bash
cd /path/to/extensions/folder
cd folder-name-of-extension
npm install
```

### Installing a pre-packaged extension
Some developers may package up their extension ahead of time in a zip file that they may make available for direct download (it will already have their dependencies zipped up inside). In that case, simply download and decompress the extension `.zip` file in the extensions folder. The resulting directory should have a file named `package.json` inside it.

### Using an extension
After installing through one of the methods above, your extension should immediately be ready to use! While it shouldn't be strictly necessary, some extensions may require that you restart the TwilioQuest game client before they start working properly.

## Creating an Extension
To create your own content for TwilioQuest, you will need to create an extension project. For that purpose, we recommend using this repository as a template, and creating your own copy of it to host on GitHub.

To create your own copy of this repository, click the green "Use This Template" button on the top right of the [repository home page](https://github.com/TwilioQuest/twilioquest-extension-template).

![Use this extension template](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fuse-template.png?alt=media&token=4c662790-e066-45d4-8cdc-ea6c49569356)

Follow the prompts to create your own project [based on our template repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-template-repository). 

### Working on your extension locally
When you've created your own copy of this template repo, [clone your new repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) into the extensions folder you specified in the game client (see ["Getting Started"](#getting-started) above).

```bash
cd /path/to/extensions/folder
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Creating a TwilioQuest extension will probably (though not necessarily) require that you have [Node.js and npm](https://nodejs.org/en/download/) installed. Once you have installed Node.js, you can install the template extensions dependencies with:

```bash
npm install
```

After cloning your extension in the extensions folder, you should be able to see it in the `Extensions` submenu under `Settings` in the game client.

### Extension development topics
TODO

- Extension architecture overview
- `package.json` and extension global configuration
- Creating new levels & level configuration
- Editing maps and working with Tiled
- In-game entities and objects
- NPCs and conversations
- Creating objectives and validators
- Scripting and event handling
- Managing game world state
- Adding custom tile maps
- Music and sound effects

## Extension Development Help
The TwilioQuest extension authoring tools are under active development, and we welcome your feedback! Join us [on Discord](https://twil.io/tq-discord) in the `#extension-dev` channel.

## License
[This template](https://github.com/TwilioQuest/twilioquest-extension-template) is open source under the MIT license.
