# SpitFire

> "Make is simple, then make it simpler." 

SpitFire is a simple, responsive, single page web app that lets your control email campaigns using [SarkPost](https://www.sparkpost.com). 

## Goals

This is a tool that I need.  Others probably need it, or something close to it, as well.  So it would serve us both if I wrote it well.

Spitfire attempts to follow these conventions:

1. [Javascript Best Practices](https://gist.github.com/hemanth/2035645)
2. ...
  
# Express Web UI

# Command Line

Execute SpitFire from the command line:

|command| arg | default | example |
|-------|-----|---------|---------|
| Query| -q | null | `spitfire -q "select * from users"` |
| Random| -r | 10000 | `spitfire -r 10` |

> Results will be printed to stdOut in JSON format. 

## Usage

`node spitfire`

###Examples:
 * `spitfire -r 100` : Returns 10 random emails.
 * `spitfire -q "select * from users limit 10"` : Execute a sql query.
 
# Dependencies
Spitfire uses the following node modules

1. [config](https://www.npmjs.com/package/config)
2. [felixge/node-mysql](https://github.com/felixge/node-mysql)
3. [jshint](https://www.npmjs.com/package/jshint)

# Demo

The latest published version of Spitfire is here: 
http://kevinmesiab.github.io/SpitFire/
