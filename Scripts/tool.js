const path = require('path');
const fs = require('fs');
const sort = require('./sort.js');
const renderReadme = require('./renderReadme.js');
const create = require('./create.js');
const move = require('./move.js');

sort();
move();
renderReadme();
create();
