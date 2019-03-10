const os = require("os");
const thisOS = os.platform();
const sys = require("child_process");

const openExplorer = path => {
  if (thisOS === "win32") {
    openExplorerWindows(path);
  } else if (thisOS === "darwin") {
    openExplorerMac(path);
  } else {
    openExplorerLinux(path);
  }
};

const openExplorerWindows = path => {
  sys.exec(`cd ${path} && explorer .`);
};

const openExplorerMac = path => {
  sys.exec(`open ${path}`);
};

const openExplorerLinux = path => {
  sys.exec(`nautilus ${path}`);
};

module.exports = openExplorer;
