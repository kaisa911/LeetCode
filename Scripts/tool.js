const path = require('path');
const fs = require('fs');
const renderReadme = require('./renderReadme.js');
const create = require('./create.js');
const sort = require('./sort.js');

renderReadme();
create();
sort();
