class CameraScene extends Phaser.Scene {
    constructor() {
		super({ key: 'CameraScene' })
	}
    preload(){
        
    }
    create(){
        var scene = this;
        
        var cameraView = this.add.sprite(0,0,"cam1b1c1f1").setOrigin(0,0).setDepth(0);
        scene.scene.bringToTop("officeUIScene");
        
        this.add.sprite(900,300,"cameraMap").setOrigin(0,0).setDepth(2);
        
        gameState.cameraStaticBg = this.add.sprite(0,0,'static').setOrigin(0,0).setDepth(1);
        gameState.cameraStaticBg.anims.play("staticAction","true");
        gameState.cameraStaticBg.setAlpha(0.5);
        
        gameState.cameraGarble = this.sound.add('cameraGarble', {
            volume: 1
        });
        
        gameState.rightLights.close(scene);
        gameState.leftLights.close(scene);
        
        var cam1 = this.add.sprite(1000,325,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam2 = this.add.sprite(970,375,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam3 = this.add.sprite(880,400,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam4 = this.add.sprite(1225,400,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam5 = this.add.sprite(945,450,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam6 = this.add.sprite(1215,535,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam7 = this.add.sprite(925,535,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam8 = this.add.sprite(1005,575,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam9 = this.add.sprite(1005,617,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam10 = this.add.sprite(1110,575,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cam11 = this.add.sprite(1110,617,"cameraSelect").setOrigin(0,0).setDepth(2).setInteractive();
        
        var cams = [cam1,cam2,cam3,cam4,cam5,cam6,cam7,cam8,cam9,cam10,cam11];
        gameState.camera.refresh(scene,cameraView,cams);
        
        cam1.on('pointerdown', () => {
            if(gameState.camera.position != 1){
                gameState.camera.position = 1;
                gameState.camera.refresh(scene,cameraView,cams);
            } 
        });
        cam2.on('pointerdown', () => {
            if(gameState.camera.position != 2){
                gameState.camera.position = 2;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam3.on('pointerdown', () => {
            if(gameState.camera.position != 3){
                gameState.camera.position = 3;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam4.on('pointerdown', () => {
            if(gameState.camera.position != 4){
                gameState.camera.position = 4;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam5.on('pointerdown', () => {
            if(gameState.camera.position != 5){
                gameState.camera.position = 5;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam6.on('pointerdown', () => {
            if(gameState.camera.position != 6){
                gameState.camera.position = 6;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam7.on('pointerdown', () => {
            if(gameState.camera.position != 7){
                gameState.camera.position = 7;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam8.on('pointerdown', () => {
            if(gameState.camera.position != 8){
                gameState.camera.position = 8;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam9.on('pointerdown', () => {
            if(gameState.camera.position != 9){
                gameState.camera.position = 9;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam10.on('pointerdown', () => {
            if(gameState.camera.position != 10){
                gameState.camera.position = 10;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        cam11.on('pointerdown', () => {
            if(gameState.camera.position != 11){
                gameState.camera.position = 11;
                gameState.camera.refresh(scene,cameraView,cams);
            }
        });
        
        scene.events.once('shutdown', () => {
            gameState.cameraGarble.stop();
        });
    }
    
    
    update(){
        
    }
}