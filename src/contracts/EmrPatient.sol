pragma solidity ^0.5.11;

contract EmrPatient {
    constructor() public {}
    mapping(string => patientDetails) public patientMedicalRecord;
    struct patientDetails {
        string name;
        address patient;
    }
    
    function savePatient(string memory mr_number, string memory _name, address _patient) public {
        patientMedicalRecord[mr_number] = patientDetails(_name, _patient);
    }
    
    function getPatient(string memory mr_number) public view returns(string memory, address) {
        return (patientMedicalRecord[mr_number].name, patientMedicalRecord[mr_number].patient);
    }
}

//  > transaction hash:    0x50ac7c0bb3e38db72d8e9dbd595379e3b87d2e3b31d06f569c462380811993dd
//    > Blocks: 1            Seconds: 9
//    > contract address:    0x5B26E9FB3D66703E29E551Cd721E19F8411B45eB
//    > block number:        8214155
//    > block timestamp:     1615445456
//    > account:             0xE40815188BE5D45f78362CFC0e0c9f06a7f91Cf2
//    > balance:             81.44611474498
//    > gas used:            547577 (0x85af9)
//    > gas price:           20 gwei
//    > value sent:          0 ETH
//    > total cost:          0.01095154 ETH