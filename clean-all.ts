// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/LICENSE for details
// GitHub: https://github.com/mattvarghese/typescript-node

import { exec } from 'child_process';
import * as os from 'os';

function puts(_error, stdout, _stderr) {
    console.log(stdout)
}

// Run command depending on the OS
if (os.type() === 'Linux') {
    exec("rm -rf build node_modules", puts);
    exec("rm clean-all.js", puts);
}
else {
    exec("rmdir /s /q node_modules", puts);
    exec("rmdir /s /q build", puts);
    exec("del clean-all.js", puts);
}