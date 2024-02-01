/* process.stdin.setEncoding('utf8');

function getUserInput() {
    return new Promise((resolve) => {
        process.stdin.on('data', function(data) {
            var chunk = data.trim();
            if (chunk != null) {
                resolve(chunk);
            }
        })
    })
}

function endOfRead() {
    process.stdin.on('end', function() {
        process.stdout.write('This important software is now closing' + '\n');
        process.exit();
      });
}

async function main() {
    console.log('Welcome to Holberton School, what is your name?')
    const userInput = await getUserInput();
    console.log(`Your name is: ${userInput}`);
    endOfRead();

}

main() */

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput != null) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
