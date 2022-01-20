
# simplecyber.org
The [simplecyber.org](https://simplecyber.org) website.

Even though I've gotten much more into Javascript-driven site experiences with projects like CyberFiles and CyberVideoPlayer, PHP seems like the best option for this type of thing. All of the tools are still powered by JS though, since that'll minimize the amount of server contact and leave processing to the user's system.

I initially intended to host this thing on GitHub Pages, but not having access to PHP would mean manually reusing a lot of code from page to page, which is something I try to avoid. Instead, I'm hosting this site from home.

## Changelog
No versioning for now, but changes are separated by the day they were made, not necessarily committed. My days are split by sleep, not midnight, so these dates will tend to lag behind their respective commits.

### 2022-01-19
* Added a toast notification that appears when Javascript is disabled (informing the user that most site functionality requires Javascript)
* Added a toast notification that appears when using Internet Explorer (urging the user to switch to a modern browser)

### 2022-01-18
* Updated the Password Generator tool
* Added the Stopwatch tool

### 2022-01-17
* Added the Password Generator tool
* Remembered that this changelog exists and updated it, using commit history for reference

### 2022-01-16
* Improved error handling on the server side of the Open Port Checker
* Added the Browser Variable Dump tool

### 2022-01-15
* Added the Random Item Selector tool
* Added the Base64 Encode and Decode tool
* Added the Custom Popup Generator tool
* Added the Open Port Checker tool
* Fixed the nonexistent menu on error pages
* Set up the groundwork for an auto-updating LocalStorage variable for storing tool inputs for later

### 2022-01-13
* Updated the Time Between Dates tool
* Added toast notifications that appear and stack up in the top right corner when copying text
* Updated the Random Number Generator with an option to add commas to the result

### 2022-01-12
* Updated the Metronome tool
    * Now using the [Zounds Audio Library](https://www.perambulum.com/zounds/) to better handle precise and lagless playback of sounds
* Updated the Time Between Dates tool
    * Now total values can be clicked on and copied
* Added the Unix Timestamp Converter tool
* Added sitemap.txt for Google purposes

### 2022-01-11
* Completed the Line Sorter tool
* Added the Random Case tool
* Added the Random Number Generator tool
* Added the Time Between Dates tool
* Added the Metronome tool

### 2021-12-05
* Changed the style of hyperlinks
* More updates to the footer

### 2021-11-29
* Completed the Text Analysis tool
* Enabled the 'Text Analysis' and 'Tool overview' menu options
* Started on the Line Sorter tool
* Improved the site-wide footer

### Before 2021-11-29
* Initial setup, customization, structure, etc. - too much to write a changelog for