class IntroGameScene extends Phaser.Scene {
    constructor() {
		super({ key: 'IntroGameScene' })
	}
    preload(){
        this.load.image('menu','images/menu.png');
        this.load.image('menu2','images/menu2.png');
        this.load.image('menu3','images/menu3.png');
        this.load.image('menu4','images/menu4.png');
        this.load.image('menuArrow','images/menuArrow.png');
        
        this.load.image('newJobBg','images/newJobBg.png');
        
        this.load.spritesheet('officeBg','images/officeBg.png',{frameWidth: 1600,frameHeight: 700});
        this.load.image('invisibleButton','images/invisibleButton.png');
        
        this.load.spritesheet('static','images/static.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('glitch','images/glitch.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('cameraBlip','images/cameraBlip.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('officeFan','images/officeFan.png',{frameWidth: 145,frameHeight: 196});
        this.load.spritesheet('officeDoor','images/officeDoor.png',{frameWidth: 223,frameHeight: 700});
        this.load.spritesheet('cameraMonitor','images/cameraMonitor.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('officeButtons','images/officeButtons.png',{frameWidth: 90,frameHeight: 200});
        this.load.spritesheet('officeButtons2','images/officeButtons2.png',{frameWidth: 90,frameHeight: 200});
        this.load.spritesheet('powerBars','images/powerBars.png',{frameWidth: 103,frameHeight: 32});
        this.load.spritesheet('cameraSelect','images/cameraSelect.png',{frameWidth: 60,frameHeight: 40});
        
        this.load.spritesheet('bonnieJumpscare','images/bonnieJumpscare.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('chicaJumpscare','images/chicaJumpscare.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('foxyJumpscare','images/foxyJumpscare.png',{frameWidth: 630,frameHeight: 700});
        this.load.spritesheet('freddyJumpscare','images/freddyJumpscare.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('freddyJumpscare2','images/freddyJumpscare2.png',{frameWidth: 1300,frameHeight: 700});
        this.load.spritesheet('springtrapJumpscare','images/springtrapJumpscare.png',{frameWidth: 1300,frameHeight: 700});
        
        this.load.spritesheet('rightLight','images/rightLight.png',{frameWidth: 600,frameHeight: 700});
        this.load.spritesheet('leftLight','images/leftLight.png',{frameWidth: 600,frameHeight: 700});
        
        //Camera Sprites
        this.load.image('maskButton','images/maskButton.png');
        this.load.image('cameraButton','images/cameraButton.png');
        this.load.image('cameraMap','images/cameraMap.png');
        
        this.load.image('cam1b0c0f0','images/cam1b0c0f0.png');
        this.load.image('cam1b0c1f1','images/cam1b0c1f1.png');
        this.load.image('cam1b1c0f1','images/cam1b1c0f1.png');
        this.load.image('cam1b0c0f1','images/cam1b0c0f1.png');
        this.load.image('cam1b1c1f1','images/cam1b1c1f1.png');
        
        this.load.image('cam2b0c0f0','images/cam2b0c0f0.png');
        this.load.image('cam2b1c0f0','images/cam2b1c0f0.png');
        this.load.image('cam2b12c0f0','images/cam2b12c0f0.png');
        this.load.image('cam2b0c1f0','images/cam2b0c1f0.png');
        this.load.image('cam2b1c0f0','images/cam2b1c0f0.png');
        this.load.image('cam2b1c0f1','images/cam2b1c0f1.png');
        this.load.image('cam2b1c1f0','images/cam2b1c1f0.png');
        this.load.image('cam2b0c1f1','images/cam2b0c1f1.png');
        this.load.image('cam2b1c1f1','images/cam2b1c1f1.png');
        this.load.image('cam2s1','images/cam2s1.png');
        
        this.load.image('cam3b0','images/cam3b0.png');
        this.load.image('cam3b1','images/cam3b1.png');
        this.load.image('cam3b12','images/cam3b12.png');
        this.load.image('cam3s1','images/cam3s1.png');
        
        this.load.image('cam4c0f0','images/cam4c0f0.png');
        this.load.image('cam4c1f0','images/cam4c1f0.png');
        this.load.image('cam4c12f0','images/cam4c12f0.png');
        this.load.image('cam4c0f1','images/cam4c0f1.png');
        this.load.image('cam4c1f1','images/cam4c1f1.png');
        
        this.load.image('cam5f0','images/cam5f0.png');
        this.load.image('cam5f1','images/cam5f1.png');
        this.load.image('cam5f2','images/cam5f2.png');
        this.load.image('cam5f3','images/cam5f3.png');
        
        this.load.image('cam6','images/cam6.png');
        
        this.load.image('cam7b0','images/cam7b0.png');
        this.load.image('cam7b1','images/cam7b1.png');
        
        this.load.image('cam8b0f0','images/cam8b0f0.png');
        this.load.image('cam8b1f0','images/cam8b1f0.png');
        this.load.spritesheet('cam8b0f1','images/cam8b0f1.png',{frameWidth: 1300,frameHeight: 700});
        this.load.image('cam8s1','images/cam8s1.png');
        
        this.load.image('cam9b0','images/cam9b0.png');
        this.load.image('cam9b1','images/cam9b1.png');
        this.load.image('cam9s1','images/cam9s1.png');
        
        this.load.image('cam10c0f0','images/cam10c0f0.png');
        this.load.image('cam10c1f0','images/cam10c1f0.png');
        this.load.image('cam10c0f1','images/cam10c0f1.png');
        this.load.image('cam10c1f1','images/cam10c1f1.png');
        this.load.image('cam10s1','images/cam10s1.png');
        
        this.load.image('cam11c0f0','images/cam11c0f0.png');
        this.load.image('cam11c1f0','images/cam11c1f0.png');
        this.load.image('cam11c0f1','images/cam11c0f1.png');
        this.load.image('cam11c1f1','images/cam11c1f1.png');
        this.load.image('cam11s1','images/cam11s1.png');
        
        this.load.spritesheet('mask','images/mask.png',{frameWidth: 1300,frameHeight: 700});
        this.load.image('goldenFreddy','images/goldenFreddy.png');
        this.load.image('goldenFreddyJumpscare','images/goldenFreddyJumpscare.png');
        
        this.load.image('6amAnim','images/6amAnim.png');
        
        this.load.image('freddyPowerout','images/freddyPowerout.png');
        
        this.load.image('gameoverBg','images/gameoverBg.png');
        //Audio
        this.load.audio('menuMusic', 'audio/menuMusic.mp3');
        this.load.audio('night1PhoneCall', 'audio/night1PhoneCall.mp3');
        
        this.load.audio('blip', 'audio/blip.mp3');
        this.load.audio('cameraFlip', 'audio/cameraFlip.mp3');
        this.load.audio('cameraGarble', 'audio/cameraGarble.mp3');
        this.load.audio('lightHum', 'audio/lightHum.mp3');
        this.load.audio('doorSound', 'audio/doorSound.mp3');
        this.load.audio('officeAmbience', 'audio/officeAmbience.mp3');
        
        this.load.audio('breathing', 'audio/breathing.mp3');
        this.load.audio('maskZip', 'audio/maskZip.mp3');
        
        this.load.audio('powerDown', 'audio/powerDown.mp3');
        this.load.audio('freddyMusic', 'audio/freddyMusic.mp3');
        this.load.audio('quickRun', 'audio/quickRun.mp3');
        this.load.audio('freddyLaugh', 'audio/freddyLaugh.mp3');
        this.load.audio('goldenFreddyScream', 'audio/goldenFreddyScream.mp3');
        this.load.audio('scream', 'audio/scream.mp3');
        this.load.audio('springtrapScream', 'audio/springtrapScream.mp3');
        this.load.audio('foxyRun', 'audio/foxyRun.mp3');
        this.load.audio('knock', 'audio/knock.mp3');
        this.load.audio('springtrapMove', 'audio/springtrapMove.mp3');
        this.load.audio('springtrapSigh', 'audio/springtrapSigh.mp3');
        
        this.load.audio('deathStatic', 'audio/deathStatic.mp3');
        
        this.load.audio('6am', 'audio/6am.mp3');
        this.load.audio('jammed', 'audio/jammed.mp3');
        this.load.audio('ambience1', 'audio/ambience1.mp3');
        this.load.audio('ambience2', 'audio/ambience2.mp3');
    }
    create(){
        var scene = this;
        this.input.once('pointerdown', () => {
            scene.scene.stop('IntroGameScene');
            scene.scene.start('MenuScene');
        });
        this.add.text(650, 300, "WARNING!\n\nThis game contains flashing lights, loud\nnoises, and lots of jumpscares!\nClick anywhere to continue...", {
            fontFamily: "FnafFont",
            fontSize: "20px",
            align: 'center',
            color: "#ffffff"
        }).setOrigin(0.5,0.5);
        
        
        this.anims.create({
            key: 'staticAction',
            frames: this.anims.generateFrameNumbers('static', { start: 0, end: 7 }),
            frameRate: 25,
            repeat: -1 
        });
        this.anims.create({
            key: 'glitchAction',
            frames: this.anims.generateFrameNumbers('glitch', { start: 0, end: 4 }),
            frameRate: 25
        });
        this.anims.create({
            key: 'officeFanAction',
            frames: this.anims.generateFrameNumbers('officeFan', { start: 0, end: 2 }),
            frameRate: 25,
            repeat: -1,
        });
        this.anims.create({
            key: 'officeDoorOpen',
            frames: this.anims.generateFrameNumbers('officeDoor', { start: 14, end: 26 }),
            frameRate: 25,
        });
        this.anims.create({
            key: 'officeDoorClose',
            frames: this.anims.generateFrameNumbers('officeDoor', { start: 0, end: 13 }),
            frameRate: 30,
        });
        this.anims.create({
            key: 'cameraMonitorOpenAction',
            frames: this.anims.generateFrameNumbers('cameraMonitor', { start: 0, end: 7 }),
            frameRate: 26,
        });
        this.anims.create({
            key: 'cameraMonitorCloseAction',
            frames: this.anims.generateFrameNumbers('cameraMonitor', { start: 8, end: 15 }),
            frameRate: 26,
        });
        this.anims.create({
            key: 'officeBgAction',
            frames: this.anims.generateFrameNumbers('officeBg', { start: 1, end: 2 }),
            frameRate: 5,
            repeat: -1,
        });
        
        this.anims.create({
            key: 'cameraBlipAction',
            frames: this.anims.generateFrameNumbers('cameraBlip', { start: 0, end: 3 }),
            frameRate: 24,
        });
        
        this.anims.create({
            key: 'freddyJumpscare2Action',
            frames: this.anims.generateFrameNumbers('freddyJumpscare2', { start: 0, end: 19 }),
            frameRate: 24,
        });
        
        this.anims.create({
            key: 'bonnieJumpscareAction',
            frames: this.anims.generateFrameNumbers('bonnieJumpscare', { start: 0, end: 3 }),
            frameRate: 20,
        });
        
        this.anims.create({
            key: 'chicaJumpscareAction',
            frames: this.anims.generateFrameNumbers('chicaJumpscare', { start: 0, end: 3 }),
            frameRate: 20,
        });
        
        this.anims.create({
            key: 'freddyJumpscareAction',
            frames: this.anims.generateFrameNumbers('freddyJumpscare', { start: 0, end: 6 }),
            frameRate: 22,
        });
        
        this.anims.create({
            key: 'foxyJumpscareAction',
            frames: this.anims.generateFrameNumbers('foxyJumpscare', { start: 0, end: 18 }),
            frameRate: 25,
        });
        
        this.anims.create({
            key: 'springtrapJumpscareAction',
            frames: this.anims.generateFrameNumbers('springtrapJumpscare', { start: 0, end: 3 }),
            frameRate: 25,
        });
        
        this.anims.create({
            key: 'cam8b0f1Action',
            frames: this.anims.generateFrameNumbers('cam8b0f1', { start: 0, end: 30 }),
            frameRate: 25,
        });
        
        this.anims.create({
            key: 'maskDown',
            frames: this.anims.generateFrameNumbers('mask', { start: 0, end: 8 }),
            frameRate: 25,
        });
        this.anims.create({
            key: 'maskUp',
            frames: this.anims.generateFrameNumbers('mask', { start: 9, end: 17 }),
            frameRate: 25,
        });
        
        gameState.load();
    }
    
    
    update(){
        
    }
}