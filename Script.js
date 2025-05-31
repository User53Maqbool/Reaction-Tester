start = new Date().getTime();
        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        }
        function move() {
            var left;
            var top;
            var wh;
            left = Math.random() * 300;
            top = Math.random() * 300;
            wh = ((Math.random() * 400) + 100);//minimum width should start from 100 as if it becomes 0 then box won't be visible
            document.getElementById('shape').style.left = left + "px";
            document.getElementById('shape').style.top = top + "px";
            document.getElementById('shape').style.width = wh + "px";//width can be 100 - 400 any number
            document.getElementById('shape').style.height = wh + "px";
            document.getElementById('shape').style.display = "block";
            document.getElementById('shape').style.backgroundColor = getRandomColor();
            start = new Date().getTime();
        }
        move();
        document.getElementById('shape').onclick = function () {
            document.getElementById('shape').style.display = "None";
            var end = new Date().getTime();
            var timeTaken = (end - start) / 1000;
            document.getElementById('result').innerHTML = timeTaken;
            move();
        }