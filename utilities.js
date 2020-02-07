var CHAR_SOUNDS = [];

class AudioHandler
{
    constructor()
    {
        this.activate = document.getElementById("activate");
        this.music = document.getElementById("music");
        this.music.volume = 0.1;
        this.rain = document.getElementById("rain");
        this.rain.volume = 0.3;
        this.glass = document.getElementById("glass");
        this.glass.volume = 0.3;
        this.audioOn = false; //default audio to false for web version

        this.ambientTimer = undefined;

        let orc = document.getElementById("orc");
        orc.volume = 0.1;
        CHAR_SOUNDS.push(
            {
                name : "Orc Pleb",
                audio : orc
            });
        CHAR_SOUNDS.push(
            {
                name : "Orc Warrior",
                audio : orc
            });
    }

    Mute()
    {
        this.audioOn = false;
        this.music.pause();
        this.StopRain();
        //this.music.currentTime = 0;
    }

    UnMute()
    {
        this.audioOn = true;
        this.PlayMusic(this);
    }

    PlayActivate()
    {
        if (this.audioOn)
        {
            this.activate.play();
        }
    }

    PlayRain()
    {
        if (this.audioOn)
        {
            this.rain.play();
        }
    }

    StopRain()
    {
        this.rain.pause();
    }

    PlayAmbient(characters, audio)
    {
        clearTimeout(audio.ambientTimer);
        audio.ambientTimer = undefined;
        //Setup random audio timings
        for(let i = 0; i < characters.length; i++)
        {
            let charSound = CHAR_SOUNDS.find(element => element.name == characters[i]);
            if (charSound != undefined && Math.random() > 0.7)
            {
                clearTimeout(charSound.timer);
                charSound.timer = undefined;
                charSound.timer = setTimeout(audio.AmbientTimer, Math.random() * 8000, charSound.audio);
            }
        }
        //glass clanks
        audio.glass.volume = 0.5;
        if (characters.length > 3 && Math.random() > 0.7)
        {
            let glassClankCount = Math.ceil(Math.random() * 3);
            for (let i = 0; i < glassClankCount; i++)
            {
                setTimeout(audio.AmbientTimer, Math.random() * 8000, audio.glass);
            }
        }

        audio.ambientTimer = setTimeout(audio.PlayAmbient, 8000, characters, audio);
    }

    StopAmbient()
    {
        if (this.ambientTimer != undefined)
        {
            clearTimeout(this.ambientTimer);
            this.ambientTimer = undefined;
        }
        for(let i = 0; i < CHAR_SOUNDS.length; i++)
        {
            if (CHAR_SOUNDS[i].timer != undefined)
            {
                clearTimeout(CHAR_SOUNDS[i].timer);
                CHAR_SOUNDS[i].timer = undefined;
            }
        }
        this.glass.volume = 0;
    }

    AmbientTimer(audio)
    {
        audio.play();
    }

    PlayMusic(audioHandler)
    {
        if (audioHandler.audioOn)
        {
            audioHandler.music.currentTime = 0;
            audioHandler.music.play();
            setTimeout(audioHandler.PlayMusic, 120000, audioHandler);
        }
    }
}