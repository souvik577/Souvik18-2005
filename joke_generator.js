
import https from 'https';
import chalk from 'chalk';
// import { response } from 'express';
// import { json } from 'stream/consumers';

const getjoke = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke';

    https.get(url, (response) => {
        let data = "";
        response.on('data',(chunk) => {
            data += chunk
        });

        response.on('end', () => {
            const joke = JSON.parse(data);
            console.log(joke);
            console.log(`Here is a random ${joke.type} joke:`);
            console.log(`chalk.red(${joke.setup})`);
            console.log(`chalk.blue.bgRed.bold(${joke.punchline})`)
        })

        response.on('error', (err) => {
            console.log(`Error fecthing the joke, ${err.message}`);
        })
    })
}