# GMI XNFT

This repository was created as a placeholder for the xNFT Dapp for GMI team presented at the Solana hackathon Hyperdrive.


## Development Notes

### Node Version

WARNING! Use node version 16.20.2

nvm can help in this 

### Known Runtime Errors

* Error registering root component

> In the following error appears on running the dev server using `yarn dev`:
> 
> ERROR in ./node_modules/expo/AppEntry.js:3
> Module not found: Can't resolve '../../App'
>   1 | import registerRootComponent from 'expo/build/launch/registerRootComponent';
>   2 |
>  3 | import App from '../../App';
>  4 |
>  5 | registerRootComponent(App);
>  6 |

Please, clean the hidden folders `.expo` and the `node_modules` folder, reinstalling dependencies with `yarn install`


At follows you will find the DOCS from XNFT boilerplace

# xnft-quickstart

Quickstart repo for building your own xNFT.

## Developing

Once you've installed Backpack, get started building your xNFT with these steps. Note that the packages here will always use the latest, which correspond to the latest tagged build of Backpack. If you have unexepected issues, make sure your package versions match the app version.

Further documentation: https://docs.xnfts.dev/getting-started/introduction

### Install

First, install dependencies.

```
yarn
```

### Run the dev server

Then, run the dev server with hot reloading

```
yarn dev
```

### Open the Simulator in Backpack

Now that you have your xNFT dev server running, open it in the Backpack simulator to see it run.

That's it!


## Build & Publish

Once you're done and ready to publish, build your xNFT:

```
yarn build
```

Test the newly created build in `dist/index.html` in the simulator:

```
yarn start
```

Once everything looks good head over to [xnft.gg](https://www.xnft.gg) to publish your xNFT!
