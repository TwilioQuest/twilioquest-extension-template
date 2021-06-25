# TwilioQuest Extension Template
Interested in creating an extension for TwilioQuest? You've come to the right place! Using this repository as a template, you can create new levels, objectives, characters, and items in TwilioQuest.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [TwilioQuest Extension Template](#twilioquest-extension-template)
  - [Getting Started](#getting-started)
    - [Enabling extensions](#enabling-extensions)
  - [Creating an Extension](#creating-an-extension)
    - [Working on your extension locally](#working-on-your-extension-locally)
    - [Extension development topics](#extension-development-topics)
      - [Level configuation.json file options](#level-configuationjson-file-options)
        - [Background Effects](#background-effects)
    - [Example Gists](#example-gists)
      - [Objective Validator.js Examples](#objective-validatorjs-examples)
  - [Sharing your Extension](#sharing-your-extension)
    - [Enable GitHub Actions](#enable-github-actions)
    - [Create a Release](#create-a-release)
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

Once you have enabled extensions, specify a folder on your computer where you will download and manage extensions. This should be the [full path](https://en.wikipedia.org/wiki/Fully_qualified_name#Filenames_and_paths) to an empty folder on your computer (you should create such a folder first, if you haven't already).

![Specify a folder path for extensions](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fext-folder.png?alt=media&token=4936dd5c-d84c-459e-9179-4c545a64b297)

Once you have enabled extensions, you should see a listing of automatically-installed "base extensions", and a list of any extensions you have installed yourself. Now you are ready to create your own extension!

## Creating an Extension
To create your own content for TwilioQuest, you will need to create an extension project. For that purpose, we recommend using this repository as a template, and creating your own copy of it to host on GitHub.

To create your own copy of this repository, click the green "Use This Template" button on the top right of the [repository home page](https://github.com/TwilioQuest/twilioquest-extension-template).

![Use this extension template](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fuse-template.png?alt=media&token=4c662790-e066-45d4-8cdc-ea6c49569356)

Follow the prompts to create your own project [based on our template repo](https://github.com/TwilioQuest/twilioquest-extension-template/generate).

### Working on your extension locally
When you've created your own copy of this template repo, [clone your new repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) into the extensions folder you specified in the game client (see ["Getting Started"](#getting-started) above).

```bash
cd /path/to/extensions/folder
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Creating a TwilioQuest extension will require that you have [Node.js and npm](https://nodejs.org/en/download/) installed. Once you have installed Node.js, you can install the template extension's dependencies with:

```bash
npm install
```

After cloning your extension in the extensions folder, you should be able to see it in the `Extensions` submenu under `Settings` in the game client.

![Extension template is loaded](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Ftemplate_loaded.png?alt=media&token=b29a60c0-9289-46f3-b6e6-bafa28faa669)

The template extension has a simple VR training level created for you to reference and start hacking on. Interact with the VR Training computer aboard the Fog Owl to load up this sample mission!

![VR training sim mission](https://firebasestorage.googleapis.com/v0/b/twilioquest-prod.appspot.com/o/docs%2Fvr_sim.png?alt=media&token=2b39bb3d-a2a6-4420-9e95-6485b52d35a4)

### Extension development topics

#### Level configuation.json file options
Configuration properties for your level are editable in `levels/<level_name>.json`. Here is a breakdown of all the components of `<level_name>.json`:

* `title (String)`: displayed title for the level (used in Mission Computer)
* `description (String)`: text description of the level (used in Mission Computer)
* `is_mission (Boolean)`: Set to `true` if this level should appear in the Mission Computer
* `prereqs (Array<String>)`: A list of objectives from other missions that must be completed before this mission is playable. Each string in this list contains a mission folder name concatenated with an objective folder name. Example: `["basic_training.basic3", "basic_training.basic4"]` - this means that in order to play this mission, you need to complete the objectives in `basic3` and `basic4` in the `basic_training` mission.
* `flavorTextOverrides (Object<String>)`: set flavor text overrides for this level. If an in Tiled TileObject has the corresponding `flavorText` property string as a key in this object, the HTML text specified here will override the interaction text pop up.
* `backgroundMusic (String)`: the key of the background music track to play for this mission. It should be the `basename` of a track found in `public/levels/common/music`.
* `backgroundEffect (Object)`: specify the background effect of this level that will be shown behind transparent tiles left open in Tiled.
  * `key (String)`: the name of the effect to be used. e.g. "starfield" or "vr"
  * `options (Object)`: some effects have options that allow them to be customized

##### Background Effects
* key: `starfield`

  options:
  | option | type | values | default | notes |
  | --- | --- | --- | --- | --- |
  | ySpeed | Array[Numbers] | <[ConstantSpeed] \| [MinSpeed, MaxSpeed]> | [4, 8] | An array specifying the min and max y speed of the stars in the field. If only one value is provided, all stars are the same speed |
  | rotationSpeed | Number | (-Infinity, Infinity) | 0 | Speed of starfield rotation in radians per frame. Small numbers are appropriate (e.g. 0.0001)! |
  | starCount | Number | (0, Infinity) | 400 | Quantity of stars in the field. Increasing this number will increase the visual density of the stars on screen. |
* key: `vr`

### Example Gists

#### Objective Validator.js Examples
- [Doing URL validation](https://gist.github.com/rmkubik/db54a3ace509fe4e0ffec6f008e8588d)
- [Making async network request to validate a GitHub account, stores the GitHub account name as an environment variable, and displays an image in the helper.success reponse](https://gist.github.com/rmkubik/9898f63e4ace00093b593d16b24d4c52)
- [Requesting the path to a Python runtime from the user, validating it works, and storing it in an environment variable](https://gist.github.com/kwhinnery/60254c09b579c2bf89c7f56899273fe7)
- [Using a stored Python runtime to evaluate code written by a user in Python](https://gist.github.com/kwhinnery/6ae2f25562b8eace9aa049084bbcacc1)

**UNDER CONSTRUCTION**

During the early development phase of our content authoring tools, our documentation won't be as robust as it could (and will) be. Until then, we encourage you to install this template extension and explore the features that it adds to the game. Over time, we will update [the template repo](https://github.com/TwilioQuest/twilioquest-extension-template) with more documentation on topics such as the following.

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
- Distributing your extension to players
  
## Sharing your Extension
Other TwilioQuest players can install your extension by following the steps in [Enabling Extensions](#enabling-extensions) on their own machines, and then placing your extension in the folder they specified for extensions.

A player may have to install any dependencies before they can use your extension. This repository includes a [GitHub Action workflow](/.github/workflows/release.yml) that will install any Javascript dependencies, and publish a ready to use zip file of your extension as a [Release](/releases).

Please note that the workflow by default only installs and bundles Javascript dependencies. If you are using other language ecosystems in your extension, those dependencies will not be included by default, but you can add your own build steps to the workflow.

Follow the steps below to use the workflow to publish your extension:

### Enable GitHub Actions

- Open the [Actions](/../../actions) tab on the repository.
- Follow the prompt to enable GitHub Actions for the repository.

### Create a Release

- A release is created on [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging) pushes.
- The tag must be a version number, representing the version of the extension, following [SemVer](https://semver.org/), for example `v1.0.0`.
- When a push is made with a valid tag, the GitHub Action will create a release and add it to the [Releases](/releases) tab. The release can be edited, to add information such as changelogs or patchnotes.

[<< TO TABLE OF CONTENTS](#twilioquest-extension-template)

<hr/>

## Extension Development Help
The TwilioQuest extension authoring tools are under active development, and we welcome your feedback! Join us [on Discord](https://twil.io/tq-discord) in the `#extension-dev` channel.

[<< TO TABLE OF CONTENTS](#twilioquest-extension-template)

## License
[This template](https://github.com/TwilioQuest/twilioquest-extension-template) is open source under the MIT license.
