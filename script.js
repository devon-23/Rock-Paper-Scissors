class Game {
    constructor(player) {
        this.player = player
        this.choices = ["Rock", "Paper", "Scissors"]
        this.choice = Math.floor(Math.random() * this.choices.length)
    }

    winner() {
        var win;
        var display
        if (this.player === this.choices[this.choice]) {
            win = "draw";
        } else if (this.player == 'Rock') {
            if (this.choices[this.choice] === 'Paper') {
                win = "computer"
            } else {
                win = 'you'
            }
        } else if (this.player == 'Scissors') {
            if (this.choices[this.choice] === 'Rock') {
                win = 'computer'
            } else {
                win = 'you'
            }
        } else if (this.player == 'Paper') {
            if (this.choices[this.choice] === 'Scissors') {
                win = 'computer'
            } else {
                win = 'you'
            }
        }

        switch (win) {
            case 'draw':
                display = "It's a draw!"
                break;
            case 'computer':
                display = "Computer wins!"
                break;
            case 'you':
                display = "You win!"
                break;
            default:
                break;
        }
        document.getElementById('winner').innerHTML = display;
    }

    picture() {
        //player1
        switch (this.player) {
            case 'Rock':
                var srcPic1 = "/rps/pictures/rock.png"
                break;
            case 'Paper':
                var srcPic1 = "/rps/pictures/paper.png"
                break;
            case 'Scissors':
                var srcPic1 = "/rps/pictures/scissors.png"
                break;
            default:
                break;
        }

        //computer
        
        switch (this.choices[this.choice]) {
            case 'Rock':
                var srcPic2 = "/rps/pictures/rock2.png"
                break;
            case 'Paper':
                var srcPic2 = "/rps/pictures/paper2.png"
                break;
            case 'Scissors':
                var srcPic2 = "/rps/pictures/scissors2.png"
                break;
            default:
                break;
        }

        document.getElementById("player").src = srcPic1;
        document.getElementById("computer").src = srcPic2;

        this.winner()
    }

}

const choiceButton = document.querySelectorAll('[data-choice]')

choiceButton.forEach(button => {
    button.addEventListener('click', () => {
        const game = new Game(button.innerText)
        //console.log(button.innerText)
        game.picture()
    })
})