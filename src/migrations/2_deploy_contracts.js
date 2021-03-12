var EmrPatient = artifacts.require("EmrPatient");

module.exports = function(deployer) {
    deployer.deploy(EmrPatient);
};