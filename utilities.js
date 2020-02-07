class AudioHandler
{
    constructor()
    {
        this.activate = document.getElementById("activate");
        this.music = document.getElementById("music");
        this.music.volume = 0.1;
        this.rain = document.getElementById("rain");
        this.rain.volume = 0.3;
        this.audioOn = false; //default audio to false for web version
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