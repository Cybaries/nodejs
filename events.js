const EventEmitter = require('events');

const celebrity = new EventEmitter();

// Subscribe to the celebrity for Observer 1
celebrity.on('race win', () => {
    console.log('Congratulations! 🐇 wins!');
});


// Subscribe to the celebrity for Observer 2
celebrity.on('race win', () => {
    console.log('Boo! 🐼 loses!');
});

celebrity.on('race', (result) => {
    if (result === 'wins') {
        console.log('🐇 wins!');
    } else {
        console.log('🐼 wins!');
    }
});


process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

celebrity.emit('race win');
celebrity.emit('race', 'wins');