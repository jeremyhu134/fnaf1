const config = {
    type: Phaser.AUTO,
    width: 1300,
    height: 700,
    backgroundColor: "000000",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            enableBody: true,
            debug: true
        }
    },
    scene:[IntroGameScene,MenuScene,NightIntroScene,ArenaScene,OfficeUIScene,CameraScene,WinScene,LoseScene],
    scale: {
        zoom: 1,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);

let gameState = {
    night: 6,
    time: 0,
    power: 100,
    usage: 1,
    
    rightDoor: {
        sprite: null,
        on: 0,
        moving: 0,
        jammed: 0,
        open:function(scene){
            gameState.rightDoor.sprite.anims.play("officeDoorOpen","true");
            gameState.rightDoor.on = 0;
            gameState.usage--;
            gameState.doorSound.play();
            gameState.doorMoving(scene,1);
            gameState.updateOfficeButtons(scene);
        },
        close: function(scene){
            gameState.rightDoor.sprite.anims.play("officeDoorClose","true");
            gameState.rightDoor.on = 1;
            gameState.usage++;
            gameState.doorSound.play();
            gameState.doorMoving(scene,1);
            gameState.updateOfficeButtons(scene);
        },
    },
    
    rightLights:{
        on: 0,
        open: function(scene){
            if(gameState.rightLights.on == 0){
                gameState.rightLights.on = 1;
                if(gameState.animatronics.chica.position == 0){
                    gameState.rightLight.setFrame(1);
                }else{
                    gameState.rightLight.setFrame(0);
                }
                gameState.rightLight.setVisible(true);
                gameState.lightSound.play();
                gameState.usage++;
                gameState.updateOfficeButtons(scene);
            }
        },
        close: function(scene){
            if(gameState.rightLights.on == 1){
                gameState.rightLights.on = 0;
                gameState.rightLight.setVisible(false);
                gameState.lightSound.stop();
                gameState.usage--;
                gameState.updateOfficeButtons(scene);
            }
        }
    },
    
    leftDoor: {
        sprite: null,
        on: 0,
        moving: 0,
        jammed: 0,
        open:function(scene){
            gameState.leftDoor.sprite.anims.play("officeDoorOpen","true");
            gameState.leftDoor.on = 0;
            gameState.usage--;
            gameState.doorSound.play();
            gameState.doorMoving(scene,0);
            gameState.updateOfficeButtons(scene);
        },
        close: function(scene){
            gameState.leftDoor.sprite.anims.play("officeDoorClose","true");
            gameState.leftDoor.on = 1;
            gameState.usage++;
            gameState.doorSound.play();
            gameState.doorMoving(scene,0);
            gameState.updateOfficeButtons(scene);
        },
    },
    
    leftLights:{
        on: 0,
        open: function(scene){
            if(gameState.leftLights.on == 0){
                gameState.leftLights.on = 1;
                if(gameState.animatronics.bonnie.position == 0){
                    gameState.leftLight.setFrame(1);
                }else{
                    gameState.leftLight.setFrame(0);
                }
                gameState.leftLight.setVisible(true);
                gameState.lightSound.play();
                gameState.usage++;
                gameState.updateOfficeButtons(scene);
            }
        },
        close: function(scene){
            if(gameState.leftLights.on == 1){
                gameState.leftLights.on = 0;
                gameState.leftLight.setVisible(false);
                gameState.lightSound.stop();
                gameState.usage--;
                gameState.updateOfficeButtons(scene);
            }
        }
    },
    
    camera:{
        moving: 0,
        on: 0,
        position: 1,
        open: function(scene){
            var cam = scene.add.sprite(0,0,"cameraMonitor").setOrigin(0,0);
            cam.anims.play("cameraMonitorOpenAction","true");
            gameState.camera.moving = 1;
            gameState.cameraFlip.play();
            scene.time.addEvent({
                delay: 400, 
                callback: () => {
                    gameState.camera.moving = 0;
                    gameState.camera.on = 1;
                    gameState.usage++;
                    gameState.officeNoise.stop();
                    cam.destroy();
                    scene.scene.launch("CameraScene");
                },
                callbackScope: scene 
            });
        },
        close: function(scene){
            var cam = scene.add.sprite(0,0,"cameraMonitor").setOrigin(0,0);
            cam.anims.play("cameraMonitorCloseAction","true");
            gameState.camera.moving = 1;
            gameState.cameraFlip.play();
            scene.scene.stop("CameraScene");
            gameState.usage--;
            gameState.officeNoise.play();
            scene.time.addEvent({
                delay: 400, 
                callback: () => {
                    gameState.camera.moving = 0;
                    gameState.camera.on = 0;
                    cam.destroy();
                },
                callbackScope: scene 
            });
        },
        refresh: function(scene,cameraSprite,cams){
            for(var i = 0; i < cams.length; i++){
                cams[i].setFrame(0);
            }
            gameState.cameraStaticBg.setAlpha(0.5);
            gameState.cameraGarble.stop();
            cameraSprite.anims.stop();
            if(gameState.camera.position == 1){
                cams[0].setFrame(1);
                if(gameState.animatronics.bonnie.position == 1 && gameState.animatronics.chica.position == 1 && gameState.animatronics.freddy.position == 1){
                    cameraSprite.setTexture("cam1b1c1f1");
                }else if(gameState.animatronics.bonnie.position == 1 && gameState.animatronics.chica.position != 1 && gameState.animatronics.freddy.position == 1){
                    cameraSprite.setTexture("cam1b1c0f1");
                }else if(gameState.animatronics.bonnie.position != 1 && gameState.animatronics.chica.position == 1 && gameState.animatronics.freddy.position == 1){
                    cameraSprite.setTexture("cam1b0c1f1");
                }else if(gameState.animatronics.bonnie.position != 1 && gameState.animatronics.chica.position != 1 && gameState.animatronics.freddy.position == 1){
                    cameraSprite.setTexture("cam1b0c0f1");
                }else if(gameState.animatronics.bonnie.position != 1 && gameState.animatronics.chica.position != 1 && gameState.animatronics.freddy.position != 1){
                    cameraSprite.setTexture("cam1b0c0f0");
                }
                
            }else if(gameState.camera.position == 2){
                cams[1].setFrame(1);
                if(gameState.animatronics.bonnie.position == 2 && gameState.animatronics.chica.position == 2 && gameState.animatronics.freddy.position == 2){
                    cameraSprite.setTexture("cam2b1c1f1");
                }else if(Math.floor(gameState.animatronics.bonnie.position == 2) && gameState.animatronics.chica.position != 2 && gameState.animatronics.freddy.position != 2){
                    if(gameState.animatronics.bonnie.position == 2.5){
                        cameraSprite.setTexture("cam2b12c0f0");
                    }else{
                        cameraSprite.setTexture("cam2b1c0f0");
                    }
                }else if(gameState.animatronics.bonnie.position == 2 && gameState.animatronics.chica.position == 2 && gameState.animatronics.freddy.position != 2){
                    cameraSprite.setTexture("cam2b1c1f0");
                }else if(gameState.animatronics.bonnie.position == 2 && gameState.animatronics.chica.position != 2 && gameState.animatronics.freddy.position == 2){
                    cameraSprite.setTexture("cam2b1c0f1");
                }else if(gameState.animatronics.bonnie.position != 2 && gameState.animatronics.chica.position == 2 && gameState.animatronics.freddy.position == 2){
                    cameraSprite.setTexture("cam2b0c1f1");
                }else if(gameState.animatronics.bonnie.position != 2 && gameState.animatronics.chica.position != 2 && gameState.animatronics.freddy.position == 2){
                    cameraSprite.setTexture("cam2b0c0f1");
                }else if(gameState.animatronics.bonnie.position != 2 && gameState.animatronics.chica.position == 2 && gameState.animatronics.freddy.position != 2){
                    cameraSprite.setTexture("cam2b0c1f0");
                }else if(gameState.animatronics.bonnie.position != 2 && gameState.animatronics.chica.position != 2 && gameState.animatronics.freddy.position != 2){
                    cameraSprite.setTexture("cam2b0c0f0");
                }
            }else if(gameState.camera.position == 3){
                cams[2].setFrame(1);
                if(gameState.animatronics.bonnie.position == 3.5){
                    cameraSprite.setTexture("cam3b12");
                }else if(gameState.animatronics.bonnie.position == 3){
                    cameraSprite.setTexture("cam3b1");
                }else if(gameState.animatronics.bonnie.position != 3){
                    cameraSprite.setTexture("cam3b0");
                }
            }else if(gameState.camera.position == 4){
                cams[3].setFrame(1);
                if(gameState.animatronics.chica.position != 4 && gameState.animatronics.freddy.position != 4){
                    cameraSprite.setTexture("cam4c0f0");
                }else if(gameState.animatronics.chica.position == 4 && gameState.animatronics.freddy.position != 4){
                    cameraSprite.setTexture("cam4c1f0");
                }else if(gameState.animatronics.chica.position != 4 && gameState.animatronics.freddy.position == 4){
                    cameraSprite.setTexture("cam4c0f1");
                }else if(gameState.animatronics.chica.position == 4 && gameState.animatronics.freddy.position == 4){
                    cameraSprite.setTexture("cam4c1f1");
                }
            }else if(gameState.camera.position == 5){
                cams[4].setFrame(1);
                if(gameState.animatronics.foxy.position == 5 || gameState.animatronics.foxy.position == 52 || gameState.animatronics.foxy.position == 53){
                    gameState.animatronics.foxy.stall(gameState.uiscene);
                }
                if(gameState.animatronics.foxy.position == 5){
                    cameraSprite.setTexture("cam5f1");
                }else if(gameState.animatronics.foxy.position == 52){
                    cameraSprite.setTexture("cam5f2");
                }else if(gameState.animatronics.foxy.position == 53){
                    cameraSprite.setTexture("cam5f3");
                }else if(gameState.animatronics.foxy.position == 0){
                    cameraSprite.setTexture("cam5f0");
                }
            }else if(gameState.camera.position == 6){
                cams[5].setFrame(1);
                cameraSprite.setTexture("cam6");
            }else if(gameState.camera.position == 7){
                cams[6].setFrame(1);
                if(gameState.animatronics.foxy.position == 0 && gameState.animatronics.foxy.checked == 0){
                    gameState.animatronics.foxy.checked = 1;
                    cameraSprite.setTexture("cam7b0");
                }else if(gameState.animatronics.bonnie.position != 7){
                    cameraSprite.setTexture("cam7b0");
                }else if(gameState.animatronics.bonnie.position == 7){
                    cameraSprite.setTexture("cam7b1");
                }
            }else if(gameState.camera.position == 8){
                cams[7].setFrame(1);
                if(gameState.animatronics.foxy.position == 0 && gameState.animatronics.foxy.checked == 0){
                    cameraSprite.setTexture("cam8b0f1");
                    cameraSprite.anims.play("cam8b0f1Action","true");
                    gameState.animatronics.foxy.checked = 1;
                    gameState.animatronics.foxy.run(gameState.uiscene);
                }else if(gameState.animatronics.bonnie.position != 8){
                    cameraSprite.setTexture("cam8b0f0");
                }else if(gameState.animatronics.bonnie.position == 8){
                    cameraSprite.setTexture("cam8b1f0");
                }
            }else if(gameState.camera.position == 9){
                cams[8].setFrame(1);
                if(gameState.animatronics.bonnie.position != 9){
                    cameraSprite.setTexture("cam9b0");
                }else if(gameState.animatronics.bonnie.position == 9){
                    cameraSprite.setTexture("cam9b1");
                }
            }else if(gameState.camera.position == 10){
                cams[9].setFrame(1);
                if(gameState.animatronics.chica.position != 10 && gameState.animatronics.freddy.position != 10){
                    cameraSprite.setTexture("cam10c0f0");
                }else if(gameState.animatronics.chica.position == 10 && gameState.animatronics.freddy.position != 10){
                    cameraSprite.setTexture("cam10c1f0");
                }else if(gameState.animatronics.chica.position != 10 && gameState.animatronics.freddy.position == 10){
                    cameraSprite.setTexture("cam10c0f1");
                }else if(gameState.animatronics.chica.position == 10 && gameState.animatronics.freddy.position == 10){
                    cameraSprite.setTexture("cam10c1f1");
                }
            }else if(gameState.camera.position == 11){
                cams[10].setFrame(1);
                if(gameState.animatronics.chica.position != 11 && gameState.animatronics.freddy.position != 11){
                    cameraSprite.setTexture("cam11c0f0");
                }else if(gameState.animatronics.chica.position == 11 && gameState.animatronics.freddy.position != 11){
                    cameraSprite.setTexture("cam11c1f0");
                }else if(gameState.animatronics.chica.position != 11 && gameState.animatronics.freddy.position == 11){
                    cameraSprite.setTexture("cam11c0f1");
                }else if(gameState.animatronics.chica.position == 11 && gameState.animatronics.freddy.position == 11){
                    cameraSprite.setTexture("cam11c1f1");
                }
            }
            var glitchBg = scene.add.sprite(0,0,'cameraBlip').setOrigin(0,0);
            glitchBg.anims.play("cameraBlipAction","true");
            var blip = scene.sound.add('blip', {
                loop: false,
                volume: 1
            });
            blip.play();
        },
    },
    
    doorMoving: function(scene,door){
        if(door == 0){
            gameState.leftDoor.moving = 1;
            scene.time.addEvent({
                delay: 600, 
                callback: () => {
                    gameState.leftDoor.moving = 0;
                },
                callbackScope: scene 
            });
        }else{
            gameState.rightDoor.moving = 1;
            scene.time.addEvent({
                delay: 600, 
                callback: () => {
                    gameState.rightDoor.moving = 0;
                },
                callbackScope: scene 
            });
        }
        
    },
    updateOfficeButtons: function(scene){
        if(gameState.leftDoor.on == 0 && gameState.leftLights.on == 0){
            gameState.leftButtons.setFrame(0);
        }else if(gameState.leftDoor.on == 1 && gameState.leftLights.on == 0){
            gameState.leftButtons.setFrame(1);
        }
        else if(gameState.leftDoor.on == 0 && gameState.leftLights.on == 1){
            gameState.leftButtons.setFrame(2);
        }
        else if(gameState.leftDoor.on == 1 && gameState.leftLights.on == 1){
            gameState.leftButtons.setFrame(3);
        }

        if(gameState.rightDoor.on == 0 && gameState.rightLights.on == 0){
            gameState.rightButtons.setFrame(0);
        }else if(gameState.rightDoor.on == 1 && gameState.rightLights.on == 0){
            gameState.rightButtons.setFrame(1);
        }
        else if(gameState.rightDoor.on == 0 && gameState.rightLights.on == 1){
            gameState.rightButtons.setFrame(2);
        }
        else if(gameState.rightDoor.on == 1 && gameState.rightLights.on == 1){
            gameState.rightButtons.setFrame(3);
        }
    },
    
    deleteUIElements:function(scene){
        for(var i = 0; i < 6; i++){
            gameState.UIElements[i].destroy();
        }
    },
    
    initiatePowerDown:function(scene){
        gameState.deleteUIElements(scene);
        gameState.officeBg.setFrame(1);
        gameState.fan.destroy();
        if(gameState.rightDoor.on == 1){
            gameState.rightDoor.open(scene);
        }
        if(gameState.leftDoor.on == 1){
            gameState.leftDoor.open(scene);
        }
        if(gameState.rightLights.on == 1){
            gameState.rightLights.close(scene);
        }
        if(gameState.leftLights.on == 1){
            gameState.leftLights.close(scene);
        }
        if(gameState.camera.on){
            gameState.camera.close(scene);
        }
        
        gameState.rightButtons.destroy();
        gameState.leftButtons.destroy();
        gameState.leftDoorButton.destroy();
        gameState.rightDoorButton.destroy();
        gameState.rightLightButton.destroy();
        gameState.leftLightButton.destroy();
        
        gameState.officeNoise.stop();
        gameState.powerDown.play();
        gameState.ambience1.stop();
        gameState.ambience2.stop();
        
        gameState.animatronics.freddy.blackout(scene);
        gameState.animatronics.bonnie.actionLoop.destroy();
        gameState.animatronics.chica.actionLoop.destroy();
    },
    
    animatronics:{
        freddy:{
            position: 1,
            ai: 0,
            actionLoop: null,
            activate: function(scene,ai){
                gameState.animatronics.freddy.ai = ai;
                gameState.animatronics.freddy.actionLoop = scene.time.addEvent({
                    delay: 5000, 
                    callback: () => {
                        gameState.animatronics.freddy.movement(scene);
                    },
                    repeat: -1,
                    callbackScope: scene 
                });
            },
            movement: function(scene){
                var rand = Math.ceil(Math.random()*20);
                if(rand <= gameState.animatronics.freddy.ai){
                    var laugh = scene.sound.add('freddyLaugh', {
                        volume: 0.3
                    });
                    
                    if(gameState.camera.position == Math.floor(gameState.animatronics.freddy.position) && gameState.camera.on == 1){
                        gameState.cameraStaticBg.setAlpha(1);
                        gameState.cameraGarble.play();
                    }
                    var posRand;
                    if(gameState.animatronics.freddy.position == 1 && gameState.animatronics.bonnie.position != 1 && gameState.animatronics.chica.position != 1){
                        gameState.animatronics.freddy.position = 2;
                    }
                    else if(gameState.animatronics.freddy.position == 2){
                        gameState.animatronics.freddy.position = 4;
                    }
                    else if(gameState.animatronics.freddy.position == 4){
                        gameState.animatronics.freddy.position = 6;
                    }
                    else if(gameState.animatronics.freddy.position == 6){
                        gameState.animatronics.freddy.position = 10;
                    }
                    else if(gameState.animatronics.freddy.position == 10){
                        gameState.animatronics.freddy.position = 11;
                    }
                    
                    else if(gameState.animatronics.freddy.position == 11){
                        if(gameState.rightDoor.on == 1){
                            posRand = Math.ceil(Math.random()*1);
                            if(posRand == 1){
                                gameState.animatronics.freddy.position = 10;
                            }
                        }else{
                            gameState.animatronics.freddy.position = -1;
                        }
                    }else if(gameState.animatronics.freddy.position == -1){
                        if(gameState.camera.on == 1){
                            gameState.camera.close(gameState.uiscene);
                            gameState.cameraButton.destroy();
                            scene.time.addEvent({
                                delay: 400, 
                                callback: () => {
                                    gameState.animatronics.freddy.jumpscare(gameState.uiscene);
                                },
                                callbackScope: scene 
                            });
                        }else{
                            gameState.animatronics.freddy.jumpscare(gameState.uiscene);
                        }
                    }
                    if(gameState.camera.position == Math.floor(gameState.animatronics.freddy.position) && gameState.camera.on == 1){
                        gameState.cameraStaticBg.setAlpha(1);
                        gameState.cameraGarble.play();
                    }
                    if(gameState.animatronics.freddy.position != -1){
                        if(!laugh.isPlaying){
                            laugh.play();
                        }
                    }
                }
            },
            jumpscare: function(scene){
                gameState.cameraButton.destroy();
                var jumpscare = scene.add.sprite(750,1050,"freddyJumpscare");
                
                scene.tweens.add({
                    targets: jumpscare, 
                    y: jumpscare.y - 700,
                    duration: 200,
                    ease: 'Linear' 
                });
                scene.time.addEvent({
                    delay: 140, 
                    callback: () => {
                        jumpscare.anims.play("freddyJumpscareAction");
                        scene.tweens.add({
                            targets: jumpscare, 
                            scaleX: jumpscare.scaleX + 5,
                            scaleY: jumpscare.scaleY + 5,
                            duration: 600,
                            ease: 'Linear' 
                        });
                    },
                    callbackScope: scene 
                });
                var scream = scene.sound.add('scream', {
                    volume: 1
                });
                scream.play();
                scene.time.addEvent({
                    delay: 700, 
                    callback: () => {
                        scream.stop();
                        gameState.reset(scene);
                        scene.scene.stop("OfficeUIScene");
                        scene.scene.stop("ArenaScene");
                        scene.scene.start("LoseScene");
                    },
                    callbackScope: scene 
                });
            },
            blackout: function(scene){
                gameState.animatronics.freddy.position = 1;
                if(gameState.animatronics.freddy.actionLoop){
                    gameState.animatronics.freddy.actionLoop.destroy();
                }
                gameState.animatronics.bonnie.position = 1;
                if(gameState.animatronics.bonnie.actionLoop){
                    gameState.animatronics.bonnie.actionLoop.destroy();
                }
                gameState.animatronics.chica.position = 1;
                if(gameState.animatronics.chica.actionLoop){
                    gameState.animatronics.chica.actionLoop.destroy();
                }
                gameState.animatronics.foxy.position = 5;
                if(gameState.animatronics.foxy.actionLoop){
                    gameState.animatronics.foxy.actionLoop.destroy();
                }
                var section = 1;
                var chance = 1;
                var backgroundMusic = scene.sound.add('freddyMusic', {
                    volume: 1
                });
                var quickRun = scene.sound.add('quickRun', {
                    volume: 1
                });
                var scream = scene.sound.add('scream', {
                    volume: 1
                });
                var freddyHead = gameState.officeScene.add.sprite(0,0,"freddyPowerout").setOrigin(0,0);
                freddyHead.alpha = 0;
                var anim;
                scene.time.addEvent({
                    delay: 5000, 
                    callback: () => {
                        var rand = Math.ceil(Math.random()*5);
                        if(rand == 1 || chance == 4 || (section == 3 && chance >= 1)){
                            chance = 1;
                            if(section == 1){
                                section = 2;
                                backgroundMusic.play();
                                anim = scene.tweens.add({
                                    targets: freddyHead,
                                    alpha: { from: 0, to: 1 },
                                    duration: 350,
                                    yoyo: true,
                                    repeat: -1
                                });
                            }else if (section == 2){
                                section = 3;
                                backgroundMusic.stop();
                                anim.stop();
                                anim.remove();
                                gameState.officeBg.setFrame(3);
                                scene.tweens.add({
                                    targets: freddyHead,
                                    alpha: { from: 0.5, to: 0 },
                                    duration: 2000,
                                });
                                scene.time.addEvent({
                                    delay: 2000, 
                                    callback: () => {
                                        quickRun.play();
                                    },
                                    callbackScope: scene 
                                });
                            }else if (section == 3){
                                var jumpscare = scene.add.sprite(0,0,"freddyJumpscare2").setOrigin(0,0);
                                jumpscare.anims.play("freddyJumpscare2Action","true");
                                scream.play();
                                scene.time.addEvent({
                                    delay: 900, 
                                    callback: () => {
                                        scream.stop();
                                        gameState.reset(scene);
                                        scene.scene.stop("OfficeUIScene");
                                        scene.scene.stop("ArenaScene");
                                        scene.scene.start("LoseScene");
                                    },
                                    callbackScope: scene 
                                });
                            }
                        }else{
                            chance++;
                        }
                    },
                    repeat: -1,
                    callbackScope: scene 
                });
            }
        },
        bonnie:{
            position: 1,
            ai: 0,
            actionLoop: null,
            activate: function(scene,ai){
                gameState.animatronics.bonnie.ai = ai;
                gameState.animatronics.bonnie.actionLoop = scene.time.addEvent({
                    delay: 5000, 
                    callback: () => {
                        gameState.animatronics.bonnie.movement(scene);
                    },
                    repeat: -1,
                    callbackScope: scene 
                });
            },
            movement: function(scene){
                var rand = Math.ceil(Math.random()*20);
                if(rand <= gameState.animatronics.bonnie.ai){
                    if(gameState.camera.position == Math.floor(gameState.animatronics.bonnie.position) && gameState.camera.on == 1){
                        gameState.cameraStaticBg.setAlpha(1);
                        gameState.cameraGarble.play();
                    }
                    var posRand;
                    if(gameState.animatronics.bonnie.position == 1){
                        posRand = Math.ceil(Math.random()*3);
                        if(posRand == 1){
                            gameState.animatronics.bonnie.position = 2;
                        }else if(posRand == 2){
                            gameState.animatronics.bonnie.position = 3;
                        }else if(posRand == 3){
                            gameState.animatronics.bonnie.position = 3.5;
                        }
                    }else if(gameState.animatronics.bonnie.position >= 2 && gameState.animatronics.bonnie.position < 3){
                        posRand = Math.ceil(Math.random()*3);
                        if(posRand == 1){
                            gameState.animatronics.bonnie.position = 7;
                        }else if(posRand == 2){
                            gameState.animatronics.bonnie.position = 3;
                        }else if(posRand == 3){
                            gameState.animatronics.bonnie.position = 3.5;
                        }
                    }else if(gameState.animatronics.bonnie.position >= 3 && gameState.animatronics.bonnie.position < 4){
                        posRand = Math.ceil(Math.random()*3);
                        if(posRand == 1){
                            gameState.animatronics.bonnie.position = 8;
                        }else if(posRand == 2){
                            gameState.animatronics.bonnie.position = 2;
                        }else if(posRand == 3){
                            gameState.animatronics.bonnie.position = 2.5;
                        }
                    }else if(gameState.animatronics.bonnie.position == 8){
                        posRand = Math.ceil(Math.random()*3);
                        if(posRand == 1){
                            gameState.animatronics.bonnie.position = 7;
                        }else if(posRand == 2){
                            gameState.animatronics.bonnie.position = 9;
                        }else if(posRand == 3){
                            gameState.animatronics.bonnie.position = 0;
                        }
                    }else if(gameState.animatronics.bonnie.position == 7){
                        posRand = Math.ceil(Math.random()*3);
                        if(posRand == 1){
                            gameState.animatronics.bonnie.position = 8;
                        }else if(posRand == 2){
                            gameState.animatronics.bonnie.position = 9;
                        }else if(posRand == 3){
                            gameState.animatronics.bonnie.position = 0;
                        }
                    }else if(gameState.animatronics.bonnie.position == 9){
                        posRand = Math.ceil(Math.random()*2);
                        if(posRand == 1){
                            gameState.animatronics.bonnie.position = 7;
                        }else if(posRand == 2){
                            gameState.animatronics.bonnie.position = 0;
                        }
                    }
                    else if(gameState.animatronics.bonnie.position == 0){
                        if(gameState.leftDoor.on == 1){
                            if(gameState.leftLights.on == 1){
                                gameState.leftLights.close(scene);
                            }
                            posRand = Math.ceil(Math.random()*1);
                            if(posRand == 1){
                                gameState.animatronics.bonnie.position = 2;
                            }
                        }else{
                            gameState.animatronics.bonnie.position = -1;
                            gameState.leftDoor.jammed = 1;
                        }
                    }else if(gameState.animatronics.bonnie.position == -1){
                        if(gameState.camera.on == 1){
                            gameState.camera.close(gameState.uiscene);
                            gameState.cameraButton.destroy();
                            scene.time.addEvent({
                                delay: 400, 
                                callback: () => {
                                    gameState.animatronics.bonnie.jumpscare(gameState.uiscene);
                                },
                                callbackScope: scene 
                            });
                        }else{
                            gameState.animatronics.bonnie.jumpscare(gameState.uiscene);
                        }
                    }
                    if(gameState.camera.position == Math.floor(gameState.animatronics.bonnie.position) && gameState.camera.on == 1){
                        gameState.cameraStaticBg.setAlpha(1);
                        gameState.cameraGarble.play();
                    }
                    if((Math.floor(gameState.animatronics.bonnie.position) == 0 || gameState.animatronics.bonnie.position == -1 )&& gameState.leftLights.on == 1){
                        gameState.leftLights.close(scene);
                    }
                }
            },
            jumpscare: function(scene){
                gameState.cameraButton.destroy();
                var jumpscare = scene.add.sprite(750,1050,"bonnieJumpscare");
                
                scene.tweens.add({
                    targets: jumpscare, 
                    y: jumpscare.y - 700,
                    duration: 200,
                    ease: 'Linear' 
                });
                scene.time.addEvent({
                    delay: 140, 
                    callback: () => {
                        jumpscare.anims.play("bonnieJumpscareAction");
                        scene.tweens.add({
                            targets: jumpscare, 
                            scaleX: jumpscare.scaleX + 7,
                            scaleY: jumpscare.scaleY + 7,
                            duration: 600,
                            ease: 'Linear' 
                        });
                    },
                    callbackScope: scene 
                });
                var scream = scene.sound.add('scream', {
                    volume: 1
                });
                scream.play();
                scene.time.addEvent({
                    delay: 700, 
                    callback: () => {
                        scream.stop();
                        gameState.reset(scene);
                        scene.scene.stop("OfficeUIScene");
                        scene.scene.stop("ArenaScene");
                        scene.scene.start("LoseScene");
                    },
                    callbackScope: scene 
                });
            },
        },
        chica:{
            position: 1,
            ai: 0,
            actionLoop: null,
            activate: function(scene,ai){
                gameState.animatronics.chica.ai = ai;
                gameState.animatronics.chica.actionLoop = scene.time.addEvent({
                    delay: 4900, 
                    callback: () => {
                        gameState.animatronics.chica.movement(scene);
                    },
                    repeat: -1,
                    callbackScope: scene 
                });
            },
            movement: function(scene){
                var rand = Math.ceil(Math.random()*20);
                if(rand <= gameState.animatronics.chica.ai){
                    if(gameState.camera.position == Math.floor(gameState.animatronics.chica.position) && gameState.camera.on == 1){
                        gameState.cameraStaticBg.setAlpha(1);
                        gameState.cameraGarble.play();
                    }
                    var posRand;
                    if(gameState.animatronics.chica.position == 1){
                        posRand = Math.ceil(Math.random()*1);
                        if(posRand == 1){
                            gameState.animatronics.chica.position = 2;
                        }
                    }else if(gameState.animatronics.chica.position == 2){
                        posRand = Math.ceil(Math.random()*3);
                        if(posRand == 1){
                            gameState.animatronics.chica.position = 4;
                        }else if(posRand == 2){
                            gameState.animatronics.chica.position = 6;
                        }else if(posRand == 3){
                            gameState.animatronics.chica.position = 10;
                        }
                    }else if(gameState.animatronics.chica.position == 4){
                        posRand = Math.ceil(Math.random()*2);
                        if(posRand == 1){
                            gameState.animatronics.chica.position = 10;
                        }else if(posRand == 2){
                            gameState.animatronics.chica.position = 6;
                        }
                    }else if(gameState.animatronics.chica.position == 6){
                        posRand = Math.ceil(Math.random()*2);
                        if(posRand == 1){
                            gameState.animatronics.chica.position = 10;
                        }else if(posRand == 2){
                            gameState.animatronics.chica.position = 4;
                        }
                    }else if(gameState.animatronics.chica.position == 10){
                        posRand = Math.ceil(Math.random()*2);
                        if(posRand == 1){
                            gameState.animatronics.chica.position = 11;
                        }else if(posRand == 2){
                            gameState.animatronics.chica.position = 2;
                        }
                    }else if(gameState.animatronics.chica.position == 11){
                        posRand = Math.ceil(Math.random()*2);
                        if(posRand == 1){
                            gameState.animatronics.chica.position = 0;
                        }else if(posRand == 2){
                            gameState.animatronics.chica.position = 10;
                        }
                    }
                    
                    else if(gameState.animatronics.chica.position == 0){
                        if(gameState.rightDoor.on == 1){
                            if(gameState.rightLights.on == 1){
                                gameState.rightLights.close(scene);
                            }
                            posRand = Math.ceil(Math.random()*1);
                            if(posRand == 1){
                                gameState.animatronics.chica.position = 10;
                            }
                        }else{
                            gameState.animatronics.chica.position = -1;
                            gameState.rightDoor.jammed = 1;
                        }
                    }else if(gameState.animatronics.chica.position == -1){
                        if(gameState.camera.on == 1){
                            gameState.camera.close(gameState.uiscene);
                            gameState.cameraButton.destroy();
                            scene.time.addEvent({
                                delay: 400, 
                                callback: () => {
                                    gameState.animatronics.chica.jumpscare(gameState.uiscene);
                                },
                                callbackScope: scene 
                            });
                        }else{
                            gameState.animatronics.chica.jumpscare(gameState.uiscene);
                        }
                    }
                    if(gameState.camera.position == Math.floor(gameState.animatronics.chica.position) && gameState.camera.on == 1){
                        gameState.cameraStaticBg.setAlpha(1);
                        gameState.cameraGarble.play();
                    }
                    if((Math.floor(gameState.animatronics.chica.position) == 0 || gameState.animatronics.chica.position == -1 )&& gameState.rightLights.on == 1){
                        gameState.rightLights.close(scene);
                    }
                }
            },
            jumpscare: function(scene){
                gameState.cameraButton.destroy();
                var jumpscare = scene.add.sprite(650,1050,"chicaJumpscare");
                
                scene.tweens.add({
                    targets: jumpscare, 
                    y: jumpscare.y - 700,
                    duration: 200,
                    ease: 'Linear' 
                });
                scene.time.addEvent({
                    delay: 140, 
                    callback: () => {
                        jumpscare.anims.play("chicaJumpscareAction");
                        scene.tweens.add({
                            targets: jumpscare, 
                            scaleX: jumpscare.scaleX + 7,
                            scaleY: jumpscare.scaleY + 7,
                            duration: 600,
                            ease: 'Linear' 
                        });
                    },
                    callbackScope: scene 
                });
                var scream = scene.sound.add('scream', {
                    volume: 1
                });
                scream.play();
                scene.time.addEvent({
                    delay: 700, 
                    callback: () => {
                        scream.stop();
                        gameState.reset(scene);
                        scene.scene.stop("OfficeUIScene");
                        scene.scene.stop("ArenaScene");
                        scene.scene.start("LoseScene");
                    },
                    callbackScope: scene 
                });
            },
        },
        foxy:{
            position: 5,
            ai: 0,
            actionLoop: null,
            stalled: 0,
            checked: 0,
            blocked: 0,
            afkCheck: null,
            activate: function(scene,ai){
                gameState.animatronics.foxy.ai = ai;
                gameState.animatronics.foxy.actionLoop = scene.time.addEvent({
                    delay: 5200, 
                    callback: () => {
                        console.log(`${gameState.animatronics.foxy.stalled}`);
                        gameState.animatronics.foxy.movement(scene);
                    },
                    repeat: -1,
                    callbackScope: scene 
                });
            },
            stall: function(scene){
                if(gameState.animatronics.foxy.stalled == 0){
                    gameState.animatronics.foxy.stalled = 1;
                    var rand = Math.ceil(Math.random()*16000)+830;
                    scene.time.addEvent({
                        delay: rand, 
                        callback: () => {
                            gameState.animatronics.foxy.stalled = 0;
                        },
                        callbackScope: scene 
                    });
                }
            },
            run: function(scene){
                var run = scene.sound.add('foxyRun', {
                    volume: 1
                });
                run.play();
                scene.time.addEvent({
                    delay: 2200, 
                    callback: () => {
                        gameState.animatronics.foxy.attack(scene);
                    },
                    callbackScope: scene 
                });
            },
            movement: function(scene){
                var rand = Math.ceil(Math.random()*20);
                if(rand <= gameState.animatronics.foxy.ai && (gameState.camera.on == 0 || (gameState.camera.position != 5 && gameState.camera.on == 1) ) && gameState.animatronics.foxy.stalled == 0){
                    console.log("Movesuccess");
                    var posRand;
                    if(gameState.animatronics.foxy.position == 5){
                        gameState.animatronics.foxy.position = 52;
                    }
                    else if(gameState.animatronics.foxy.position == 52){
                        gameState.animatronics.foxy.position = 53;
                    }
                    else if(gameState.animatronics.foxy.position == 53){
                        gameState.animatronics.foxy.position = 0;
                        gameState.animatronics.foxy.afkCheck = scene.time.addEvent({
                            delay: 24000, 
                            callback: () => {
                                gameState.animatronics.foxy.attack(scene);
                            },
                            callbackScope: scene 
                        });
                    }
                }
            },
            attack: function(scene){
                if(gameState.leftDoor.on == 0){
                    gameState.leftDoorButton.destroy();
                    gameState.leftLightButton.destroy();
                    if(gameState.camera.on == 1){
                        gameState.camera.close(scene);
                        scene.time.addEvent({
                            delay: 400, 
                            callback: () => {
                                gameState.animatronics.foxy.jumpscare(gameState.officeScene);
                            },
                            callbackScope: scene 
                        });
                    }else{
                       gameState.animatronics.foxy.jumpscare(gameState.officeScene); 
                    }
                }else{
                    gameState.animatronics.foxy.afkCheck.remove();
                    gameState.animatronics.foxy.position = 5;
                    gameState.animatronics.foxy.checked = 0;
                    gameState.power -= (gameState.animatronics.foxy.blocked*5+1);
                    gameState.animatronics.foxy.blocked++;
                    var knock = scene.sound.add('knock', {
                        volume: 1
                    });
                    knock.play();
                }
            },
            jumpscare: function(scene){
                gameState.cameraButton.destroy();
                gameState.leftDoor.sprite.destroy();
                var jumpscare = scene.add.sprite(0,0,"foxyJumpscare").setOrigin(0,0);
                jumpscare.anims.play("foxyJumpscareAction");
                
                var scream = scene.sound.add('scream', {
                    volume: 1
                });
                scream.play();
                scene.time.addEvent({
                    delay: 40000, 
                    callback: () => {
                        scream.stop();
                        gameState.reset(scene);
                        scene.scene.stop("OfficeUIScene");
                        scene.scene.stop("ArenaScene");
                        scene.scene.start("LoseScene");
                    },
                    callbackScope: scene 
                });
            },
        },
    },
    
    reset: function(scene){
        gameState.officeNoise.stop();
        gameState.ambience1.stop();
        gameState.ambience2.stop();
        gameState.lightSound.stop();
        gameState.doorSound.stop();
        gameState.power = 100;
        gameState.time = 0;
        gameState.usage = 1;
        gameState.animatronics.freddy.position = 1;
        if(gameState.animatronics.freddy.actionLoop){
            gameState.animatronics.freddy.actionLoop.destroy();
        }
        gameState.animatronics.bonnie.position = 1;
        if(gameState.animatronics.bonnie.actionLoop){
            gameState.animatronics.bonnie.actionLoop.destroy();
        }
        gameState.animatronics.chica.position = 1;
        if(gameState.animatronics.chica.actionLoop){
            gameState.animatronics.chica.actionLoop.destroy();
        }
        gameState.animatronics.foxy.position = 5;
        if(gameState.animatronics.foxy.actionLoop){
            gameState.animatronics.foxy.actionLoop.destroy();
        }
        gameState.rightDoor.on = 0;
        gameState.leftDoor.on = 0;
        gameState.rightLight.on = 0;
        gameState.leftLight.on = 0;
        gameState.camera.on = 0;
        gameState.camera.position = 1;
        gameState.animatronics.foxy.checked = 0;
        gameState.animatronics.foxy.stalled = 0;
        gameState.animatronics.foxy.blocked = 0;
    },
}















