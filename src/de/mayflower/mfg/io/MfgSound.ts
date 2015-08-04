
    /*****************************************************************************
    *   Represents the sound system.
    *
    *   @author     Jeremy Gauchel
    *   @version    0.0.1
    *****************************************************************************/
    class MfgSound
    {
        public      static      PICK_UP                 :string                     = "res/sound/pickUp.mp3";
        public      static      BG_ENCHANTED_WOODS      :string                     = "res/sound/bgEnchantedWoods.mp3";

        private     static      FILENAMES               :Array<string>              =
        [
            MfgSound.PICK_UP,
            MfgSound.BG_ENCHANTED_WOODS,
        ];

        /** This array contains all loaded sounds. */
        private     static      allSounds               :Array<HTMLAudioElement>    = [];

        public static loadSounds():void
        {
            //load all sounds
            for ( var i:number = 0; i < MfgSound.FILENAMES.length; ++i )
            {
                try
                {
                    MfgSound.allSounds[MfgSound.FILENAMES[i]] = new Audio();
                    MfgSound.allSounds[MfgSound.FILENAMES[i]].src = MfgSound.FILENAMES[i];
                }
                catch ( ex )
                {
                    MfgDebug.log("Exception raised on loading sound [" + MfgSound.FILENAMES[i] + "]");
                }
            }
        }

        /*****************************************************************************
        *   Creates and plays a COPY of the specified audio object.
        *
        *   @param id The ID of the audio object to play.
        *****************************************************************************/
        public static playSound( id:string )
        {
            if ( MfgSound.allSounds[ id ] != null )
            {
                var clipClone:HTMLAudioElement = <HTMLAudioElement>MfgSound.allSounds[id].cloneNode(true);
                clipClone.play();
            }
        }
    }
