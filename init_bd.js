const command =`curl -XPUT "localhost:9200/_bulk" -H "Content-Type: application/json" --data-binary @movies_elastic.json`;
const { spawn } = require('child_process');
const ls = spawn(command);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
