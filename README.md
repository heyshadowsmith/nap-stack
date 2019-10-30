# NAP (Nuxt Apollo Prisma) Stack

The NAP Stack consists of Nuxt on the frontend with an Apollo/Prisma backend. This repo also uses AWS Amplify for Cognito Authentication and Storybook for isolated component documentation.

## Setup & Start Your Prisma Database Layer

    cd prisma && npm i && prisma init

    ? Set up a new Prisma server or deploy to an existing server? Create new database
    ? What kind of database do you want to deploy to? MySQL
    ? Select the programming language for the generated Prisma Client: Prisma JavaScript Client

    docker-compose up -d

    prisma deploy

Your Prisma endpoint will be live at: http://localhost:4466

Your Prisma endpoint will be live at: [http://localhost:4466](http://localhost:4466)

## **Setup & Start Your Apollo Server**

    cd ../apollo && npm i && npm start

Your Apollo server endpoint will be live at: [http://localhost:4000](http://localhost:4466)

## Install & Configure the Amplify CLI

You must have the Amplify CLI installed on your machine to continue with this installation. In order to do this, [head on over to the Amplify docs](https://aws-amplify.github.io/docs/).

## Setup Nuxt & Add Amplify

Open a 2nd terminal and follow along below.

    cd nuxt && npm i && amplify init
    ? Enter a name for the project: nuxt
    ? Enter a name for the environment: dev
    ? Choose your default editor: Visual Studio Code
    ? Choose the type of app that you're building: javascript
    ? What javascript framework are you using: vue
    ? Source Directory Path: .
    ? Distribution Directory Path: dist
    ? Buid Command: npm.cmd run-script build
    ? Start Command: npm.cmd run-script start
    ? Do you want to use an AWS profile? Y
    ? Please choose the profile you want to use: default

## Add AWS Cognito Authentication & Start Nuxt Dev Server

    amplify add auth
    Do you want to use the default authentication and security configuration? Default configuration
    How do you want users to be able to sign in? Email
    Do you want to configure advanced settings? No, I am done.

    amplify push
    Are you sure you want to continue? Y

    npm run dev

Your Nuxt Development Server endpoint will be live at: [http://localhost:3000](http://localhost:3000)

## Start Storybook Server from Nuxt Directory

Open a 3rd terminal and follow along below.

    cd nuxt && npm run storybook
