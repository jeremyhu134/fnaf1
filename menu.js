class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
	}
    preload(){
        
    }
    create() {
        var scene = this;
        
       
        
        var backgroundMusic = this.sound.add('menuMusic', {
            loop: true,
            volume: 1
        });
        backgroundMusic.play();
        
        var rand = Math.ceil(Math.random()*4);
        if(rand == 1){
            this.add.image(0,0,"menu").setOrigin(0,0);
        }
        else if(rand == 2){
            this.add.image(0,0,"menu2").setOrigin(0,0);
        }
        else if(rand == 3){
            this.add.image(0,0,"menu3").setOrigin(0,0);
        }
        else {
            this.add.image(0,0,"menu4").setOrigin(0,0);
        }
        
        var staticBg = this.add.sprite(0,0,'static').setOrigin(0,0);
        staticBg.anims.play("staticAction","true");
        staticBg.setAlpha(0.5);
        
        this.add.text(200, 100, "Five\nNights\nat\nFreddy's", {
            fontFamily: "FnafFont",
            fontSize: "32px",
            color: "#ffffff"
        });
        
        var menuArrow = this.add.image(130,0,'menuArrow').setOrigin(0,0);
        menuArrow.setVisible(false);
        
        var newGameButton = this.add.text(200, 400, "New Game", {
            fontFamily: "FnafFont",
            fontSize: "32px",
            color: "#ffffff"
        }).setInteractive();
        newGameButton.on('pointerdown', () => {
            gameState.night = 1;
            var newJobBg = this.add.image(0,0,'newJobBg').setOrigin(0,0).setAlpha(0);
            scene.tweens.add({
                targets: newJobBg,
                alpha: 1,
                duration: 1000, // in milliseconds
                ease: 'Linear'
            });
            scene.time.addEvent({
                delay: 6000, 
                callback: () => {
                    scene.scene.stop("MenuScene");
                    scene.scene.start("NightIntroScene");
                },
                callbackScope: scene 
            });
        });
        newGameButton.on('pointerover', () => {
            menuArrow.setVisible(true);
            menuArrow.y = 410;
        });
        newGameButton.on('pointerout', () => {
            menuArrow.setVisible(false);
        });
        
        
        var continueButton = this.add.text(200, 470, "Continue", {
            fontFamily: "FnafFont",
            fontSize: "32px",
            color: "#ffffff"
        }).setInteractive();
        var nightLabel = this.add.text(200, 510, `Night   ${gameState.night}`, {
            fontFamily: "FnafFont",
            fontSize: "18px",
            color: "#ffffff"
        });
        nightLabel.setVisible(false);
        continueButton.on('pointerdown', () => {
            this.scene.stop("MenuScene");
            this.scene.start("NightIntroScene");
        });
        continueButton.on('pointerover', () => {
            nightLabel.setVisible(true);
            menuArrow.setVisible(true);
            menuArrow.y = 480;
        });
        continueButton.on('pointerout', () => {
            nightLabel.setVisible(false);
            menuArrow.setVisible(false);
        });
        
        if(gameState.night6Unlock == 1){
            var night6Button = this.add.text(200, 540, "6th Night", {
                fontFamily: "FnafFont",
                fontSize: "32px",
                color: "#ffffff"
            }).setInteractive();
            night6Button.on('pointerdown', () => {
                gameState.night = 6;
                this.scene.stop("MenuScene");
                this.scene.start("NightIntroScene");
            });
            night6Button.on('pointerover', () => {
                menuArrow.setVisible(true);
                menuArrow.y = 550;
            });
            night6Button.on('pointerout', () => {
                menuArrow.setVisible(false);
            });
        }
        if(gameState.night7Unlock == 1){
            var night7Button = this.add.text(200, 610, "7th Night", {
                fontFamily: "FnafFont",
                fontSize: "32px",
                color: "#ffffff"
            }).setInteractive();
            night7Button.on('pointerdown', () => {
                gameState.night = 7;
                this.scene.stop("MenuScene");
                this.scene.start("NightIntroScene");
            });
            night7Button.on('pointerover', () => {
                menuArrow.setVisible(true);
                menuArrow.y = 620;
            });
            night7Button.on('pointerout', () => {
                menuArrow.setVisible(false);
            });
        }
        
        
        scene.events.once('shutdown', () => {
            backgroundMusic.stop();
        });
	}
    update(){
        
    }
}