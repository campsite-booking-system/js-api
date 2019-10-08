# Vulpee - JS API

Vulpee is a Booking Management System. This repo contains all the available API calls in a easy to use library. You can also find the typescript types inside this library.

## Usage

1. Add the dependency

```bash
npm install @vulpee/js-api
```

2. Instantiate the API Component

```js
import API from '@vulpee/js-api';

const VulpeeAPI = new API(config);
```

3. Use it to call APIs

```js
try {
  const data = await VulpeeAPI.login(email, password);
} catch (error) {
  handleError(error);
}
```

## Configuration

The API can be configured with the `config` parameter when instantiating the API. These are the available parameters.

| Parameter   | Description                               | Type (available options)                        | Default      |
| ----------- | ----------------------------------------- | ----------------------------------------------- | ------------ |
| environment | Which environment should the API call     | string ("local", "development" or "production") | "production" |
| version     | Which version of the API should be called | string ("1.0")                                  | "1.0"        |
