 // STEP 1: Find the element where the time goes.
    var clock = document.querySelector('#clock');

// STEP 2: A function that reads the time and shows it.
    function tick() {

        var now = new Date();         // the current date and time
        var h = now.getHours();       // 0 to 23
        var m = now.getMinutes();     // 0 to 59
        var s = now.getSeconds();     // 0 to 59

        // padStart adds a 0 in front of single numbers: 7 becomes 07
        var hh = String(h).padStart(2, '0');
        var mm = String(m).padStart(2, '0');
        var ss = String(s).padStart(2, '0');

        clock.textContent = hh + ':' + mm + ':' + ss;

        // STEP 3: Your design. Change how the clock looks depending on the time.
        // Use h, m or s. Change colors, fonts, sizes, images, text...
        if (h < 12) {
            // morning
            document.body.style.backgroundColor = 'lightgreen';
            document.body.style.color = 'darkgreen';
            clock.textContent = hh + ':' + mm + ':' + ss + '🔋' + '100%';
        } else if (h < 18) {
            // afternoon
            document.body.style.backgroundColor = 'gold';
            document.body.style.color = 'saddlebrown';
            clock.textContent = hh + ':' + mm + ':' + ss + '🪫' + '40%';
        } else {
            // evening and night
            document.body.style.backgroundColor = 'red';
            document.body.style.color = 'white';
            clock.textContent = hh + ':' + mm + ':' + ss + "⚡" + '5%';
            document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/584764738/vector/realistic-full-moon.jpg?s=612x612&w=0&k=20&c=7IOGLFxp6LzatVCGOwtXMgElNC1cMeTOAPzO5I6olvc=)";
            document.body.style.color = 'yellow';
        }
    }

// STEP 4: Run tick once now, then again every 1000 milliseconds (1 second).
    // tick();
    setInterval(tick, 1000);