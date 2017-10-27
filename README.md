# Beep Boop

#### A robot that will print numbers (and other things) based on your input, 10-27-2017

#### By Luke Bertram

## Description

This website will accept a positive integer from a user and return the set of integers between 1 and the submitted integer inclusive. However, integers meeting certain criteria will be replaced with one of three different messages depending on which criteria they meet:

* **Boop!** - integers containing a "1" digit are replaced by the message "_Boop!_"

* **Beep!** - integers containing a "0" digit are replaced by the message "_Beep!_" This replacement has a higher priority than the _boop_ rule and will override it for numbers where both _beep_ and _boop_ are valid replacements. For example: the number _10_ is replaced by "_Boop!_" because the presence of a _0_ digit takes priority over the presence of a _1_.

* **I'm sorry...** - integers divisible by 3 are replaced with the message "_I'm sorry, Dave. I'm afraid I can't do that._" This replacement has the highest priority of the three and will override the _beep_ and _boop_ replacement rules. For example: the number _120_, though it contains both a _1_ and a _0_, will be replaced by the "_I'm sorry..._" message instead because its divisibility by 3 takes priority.

## Specifications

* Accepts an integer and returns the set of integers from 0 (non-inclusive) up to and including the integer provided by the user.  
 * Input: "8"
 * Output: "1 2 3 4 5 6 7 8"


* Replaces all integers containing a "1" character in the return string with "Boop!"  
 * Input: "10"
 * Output: "Boop! 2 3 4 5 6 7 8 9 Boop!"


* Replaces all integers containing a "0" character in the return string with "Beep!"
 * Input: "10"
 * Output: "Boop! 2 3 4 5 6 7 8 9 Beep!"


* Replaces all integers divisible by 3 in the return string with "I'm sorry" message.
 * Input: "10"
 * Output: "Boop! 2 _I'm sorry..._ 4 5 _I'm sorry..._ 7 8 _I'm sorry..._ Beep!"


 ## Setup/Installation Requirements

 For greatest ease of use, simply visit [this website](http://lukebertram.github.io/beep-boop) in your web browser of choice. However, if you're feeling frisky, you can also use the following steps to clone the project from [GitHub](http://github.com) and run it locally on your own computer:

 * Visit the github page for [this project](http://github.com/lukebertram/beep-boop)
 * Click the "Clone or Download" button and copy the address found there. Alternatively, just copy this address to your clipboard: https://github.com/lukebertram/beep-boop.git
 * Access your system's command line interface (_ie Terminal, for MacOS Users_) and navigate to your home directory by entering the following magical spell into your command line (note: do not enter the '$' character):
 >$cd ~

 * Next, cast the following, more advanced spell:  
 >$git clone https://github.com/lukebertram/beep-boop.git

 * Finally, open the project in your system's default web browser with the following final incantation:
 >$open beep-boop/index.html


## Known Bugs

Currently no handling of negative, empty, non-number, 0-value, or decimal inputs.

Page layout is still problematic and falls apart at smaller screen sizes.

## Support and contact details

If something about this project really sticks in your craw and you just need call me on it, you can email me at my email address.

## Technologies Used

The bulk of this project consists of looping, adding elements to an array, and branching logic written in JQuery/JavaScript. When the form is submitted, the usual post request is suppressed by javascript, and the answers are gathered from the form via JQuery.

### License

MIT License

Copyright (c) 2017 Luke Bertram
