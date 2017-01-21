var pm = require('./packageManager');

module.exports =  function process(config){
    console.log('config', config);
    pm.init();
    pm.addPackage('chirimoyajs');
};

