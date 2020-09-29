# Creating a new package.json file

```
cd /path/to/package
```

```
npm init
```
## For a default package.json

```
npm init --yes
```

# Jasmine for Node.JS

## Add jasmine to your package.json

```
npm install --save-dev jasmine
```

## Initialize Jasmine in your project

```
npx jasmine init
```

## Set jasmine as your test script in your package.json

```
"scripts": { "test": "jasmine" }
```

## Run your tests

```
npm test
```
