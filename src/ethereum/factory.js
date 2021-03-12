import web3 from './web3';
import EmrPatient from '../build/contracts/EmrPatient.json';

const instance = new web3.eth.Contract(EmrPatient.abi, '0x5B26E9FB3D66703E29E551Cd721E19F8411B45eB');

export default instance;