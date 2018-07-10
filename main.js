document.addEventListener("DOMContentLoaded", function() {
    //triggers
    const test = document.getElementById('test');
    const test2 = document.getElementById('test2');
    test.addEventListener('click', function () {
        annyang.trigger('test');
    });
    test2.addEventListener('click', function () {
        annyang.trigger('wast');
    });
    //debug
    annyang.debug([newState=true]);
    if (annyang) {
        const commands = {
            'test': teste,
            'Play music': music
        };
        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.start({ autoRestart: true, continuous: false, paused: true });
    }
    annyang.addCallback('resultMatch', function() {
        console.log('good');
        annyang.pause();
    });
    annyang.addCallback('resultNoMatch', function() {
        console.log('Please repeat');
        annyang.pause();
    });
    annyang.addCallback('soundstart', function() {
        annyang.resume();
    });
    
    //functions
    function teste() {
        // console.log('ok');
        window.open("http://www.joeylau.nl", "_blank");
    }
    function music() {
        window.open(`https://www.youtube.com/watch?v=J_CFBjAyPWE&shuffle=${Math.floor(Math.random() * 100)}&list=PLL_i49YplGU2ZTUGyAo0aBe1NOoFZ-rVk`, "_blank");
    }
});