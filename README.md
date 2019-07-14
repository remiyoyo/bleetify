# Bleetify
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Build Status](https://travis-ci.com/ctrlaltcookie/bleetify.svg?branch=master)](https://travis-ci.com/ctrlaltcookie/bleetify)

Have you ever wanted to have the ability to randomly bleet like a goat? No? Well that's why i've made bleetify! For all your goating needs, baa.

## Install

```bash
$ npm install bleetify
```

## Testing

Testing is done with:

* [@hapi/lab](https://github.com/hapijs/lab) as the test runner and linter
* [@hapi/code](https://github.com/hapijs/code) as the expectation library
* [sinon](https://github.com/sinonjs/sinon) as the stubbing library

This is simply because all very easy to use and hyper obvious. Also lab and code are basically mocha and chai, wait why don't we just use mo-

```bash
$ npm ci
$ npm test
```

## Usage

```javascript
  const Bleetify = require('bleetify');
  
  const sentence = 'Wow what an awesome sentence!';
  const bleet = Bleetify.bleet(sentence, 100);
  console.log(bleet);
```
## Functions

List of the functions available to you if you install this illustrious npm package.

### Bleetify.bleet(message, threshold _(optional)_)

```javascript
Bleetify.bleet('A message to bleet :o', 30) // returns 'A message to bleet :o' with a 30% chance of having baa
                                            // at the start or the end. Whether they are at the start or the end
                                            // is dictated by a coinflip. Threshold defaults to 20%.
```