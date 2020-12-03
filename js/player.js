class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
        this.rank=0;
    }
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount=data.val();
        })
        
    }

    
    updateCount(count){
        console.log(count)
        database.ref("/").update({

            "playerCount":count

        })

    }
    update(){
        var playerindex="players/player"+this.index;
        database.ref(playerindex).set({
            "name":this.name,
            "distance":this.distance
            
        })

    }

    getCarsAtEnd(){
        database.ref("carsAtEnd").on("value",(data)=>{
            this.rank=data.val()
        });
    }

    updateCars(rank){
        database.ref("/").update({
            "carsAtEnd":rank
        });
    }

    static getPlayersInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers=data.val();
        })
    }

    
}