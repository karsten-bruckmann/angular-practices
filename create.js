const { exec } = require('child_process');
const projectName = process.argv.slice(2)[0];

if (projectName === undefined) {
    console.log('Project name missing.');
    return;
}

const command = `ng new ${projectName} --minimal --skipGit=true --style=less --routing=false`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(`${stdout}`);
    console.log(`${stderr}`);
});
