class OfficeUIScene extends Phaser.Scene {
    constructor() {
		super({ key: 'OfficeUIScene' })
	}
    preload(){
        
    }
    create(){
        var scene = this;
        gameState.uiscene = this;
        
        var timeText = this.add.text(1200, 10, "12   AM", {
            fontFamily: "FnafFont",
            fontSize: "20px",
            color: "#ffffff"
        }).setOrigin(0,0);
        
        var nightText = this.add.text(1210, 42, `Night ${gameState.night}`, {
            fontFamily: "FnafFont",
            fontSize: "15px",
            color: "#ffffff"
        }).setOrigin(0,0);
        
        var powerText = this.add.text(10, 640, `Power left:  ${gameState.power}%`, {
            fontFamily: "FnafFont",
            fontSize: "15px",
            color: "#ffffff"
        }).setOrigin(0,0);
        
        var usageText = this.add.text(10, 670, `Usage:`, {
            fontFamily: "FnafFont",
            fontSize: "15px",
            color: "#ffffff"
        }).setOrigin(0,0);
        gameState.powerBars = this.add.sprite(75,665,"powerBars").setOrigin(0,0);
        
        
        if(gameState.night == 6){
            gameState.animatronics.springtrap.activate(scene,16);
            gameState.animatronics.bonnie.position = -2;
            gameState.animatronics.chica.position = -2;
            gameState.animatronics.foxy.position = -2;
            gameState.animatronics.freddy.position = -2;
            gameState.animatronics.springtrap.position = 3;
        }
        scene.time.addEvent({
            delay: 1000, 
            callback: () => {
                gameState.time += 1;
                if(gameState.time == 1 && gameState.power > 0){
                    if(gameState.night == 1){
                        gameState.animatronics.bonnie.activate(scene,1);
                        gameState.animatronics.chica.activate(scene,3);
                        gameState.animatronics.foxy.activate(scene,1);
                    }else if(gameState.night == 2){
                        gameState.animatronics.bonnie.activate(scene,7);
                        gameState.animatronics.chica.activate(scene,7);
                        gameState.animatronics.foxy.activate(scene,2);
                    }else if(gameState.night == 3){
                        gameState.animatronics.bonnie.activate(scene,6);
                        gameState.animatronics.chica.activate(scene,6);
                        gameState.animatronics.foxy.activate(scene,4);
                    }else if(gameState.night == 4){
                        gameState.animatronics.freddy.activate(scene,4);
                        gameState.animatronics.bonnie.activate(scene,10);
                        gameState.animatronics.chica.activate(scene,2);
                        gameState.animatronics.chica.position = 2;
                        gameState.animatronics.foxy.activate(scene,4);
                    }else if(gameState.night == 5){
                        gameState.animatronics.freddy.activate(scene,8);
                        gameState.animatronics.bonnie.activate(scene,8);
                        gameState.animatronics.chica.activate(scene,8);
                        gameState.animatronics.foxy.activate(scene,8);
                    }else if(gameState.night == 6){
                        
                    }
                }
                
                else if(gameState.time == 90 && gameState.power > 0){
                    timeText.setText("  1 AM");
                    if(gameState.night == 1){
                        gameState.animatronics.bonnie.ai = 6;
                    }else if(gameState.night == 2){
                        gameState.animatronics.bonnie.ai = 8;
                        gameState.animatronics.chica.ai = 8;
                    }else if(gameState.night == 3){
                        gameState.animatronics.bonnie.ai = 7;
                        gameState.animatronics.chica.ai = 7;
                        gameState.animatronics.foxy.ai = 7;
                    }else if(gameState.night == 4){
                        gameState.animatronics.freddy.ai = 7;
                    }else if(gameState.night == 5){
                        gameState.animatronics.bonnie.ai = 9;
                        gameState.animatronics.chica.ai = 9;
                        gameState.animatronics.foxy.ai = 9;
                        gameState.animatronics.freddy.ai = 9;
                    }
                }
                
                else if(gameState.time == 180 && gameState.power > 0){
                    timeText.setText("  2 AM");
                    if(gameState.night == 1){
                        gameState.animatronics.bonnie.ai = 7;
                    }else if(gameState.night == 2){
                        gameState.animatronics.bonnie.ai = 9;
                        gameState.animatronics.chica.ai = 9;
                    }else if(gameState.night == 3){
                        gameState.animatronics.bonnie.ai = 8;
                        gameState.animatronics.chica.ai = 8;
                        gameState.animatronics.foxy.ai = 10;
                    }else if(gameState.night == 4){
                        gameState.animatronics.freddy.ai = 8;
                    }else if(gameState.night == 5){
                        gameState.animatronics.bonnie.ai = 11;
                        gameState.animatronics.chica.ai = 11;
                        gameState.animatronics.foxy.ai = 11;
                        gameState.animatronics.freddy.ai = 11;
                    }else if(gameState.night == 6){
                        gameState.animatronics.springtrap.ai = 18;
                    }
                }
                
                else if(gameState.time == 270 && gameState.power > 0){
                    timeText.setText("  3 AM");
                    if(gameState.night == 1){
                        gameState.animatronics.bonnie.ai = 8;
                    }else if(gameState.night == 2){
                        gameState.animatronics.bonnie.ai = 10;
                        gameState.animatronics.chica.ai = 10;
                    }else if(gameState.night == 3){
                        gameState.animatronics.foxy.ai = 13;
                    }else if(gameState.night == 4){
                        gameState.animatronics.freddy.ai = 10;
                    }else if(gameState.night == 5){
                        gameState.animatronics.bonnie.ai = 13;
                        gameState.animatronics.chica.ai = 13;
                        gameState.animatronics.foxy.ai = 13;
                        gameState.animatronics.freddy.ai = 13;
                    }
                }
                
                else if(gameState.time == 360 && gameState.power > 0){
                    timeText.setText("  4 AM");
                    if(gameState.night == 1){
                        gameState.animatronics.bonnie.ai = 9;
                    }else if(gameState.night == 2){
                        gameState.animatronics.bonnie.ai = 15;
                        gameState.animatronics.chica.ai = 3;
                    }else if(gameState.night == 3){
                        gameState.animatronics.bonnie.ai = 9;
                        gameState.animatronics.chica.ai = 9;
                        gameState.animatronics.foxy.ai = 16;
                    }else if(gameState.night == 4){
                        gameState.animatronics.chica.ai = 8;
                        gameState.animatronics.freddy.ai = 15;
                    }else if(gameState.night == 5){
                        gameState.animatronics.bonnie.ai = 15;
                        gameState.animatronics.chica.ai = 15;
                        gameState.animatronics.foxy.ai = 15;
                        gameState.animatronics.freddy.ai = 15;
                    }else if(gameState.night == 6){
                        gameState.animatronics.springtrap.ai = 19;
                    }
                }
                
                else if(gameState.time == 450 && gameState.power > 0){
                    timeText.setText("  5 AM");
                    if(gameState.night == 1){
                        gameState.animatronics.bonnie.ai = 10;
                    }else if(gameState.night == 2){
                        gameState.animatronics.bonnie.ai = 3;
                        gameState.animatronics.chica.ai = 15;
                    }else if(gameState.night == 3){
                        gameState.animatronics.bonnie.ai = 10;
                        gameState.animatronics.chica.ai = 10;
                        gameState.animatronics.foxy.ai = 19;
                    }else if(gameState.night == 4){
                        gameState.animatronics.freddy.ai = 17;
                    }else if(gameState.night == 5){
                        gameState.animatronics.bonnie.ai = 18;
                        gameState.animatronics.chica.ai = 18;
                        gameState.animatronics.foxy.ai = 18;
                        gameState.animatronics.freddy.ai = 18;
                    }
                }
                
                else if(gameState.time == 540){
                    scene.scene.stop("OfficeUIScene");
                    scene.scene.stop("CameraScene");
                    scene.scene.stop("ArenaScene");
                    scene.scene.start("WinScene");
                }
            },
            callbackScope: scene ,
            repeat: -1,
        });
        
        gameState.powerLoop = scene.time.addEvent({
            delay: 100, 
            callback: () => {
                if(gameState.power > 0){
                    if(gameState.usage == 1){
                        gameState.power -= 0.0105;
                    }else if(gameState.usage == 2){
                        gameState.power -= 0.0208;
                    }else if(gameState.usage == 3){
                        gameState.power -= 0.03125;
                    }else if(gameState.usage == 4){
                        gameState.power -= 0.0417;
                    }
                    powerText.setText(`Power left:  ${Math.floor(gameState.power)}%`);
                }else{
                    gameState.powerLoop.destroy();
                    gameState.initiatePowerDown(scene);
                }
            },
            callbackScope: scene ,
            repeat: -1,
        });
        
        
        gameState.cameraButton = this.add.sprite(600,660,"cameraButton").setOrigin(0.5,0.5).setInteractive();
        gameState.cameraButton.on('pointerover', () => {
            if(gameState.camera.moving == 0){
                if(gameState.camera.on == 0){
                    gameState.camera.open(scene);
                }else {
                    gameState.camera.close(scene);
                }
            }
        });
        
        gameState.UIElements = [timeText,nightText,powerText,usageText,gameState.cameraButton,gameState.powerBars];
    }
    
    
    update(){
        if(gameState.usage == 1){
            gameState.powerBars.setFrame(0);
        }else if(gameState.usage == 2){
            gameState.powerBars.setFrame(1);
        }else if(gameState.usage == 3){
            gameState.powerBars.setFrame(2);
        }else if(gameState.usage == 4){
            gameState.powerBars.setFrame(3);
        }
    }
}