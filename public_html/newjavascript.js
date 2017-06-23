var player = "X";
function costam(w,h){
    var div = document.createElement("div");
    div.style.width = w;
    div.style.height = h;
    div.style.position = "absolute";
    div.style.top = "200px";
    div.style.right = "50px";
    div.style.fontSize = "40px";
    div.id = "test";
    div.innerHTML = player;
    var content = $('#kolkokrzyzyk');
    content.append(div);
}

function plansza(colcount, rowcount) {
    this.pola = [];
    var content = $('#kolkokrzyzyk');
    var div = document.createElement("div");
    div.style.width = "600px";
    div.style.height = "600px";
    div.style.backgroundColor = 'silver';
    div.style.border = '2px solid black';
    var cols = colcount;
    var rows = rowcount;
    var me = this;
    content.append(div);

    for (var i = 0; i < rowcount; i++) {
        var row = [];
        for (var j = 0; j < colcount; j++) {
            row.push(new pole(600 / colcount - 4, 600 / rowcount - 4, div, this));
        }
        this.pola.push(row);
    }
    this.checkWinner = function () {

        var counter = 0;
        var sign = '';
        for (var i = 0; i < cols; i++)
        {
            counter = 0;
            for (var j = 0; j < rows; j++)
            {
                if (this.pola[j][i].value() == '') {
                    sign = '';
                    counter = 0;
//                    break;
                } else if (sign != '' && this.pola[j][i].value() != sign) {
                    sign = this.pola[j][i].value();
                    counter = 0;
//                    break;
                } else {
                    sign = this.pola[j][i].value();
                    counter++;
                }
                if (counter == 5)
                    break;

            }
            if (counter == 5 && sign != '') {
                break;
            }
        }
        if (sign === '')
        {
            for (var i = 0; i < rows; i++)
            {
                counter = 0;
                for (var j = 0; j < cols; j++)
                {


                    if (this.pola[i][j].value() == '') {
                        sign = '';
                        counter = 0;
//                        break;
                    } else if (sign != '' && this.pola[i][j].value() != sign) {
                        sign = this.pola[i][j].value();
                        counter = 1;
//                        break;
                    } else {
                        sign = this.pola[i][j].value();
                        counter++;
                    }
                    if (counter == 5)
                        break;
                }


                if (counter == 5 && sign != '') {
                    break;
                }
            }
        }
        if (counter !== 5 && sign === '')
        {
            for (var i = 0; i < rows; i++)
            {
                if (this.pola[i][i].value() == '') {
                    sign = '';
                    break;
                } else if (sign != '' && this.pola[i][i].value() != sign) {
                    sign = '';
                    break;
                } else
                    sign = this.pola[i][i].value();

            }
        }
        if (counter !== 5 && sign === '')
        {
            for (var i = cols - 1; i >= 0; i--)
            {
                if (this.pola[rows - i - 1][i].value() == '') {
                    sign = '';
                    break;
                } else if (sign != '' && this.pola[rows - i - 1][i].value() != sign) {
                    sign = '';
                    break;
                } else
                    sign = this.pola[rows - i - 1][i].value();

            }
        }
        if (sign != '')
        {
            alert("Wygrana " + sign);
            div.remove();
            me = new plansza(rows, cols);
        }
 var test = document.getElementById("test");
    test.innerHTML = player
    }
    ;
}

function pole(width, height, divPlansza, plansza) {
    var div = document.createElement("div");
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.border = '2px black solid';
    div.style.float = 'left';
    div.style.textAlign = "center";
    div.style.lineHeight = height + "px";
    div.style.cursor = 'pointer';
    div.onclick = function () {
        if (this.innerHTML === '') {
            this.innerHTML = player;
            if (player === "X")
                player = "O";
            else
                player = "X";

        }
        plansza.checkWinner();
    };
    this.value = function () {
        return div.innerHTML;
    };
    divPlansza.append(div);
}

var plan = new plansza(10, 10);
var costaaam = new costam(100,100);