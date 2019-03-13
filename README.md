# Angelic Warefare Devotional - Package for Atom.io
[![Last Commit](https://img.shields.io/github/last-commit/KeithETruesdell/atom_angelic-warfare/master.svg?style=flat-square)](https://img.shields.io/github/last-commit/KeithETruesdell/atom_angelic-warfare/master.svg?style=flat-square)
[![Installs!](https://img.shields.io/apm/dm/atom_angelic-warfare.svg?style=flat-square)](https://atom.io/packages/angelic-warfare)
[![Version!](https://img.shields.io/apm/v/atom_angelic-warfare.svg?style=flat-square)](https://atom.io/packages/angelic-warfare)
[![License](https://img.shields.io/apm/l/atom_angelic-warfare.svg?style=flat-square)](https://github.com/KeithETruesdell/atom_angelic-warfare/blob/master/LICENSE.md)  

[![GitHub stars](https://img.shields.io/github/stars/KeithETruesdell/atom_angelic-warfare.svg?style=social&label=Star)](https://github.com/KeithETruesdell/atom_angelic-warfare)
[![GitHub forks](https://img.shields.io/github/forks/KeithETruesdell/atom_angelic-warfare.svg?style=social&label=Fork)](https://github.com/KeithETruesdell/atom_angelic-warfare)  





## Usage

Click the counter on the status bar to add 1 and count a **WIDGET** you want to count, including your coding hours, your drinking times, times interupted, times your coworker coughed in your face, etc.  
Reset the counter to 0 in the settigs.  Additionally, you can use the hotkeys to reset things, or use them to quickly increment and decrement the count.  
Use the settings to also change the name of the counter displayed in the statusbar.  

Click the counter area in the lower right on the status bar.  
![Click the counter area in the lower right on the status bar](img/counter-click.gif)

You can edit the name of the counter to be more appropriate, or more discrete as well.   
![You can edit the name of the counter to be more appropriate, or more discrete as well.](img/counter-name-change.gif)

Using the hotkeys to quickly increment, decrement and reset everything.  
![Using the hotkeys to quickly increment, decrement and reset everything.](img/counter-hot-keys.gif)

Change color of widget counter, both the foreground and background.  Accepts standard color words, and html hex values.  
![Change color of the widget counter](img/counter-color-change.png)

## Feature List 

1. Click the counter on the bottom status bar to increment the count
2. Use the settings to change the display name of the counter
3. Use the settings to reset or change the value of the counter   
4. Use the Hotkey `ctrl-shift-up/uparrow` to increment  
5. Use the hotkey `ctrl-shift-down/downarrow` to decrement 
6. Use the hotkey `ctrl-shift-left/leftarrow` to reset to zero
7. Ability to customize and change the foreground and background of the counter area
8. Connect to Slack (optional), add token and message and the slack channel to the settings, and it will post new counts there  

## To Do

- Support for multiple widgets ???
- ???

Any other feature requests, please go to the GitHub Issues page and submit a feature request, or join the community and support the project by contributing.


## Issues  

The application is hosted on GitHub.  Please go to the GitHub Issues page, search for your issue.  If you see the same issue listed, please comment and add to the thread.  Otherwise, feel free to add another issue.  

**NOTE:**  
Hotkeys / keymap / keybindings I found were a bit tricky.  I wanted to use `ctrl-alt-up`,`ctrl-alt-down`,`ctrl-alt-left` or `ctrl-alt-+`,`ctrl-alt--`,`ctrl-alt-0`.   
In general, there seems to be some issues with `ctrl-alt-[arrow key]` ceaslessly firing if you hold down the `ctrl-alt` and alternate between `up` and `down` arrows, causing issues with the program.  There are other forums and posts and issues on other atom.io repos and such that people have had the same or similar issue.  The 'ctrl-alt-+` and ctrl-alt--` turned out to be an annoyance because of different keyboards.  
Some keyboards with a 9-pad recognize the `-` and `+` as the same when `ctrl` or `alt` or both are pressed and others do not.  Some recognize it as `insert` or `end` or something else, causing some issues and inconsistent tests.  I opted for the `ctrl-shift` instead for up/down and `ctrl-shift-alt` for the reset as `ctrl-shift-left` and `ctrl-shift-right` are more for selecting words.  This seems to work across the board.   
Please feel free to disable this or change this to suit your needs.  
  

## Contributing

Pull requests are welcome.  Please see the guidelines in the CONTRIBUTING.md document.  This community does have a code of conduct associated with contributions.  I am open to changes, updates and fixes.  Please, open an issue first to discuss what the change is, and then follow the guidelines.  


## License

MIT

## Thank you  

A special **THANK YOU** to all those that helped with snippett and the contributors of this project!

[Alynx Zhou](https://github.com/AlynxZhou) (Original creator - thank you!)


## Donations

[![Beerpay](https://beerpay.io/KeithETruesdell/atom_angelic-warfare/badge.svg?style=flat-square)](https://beerpay.io/KeithETruesdell/atom_angelic-warfare)
[![Beerpay](https://beerpay.io/KeithETruesdell/atom_angelic-warfare/make-wish.svg?style=flat-square)](https://beerpay.io/KeithETruesdell/atom_angelic-warfare?focus=wish)
[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=KeithETruesdell&url=https://github.com/KeithETruesdell/atom_angelic-warfare&title=atom_angelic-warfare&language=&tags=github&category=software)
