process.stdin.on('readable', () =>{
    var line = process.stdin.read();
    if(line !== null) {
        process.stdout.write("Otrzymalem: " + line);
    }
})