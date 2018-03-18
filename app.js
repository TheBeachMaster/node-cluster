const cluster = require('cluster'),
    http = require('http'),
    os = require('os'),
    cpu_count = os.cpus().length,
    user_info = os.userInfo(),
    platform = os.platform(), // the operating system platform
    arch = os.arch(), // the operating system CPU architecture : 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'
    os_type = os.type(); // the operating system name : 'Linux' on Linux, 'Darwin' on macOS and 'Windows_NT' on Windows.

if (cluster.isMaster) {
    console.log(`User: \t\n ${user_info.username} . \n Currently running on ${os_type} - ${arch} - ${platform} \n`);
    console.log(`Available cores: ${cpu_count}`)
    console.log(`Master Process ${process.pid} is up`);

    for (let index = 0; index < cpu_count; index++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker Process ID ${worker.process.pid} exited`);
    });

} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Am a spawned process');
    }).listen(3000);

    console.log(`Worker ID ${process.pid} is up`);
}