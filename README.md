# 📚 InterAct [Backend]

<br>

The backend API for InterAct, comprised of Node & Express (JS) with TypeScript support; for a front-facing PWA Next.js web application.

## Installation

Clone the development branch.

```sh

git clone -b development https://github.com/InterAct-Development/InterAct-Backend

```

<br>

Open a terminal inside the project root directory (if needed).

```sh

cd project_name

```

<br>

Install the required node dependencies.

```sh

npm install

```

<br>

Create a .env file from the example one provided in the project:

<br>

<b>- MONGO_URI:</b> Your MongoDB secret key.
<br>
<b>- ACCESS_TOKEN_SECRET:</b> In your terminal generate a random access token using this command, copy and paste the given output:

```sh
require('crypto').randomBytes(64).toString('hex')
```

<br>

Compile TypeScript to JavaScript and start the local web server.

```sh

npm start

```

<br>

## Requirements

-   NodeJS 10+ or greater.
