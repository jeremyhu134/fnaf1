class LoseScene extends Phaser.Scene {
    constructor() {
		super({ key: 'LoseScene' })
	}
    preload(){
        
    }
    create(){
        var scene = this;
        
        this.add.image(0,0,"gameoverBg").setOrigin(0,0);
        var staticBg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(1);
        staticBg.anims.play("staticAction","true");
        staticBg.setAlpha(0.5);
        
        var backgroundMusic = this.sound.add('deathStatic', {
            volume: 1
        });
        backgroundMusic.play();
        
        scene.tweens.add({
            targets: staticBg,
            alpha: { from: 1, to: 0 },
            duration: 2000,
        });
        
        this.add.text(1050, 650, "GAME OVER", {
            fontFamily: "FnafFont",
            fontSize: "40px",
            color: "#ffffff"
        });
        
        this.time.addEvent({
            delay: 7000,
            callback: () => {
                backgroundMusic.stop();
                scene.scene.stop("LoseScene");
                scene.scene.start("MenuScene");
            },
            callbackScope: scene
        });
        
    }
    
    
    update(){
        
    }
}