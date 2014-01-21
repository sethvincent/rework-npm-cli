#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var rework = require('rework');
var reworkNPM = require('rework-npm');

var optimist = require('optimist')
.usage('Usage: rework-npm [entry file] {OPTIONS}')
.wrap(80)
.option('outfile', {
  alias: 'o',
  desc: 'Write the bundled css to this file\n' +
        'If unspecified the output will go to stdout'
});

var argv = optimist.argv;

var files = argv._;

if (!files || files.length === 0) {
  console.error('Error: at least one entry file must be specified\n');
  optimist.showHelp();
  return;
}

var css = '';

files.forEach(function(file) {
	var file = fs.readFileSync(path.resolve(process.cwd(), file), 'utf8');
	css += rework(file)
	  .use(reworkNPM())
	  .toString();
});

if (argv.outfile) {
  fs.writeFileSync(argv.outfile, css, 'utf8');
  return;
}

process.stdout.write(css);