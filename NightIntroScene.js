class NightIntroScene extends Phaser.Scene {
    constructor() {
		super({ key: 'NightIntroScene' })
	}
    preload(){
        
    }
    create(){
        var scene = this;
        
        var glitchBg = this.add.sprite(0,0,'glitch').setOrigin(0,0);
        glitchBg.anims.play("glitchAction","true");
        this.add.text(650, 300, "12:00   AM", {
            fontFamily: "FnafFont",
            fontSize: "32px",
            color: "#ffffff"
        }).setOrigin(0.5,0.5);
        var nightText = this.add.text(650, 360, ` `, {
            fontFamily: "FnafFont",
            fontSize: "32px",
            color: "#ffffff"
        }).setOrigin(0.5,0.5);
        if(gameState.night == 1){
            nightText.setText(`1st   Night`);
        }else if(gameState.night == 2){
            nightText.setText(`2nd   Night`);
        }else if(gameState.night == 3){
            nightText.setText(`3rd   Night`);
        }else if(gameState.night > 3){
            nightText.setText(`${gameState.night}th   Night`);
        }
        
        var blip = this.sound.add('blip', {
            loop: false,
            volume: 1
        });
        blip.play();
        
        this.time.addEvent({
            delay: 5000, // delay in milliseconds (2 seconds)
            callback: () => {
                scene.scene.stop("NightIntroScene");
                scene.scene.start("ArenaScene");
            },
            callbackScope: this // make sure "this" refers to the scene
        });
    }
    
    
    update(){
        
    }
}