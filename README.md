# Remix + Capacitor!

This is a basic example of a remix app (With SPA mode) running with capacitor.

Install dependencies

```
npm install
```

Run dev command to see your page on a web navigator

```
npm run dev
```

Generate android and ios app directory

```
npx cap add android
npx cap add ios
```

Use the build command to generate your web into `build/client` and also sync the changes with your mobile app

```
npm run build
```

Don't forget to change `capacitor.config.ts`

For more information you can see the [Capacitor documentation](https://capacitorjs.com/docs/getting-started)
