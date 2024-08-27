const songTitles = [

    "We are number one but its in the description",
    "The TikTok Attorney but it's in the description",
    "Killer Bean Forever 4K - Official FULL MOVIE",
    "Carl and Shaggy Stuck Doing the Macarena 9 Hours and 53 Seconds",
    "Carl Sagan Saying A Googol...3.4996011596528192e+100 times (~3.5 googols)",
    "7",
    "Peanut Butter Jelly Time 10 Hours",
    "Pac-Man - Perfect Game 3,333,360",
    "Top 2000 Cheese",
    "the entirety of zone 3 tower rush (jtoh)",
    "∞",
    "SpongeBob Theme 9999% Slowed (V2)",
    "How To Make The Perfect Roast",
    "Roblox | AToS : Tower of Skill and Patience Guide! [EXTREME]",
    "8",
    "VeggieTales: All the Silly Songs (1993-2021) [1080p]",
    "How to create a folder in Windows 10",
    "Can You Beat Into the Future with Only ONE Slot? (Battle Cats)",
    "Michael Says Prime Numbers for 3 Hours",
    "JToH - Citadel of Void All Jumps ULTIMATE (Text Commentary) (CUTS)",
    "the full chinese",
    "One More Time",
    "How To Make Pulled Pork",
    "[AMBIENT] LSD Dream Emulator (Full Soundtrack)",
    "Sewerslvt - Draining Love Story (FULL ALBUM STREAM)",
    "Sewerslvt - Skitzofrenia Simulation (FULL ALBUM STREAM)",
    "Sewerslvt - Drowning In The Sewer (FULL ALBUM STREAM)",
    "Night Ride",
    "Sewerslvt - we had good times together, don't forget that",
    "The Mouth Experience - Neil Cicierega (Mouth Sounds / Mouth Silence / Mouth Moods / Mouth Dreams)",
    "60 Minute Nuke Bomb Giant Explosion 💥",
    "[Nightcore] Everywhere At The End Of Time (Stages 1-6) [BASS BOOSTED]",
    "Wallace hammering for 1 hour",
    "Wallace hammering for 1 hour but its The Caretaker's An Empty Bliss Beyond This World",
    "I Wanna Kill The Kamilia 3 - 100% Walkthrough (V1.50)",
    "RNG Dungeon",
    "(FAN-MIXED) Neil Cicierega - Mouth Mistakes",
    "Man In Cave",
    "『Inabakumori』 33 Songs Medley　【PlayList】",
    "Garden of Eeshöl Tower Rush [JToH]",
    "spongebob huh 1 hour",
    "Triple Baka 10 hours",
    "9999% Slower - Super Mario Bros 2 Main Theme - Hypnotic Majestic",
    "Project 2",
    "I Wanna See The まゆむしチャンネル",
    "6",
    "The 179 Days of Christmas [the 9 HOUR XMAS SONG]",
    "The Gummy Bear Song but every time he says Gummybear it gets Slower (Gummibär)",
    "Lemon Demon - View-Monster (full album with bonus tracks from the Bandcamp release)",
    "Zone 5 Tower Rush Completion but CoCE is bugged | Roblox JToH",
    "Trapped In The Drive-Thru",
    "Hong Kong 97 Music (10 hours loop)",
    "∞²",
    "The History Of The Longest Discord Call But It's In Morse Code",
    "tunes from jvne (sewerslvt playlist)",
    "tunes from jvne v2 (sewerslvt playlist)",
    "Yakko's world but read the description",
    "Left 4 Dead Survival Street the video : 242:26:07 (HD)",
    "JToH Stream 12 - Tower of Anger Tower Rush",
    "Full Earthbound Soundtrack",
    "Wii Play - Tanks - Missions 1-100 Complete",
    "How To Make a Slow Cooked Beef Stew",
    "Ring 8 Tower Rush - Completion",
    "neverending worriedness",
    "300 YO MAMA JOKES - Can you watch them all?",
    "Left 4 Dead 2 - No Mercy (Cataclysmic Difficulty) (Legacy Version)",
    "The CRAZIEST Online Zoom Class Trolling Compilation of 2022!",
    "∞³",
    "12",
    "SNOWY: EXCEPT IT KEEPS GETTING SLOWER",
    "Zone 4 tower rush (full run)",
    "Left 4 Dead 2 - No Mercy (Pandemonium Difficulty) (Legacy Version)",
    "Ring 7 Tower Rush | Full Completion",
    "Cantina Band - 10 Hour Loop",
    "Nyan Cat 12 hours (8K)",
    "How Speedrunners Conquered The World's Hardest Game",
    "A Million Dollars vs A Billion Dollars, Visualized: A Road Trip",
    "Roblox Juke's Towers of Hell Forgotten Ridge Tower Rush Full Footage",
    "3008 ANIMATION MEME // TW READ DESC",
    "2½ Hours of Unedited Garlic Bread Flight Footage",
    "paradise atoll tower rush lol",
    "Toadette?",
    "The World's Hardest Game theme song 10 HOURS",
    "Annoying Orange Supercut - EVERY VIDEO EVER!",
    "Minecraft FULL Soundtrack (2022)",
    "Rick and Morty - Human Music (Original Mix 2 Hours Loop)",
    "for LDC",
    "bobby",
    "other day - 800x slower",
    "Ring 6 Tower Rush (R6TR) - Roblox Juke's Towers of Hell",
    "Ring 4 Tower Rush - Completion",
    "Every ERB In 1 Video (In Order)",
    "The Caretaker - Everywhere At The End Of Time - Stages 1-6 (Complete)",
    "Twelve Minutes: Full Original Soundtrack (13 Songs) - By Neil Bones",
    "Osaka Spinning for 10 hours",
    "Ring 9 Tower Rush (R9TR) - Roblox Juke’s Towers of Hell",
    "The Possible Quiz",
    "Rebeating Ring 2 Tower Rush With CoWS: Completion (Roblox JToH)",
    "ring 1 tower rush in 1:46:02",
    "LDC - 10000 (100x slower)",
    "Ring 3 Tower Rush (with TAT + CoHaD) | Roblox JToH",
    "(New Hardest) Zone 1 Tower Rush [JToH]",
    "The End of The World",
    "Last to leave VC wins $25,000",
    "0 IQ Detective",
    "How's it going bros, my name is PewDiePie slowed down to 1 hour",
    "The",
    "Screw The Nether (2 HOURS) (YOGSCAST)",
    "Super Paper Mario Soundtrack",
    "VeggieTales x Astronaut in the Ocean 10 Hours",
    "Serial Experiments Lain OST [Full Album + Duvet]",
    "Time-Lost Plain Tower Rush - Completion | Roblox JToH",
    "Funniest Zoom Trolling Pranks of 2022!",
    "Numbers 0 to 🅃̵̧̟̦̀͒̂̈͘𝕳̸̧͕͈͈̩̓̆̃̽͜𝔼̸͕̱͍̼͚͆͗͠ Ⓔ̸̤̈̏𝓝̴̗̙͊ꓷ̵͚̿̉̕ !!!!!!!!!! [The final goal !!!]",
    "i slowed and reverbed all merge music",
    "Buy own damn fries!",
    "Garden of Eeshöl in 59.18.64",
    "Total Drama Island - Complete | Full HD (1080p)",
    "We Are Number One but every one is replaced with thatistheplan's We Are Number One video",
    "Big Smoke takes 4 hours to order (0.1% Speed)",
    "Total Drama Action - Complete | Full HD (1080p)",
    "iDubbbz forces Tana to say a naughty word at 0.1% speed",
    "Vsauce Music (10 Hours)",
    "BCG 1 Hour Countdown (LED Frame Counter 180,000 Frames - 50 FPS) Remix BBC Arabic Countdown",
    "Blame the Hero [Full Movie] by Brandon Rogers",
    "All OneShot OSTs",
    "Tetris (CD-i) Full Original Soundtrack [+ BONUS TRACKS]",
    "Lemon Demon - Spirit Phone - full album (w Bonus Tracks) (2016)",
    "Quandale Dingle and friends in GMod 4",
    "burger",
    "!bestmod: Daytona but its at 1% speed but the audio glitched out and it stutters a lot",
    "DEEZ NUTS! 1 HOUR LOOP!!!! SIT BACK AND RELAX",
    "Roblox PM 6:06 Fanmade Games 2: Electric Boogaloo",
    "full ToVL alljump run (147 mins)",
    "BLAZE_Brando2001",
    "Xbox stretched to 1 hour",
    "♪ How Do I Craft This Again? A Minecraft Parody For 10 Hours",
    "Wallace hammering for 10 hours",
    "all ano albums",
    "Deltarune - Field of Hopes and Dreams stretched to 1 Hour",
    "1700s Sea Shanties 10 Hour",
    "10 hours Highway to Hell Party",
    "Celeste - Resurrections stretched to 10 Hours",
    "Undertale - MEGALOVANIA stretched to 10 Hours",
    "Pickle Rift ASMR",
    "Donut County - Original Soundtrack",
    "The Nutshack but every verse is repeated 300 times for over 5 hours",
    "MGS1 Speedrun - 1:38:36 - No save, Big Boss rank, all bosses",
    "You have to put the CD in your Computer stretched to 1 Hour",
    "milk",
    "Zone 7 Tower Rush Speedrun",
    "diggy diggy hole 2 hours",
    "Zone 2 Tower Rush - Completion",
    "Grееn Dау Аmеricаn ldiоt (Full Album)",
    "Flamingo - STILL CHILL (1 HOUR)",
    "pizza",
    "Zone 8 Tower Rush - Completion | Roblox JToH",
    "Quandale Dingle and friends in GMod 3",
    "Meepcity music for 1 hour",
    "Undertale - Start Menu stretched to 1 Hour",
    "BONETROUSLE EXCEPT IT KEEPS GETTING FASTER AND FASTER Undertale 3 3",
    "''500 Chunks 10 Hours Parody Video By ElementAnimation",
    "We're In Heaven OH OH OH for 10 hours straight",
    "The little chick cheep [10 hours]",
    "MEATGRINDER ANIMATION MEME // TW READ DESCRIPTION",
    "MrBeast Hits His First Subscribers And Is Happy Every Time 10 Hours",
    "C418 - Blocks stretched to 10 hours",
    "DANCE TILL YOU'RE DEAD 10 HOURS",
    "John Cena Dancing With Headphones To Meepcity Music 10 Hours",
    "Sprite Cranberry TV commercial for 10 hours",
    "Kero Kero Bonito - Flamingo [10 HOUR EDITION]",
    "Full Paper Mario OST",
    "Revenge - A Minecraft Parody of Usher's DJ Got Us Fallin' In Love (Music Video) (10 Hours)",
    "Jim Carrey drive - Tick of the clock [10 hours]",
    "Loituma - Ieva_s Polka (Original) 10 Hours Version !!!",
    "Home - Resonance stretched to 10 hours",
    "Earth, Wind & Fire - September stretched to 1 hour",
    "The professor eats a pea for 10 hours",
    "Hator hator hator",
    "I spent 24 hours running up the ENDLESS staircase (Super Mario 64)",
    "C418 - Chirp stretched to 10 hours",
    "Narwhals | 10 Hours",
    "EEEAAAOOO (10 hours ver. better loop)",
    "you've been gnomed 10 hours",
    "Peshay Studio Set (1996) - HQ Remix",
    "Celeste - Prologue stretched to 1 Hour",
    "STEREO MADNESS AT 0.01 SPEED (42,069 CLICKS)",
    "Henry Stickmin distraction dance but speed increases SLIGHTLY after every clap [1 hour]",
    "waffle",
    "Endless Easy: Endgame",
    "Megalovania: Except it's getting slower",
    "Daft Punk - Discovery (full album + high quality)",
    "Endless Normal: Infinity War",
    "Sine Rhythms // 4 Hours of Polyrhythm Melodies for Relaxation and Serenity",
    "The Mine Song but every mine is replaced with The Mine Song",
    "3",
    "US Presidents Play Wii Sports Resort Supercut (Part 1-6)",
    "Lucky Star FULL 1-24 Eng Dub",
    "Playstation 2 System Menu Ambience + Silent Hill 2 Ambience (6 Hour Ambient, Relaxing Music)",
    "Steamed Hams but every repeated word loops back to it's last use",
    "Don’t eat in the halls 1 hour loop",
    "1700s Sea Shanties 1Hour",
    "Roblox PM 6:06 Fanmade Games 3: The Prequel",
    "From 0 to 100000",
    "MASKED DANCERS: meeting the gods I never knew",
    "Wii Fit OST",
    "Metal Gear Solid 2 Any% Speedrun - No Commentary - 1:03:35",
    "[TAS] Perfect Extreme Demon Roulette Speedrun in 1:14:50 - Geometry Dash",
    "bacon",
    "PPAP but every P letter is replaced with Bee Movie trailer",
    "Are these the world's most crispy fries",
    "The man who tried to fake an element",
    "Wii Fit Plus OST",
    "Shortest Video on Youtube (Parts 1-1,000) | FULL SERIES!",
    "kirkiimad - Майнкрафт (1 час)",
    "Roblox PM 6:06 Fanmade Games 4: The Finale",
    "What The Internet Did To Garfield",
    "PM 6:06 Sublevel 1 at 0.16 Walkspeed: The Entire Experience",
    "1 Hour of Powerline Noise from Serial Experiments Lain",
    "hotdog",
    "The End",
    "The 1000 Hour Long Video",
    "(OLD) Arcane Area Steeple Rush Completion",
    "Wii Sports Resort OST",
    "Zone 6 Tower Rush",
    "7 (gugop delxue)",
    "Nutshack x256",
    "Left 4 Dead OST",
    "kirkiimad & CG5 - ily [1 HOUR]",
    "Lost River Tower Rush - Completion | Roblox JToH",
    "Silent Abyss Tower Rush WR [126:38.27]",
    "07/27/1978",
    "Space Pendulum // 4 Hours of Dreamy Melodies for Relaxation and Serenity",
    "chip",
    "The World's Hardest Speedrun",
    "Rainbow Bunchie 10 hours",
    "Steamed Hams but It's an Endless Loop",
    "Don't Mine at Night Minecraft Song - 1 HOUR LOOP",
    "all of the Jack Stauber albums in order",
    "Time-Lost Clockwork Tower Rush Completion + WR [299:18.13]",
    "the nutshack theme but the first nutshack is replaced with me ending the channel",
    "The Battle Cats COMPLETE OST (As of Version 12.3)",
    "ASSGORE (1 Hour)",
    "Angry Kid Series 1-4 Compilation",
    "OMORI Soundtrack",
    "grubhub ad stretched to 1 hour",
    "Metal Gear Solid 3 - The Movie [HD] Full Story",
    "10 hours videos I LIKE TRAINS 10 hours",
    "Last to leave VC wins $10,000",
    "MGS4 | New Game | Big Boss Emblem | NO Saves Speedrun in 2h 00m 47s",
    "Wii Party OST",
    "JToH - Ring 5 Tower Rush + Rings 1-4 Mini Tower Rush COMPLETION!",
    "chip 2",
    "BOW-ZRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR5",
    "The Possible Quiz 2",
    "#SkipThis - Are We There Yet? Full Clear Video",
    "heaven (a dream you had before)",
    "Dragon Ball Z: The Ultimate Review - The Saiyan Saga",
    "Sex Survey Results",
    "1273",
    "Purple Comet | Super Mario Galaxy | 10 Hours",
    "[Vinesauce] Joel - Hardcore Friday: Desert Bus",
    "Last to leave VC wins $50,000",
    "ROBLOX_OOF.mp3",
    "ONE: Season One (Episodes 1-9)",
    "ONE: Season Two (Episodes 10-18)",
    "Watching Memes For 24 Hours Was A Terrible Idea.",
    "HOW TO SURVIVE ALONE IN L4D1 CAMPAIGNS (REALISM EXPERT)",
    "Left 4 Dead 2 - No Mercy (Unutterable Difficulty) (Legacy Version)",
    "Metal Gear Solid V Longplay Walkthrough [Ground Zeroes+The Phantom Pain] Full Gameplay",
    "The Worst Game of 2023",
    "Raiden Punching Armstrong 10 Hours",
    "Tornado Alley Ultimate: Tartarus Survival",
    "that mauzymice gif 12h version with music",
    "Ridge Racer Type 4 Soundtrack",
    "Loco Loco It Burns 10 HOURS",
    "Full Lua Programming Crash Course - Beginner to Advanced",
    "The Creators - Sound of Insanity Revisited | Stages 1-6 (Complete)",
    "Staying Alive 10 Hour Version",
    "Disco Lounge - Kevin MacLeod - 2 HOURS | Download Link",
    "Nikola Tesla and Albert Einstein Meme 10 Hours",
    "Amazing!! 【ﾌﾞﾙｽｺﾌｧｰ薺,まゆむし,Jinmenusagi,FUNKY髭HANK】5 Hours",
    "Glitchtale The Movie | Season 2 Compilation",
    "Dragon Ball Z: The Ultimate Review - The Freeza Saga",
    "Dragon Ball Z: The Ultimate Review - The Cell Saga",
    "The Carebear - Everywhere in The Beginning of Nowhere Stages 1-7 (The Final Edition)",
    "Tally Hall - Banana Man (1 hour version) (something we all needed)",
    "The Caretakers - Nowhere At The Millennium Of Space - Stages 1-6 (Complete edition)",
    "Everywhere At The End Of Time FULL REACTION STREAM",
    "Wii - The Homebrew Channel Music Theme - 10 Hours Loop",
    "ＳＬＥＥＰＹ 💤 Lofi hip hop mix - Beats to sleep/chill to | Deep Sleeping Music",
    "FATE V6 - CLEAR",
    "Dig dug theme - 2 hours",
    "Cat vibing to Lady Hear Me Tonight 10 hour",
    "Red Ball - World Record Progression (Speedrun History)",
    "Red Ball Speedruns - Beyond the 3-Minute Milestone",
    "[TAS] I Wanna Kill The Kamilia 3 100% in 2:43:13.57",
    "Dragon Ball Z: The Ultimate Review (ft. Team Four Star) - The Buu Saga (Pt. 1)",
    "10 hours of What is love (Jim Carrey)",
    "YOTSUBA: The 5 year-old who taught me love again",
    "Ten Thousand Digits of Pi in Morse Code in 3 Hours and 14 minutes",
    "pilotredsun - 4 & 1/2 Hour Playlist/Mega Mix",
    "Orpheusftw's Entire King of the Hill YouTube Poop Collaboration",
    "Scott the Woz's Year of Clubhouse Games Supercut",
    "I reclaimed the highest score in ONE EGG by playing for 4 HOURS... [Rhythm Heaven Fever Munchy Monk]",
    "How to Crash SM64 Using a Pendulum (Commentated)",
    "The Great Centurial Trials 1 - 62 [Former World Record]",
    "Imagine Dragons - Thunder (1 Hour Lyrics)",
    "1 hour Undertale Vines compilation",
    "Dragon Ball Z: The Ultimate Review (ft. Team Four Star) - The Buu Saga (Pt. 2)",
    "Discord VCs at 6AM",
    "YTP - Peter-Man 2",
    "Two Hour Testament",
    "(VOD, Part 1) Space Jam Charity SLAM!",
    "AB - Put That Shit On (10 Hours)",
    ". . .",
    "long cube",
    "Npesta Sludge",
    "bazinga 1 hour",
    "Edge Of Destiny (NEW HARDEST) by CDMusic & More | Geometry Dash",
    "Leyland Kirby -- We drink to forget the coming storm (2014) [full album]",
    "Spider-Man 2: The Game Pizza Theme 10 HOURS",
    "611",
    "1396",
    "10 hours with Roxbury Guys (Jim Carrey, new CD)",
    "Minecraft All Advancements TAS World Record",
    "Tower of Cruel Punishment - Clear",
    "Roblox pain v3 completion | keen badge",
    "Bad Apple slowed down to 10 hours",
    "nerd emoji sound but it gradually gets faster for 1 hour",
    "Mandela Catalogue (FULL SERIES)",
    "I Beat The Impossible Quiz Book",
    "Clair de Lune (Extended)",
    "HOME | Tides 1 HOUR (432 hz) (slowed + reverb) // HD ASMR",
    "Egoless (but good)",
    "Deltarune - Hip Shop stretched to 1 Hour",
    "Undertale - Dogsong stretched to 1 Hour",
    "Togekiss (With you friends, long flight)",
    "gyroid effects history effects",
    "Windows XP Startup Sound slowed down to 24 hours",
    "Identifying Luck: Mario Party 1",
    "Cynthoni - Not The Essential Mix",
    "This Trackmania Map Took Me OVER 50 HOURS | Deep Dip 2: Shallow Dip!",
    "The CRAZIEST Parkour I've Ever Played | Hypixel Housing",
    "Minecraft 1.21 All Advancements TAS",
    "The History of the Mario Kart DS World Champion",
    "Albuquerque but everytime they say Albuquerque the video restarts",
    "Kingdom Hearts 2: Highlights [WayneradioTV fan edit]",
    "glass beach - the first glass beach album [full album] (2019)",
    "Pizza Tower Highlights [WayneradioTV fan edit]",
    "glass beach - plastic death (Full Album Stream)",
    "How speedrunners beat Half-Life 2 in under 38 minutes (SPEEDRUN EXPLAINED - Any% No Voidclip)",
    "Heavy Rain vs Disco Elysium - Good & Bad Cop Games",
    "Scott Pilgrim Critique (And Why the Show Succeeds)",
    
]


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            // if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            // check if the song title contains the query
            if (arr[i].toUpperCase().includes(val.toUpperCase())) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = arr[i]
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += '<input type="hidden" value="' + arr[i] + '">';
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                if (a.childElementCount < 5) // only show top 5 results
                    a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
                document.getElementById("guess-button").click()
            }
        }
        if (arr.includes(inp.value)) {
            document.getElementById("guess-button").disabled = false;
        } else {
            document.getElementById("guess-button").disabled = true;
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
        if (arr.includes(inp.value)) {
            document.getElementById("guess-button").disabled = false;
        } else {
            document.getElementById("guess-button").disabled = true;
        }
    });
}

autocomplete(document.getElementById("search-input"), songTitles);
