# Nuxt-Auth0

This is a example of Auth0 integration with Nuxt.js

## Features

 - Using Auth0 Lock
 - Update tokens with checkSession method
 - Secure / Non-Secure Pages with middleware
 - Showing User from JSON Web Token

## Demo

![demo](https://user-images.githubusercontent.com/1762675/38202765-dc4ba364-36d7-11e8-85e2-ed0ef38ee819.gif)

## Setup

### Auth0

https://auth0.com/

Need to create a auth0 tenant and make some settings below.

 - Allowed Callback URLs: http://localhost:3000/user/callback
 - Allowed Web Origins: http://localhost:3000
 - Allowed Logout URLs: http://localhost:3000


### .env

Using dotenv.
create .env and set clientID and domain.

```
AUTH0_CLIENT_ID=YOUR_CLIENT_ID
AUTH0_DOMAIN=YOUR_DOMAIN
```

## Start

Let's start with Nuxt.js build commands.

``` bash
$ yarn install
$ yarn dev
```
