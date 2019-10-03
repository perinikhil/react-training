const path = require('path');
const fs = require('fs-extra');

const getSubDirs = (targetPath) => {
  return fs.readdirSync(targetPath).filter(subDir => {
    const stat = fs.lstatSync(path.join(targetPath, subDir));
    return stat.isDirectory();
  });
};

const [_, __, type, checkpointName] = process.argv;
const rootPath = path.resolve(__dirname, '..');
const checkpointsPath = path.resolve(rootPath, '.checkpoints');
const srcPath = path.resolve(rootPath, 'src');
const tempPath = path.resolve(rootPath, 'temp');
const types = getSubDirs(checkpointsPath);

if (!type || !checkpointName) {
  console.log('\n🏁 Navigating the checkpoints:');
  console.log('\x1b[32m%s\x1b[0m', 'yarn checkpoint [type] [name]\n');
  console.log('Example of checkpoints navigation:');
  console.log('\x1b[32m%s\x1b[0m', 'yarn checkpoint beginner jsx\n');
  console.log('Available types:');
  console.log('\x1b[32m%s\x1b[0m', `${types.join(', ')}\n`);

  types.forEach((type) => {
    const typePath = path.join(checkpointsPath, type);
    const checkpoints = getSubDirs(typePath).map(checkpoint => checkpoint.split('-').slice(1).join('-'));

    console.log(`Available ${type} names:`);
    console.log('\x1b[32m%s\x1b[0m', `${checkpoints.join(', ')}\n`);
  });

  return;
}

const typePath = path.join(checkpointsPath, type);
const checkpointDir = fs.readdirSync(typePath).find(checkpoint => checkpoint.endsWith(checkpointName));

if (!checkpointDir) return console.log(`Error: ${checkpointName} checkpoint doesn't exist`);
const checkpointPath = path.join(typePath, checkpointDir);

if (fs.existsSync(tempPath)) {
  return console.log(`
    Error: If you want to go to a new checkpoint, delete /temp directory manually.
    You can run \`yarn clean\` for that.
    This way we ensure you don't lose your previously saved work unintentionally.
  `)
}
fs.moveSync(srcPath, path.join(tempPath, 'src'));
fs.removeSync(srcPath);
fs.copySync(checkpointPath, rootPath);

console.log('\x1b[32m%s\x1b[0m', '\n🏁 Success');
console.log(`/src folder was updated with ${checkpointDir} source code`);
console.log('Your previous code was saved to /temp folder\n');


