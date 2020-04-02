var nodetree = require('nodetree');
nodetree(process.cwd(), {
    all: false,
    directories: false,
    level: 2,
    prune: false,
    noreport: false
});