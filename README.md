# NextJS pages router clerk proxy demo

This repo demonstrates how to setup Clerk to function as a "[staging](https://clerk.com/docs/deployments/set-up-staging#set-up-a-staging-environment-with-clerk)" environment running locally, by proxying Clerk frontend.

## Getting started

### ngrok

In order to setup Clerk with a proxy you will need to expose your localhost server with a service like [ngrok](https://dashboard.ngrok.com/cloud-edge/domains), acquire a free ngrok account and create the env variables with the respective values as in the yarn script `ngrok` then you can run the same command:

```bash
NGROK_AUTH_TOKEN="YOUR_CLERK_AUTH_TOKEN" NGROK_DOMAIN="YOUR_NGROK_DOMAIN" yarn ngrok
```

### Clerk set up

Setup your clerk application, then follow the [Clerk documentation](https://clerk.com/docs/advanced-usage/using-proxies#enable-proxying) **step 3** only, to setup the proxy.

Also take a look into the `.env.example` and create a `.env.local` with the same env variables with its respective values.

### Start your app

Now you can start your app by running `yarn dev` and you will be able to access using your ngrok domain as URL.
