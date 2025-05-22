class ArenaScene extends Phaser.Scene {
    constructor() {
		super({ key: 'ArenaScene' })
	}
    preload(){
        
    }
    create(){
        var scene = this;
        gameState.officeScene = this;
        gameState.gameCamera = this.cameras.main;
        gameState.gameCamera.setBounds(0, 0, 1600, 700);
        gameState.mouse = this.input.activePointer;
        
        this.scene.launch("OfficeUIScene");
        this.scene.bringToTop("OfficeUIScene");
        
        gameState.officeNoise = this.sound.add('officeAmbience', {
            loop: true,
            volume: 0.1
        });
        gameState.officeNoise.play();
        
        gameState.ambience1 = this.sound.add('ambience1', {
            loop: true,
            volume: 1.1
        });
        gameState.ambience1.play();
        
        gameState.ambience2 = this.sound.add('ambience2', {
            loop: true,
            volume: 1
        });
        
        gameState.doorSound = this.sound.add('doorSound', {
            volume: 0.8
        });
        
        gameState.lightSound = this.sound.add('lightHum', {
            volume: 0.8,
            loop: true,
        });
        gameState.cameraFlip = this.sound.add('cameraFlip', {
            volume: 0.8
        });
        gameState.powerDown = this.sound.add('powerDown', {
            volume: 0.8
        });
        
        gameState.breathing = this.sound.add('breathing', {
            volume: 0.8
        });
        
        var jammed = this.sound.add('jammed', {
            volume: 0.8
        });
        
        gameState.officeBg = this.add.sprite(0,0,"officeBg").setOrigin(0,0);
        
        gameState.fan = this.add.sprite(779,294,"officeFan").setOrigin(0,0).setScale(0.97);
        gameState.fan.anims.play('officeFanAction','true');
        
        gameState.leftDoor.sprite = this.add.sprite(70,0,"officeDoor").setOrigin(0,0).setScale(1).setDepth(2);
        
        gameState.rightDoor.sprite = this.add.sprite(1300-27,0,"officeDoor").setOrigin(0,0).setScale(1).setDepth(2);
        gameState.rightDoor.sprite.flipX = true;
        
        gameState.rightLight = this.add.sprite(1000,0,"rightLight").setOrigin(0,0).setScale(1).setDepth(1);
        gameState.rightLight.setVisible(false);
        
        gameState.leftLight = this.add.sprite(0,0,"leftLight").setOrigin(0,0).setScale(1).setDepth(1);
        gameState.leftLight.setVisible(false);
        
        gameState.leftButtons = this.add.sprite(-10,250,"officeButtons").setOrigin(0,0).setScale(1).setDepth(2);
        gameState.rightButtons = this.add.sprite(1480,250,"officeButtons2").setOrigin(0,0).setScale(1).setDepth(2);
        
        //DOOR BUTTONS
        gameState.leftDoorButton = this.add.sprite(10,274,"invisibleButton").setOrigin(0,0).setScale(1.2).setInteractive();
        gameState.leftDoorButton.on('pointerdown', () => {
            if(gameState.leftDoor.jammed == 0){
                if(gameState.leftDoor.moving == 0){
                    if(gameState.leftDoor.on == 0){
                        gameState.leftDoor.close(scene);
                    }else if(gameState.leftDoor.on == 1){
                        gameState.leftDoor.open(scene);
                    }
                }
            }else{
                jammed.play();
            }
        });
        
        gameState.rightDoorButton = this.add.sprite(1490,274,"invisibleButton").setOrigin(0,0).setScale(1.2).setInteractive();
        gameState.rightDoorButton.on('pointerdown', () => {
            if(gameState.rightDoor.jammed == 0){
                if(gameState.rightDoor.moving == 0){
                    if(gameState.rightDoor.on == 0){
                        gameState.rightDoor.close(scene);
                    }else if(gameState.rightDoor.on == 1){
                        gameState.rightDoor.open(scene);
                    }
                }
            }else{
                jammed.play();
            }
        });
        
        
        //LIGHTS BUTTONS
        gameState.leftLightButton = this.add.sprite(10,360,"invisibleButton").setOrigin(0,0).setScale(1.2).setInteractive();
        gameState.rightLightButton = this.add.sprite(1490,360,"invisibleButton").setOrigin(0,0).setScale(1.2).setInteractive();
        
        gameState.leftLightButton.on('pointerdown', () => {
            if(gameState.leftDoor.jammed == 0){
                if(gameState.leftLights.on == 0){
                    if(gameState.rightLights.on == 1){
                        gameState.rightLights.close(scene);
                    }
                    gameState.leftLights.open(scene);
                }else{
                    gameState.leftLights.close(scene);
                }
            }else{
                jammed.play();
            }
        });
        gameState.rightLightButton.on('pointerdown', () => {
            if(gameState.rightDoor.jammed == 0){
                if(gameState.rightLights.on == 0){
                    if(gameState.leftLights.on == 1){
                        gameState.leftLights.close(scene);
                    }
                    gameState.rightLights.open(scene);
                }else{
                    gameState.rightLights.close(scene);
                }
            }else{
                jammed.play();
            }
        });
        
        
        
        scene.events.once('shutdown', () => {
            gameState.officeNoise.stop();
            gameState.ambience1.stop();
            gameState.ambience2.stop();
            gameState.lightSound.stop();
            gameState.doorSound.stop();
            gameState.powerDown.stop();
            gameState.breathing.stop();
        });
    }
    
    
    update(){
        if(gameState.mouse.x < 300){
            gameState.gameCamera.scrollX -= 10;
        }else if(gameState.mouse.x > 1000){
            gameState.gameCamera.scrollX += 10;
        }
    }
}