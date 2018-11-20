// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		isGameStarted: false,
        playerLife: 100,
        monsterLife: 100,
        turnCounter:0,
        turnLogs: [],
        maxAttack: 10,
        defaultHealing: 10,
	},
    computed: {
        playerBarStyle: function () {
            return this.getBarStyleAccordingScore(this.playerLife);
        },
        monsterBarStyle: function () {
            return this.getBarStyleAccordingScore(this.monsterLife);
        }
    },
    methods: {
        startGame: function () {
            this.isGameStarted = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.turnCounter = 0;
            //this.turnLogs.;
            this.turnLogs.splice(0, this.turnLogs.length);
        },
        stopGame: function () {
            this.isGameStarted = false;
        },
        attack: function () {
            this.genericAttack(this.maxAttack, this.maxAttack);
        },
        specialAttack: function () {
            this.genericAttack(this.maxAttack * 2, this.maxAttack);
        },
        genericAttack: function (playerMaxAttack, monsterMaxAttack) {
            //Player attack to monster
            var monsterDamage = this.getRandomInt(playerMaxAttack);
            //Monster Attack to player
            var playerDamage = this.getRandomInt(monsterMaxAttack );
            //Update score
            this.updateScore(monsterDamage, playerDamage);
            //Log attacks
            this.logAttack(monsterDamage, playerDamage);
            //Shows winner if there is.
            this.showsWinner();
        },
        heal: function () {
            //Monster Attack to player
            var playerDamage = this.getRandomInt(this.maxAttack );
            //Update score
            this.updateScore(0, playerDamage - this.defaultHealing);
            //Update log
            this.logHealing(this.defaultHealing, playerDamage)
        },
        giveUp: function () {
            this.stopGame();
        },
        updateScore: function (monsterDamage, playerDamage) {
            this.turnCounter ++;
            this.playerLife -= playerDamage;            
            this.monsterLife -= monsterDamage;
            if (this.playerLife > 100) this.playerLife = 100;
            if (this.playerLife < 0) this.playerLife = 0;
            if (this.monsterLife < 0) this.monsterLife = 0;
        },
        logAttack: function (monsterDamage, playerDamage) {
            this.turnLogs.unshift ({'id': 'p' + this.actionCounter, 'class': 'player-turn', 'text': 'PLAYER HITS MONSTER FOR ' +  monsterDamage});
            this.turnLogs.unshift ({'id': 'm' + this.actionCounter, 'class': 'monster-turn', 'text': 'MONSTER HITS PLAYER FOR ' +  playerDamage});
        },
        logHealing: function (healingScore, playerDamage) {
            this.turnLogs.unshift ({'id': 'p' + this.actionCounter, 'class': 'player-turn', 'text': 'PLAYER HEALS HIMSELF FOR ' +  healingScore});
            this.turnLogs.unshift ({'id': 'm' + this.actionCounter, 'class': 'monster-turn', 'text': 'MONSTER HITS PLAYER FOR ' +  playerDamage});
        },
        showsWinner: function (){
            var showWinner = false;
            var message = "";
            if (this.playerLife > 0 && this.monsterLife <= 0) {
                showWinner = true;
                message = "Player beat monster.";
            } else if (this.playerLife <= 0 && this.monsterLife > 0) {
                showWinner = true;
                message = "Monster beat player.";                
            } else if (this.playerLife <= 0 && this.monsterLife <= 0) {
                showWinner = true;
                message= "There is a draw.";
            }
            
            if (showWinner && window.confirm(message)) { 
                this.stopGame();
            }
        },
        getBarStyleAccordingScore: function (life) {
            return {
                'background-color': 'green',
                margin: 0,
                color: 'white',
                width: life + '%'
            };
        },
        getRandomInt: function (max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        
    }
    
});