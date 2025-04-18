const characters = [
    { 
        title: "Super Mario", 
        image: "images/characters/mario.webp", 
        description: "The iconic plumber from Nintendo who saves Princess Peach and battles Bowser in the Mushroom Kingdom.",
        firstGame: "Donkey Kong (1981)"
    },
    { 
        title: "Link", 
        image: "images/characters/link.webp", 
        description: "The courageous hero of Hyrule, wielding the Master Sword to defeat Ganon and rescue Princess Zelda.",
        firstGame: "The Legend of Zelda (1986)"
    },
    { 
        title: "Sonic the Hedgehog", 
        image: "images/characters/sonic.webp", 
        description: "The blue blur known for his incredible speed, battling Dr. Robotnik to save his animal friends.",
        firstGame: "Sonic the Hedgehog (1991)"
    },
    { 
        title: "Crash Bandicoot", 
        image: "images/characters/crash.webp", 
        description: "The adventurous marsupial who spins and jumps his way through islands to stop the evil Dr. Neo Cortex.",
        firstGame: "Crash Bandicoot (1996)"
    },
    { 
        title: "Donkey Kong", 
        image: "images/characters/donkey-kong.webp", 
        description: "The powerful ape who protects his banana hoard and helps his friends in the jungle.",
        firstGame: "Donkey Kong (1981)"
    },
    { 
        title: "Samus Aran", 
        image: "images/characters/samus.webp", 
        description: "The fearless bounty hunter in her Power Suit, exploring alien worlds and battling space pirates.",
        firstGame: "Metroid (1986)"
    },
    { 
        title: "Kirby", 
        image: "images/characters/kirby.webp", 
        description: "The pink puffball who can inhale enemies and copy their abilities to save Dream Land.",
        firstGame: "Kirby's Dream Land (1992)"
    },
    { 
        title: "Mega Man", 
        image: "images/characters/mega-man.webp", 
        description: "The robotic hero who fights against Dr. Wily's evil robots using his Mega Buster and acquired powers.",
        firstGame: "Mega Man (1987)"
    },
    { 
        title: "Pac-Man", 
        image: "images/characters/pac-man.webp", 
        description: "The classic arcade character who munches on dots and avoids ghosts in a maze.",
        firstGame: "Pac-Man (1980)"
    },
    { 
        title: "Lara Croft", 
        image: "images/characters/lara-croft.webp", 
        description: "The daring archaeologist and adventurer known for her intelligence and combat skills in the Tomb Raider series.",
        firstGame: "Tomb Raider (1996)"
    }
];

const consoles = [
    { 
        title: "Nintendo Entertainment System", 
        image: "images/consoles/nes.webp", 
        description: "The iconic NES console.", 
        releaseYear: 1983 
    },
    { 
        title: "Super Nintendo", 
        image: "images/consoles/snes.webp", 
        description: "The legendary SNES console.", 
        releaseYear: 1990 
    },
    { 
        title: "PlayStation 1", 
        image: "images/consoles/ps1.webp", 
        description: "Sony's first gaming console.", 
        releaseYear: 1994 
    },
];

const games = [
    {
        title: "Super Mario Bros.",
        image: "images/games/super-mario-bros.webp",
        description: "A classic platformer where Mario and Luigi save Princess Peach from Bowser.",
        releaseYear: 1985,
        developer: "Nintendo",
        genre: "Platformer",
        characters: ["Mario", "Luigi", "Princess Peach", "Bowser", "Toad"],
        platforms: ["NES"]
    },
    {
        title: "The Legend of Zelda",
        image: "images/games/zelda.webp",
        description: "An action-adventure game where Link embarks on a quest to rescue Princess Zelda.",
        releaseYear: 1986,
        developer: "Nintendo",
        genre: "Action-Adventure",
        characters: ["Link", "Princess Zelda", "Ganon"],
        platforms: ["NES"]
    },
    {
        title: "Sonic the Hedgehog",
        image: "images/games/sonic.webp",
        description: "A fast-paced platformer featuring Sonic as he battles Dr. Robotnik.",
        releaseYear: 1991,
        developer: "Sega",
        genre: "Platformer",
        characters: ["Sonic", "Dr. Robotnik/Eggman", "Tails"],
        platforms: ["Sega Genesis"]
    },
    {
        title: "Tomb Raider",
        image: "images/games/tomb-raider.webp",
        description: "An action-adventure game starring Lara Croft, exploring ancient tombs.",
        releaseYear: 1996,
        developer: "Core Design",
        genre: "Action-Adventure",
        characters: ["Lara Croft", "Natla"],
        platforms: ["PlayStation", "Sega Saturn", "PC"]
    },
    {
        title: "Pac-Man",
        image: "images/games/pac-man.webp",
        description: "An arcade classic where Pac-Man eats dots while avoiding ghosts.",
        releaseYear: 1980,
        developer: "Namco",
        genre: "Arcade",
        characters: ["Pac-Man", "Blinky", "Pinky", "Inky", "Clyde"],
        platforms: ["Arcade"]
    },
    {
        title: "Street Fighter II",
        image: "images/games/street-fighter-ii.webp",
        description: "The revolutionary fighting game that defined the genre with its diverse roster of fighters.",
        releaseYear: 1991,
        developer: "Capcom",
        genre: "Fighting",
        characters: ["Ryu", "Ken", "Chun-Li", "Guile", "M. Bison"],
        platforms: ["Arcade", "SNES"]
    },
    {
        title: "Final Fantasy VII",
        image: "images/games/ff7.webp",
        description: "A landmark JRPG following Cloud Strife and his allies against the Shinra Corporation.",
        releaseYear: 1997,
        developer: "Square",
        genre: "RPG",
        characters: ["Cloud Strife", "Aerith Gainsborough", "Tifa Lockhart", "Sephiroth"],
        platforms: ["PlayStation"]
    },
    {
        title: "Pokémon Red & Blue",
        image: "images/games/pokemon-red-blue.webp",
        description: "The original Pokémon games that started the worldwide phenomenon of catching and training pocket monsters.",
        releaseYear: 1996,
        developer: "Game Freak",
        genre: "RPG",
        characters: ["Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Professor Oak"],
        platforms: ["Game Boy"]
    },
    {
        title: "Metal Gear Solid",
        image: "images/games/mgs.webp",
        description: "A stealth action game following Solid Snake as he infiltrates a nuclear facility.",
        releaseYear: 1998,
        developer: "Konami",
        genre: "Stealth Action",
        characters: ["Solid Snake", "Liquid Snake", "Otacon", "Revolver Ocelot"],
        platforms: ["PlayStation"]
    },
    {
        title: "Tetris",
        image: "images/games/tetris.webp",
        description: "The iconic puzzle game where players arrange falling blocks to create complete lines.",
        releaseYear: 1984,
        developer: "Alexey Pajitnov",
        genre: "Puzzle",
        characters: [],
        platforms: ["Multiple"]
    },
    {
        title: "Donkey Kong Country",
        image: "images/games/donkey-kong-country.webp",
        description: "A platformer featuring Donkey Kong and Diddy Kong as they reclaim their stolen banana hoard.",
        releaseYear: 1994,
        developer: "Rare",
        genre: "Platformer",
        characters: ["Donkey Kong", "Diddy Kong", "King K. Rool", "Cranky Kong"],
        platforms: ["SNES"]
    },
    {
        title: "Super Mario 64",
        image: "images/games/mario-64.webp",
        description: "The groundbreaking 3D platformer that revolutionized the genre, starring Mario.",
        releaseYear: 1996,
        developer: "Nintendo",
        genre: "3D Platformer",
        characters: ["Mario", "Princess Peach", "Bowser", "Yoshi"],
        platforms: ["Nintendo 64"]
    },
    {
        title: "Resident Evil 2",
        image: "images/games/resident-evil-2.webp",
        description: "A survival horror game where Leon Kennedy and Claire Redfield fight to survive Raccoon City's zombie outbreak.",
        releaseYear: 1998,
        developer: "Capcom",
        genre: "Survival Horror",
        characters: ["Leon S. Kennedy", "Claire Redfield", "Ada Wong", "Tyrant"],
        platforms: ["PlayStation"]
    },
    {
        title: "Mortal Kombat",
        image: "images/games/mortal-kombat.webp",
        description: "The controversial fighting game known for its brutal fatalities and unique characters.",
        releaseYear: 1992,
        developer: "Midway Games",
        genre: "Fighting",
        characters: ["Scorpion", "Sub-Zero", "Liu Kang", "Raiden", "Johnny Cage"],
        platforms: ["Arcade", "SNES", "Genesis"]
    },
    {
        title: "Doom",
        image: "images/games/doom.webp",
        description: "The pioneering first-person shooter that defined the genre and introduced immersive 3D environments.",
        releaseYear: 1993,
        developer: "id Software",
        genre: "FPS",
        characters: ["Doomguy", "Cyberdemon", "Cacodemon"],
        platforms: ["PC", "SNES", "PlayStation"]
    },
    {
        title: "Crash Bandicoot",
        image: "images/games/crash-bandicoot.webp",
        description: "A challenging platformer featuring the marsupial Crash as he defeats Dr. Neo Cortex's plans.",
        releaseYear: 1996,
        developer: "Naughty Dog",
        genre: "Platformer",
        characters: ["Crash Bandicoot", "Dr. Neo Cortex", "Aku Aku", "Tawna"],
        platforms: ["PlayStation"]
    },
    {
        title: "GoldenEye 007",
        image: "images/games/goldeneye.webp",
        description: "The revolutionary FPS based on the James Bond film that redefined console shooters.",
        releaseYear: 1997,
        developer: "Rare",
        genre: "FPS",
        characters: ["James Bond", "Alec Trevelyan", "Natalya Simonova", "Xenia Onatopp"],
        platforms: ["Nintendo 64"]
    },
    {
        title: "Chrono Trigger",
        image: "images/games/chrono-trigger.webp",
        description: "A legendary JRPG about a group of adventurers who travel through time to prevent global catastrophe.",
        releaseYear: 1995,
        developer: "Square",
        genre: "RPG",
        characters: ["Crono", "Marle", "Lucca", "Frog", "Lavos"],
        platforms: ["SNES"]
    },
    {
        title: "Castlevania: Symphony of the Night",
        image: "images/games/sotn.webp",
        description: "A gothic action-RPG that follows Alucard as he explores Dracula's castle.",
        releaseYear: 1997,
        developer: "Konami",
        genre: "Action-RPG",
        characters: ["Alucard", "Dracula", "Richter Belmont", "Maria Renard"],
        platforms: ["PlayStation", "Sega Saturn"]
    },
    {
        title: "Star Fox",
        image: "images/games/starfox.webp",
        description: "A rail shooter featuring Fox McCloud and his team defending the Lylat system from Andross.",
        releaseYear: 1993,
        developer: "Nintendo",
        genre: "Rail Shooter",
        characters: ["Fox McCloud", "Falco Lombardi", "Peppy Hare", "Slippy Toad", "Andross"],
        platforms: ["SNES"]
    }
];

export { characters, consoles, games };