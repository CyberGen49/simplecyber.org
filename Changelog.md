
# Changelog
No versioning for now, but changes are separated by the day they were made, not necessarily committed. My days are split by sleep, not midnight, so these dates will tend to lag behind their respective commits, since I'm at my most productive long after midnight.

[View on simplecyber.org](https://simplecyber.org/changelog)  
[View on GitHub](https://github.com/CyberGen49/simplecyber.org/blob/main/Changelog.md)

## 2022-01-28
* Revamped the main menu open and close animation
* Now menus are generated on the fly on the clientside
    * Menu data isn't fetched (which is probably what should be done), instead, it's encoded as base64 and put into a data attribute, to then be decoded by the client. All that means is that there's no extra waiting time on the clientside, and we can continue storing the menu index as YAML on the server.
* Added a small vibration when tapping buttons and menu items using the vibration API

## 2022-01-26
* Completed the Contact form

## 2022-01-25
* Continued work on the Minecraft server article
* Added HTTP error handling to the simple fetch JS functions
* Started work on a contact form

## 2022-01-24
* Added tooltips to all links that show the target URL
* Started work on an article about how to create a Minecraft server
* Updated headings to use `em` units for top and bottom padding
    * This means all `h1`-`h6` elements get the same top and bottom padding, since `em` units are based on font size
* Changed the name of the directory in which font CSS files are stored
* Added styling for code blocks and inline code using [Microsoft's Cascadia Code monospace font](https://github.com/microsoft/cascadia-code)
* Added styling for images, featuring rounded corners and a drop shadow
    * All images are also made clickable, and when clicked, the image itself will be opened in a new tab

## 2022-01-23
* Added Disqus comment sections to most pages
* Made it so all links that go to external sites will open in a new tab, no matter what

## 2021-01-22
* Now the changelog content is fetched after page load, making things a little easier
    * And with this change came some functions that make it super easy to load text files, laying the groundwork for more article-type pages
* Now the scroll position is saved and restored after the page is fully loaded
    * The position is saved per-page, is only valid for 10 seconds, and is deleted on the next load
    * If we just leave it up to the browser, pages with dynamically loaded content like the changelog won't go back to where you left off if you reload the page

## 2021-01-21
* Updated the Password Generator tool
    * Now at least one character from every selected character set is guaranteed to be in the password, unlike before, where all of the characters would be thrown into a list and randomly picked from
* Added the Changelog page which shares the same content as the changelog on GitHub
* Added toast notifications for Javascript errors
* Added automatic input saving and loading to the Random Item Selector tool

## 2022-01-20
* Started work on the Twitch Chat GIF Generator tool

## 2022-01-19
* Added a toast notification that appears when Javascript is disabled (informing the user that most site functionality requires Javascript)
* Added a toast notification that appears when using Internet Explorer (urging the user to switch to a modern browser)

## 2022-01-18
* Updated the Password Generator tool
* Added the Stopwatch tool

## 2022-01-17
* Added the Password Generator tool
* Remembered that this changelog exists and updated it, using commit history for reference

## 2022-01-16
* Improved error handling on the server side of the Open Port Checker
* Added the Browser Variable Dump tool

## 2022-01-15
* Added the Random Item Selector tool
* Added the Base64 Encode and Decode tool
* Added the Custom Popup Generator tool
* Added the Open Port Checker tool
* Fixed the nonexistent menu on error pages
* Set up the groundwork for an auto-updating LocalStorage variable for storing tool inputs for later

## 2022-01-13
* Updated the Time Between Dates tool
* Added toast notifications that appear and stack up in the top right corner when copying text
* Updated the Random Number Generator with an option to add commas to the result

## 2022-01-12
* Updated the Metronome tool
    * Now using the [Zounds Audio Library](https://www.perambulum.com/zounds/) to better handle precise and lagless playback of sounds
* Updated the Time Between Dates tool
    * Now total values can be clicked on and copied
* Added the Unix Timestamp Converter tool
* Added sitemap.txt for Google purposes

## 2022-01-11
* Completed the Line Sorter tool
* Added the Random Case tool
* Added the Random Number Generator tool
* Added the Time Between Dates tool
* Added the Metronome tool

## 2021-12-05
* Changed the style of hyperlinks
* More updates to the footer

## 2021-11-29
* Completed the Text Analysis tool
* Enabled the 'Text Analysis' and 'Tool overview' menu options
* Started on the Line Sorter tool
* Improved the site-wide footer

## Before 2021-11-29
* Initial setup, structuring, home page writing, etc.