class AudioHandler
{
    constructor()
    {
        this.activate = document.getElementById("activate");
        this.music = document.getElementById("music");
        this.audioOn = false; //default audio to false for web version
    }

    Mute()
    {
        this.audioOn = false;
        this.music.pause();
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

    PlayMusic(audioHandler)
    {
        if (audioHandler.audioOn)
        {
            audioHandler.music.volume = 0.1;
            audioHandler.music.currentTime = 0;
            audioHandler.music.play();
            setTimeout(audioHandler.PlayMusic, 120000, audioHandler);
        }
    }
}