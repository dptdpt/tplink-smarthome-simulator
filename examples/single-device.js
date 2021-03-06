const { Device } = require('..');
const { UdpServer } = require('..');

// Will generate random mac (used by Kasa app to uniquely identify a device) and deviceId, etc
// add 100ms responseDelay to simulate network latency
const device = new Device({ model: 'hs100', port: 9999, responseDelay: 100 });
device.start();

// This uses a hard-coded mac and deviceId.
// devices.push(new Device({ model: 'hs100', data: { mac: '50:c7:bf:8f:58:18', deviceId: '12345' } }));

UdpServer.start();
