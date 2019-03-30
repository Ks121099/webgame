new Vue({
    el: '#app',
    data: {
        player: 0,
        player2: 0,
        isgame: false,
        turn: true,
        log: []
    },
    methods: {
        newg: function (event) {
            this.isgame = true
            this.player = 100
            this.player2 = 100
        },
        att: function (event) {
            var x=this.dam(15,20)
            if (!this.turn) {
              this.player -= x
              this.log.unshift({
                  text: 'Player 2 hits Player 1 for '+ x
              })
              this.che(this.player)
              this.turn = true
            }
            else {
              this.player2 -= x
              this.log.unshift({
                text: 'Player 1 hits Player 2 for '+ x
            })
            this.che(this.player2)
              this.turn = false;
            }
        },
        spatt: function (event) {
            var x=this.dam(20,30)
            if (!this.turn) {
                this.player -= x
                this.log.unshift({
                    text: 'Player 2 hits Player 1 for '+ x
                })
                this.che(this.player)
                this.turn = true
            }
            else {
                this.player2 -= x
                this.log.unshift({
                    text: 'Player 1 hits Player 2 for '+ x
                })
                this.che(this.player2)
                this.turn = false
            }
        },
        hea: function (event) {
            var x=this.dam(10,17)
            if (this.turn) {
                this.player += x
                this.log.unshift({
                    text: 'Player 1 heals for '+ x
                })
                this.che(this.player)
                this.turn = false
            }
            else {
                this.player2 += x
                this.log.unshift({
                    text: 'Player 2 heals for '+ x
                })
                this.che(this.player2)
                this.turn = true
            }
        },
        gu: function (event) {
            if (this.turn) {
            this.player = 0
            alert("Player 2 won the Game")
            this.log=[]
            this.isgame=false
            }
            else {
            this.player2 = 0
            alert("Player 1 won the Game")
            this.log=[]
            this.isgame=false
            }
        },
        dam: function(min,max){
            return Math.max(Math.floor(Math.random()*max +1),min)
        },
        che: function(x){
            if(x<=0){
                if(this.turn){
                alert("Player 1 won the Game")
                this.player2=0
                this.log=[]
                this.isgame=false
                }
                else{
                    alert("Player 2 won the Game")
                    this.player=0
                    this.log=[]
                    this.isgame=false
                }
            }
            if(x>=100){
                if(!this.turn){
                alert("Maximum Health Reached")
                this.player2=100
                }
                else{
                    alert("Maximum Health Reached")
                    this.player=100
                }
            }
        }
    }
})