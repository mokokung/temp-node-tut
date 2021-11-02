const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method return the system uptime in second
console.log(`The System Uptime is ${os.uptime()} second`)

const creeuntOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(creeuntOS)