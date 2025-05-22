class WinScene extends Phaser.Scene {
    constructor() {
		super({ key: 'WinScene' })
	}
    preload(){
        
    }
    create(){
        var scene = this;
        
        var anim = this.add.sprite(540,300,"6amAnim").setOrigin(0,0).setScale(2);
        
        this.add.text(650, 300, `AM`, {
            fontFamily: "FnafFont",
            fontSize: "80px",
            color: "#ffffff"
        }).setOrigin(0,0);
        
        this.add.rectangle(500, 100, 500, 200, 0x000000).setOrigin(0, 0);
        this.add.rectangle(500, 390, 500, 200, 0x000000).setOrigin(0, 0);
        
        this.tweens.add({
            targets: anim, 
            y: anim.y - 95,
            duration: 8000,
            ease: 'Linear' 
        });
        
        var sixam = this.sound.add('6am', {
            volume: 0.8
        });
        sixam.play();
        
        this.time.addEvent({
            delay: 12000, 
            callback: () => {
                sixam.stop();
                scene.scene.stop("WinScene");
                scene.scene.start("MenuScene");
            },
            callbackScope: scene 
        });
        if(gameState.night < 5){
            gameState.night++; 
        }else if (gameState.night == 5){
            gameState.night6Unlock = 1;
        }else if(gameState.night == 6){
            gameState.night = 5;
            gameState.night7Unlock = 1;
        }else if(gameState.night == 7){
            gameState.night = 5;
        }
        gameState.save();
    }
    
    
    update(){
        
    }
}