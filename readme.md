# rework-npm-cli

Use [rework-npm](https://github.com/conradz/rework-npm) from the command line.

## Install

Globally:

```
npm install -g rework-npm-cli
```

Or as a development dependency:

```
npm install --save-dev rework-npm-cli
```

## Usage

```
rework-npm source.css -o bundle.css
```

Example of piping to other commands:

```
rework-npm source.css | myth | cleancss -o bundle.css
```

Using the [myth](https://github.com/segmentio/myth) and [clean-css](https://github.com/GoalSmashers/clean-css) modules.

### Use css source maps

```
rework-npm source.css -m -o bundle.css
```

The `--sourcemap` option enables sourcemaps in the bundle.css file. It can be shortened to `-m`.