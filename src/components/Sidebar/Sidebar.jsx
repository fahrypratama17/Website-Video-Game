import {useState} from 'react'
import NavbarComponent from '../Navbar/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css'


function Sidebar () {
    const isiSidebar = [
        {genreGame : `Real-Time Strategy (RTS)`},
        {genreGame : `Multiplayer Online Battle Arena (MOBA)`},
        {genreGame : `Shooter`},
        {genreGame : `Role Playing Game (RPG)`},
        {genreGame : `Sandbox`},
        {genreGame : `Simulation`},
        {genreGame : `Fighting`},
        {genreGame : `Action-Adventure`},
        {genreGame : `Survival Horror`},
        {genreGame : `Interactive Movie`},
    ]
    
    const isiCardGame = [

        { namaGame: `Foundation`, 
          gambar: `Foundation.jpg` ,
          genre: `Simulation`,
          deskripsi: `Foundation is a medieval city-building simulation game by Polymorph Games. Players design and manage a growing city without grid constraints, allowing creative, organic layouts. Focusing on resource management and citizen needs, Foundation offers a deep simulation of city life, from building landmarks to balancing the economy and social dynamics.`
        },
        { namaGame: `Outlast`, 
          gambar: `outlast.jpg` ,
          genre: `Survival Horror`,
          deskripsi: `Outlast is a chilling survival horror game that places you in the shoes of a journalist exploring a nightmarish asylum, equipped only with a night vision camera. With no weapons to defend yourself, you must rely on running, hiding, and using your wits to survive and uncover the dark secrets buried within.`
        },
        { namaGame: `Arena Breakout Infinite`, 
          gambar: `Arena Breakout Infinite.jpg` ,
          genre: `Shooter`,
          deskripsi: `Arena Breakout is a tactical first-person shooter that challenges players to loot, strategize, and survive intense, realistic battles. Customize weapons, adapt to changing scenarios, and secure valuable resources to escape the battlefield alive. Each encounter is unique, offering endless replayability and a high-stakes combat experience.`
        },
        { namaGame: `Silent Hill 2`, 
          gambar: `Silent Hill 2.jpg` ,
          genre: `Survival Horror`,
          deskripsi: `Silent Hill 2 is a psychological horror game where James Sunderland journeys to the eerie town of Silent Hill after receiving a letter from his deceased wife, Mary. As he explores, he faces disturbing creatures and encounters characters who reflect his guilt and grief. The game is renowned for its deep narrative, symbolism, and haunting atmosphere.`
        },
        { namaGame: `Cities Skylines II`, 
          gambar: `CitiesSkylines2.jpg` ,
          genre: `Simulation`,
          deskripsi: `Cities: Skylines 2 is a city-building simulation game that lets players design, manage, and grow their own city from the ground up. With enhanced graphics, deeper management systems, and more complex urban challenges, it offers players the chance to create detailed cities while balancing resources, infrastructure, and citizens’ needs.`
        },
        { namaGame: `PUBG: Battlegrounds`, 
          gambar: `PUBG.jpg` ,
          genre: `Shooter`,
          deskripsi: `PlayerUnknown’s Battlegrounds (PUBG) is a battle royale game where 100 players fight to be the last one standing. Dropped onto a large, open map, players must scavenge for weapons, gear, and vehicles while avoiding a shrinking safe zone. The game combines strategy, combat, and survival in a high-stakes environment.`
        },
        { namaGame: `It Takes Two`, 
          gambar: `ItTakesTwo.jpg` ,
          genre: `Action-Adventure`,
          deskripsi: `It Takes Two is a cooperative action-adventure game developed by Hazelight Studios. Players control Cody and May, a married couple turned into dolls by a magical spell. They must work together through creative, puzzle-filled levels to overcome challenges and mend their fractured relationship. The game is praised for its engaging co-op gameplay and heartfelt story.`
        },
        { namaGame: `Elden Ring`, 
          gambar: `Elden Ring.jpg` ,
          genre: `Fighting`,
          deskripsi: `Elden Ring is an open-world action RPG developed by FromSoftware and directed by Hidetaka Miyazaki, with world-building by George R.R. Martin. Set in the expansive Lands Between, players explore a vast, interconnected world filled with dangerous enemies, powerful bosses, and deep lore. With freedom to customize builds and discover secrets, it offers a rich, immersive experience.`
        },
        { namaGame: `Age of Empires IV`, 
          gambar: `Age of Empires IV.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Age of Empires IV is a real-time strategy game where players build and develop civilizations across different historical eras. They gather resources, construct buildings, train armies, and engage in combat. Set in the Middle Ages, the game emphasizes strategy, tactical warfare, and historical campaigns with various unique factions.`
        },
        { namaGame: `Total War Shogun 2`, 
          gambar: `TotalWarShogun2.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Total War: Shogun 2 is a strategy game set in feudal Japan. Players manage clans, build armies, and expand territories through diplomacy, real-time battles, and turn-based tactics. Combining political strategy and epic samurai warfare, the game emphasizes historical accuracy and features stunning visuals of Japan's landscape.`
        },
        { namaGame: `Age of Mythology 2`, 
          gambar: `Age of Mythology.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Age of Mythology II hasn't been officially released, but there's strong anticipation for its return. Fans hope it will bring modern graphics and mechanics to the legendary gameplay of Age of Mythology, blending mythological creatures, divine powers, and strategic elements. The new game is expected to honor the original while introducing updates to captivate both new and veteran players.`
        },
        { namaGame: `Warhammer 40,000`, 
          gambar: `Warhammer 40,000.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Warhammer 40,000 is a tabletop miniature wargame set in a grim, dark sci-fi universe where humanity battles aliens, demons, and heretics. Players assemble and paint detailed armies, then engage in strategic, dice-based combat using complex rules. The game emphasizes tactical thinking, creative modeling, and rich lore across an expansive galaxy.`
        },
        { namaGame: `Command & Conquer Red Alert 3`, 
          gambar: `Command & Conquer Red Alert 3.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Command & Conquer: Red Alert 3 is a real-time strategy game set in an alternate universe where three factions—Soviets, Allies, and Empire of the Rising Sun—battle for world domination. It features unique units, co-op campaigns, and a humorous storyline with live-action cutscenes. The game emphasizes strategic planning, naval warfare, and creative use of powerful technologies.`
        },
        { namaGame: `Rusted Warfare`, 
          gambar: `Rusted Warfare.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Rusted Warfare is a real-time strategy game inspired by classics like *Total Annihilation* and *Command & Conquer*. It features a retro aesthetic, large-scale battles, and extensive base-building. Players can engage in various modes, including campaign, skirmish, and survival, and customize their experience with modding support and a level editor.`
        },
        { namaGame: `Total War Three Kingdoms`, 
          gambar: `Total War Three Kingdoms.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Total War: Three Kingdoms is a strategy game set in ancient China during the Three Kingdoms period. Players manage kingdoms through diplomacy, espionage, and city building in a turn-based mode while commanding armies in real-time battles. The game features legendary warlords, rich storytelling, and a focus on forming and breaking alliances for strategic dominance.`
        },
        { namaGame: `Northgard`, 
          gambar: `Northgard.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Northgard is a real-time strategy game set in a Norse mythology-inspired world. Players control Viking clans as they explore a mysterious land, gather resources, build settlements, and fight for survival against harsh environments and rival clans. The game emphasizes strategic management, exploration, and unique clan abilities that shape gameplay.`
        },
        { namaGame: `Company of Heroes 2`, 
          gambar: `Company of Heroes 2.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Company of Heroes 2 is a real-time strategy game set during World War II, focusing on the brutal Eastern Front. Players command the Soviet Red Army or German forces, using tactical maneuvers and terrain advantage. The game emphasizes strategic combat, resource management, and intense, dynamic battles with a realistic weather system affecting gameplay.`
        },
        { namaGame: `Stronghold Crusader`, 
          gambar: `Stronghold Crusader.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Stronghold Crusader is a real-time strategy game set in the Middle East during the Crusades. Players build and defend castles, manage resources, and lead armies into battle. The game features a mix of economic and military strategy, with various historical campaigns and skirmishes against AI or other players. It emphasizes castle construction and siege warfare.`
        },
        { namaGame: `They Are Billions`, 
          gambar: `They Are Billions.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `They Are Billions is a real-time strategy game set in a post-apocalyptic world overrun by zombies. Players build and defend colonies, using strategic planning and resource management to withstand massive hordes of infected. The game features a unique blend of base-building and tower defense mechanics, with a focus on survival and tactical decision-making.`
        },
        { namaGame: `Wargame: Red Dragon`, 
          gambar: `Wargame Red Dragon.jpg` ,
          genre: `Real-Time Strategy (RTS)`,
          deskripsi: `Wargame: Red Dragon is a real-time strategy game set during a Cold War-era conflict in East Asia. Players command armies, naval forces, and air units from 17 nations, using strategic positioning and combined-arms tactics to win battles. The game emphasizes realism, massive maps, and diverse unit options, allowing for both single-player campaigns and large-scale multiplayer warfare.`
        },
        { 
          namaGame: `Pokemon Unite`, 
          gambar: `Pokemon Unite.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Pokemon Unite is a free-to-play MOBA game where players form teams of five Pokemon to compete in fast-paced matches. The goal is to score points by capturing zones and defeating wild Pokemon, using strategic team-based gameplay. Each Pokemon has unique abilities, and players must work together to outmaneuver opponents in this colorful, action-packed environment.`
        },
        
        {
          namaGame: `Lokapala`,
          gambar: `Lokapala.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Lokapala is the first Indonesian-developed MOBA game, incorporating rich Southeast Asian mythology and culture. Players form teams of five heroes, known as Ksatriyas, to battle in strategic and tactical warfare. Each hero is inspired by local legends and offers unique abilities, creating a culturally immersive and competitive experience.`
        },
        
        {
          namaGame: `Mobile Legends: Bang Bang`,
          gambar: `Mobile Legends Bang Bang.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Mobile Legends: Bang Bang is a fast-paced, 5v5 MOBA game designed for mobile devices. Players select from a wide variety of heroes and engage in strategic battles, with quick matchmaking and action-packed gameplay. The game emphasizes teamwork and coordination, with short, intense matches designed for fast-paced mobile experiences.`
        },
        
        {
          namaGame: `Arena of Valor (AOV)`,
          gambar: `Arena of Valor.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Arena of Valor (AOV) is a mobile-based MOBA game featuring intense 5v5 battles and a diverse roster of heroes. Players can choose roles such as warriors, mages, or marksmen and engage in strategic team fights. The game focuses on tactical depth and fast-paced gameplay, with lush graphics and a wide variety of characters.`
        },
        
        {
          namaGame: `Vainglory`,
          gambar: `Vainglory.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Vainglory is a highly competitive MOBA game that delivers strategic gameplay and stunning graphics, designed for both mobile and PC platforms. Players choose from numerous heroes, utilizing their unique abilities in battles that require teamwork, strategy, and precision. The game is known for its deep mechanics and smooth performance.`
        },
        
        {
          namaGame: `League of Legends`,
          gambar: `League of Legends.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `League of Legends is a world-renowned MOBA game in which two teams of five players compete to destroy the opposing team's base. Players choose from a roster of champions, each with unique abilities and playstyles. The game is famous for its strategic depth, high-stakes matches, and massive esports scene, offering a highly competitive environment.`
        },
        
        {
          namaGame: `Marvel Super War`,
          gambar: `Marvel Super War.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Marvel Super War brings iconic Marvel superheroes and villains into a thrilling MOBA experience. Players select from a diverse lineup of characters, such as Iron Man, Spider-Man, and Thanos, each with unique powers. The game features real-time 5v5 combat and strategic gameplay, making use of each hero's abilities in exciting team battles.`
        },
        
        {
          namaGame: `Bug Heroes 2`,
          gambar: `Bug Heroes 2.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Bug Heroes 2 is an action-packed blend of MOBA and tower defense elements, where players control heroic bugs with unique abilities. The game offers both single-player and multiplayer modes, requiring players to defend their base while fighting off waves of enemies. Strategic resource management and combat skills are essential to succeed in this insect-filled adventure.`
        },
        
        {
          namaGame: `Onmyoji Arena`,
          gambar: `Onmyoji Arena.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Onmyoji Arena is a MOBA game that builds on the universe of the popular Onmyoji series, featuring beautifully crafted Japanese-style visuals and shikigami characters. Players engage in 5v5 battles, choosing heroes with mystical abilities. The game emphasizes balance and fair competition, with an intricate yet accessible gameplay system.`
        },
        
        {
          namaGame: `Shellfire`,
          gambar: `Shellfire.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Shellfire is a unique FPS/MOBA hybrid game designed for mobile platforms, combining fast-paced shooting mechanics with strategic hero abilities. Players can engage in team-based matches, using various characters with unique skills and weapons. The game emphasizes tactical gameplay, character progression, and thrilling team combat.`
        },
        
        {
          namaGame: `Heroes Evolved`,
          gambar: `Heroes Evolved.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Heroes Evolved is a fast-paced MOBA game featuring over 50 unique heroes and deep strategic gameplay. Players engage in tactical 5v5 battles, utilizing a wide range of characters, each with distinct abilities and roles. The game includes various modes, competitive rankings, and a dedicated community for intense, competitive action.`
        },
        {
          namaGame: `Plants War 2`,
          gambar: `Plants War 2.jpg`,
          genre: `Multiplayer Online Battle Arena (MOBA)`,
          deskripsi: `Plants War 2 is a MOBA game that combines strategy and action, featuring plant warriors in a battle for the last green land. Players control plant heroes with unique abilities, engaging in strategic matches against enemy forces. The game offers lush graphics and a nature-themed setting, focusing on tactical combat and teamwork.`
        },
        {
          namaGame: `Counter Strike: Global Offensive`,
          gambar: `Counter Strike Global Offensive.jpg`,
          genre: `Shooter`,
          deskripsi: `Counter Strike: Global Offensive (CS:GO) is a competitive, team-based first-person shooter that pits two teams, Terrorists and Counter-Terrorists, against each other in various game modes. Players must use strategic planning, teamwork, and precise shooting to achieve objectives, such as planting or defusing bombs. The game is well-known for its highly tactical gameplay and massive esports scene.`
        },
        
        {
          namaGame: `Tom Clancy's Rainbow Six Siege`,
          gambar: `Rainbow Six Siege.jpg`,
          genre: `Shooter`,
          deskripsi: `Tom Clancy's Rainbow Six Siege is a tactical FPS game that emphasizes strategy and teamwork. Players take on roles as operators from various international counter-terrorism units, each with unique gadgets and abilities. The game features intense, destructible environments and requires precise coordination and communication to win in objective-based matches.`
        },
        
        {
          namaGame: `VALORANT`,
          gambar: `VALORANT.jpg`,
          genre: `Shooter`,
          deskripsi: `VALORANT is a character-based tactical FPS game developed by Riot Games. Players choose from a roster of agents, each with unique abilities, and compete in team-based, round-based matches. The game blends precision shooting mechanics with strategic use of abilities, requiring careful planning and skillful execution to secure victory.`
        },
        
        {
          namaGame: `Fortnite`,
          gambar: `Fortnite.jpg`,
          genre: `Shooter`,
          deskripsi: `Fortnite is a popular battle royale game where 100 players drop onto an island and fight to be the last one standing. The game features unique building mechanics, allowing players to construct structures for defense and mobility. Fortnite's vibrant art style, frequent updates, and crossover events have made it a cultural phenomenon.`
        },
        
        {
          namaGame: `Apex Legends`,
          gambar: `Apex Legends.jpg`,
          genre: `Shooter`,
          deskripsi: `Apex Legends is a squad-based battle royale game set in the Titanfall universe. Players select from a roster of Legends, each with distinct abilities, and form squads to compete against other teams. The game emphasizes fast-paced combat, strategic use of abilities, and team-based coordination, with a strong focus on movement and gunplay.`
        },
        
        {
          namaGame: `Escape From Tarkov`,
          gambar: `Escape From Tarkov.jpg`,
          genre: `Shooter`,
          deskripsi: `Escape From Tarkov is a hardcore and realistic FPS game that combines elements of survival and RPG. Players embark on raids to scavenge for loot, fight enemy players and AI, and extract safely. The game features a complex inventory system, realistic ballistics, and a punishing death mechanic, offering an intense and immersive experience.`
        },
        
        {
          namaGame: `Call of Duty: Modern Warfare 2`,
          gambar: `Call of Duty Modern Warfare 2.jpg`,
          genre: `Shooter`,
          deskripsi: `Call of Duty: Modern Warfare 2 is a high-octane FPS game featuring a cinematic single-player campaign and fast-paced multiplayer modes. Players engage in intense firefights across various maps, using a wide range of weapons and equipment. The game also includes cooperative Spec Ops missions, providing diverse and action-packed gameplay experiences.`
        },
        
        {
          namaGame: `Overwatch 2`,
          gambar: `Overwatch 2.jpg`,
          genre: `Shooter`,
          deskripsi: `Overwatch 2 is a hero-based FPS game that builds on the original Overwatch's success, offering new maps, modes, and heroes. Players select from a diverse roster of characters, each with unique abilities, and engage in team-based objective play. The game focuses on teamwork, strategy, and fast-paced, dynamic combat in a vibrant world.`
        },
        
        {
          namaGame: `Point Blank`,
          gambar: `Point Blank.jpg`,
          genre: `Shooter`,
          deskripsi: `Point Blank is a classic online FPS game featuring fast-paced gameplay and a wide variety of weapons and modes. Players compete in team-based matches, using tactical skills and quick reflexes to outgun opponents. The game is known for its accessible controls, intense action, and highly competitive environment, especially popular in Southeast Asia.`
        },
        
        {
          namaGame: `Battlefield V`,
          gambar: `Battlefield V.jpg`,
          genre: `Shooter`,
          deskripsi: `Battlefield V is a large-scale FPS game set during World War II, offering expansive maps and dynamic, destructible environments. Players engage in epic battles, utilizing a wide range of vehicles, weapons, and team-based tactics. The game emphasizes large-scale warfare, strategic play, and immersive storytelling in its campaign and multiplayer modes.`
        },

        {
          namaGame: `The Elder Scrolls V: Skyrim`,
          gambar: `The Elder Scrolls V Skyrim.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `The Elder Scrolls V: Skyrim is an expansive open-world RPG set in the fantasy land of Skyrim. Players take on the role of the Dragonborn, a hero destined to defeat dragons and save the realm. The game features a richly detailed world, extensive customization, and countless quests, with the freedom to explore and shape the adventure as desired.`
        },
        
        {
          namaGame: `Fallout: New Vegas`,
          gambar: `Fallout New Vegas.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Fallout: New Vegas is a post-apocalyptic RPG set in a war-ravaged Nevada. Players take on the role of a courier who becomes embroiled in the struggle between factions vying for control of New Vegas. The game emphasizes player choice, branching storylines, and strategic combat, offering a deep and immersive world filled with memorable characters.`
        },
        
        {
          namaGame: `The Witcher 3: Wild Hunt`,
          gambar: `The Witcher 3 Wild Hunt.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `The Witcher 3: Wild Hunt is an award-winning open-world RPG following Geralt of Rivia, a monster hunter searching for his adopted daughter. The game features a vast, beautifully crafted world filled with captivating stories, challenging combat, and morally complex decisions. Players engage in rich quests and explore breathtaking landscapes, battling fearsome creatures.`
        },
        
        {
          namaGame: `Pillars of Eternity 2: Deadfire`,
          gambar: `Pillars of Eternity 2 Deadfire.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Pillars of Eternity 2: Deadfire is an isometric RPG set in the archipelago of Deadfire. Players captain a ship and lead a customizable party on a quest to track down a god. The game emphasizes tactical, real-time-with-pause combat, deep character customization, and a richly woven narrative filled with player-driven choices.`
        },
        
        {
          namaGame: `Divinity: Original Sin 2`,
          gambar: `Divinity Original Sin 2.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Divinity: Original Sin 2 is a critically acclaimed RPG that offers a deep, immersive experience with turn-based tactical combat. Players can create their own characters or choose from predefined origin stories, each with unique quests. The game emphasizes freedom of choice, environmental interactions, and cooperative multiplayer, set in a rich and fantastical world.`
        },
        
        {
          namaGame: `Diablo 3: Reaper of Souls`,
          gambar: `Diablo 3 Reaper of Souls.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Diablo 3: Reaper of Souls is an action RPG expansion that introduces new content, including the Crusader class and the Adventure Mode. Players battle through hordes of demons, collecting powerful loot and upgrading their characters. The game features fast-paced combat, a deep skill system, and randomized dungeons for endless replayability.`
        },
        
        {
          namaGame: `Dragon Age: Origins`,
          gambar: `Dragon Age Origins.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Dragon Age: Origins is a fantasy RPG that immerses players in the kingdom of Ferelden, where they become a Grey Warden, tasked with stopping the Blight. The game features a rich narrative, branching storylines based on player choices, tactical party-based combat, and a deep character customization system, creating a memorable and immersive experience.`
        },
        
        {
          namaGame: `Dark Souls 3`,
          gambar: `Dark Souls 3.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Dark Souls 3 is a challenging action RPG known for its dark, atmospheric world and intense, skill-based combat. Players explore interconnected environments filled with deadly foes and powerful bosses, using a variety of weapons and magic. The game emphasizes strategic gameplay, punishing difficulty, and a rewarding sense of achievement.`
        },
        
        {
          namaGame: `Final Fantasy XII: The Zodiac Age`,
          gambar: `Final Fantasy XII The Zodiac Age.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Final Fantasy XII: The Zodiac Age is a remastered version of the classic RPG, featuring enhanced graphics, a reworked job system, and quality-of-life improvements. Set in the world of Ivalice, players embark on a grand adventure filled with political intrigue and epic battles. The game features an open-world exploration system and a unique, strategic battle system.`
        },
        
        {
          namaGame: `Kingdom Come: Deliverance`,
          gambar: `Kingdom Come Deliverance.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Kingdom Come: Deliverance is a realistic open-world RPG set in medieval Bohemia. Players take on the role of Henry, a blacksmith’s son seeking revenge and justice during a time of war. The game emphasizes historical accuracy, realistic combat mechanics, and an immersive story-driven experience, with quests that offer multiple solutions and consequences.`
        },
        
        {
          namaGame: `Genshin Impact`,
          gambar: `Genshin Impact.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Genshin Impact is an open-world action RPG that features an anime-inspired art style and elemental-based combat. Players explore the vast world of Teyvat, using a roster of characters with unique elemental abilities to solve puzzles, defeat enemies, and unravel an engaging story. The game offers a rich co-op experience and frequent content updates.`
        },
        
        {
          namaGame: `Path of Exile`,
          gambar: `Path of Exile.jpg`,
          genre: `Role Playing Game (RPG)`,
          deskripsi: `Path of Exile is a free-to-play action RPG known for its deep character customization, dark fantasy setting, and challenging gameplay. Players choose from various classes and explore the world of Wraeclast, battling monsters and collecting loot. The game features a complex skill tree, an extensive item crafting system, and a seasonal content cycle that keeps the experience fresh.`
        },
        {
          namaGame: `Minecraft`,
          gambar: `Minecraft.jpg`,
          genre: `Sandbox`,
          deskripsi: `Minecraft is a sandbox survival game where players explore a blocky, procedurally generated world, collecting resources to craft and build structures. The game offers various modes, including Creative, where players can build freely, and Survival, where they must gather food and defend against hostile mobs. Minecraft's open-ended gameplay encourages creativity and exploration.`
        },
        
        {
          namaGame: `Palworld`,
          gambar: `Palworld.jpg`,
          genre: `Sandbox`,
          deskripsi: `Palworld is an open-world survival game where players befriend and raise creatures called "Pals" in a vibrant world. The game features exploration, crafting, farming, and even creature battles. Players can also use their Pals for factory work, transportation, and combat, blending elements of survival and monster-collecting gameplay.`
        },
        
        {
          namaGame: `Planet Zoo`,
          gambar: `Planet Zoo.jpg`,
          genre: `Sandbox`,
          deskripsi: `Planet Zoo is a zoo management simulation game that lets players build and manage their own zoo, focusing on animal welfare and realistic ecosystems. Players can design intricate habitats, care for a wide variety of animals, and engage in conservation efforts. The game emphasizes creativity, strategic planning, and environmental awareness.`
        },
        
        {
          namaGame: `Grand Theft Auto V`,
          gambar: `Grand Theft Auto V.jpg`,
          genre: `Sandbox`,
          deskripsi: `Grand Theft Auto V is an action-packed open-world game set in the city of Los Santos. Players can switch between three main characters, each with a unique storyline, and engage in heists, missions, and exploration. The game features a vast, immersive world with a robust online multiplayer mode, offering endless opportunities for chaos and adventure.`
        },
        
        {
          namaGame: `Project Zomboid`,
          gambar: `Project Zomboid.jpg`,
          genre: `Sandbox`,
          deskripsi: `Project Zomboid is an isometric survival game set in a post-apocalyptic world overrun by zombies. Players must scavenge for supplies, build defenses, and survive as long as possible while managing hunger, fatigue, and mental health. The game emphasizes realism, detailed mechanics, and permadeath, providing a challenging and immersive experience.`
        },
        
        {
          namaGame: `Scrap Mechanic`,
          gambar: `Scrap Mechanic.jpg`,
          genre: `Sandbox`,
          deskripsi: `Scrap Mechanic is a sandbox engineering game where players can build vehicles, machines, and structures using a wide variety of tools and parts. The game features both a Creative mode for free building and a Survival mode where players must gather resources and fend off enemies. The physics-based mechanics encourage creativity and innovation.`
        },
        
        {
          namaGame: `Garry’s Mod`,
          gambar: `Garry’s Mod.jpg`,
          genre: `Sandbox`,
          deskripsi: `Garry’s Mod is a physics sandbox game that offers endless creative possibilities. Players can build contraptions, experiment with game physics, and create custom game modes using the Source engine. The game has a strong modding community, allowing for a variety of user-generated content and multiplayer experiences, from role-playing to obstacle courses.`
        },
        
        {
          namaGame: `Rust`,
          gambar: `Rust.jpg`,
          genre: `Sandbox`,
          deskripsi: `Rust is a survival game where players must gather resources, craft items, and build shelters in a harsh, unforgiving world. Players face threats from the environment, wild animals, and other players, creating a tense, high-stakes experience. The game features a strong emphasis on PvP combat, base building, and resource management.`
        },
        
        {
          namaGame: `The Sims 4`,
          gambar: `The Sims 4.jpg`,
          genre: `Sandbox`,
          deskripsi: `The Sims 4 is a life simulation game where players create and control characters, build homes, and shape their everyday lives. Players can customize every aspect of their Sims’ appearance and behavior, engaging in activities such as careers, relationships, and hobbies. The game offers extensive customization and expansion packs to enhance gameplay.`
        },
        
        {
          namaGame: `Eve Online`,
          gambar: `Eve Online.jpg`,
          genre: `Sandbox`,
          deskripsi: `Eve Online is a massive multiplayer online game set in a sprawling galaxy filled with player-driven economies, politics, and warfare. Players can pilot spaceships, mine resources, engage in epic battles, and participate in large-scale alliances. The game is known for its complex mechanics and emergent gameplay, with a rich and dynamic player community.`
        },
        
        {
          namaGame: `Just Cause 3`,
          gambar: `Just Cause 3.jpg`,
          genre: `Sandbox`,
          deskripsi: `Just Cause 3 is an action-adventure game set in the fictional Mediterranean island of Medici. Players control Rico Rodriguez, who uses a grappling hook, parachute, and wingsuit to cause chaos and overthrow a dictator. The game is known for its over-the-top action, destructible environments, and a focus on explosive gameplay and stunts.`
        },
        
        {
          namaGame: `Don’t Starve`,
          gambar: `Dont Starve.jpg`,
          genre: `Sandbox`,
          deskripsi: `Don't Starve is a survival game with a dark, hand-drawn art style. Players must gather resources, craft items, and survive in a harsh and unforgiving wilderness filled with monsters and strange creatures. The game emphasizes exploration, resource management, and strategic planning, with a strong focus on staying alive in a world that wants to kill you.`
        },
        {
          namaGame: `Stardew Valley`,
          gambar: `Stardew Valley.jpg`,
          genre: `Simulation`,
          deskripsi: `Stardew Valley is a farming simulation game where players inherit an old farm and work to restore it to its former glory. Players can grow crops, raise animals, fish, mine for resources, and build relationships with the townsfolk. The game emphasizes a relaxing and rewarding experience with plenty of opportunities for exploration and creativity.`
        },
        
        {
          namaGame: `Assetto Corsa`,
          gambar: `Assetto Corsa.jpg`,
          genre: `Simulation`,
          deskripsi: `Assetto Corsa is a realistic racing simulator known for its accurate car physics and detailed tracks. The game offers a wide variety of cars and customization options, along with a strong focus on authentic driving experiences. Players can race on laser-scanned tracks and enjoy the game in both single-player and multiplayer modes.`
        },
        
        {
          namaGame: `Goat Simulator 3`,
          gambar: `Goat Simulator 3.jpg`,
          genre: `Simulation`,
          deskripsi: `Goat Simulator 3 is a humorous and chaotic simulation game where players control a goat causing havoc in an open world. The game features absurd physics, wacky missions, and plenty of collectibles. Players can explore, create mayhem, and even play co-op with friends for a shared experience of ridiculous fun.`
        },
        
        {
          namaGame: `CarX Drift Racing Online`,
          gambar: `CarX Drift Racing Online.jpg`,
          genre: `Simulation`,
          deskripsi: `CarX Drift Racing Online is a racing game focused on realistic drifting mechanics. Players can customize and tune their cars to perfect their drifting skills on various tracks. The game features both single-player and multiplayer modes, with an emphasis on precise control, customization, and an active online community.`
        },
        
        {
          namaGame: `Microsoft Flight Simulator`,
          gambar: `Microsoft Flight Simulator.jpg`,
          genre: `Simulation`,
          deskripsi: `Microsoft Flight Simulator is an incredibly detailed flight simulation game that recreates the entire world using advanced mapping and weather technology. Players can fly a wide range of aircraft, from small planes to large jets, across diverse and realistic landscapes. The game offers both casual flying experiences and challenging flight missions.`
        },
        
        {
          namaGame: `Euro Truck Simulator 2`,
          gambar: `Euro Truck Simulator 2.jpg`,
          genre: `Simulation`,
          deskripsi: `Euro Truck Simulator 2 is a driving simulation game where players deliver cargo across Europe. Players can drive a wide variety of trucks, manage their business, and explore a highly detailed open-world map. The game emphasizes realism, including traffic rules, vehicle maintenance, and a satisfying sense of progression.`
        },
        
        {
          namaGame: `Farming Simulator 22`,
          gambar: `Farming Simulator 22.jpg`,
          genre: `Simulation`,
          deskripsi: `Farming Simulator 22 is a detailed farming simulation game that lets players manage their own farm. Players can grow crops, raise livestock, operate farming machinery, and engage in forestry activities. The game features a realistic economic system, dynamic seasons, and multiplayer support, offering a comprehensive and immersive farming experience.`
        },
        
        {
          namaGame: `Overcooked! 2`,
          gambar: `Overcooked 2.jpg`,
          genre: `Simulation`,
          deskripsi: `Overcooked! 2 is a fast-paced cooperative cooking simulation game where players work together to prepare and serve dishes under increasingly chaotic conditions. Players must communicate and coordinate to handle complex recipes and kitchen hazards. The game offers both local and online multiplayer, providing frantic, hilarious fun.`
        },
        
        {
          namaGame: `Fishing Planet`,
          gambar: `Fishing Planet.jpg`,
          genre: `Simulation`,
          deskripsi: `Fishing Planet is a realistic online fishing simulation game that offers a wide variety of fishing locations, species, and gear. Players can experience authentic fishing mechanics, including realistic water physics and fish AI behavior. The game emphasizes patience and strategy, providing a deeply immersive fishing experience.`
        },
        
        {
          namaGame: `iRacing`,
          gambar: `iRacing.jpg`,
          genre: `Simulation`,
          deskripsi: `iRacing is a highly realistic online racing simulator designed for competitive and professional racers. The game features accurate car physics, laser-scanned tracks, and an emphasis on real-world racing rules. Players can join a global community, participate in leagues, and compete in officially sanctioned racing events.`
        },
        {
          namaGame: `Tekken 8`,
          gambar: `Tekken 8.jpg`,
          genre: `Fighting`,
          deskripsi: `Tekken 8 is the latest installment in the iconic fighting game series, featuring intense hand-to-hand combat with stunning next-gen graphics. The game continues the Mishima Saga and introduces new gameplay mechanics while refining classic features. Players can choose from a diverse roster of fighters, each with unique martial arts styles and special moves.`
        },
        
        {
          namaGame: `Street Fighter VI`,
          gambar: `Street Fighter VI.jpg`,
          genre: `Fighting`,
          deskripsi: `Street Fighter VI brings a fresh approach to the legendary fighting game franchise with new mechanics like the Drive System, offering enhanced strategic options. The game features a diverse cast of characters, updated visuals, and a vibrant open-world exploration mode called World Tour. Players can master combos, engage in competitive matches, and enjoy a rich multiplayer experience.`
        },
        
        {
          namaGame: `Brawlhalla`,
          gambar: `Brawlhalla.jpg`,
          genre: `Fighting`,
          deskripsi: `Brawlhalla is a free-to-play platform fighting game that emphasizes fast-paced combat and chaotic multiplayer action. Players can choose from over 50 characters, known as Legends, each with unique weapons and abilities. The game supports various modes, including ranked matches, casual play, and custom games, with frequent updates and crossover events.`
        },
        
        {
          namaGame: `Dead or Alive 6`,
          gambar: `Dead or Alive 6.jpg`,
          genre: `Fighting`,
          deskripsi: `Dead or Alive 6 is a fast-paced, 3D fighting game known for its dynamic combat and visually stunning graphics. The game introduces new mechanics, such as the Break Gauge system, which allows players to execute powerful special moves and counters. With a diverse roster of fighters, interactive stages, and a focus on accessibility, it appeals to both newcomers and veterans of the series.`
        },
        
        {
          namaGame: `Soulcalibur VI`,
          gambar: `Soulcalibur VI.jpg`,
          genre: `Fighting`,
          deskripsi: `Soulcalibur VI is a weapon-based fighting game that offers a rich story mode and deep character customization. Players can wield iconic weapons and engage in fast-paced, fluid combat. The game introduces the Reversal Edge mechanic, allowing for strategic clashes, and features a roster of classic and guest characters in beautifully rendered arenas.`
        },
        
        {
          namaGame: `Dragon Ball FighterZ`,
          gambar: `Dragon Ball FighterZ.jpg`,
          genre: `Fighting`,
          deskripsi: `Dragon Ball FighterZ is a high-octane fighting game that captures the explosive action of the Dragon Ball universe. Featuring 3v3 team battles, players can master fast-paced combat and execute stunning aerial combos. The game boasts stunning anime-style graphics, easy-to-learn mechanics, and deep tactical gameplay, making it a favorite among fans and fighting game enthusiasts.`
        },
        
        {
          namaGame: `Naraka: Bladepoint`,
          gambar: `Naraka Bladepoint.jpg`,
          genre: `Fighting`,
          deskripsi: `Naraka: Bladepoint is an action-packed battle royale game that emphasizes melee combat and martial arts. Players can choose from a roster of heroes, each with unique abilities, and utilize parkour mechanics to traverse the map. The game features a variety of weapons, strategic combat, and a focus on fluid, skill-based engagements in dynamic environments.`
        },
        
        {
          namaGame: `WWE 2K24`,
          gambar: `WWE 2K24.jpg`,
          genre: `Fighting`,
          deskripsi: `WWE 2K24 is a wrestling simulation game that features realistic graphics and comprehensive gameplay. Players can take on the role of their favorite WWE superstars, create custom wrestlers, and engage in a variety of match types. The game offers an updated roster, a robust career mode, and online multiplayer, providing an authentic wrestling experience.`
        },
        
        {
          namaGame: `Ultimate Marvel VS. Capcom 3`,
          gambar: `Ultimate Marvel VS Capcom 3.jpg`,
          genre: `Fighting`,
          deskripsi: `Ultimate Marvel VS. Capcom 3 is a crossover fighting game featuring characters from Marvel Comics and Capcom’s game franchises. Players can create teams of three fighters and engage in fast-paced, tag-team combat, utilizing flashy combos and special moves. The game’s vibrant visuals and frenetic action make it a classic in the fighting game community.`
        },
        
        {
          namaGame: `Persona 4 Arena Ultimax`,
          gambar: `Persona 4 Arena Ultimax.jpg`,
          genre: `Fighting`,
          deskripsi: `Persona 4 Arena Ultimax is a fighting game spin-off from the Persona series, combining fast-paced combat with a rich narrative. Players can choose from characters with unique fighting styles and Persona abilities, engaging in both story-driven and competitive matches. The game blends traditional fighting mechanics with the series' signature RPG elements.`
        },
        
        {
          namaGame: `Naruto Shippuden: Ultimate Ninja Storm 4`,
          gambar: `Naruto Shippuden Ultimate Ninja Storm 4.jpg`,
          genre: `Fighting`,
          deskripsi: `Naruto Shippuden: Ultimate Ninja Storm 4 is an action-packed fighting game that follows the events of the Naruto Shippuden anime. Players can experience epic battles with a large roster of characters, each with iconic jutsu and cinematic ultimate attacks. The game features stunning visuals, story mode, and multiplayer options, bringing the world of Naruto to life.`
        },
        {
          namaGame: `Starfield`,
          gambar: `Starfield.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Starfield is an open-world action RPG set in a vast and immersive sci-fi universe. Players can explore uncharted star systems, engage in space combat, customize their spaceship, and uncover mysteries across planets. The game emphasizes exploration, character customization, and narrative-driven missions, blending classic Bethesda-style RPG elements with futuristic adventure.`
        },
        
        {
          namaGame: `Hogwarts Legacy`,
          gambar: `Hogwarts Legacy.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Hogwarts Legacy is an action RPG set in the Wizarding World of Harry Potter, taking place in the 1800s. Players create their own witch or wizard, attend Hogwarts School of Witchcraft and Wizardry, learn spells, brew potions, and explore a vast, magical world. The game features an engaging story, magical combat, and deep character customization.`
        },
        
        {
          namaGame: `Far Cry 4`,
          gambar: `Far Cry 4.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Far Cry 4 is an open-world first-person shooter set in the fictional Himalayan region of Kyrat. Players take on the role of Ajay Ghale, who becomes embroiled in a civil war between the oppressive dictator Pagan Min and the rebels. The game features a large, dynamic world filled with wildlife, outposts to conquer, and a variety of missions, emphasizing player choice and exploration.`
        },
        
        {
          namaGame: `Marvel’s Guardians of the Galaxy`,
          gambar: `Marvels Guardians of the Galaxy.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Marvel’s Guardians of the Galaxy is an action-adventure game where players control Star-Lord and lead the Guardians through a story-driven cosmic journey. The game features strategic team-based combat, humorous dialogue, and character interactions. Players make choices that impact the narrative while enjoying a soundtrack filled with classic 1980s hits.`
        },
        
        {
          namaGame: `Stray`,
          gambar: `Stray.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Stray is an adventure game set in a dystopian, neon-lit city where players control a stray cat. The game focuses on exploration, solving environmental puzzles, and uncovering the mysteries of a robotic world. Players must use stealth and agility to navigate the urban landscape while forming a bond with a small drone companion named B-12.`
        },
        
        {
          namaGame: `Assassin’s Creed Mirage`,
          gambar: `Assassins Creed Mirage.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Assassin’s Creed Mirage returns to the series' roots with a focus on stealth, parkour, and assassinations. Set in 9th-century Baghdad, players take on the role of a young Basim Ibn Ishaq, uncovering the origins of his transformation into a master assassin. The game emphasizes narrative-driven missions, historical immersion, and refined gameplay mechanics.`
        },
        
        {
          namaGame: `Uncharted 4: A Thief’s End`,
          gambar: `Uncharted 4 A Thiefs End.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Uncharted 4: A Thief’s End is an action-adventure game that follows Nathan Drake on a thrilling treasure hunt across the globe. The game features breathtaking set pieces, fluid climbing mechanics, and intense gunfights, with a focus on storytelling and character development. Players experience a cinematic adventure filled with puzzles, exploration, and emotional moments.`
        },
        
        {
          namaGame: `The Elder Scrolls V: Skyrim`,
          gambar: `The Elder Scrolls V Skyrim.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `The Elder Scrolls V: Skyrim is an open-world action RPG set in the fantasy province of Skyrim. Players can explore a vast world filled with quests, dungeons, and diverse NPCs, wielding weapons and magic as they shape their own destiny. The game features deep character customization, a branching story, and countless ways to interact with the environment.`
        },
        
        {
          namaGame: `Life is Strange`,
          gambar: `Life is Strange.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Life is Strange is a narrative-driven adventure game where players control Max Caulfield, a photography student who discovers she can rewind time. The game focuses on player choices and their consequences, with a compelling story that explores themes of friendship, trauma, and the supernatural. Players must make tough decisions that impact the game’s outcome.`
        },
        
        {
          namaGame: `Journey`,
          gambar: `Journey.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `Journey is an atmospheric exploration game that takes players on a spiritual journey across a vast desert toward a distant mountain. The game features stunning visuals, an emotive soundtrack, and seamless multiplayer integration where players can encounter other travelers. With a focus on wordless storytelling and emotional impact, Journey provides a unique and memorable experience.`
        },
        
        {
          namaGame: `A Space for the Unbound`,
          gambar: `A Space for the Unbound.jpg`,
          genre: `Action-Adventure`,
          deskripsi: `A Space for the Unbound is a narrative adventure game set in rural Indonesia in the late 1990s. It follows the journey of two high school students with supernatural abilities as they explore themes of self-discovery and mental health. The game features beautiful pixel art, an emotional story, and immersive exploration of a small-town community.`
        },
        {
          namaGame: `Resident Evil 4 Remake`,
          gambar: `Resident Evil 4 Remake.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Resident Evil 4 Remake reimagines the classic survival horror game with modern graphics and updated gameplay mechanics. Players step into the shoes of Leon S. Kennedy as he navigates a remote European village to rescue the president’s daughter, battling terrifying creatures and uncovering dark secrets. The remake offers intense action, improved controls, and a deeper atmosphere while staying faithful to the original story.`
        },
        
        {
          namaGame: `Outlast Trials`,
          gambar: `Outlast Trials.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Outlast Trials is a survival horror game set during the Cold War era, where players are test subjects trapped in horrific psychological experiments. The game emphasizes stealth and teamwork as players must survive twisted trials filled with terrifying enemies and mind-bending challenges. It can be played solo or in co-op mode, offering a unique and frightening experience that tests players' nerves and cooperation.`
        },
        
        {
          namaGame: `Amnesia: The Bunker`,
          gambar: `Amnesia The Bunker.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Amnesia: The Bunker is a first-person survival horror game set in a desolate World War I bunker. Players must navigate the dark, maze-like corridors while managing limited resources and avoiding a lurking, unspeakable horror. The game features immersive sound design, environmental storytelling, and a sense of vulnerability, requiring players to use their wits and scarce resources to survive.`
        },
        
        {
          namaGame: `World of Horror`,
          gambar: `World of Horror.jpg`,
          genre: `Survival Horror`,
          deskripsi: `World of Horror is a retro-style, cosmic horror RPG inspired by the works of H.P. Lovecraft and Junji Ito. Set in a cursed Japanese town, players must investigate disturbing mysteries and face nightmarish creatures. The game features a unique 1-bit black-and-white art style, turn-based combat, and randomized events that create a haunting and replayable experience.`
        },
        
        {
          namaGame: `Unholy`,
          gambar: `Unholy.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Unholy is a psychological horror game set in a dystopian, nightmarish world where players assume the role of a grieving mother searching for her lost child. The game combines stealth mechanics, puzzle-solving, and psychological terror, immersing players in a surreal atmosphere where every choice impacts the story. The game’s environments and narrative are designed to keep players on edge.`
        },
        
        {
          namaGame: `The Texas Chainsaw Massacre`,
          gambar: `The Texas Chainsaw Massacre.jpg`,
          genre: `Survival Horror`,
          deskripsi: `The Texas Chainsaw Massacre is an asymmetrical multiplayer horror game based on the iconic film franchise. Players can take on the role of either one of the infamous family members or their victims, each with unique abilities. The game emphasizes tense cat-and-mouse gameplay, where survivors must work together to escape while the killers hunt them in a terrifying rural setting.`
        },
        
        {
          namaGame: `Dead Space (2023)`,
          gambar: `Dead Space 2023.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Dead Space (2023) is a remake of the beloved sci-fi survival horror game, featuring upgraded graphics, improved sound design, and reimagined gameplay mechanics. Players once again assume the role of Isaac Clarke, a space engineer trapped on the USG Ishimura, where he must battle horrific Necromorphs. The remake stays true to the original's tense atmosphere while enhancing the horror experience.`
        },
        
        {
          namaGame: `Fatal Frame: Mask of the Lunar Eclipse`,
          gambar: `Fatal Frame Mask of the Lunar Eclipse.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Fatal Frame: Mask of the Lunar Eclipse is a remastered version of the classic Japanese survival horror game. Players use the Camera Obscura to battle spirits and uncover the mystery of a haunted island. The game emphasizes psychological horror, atmospheric exploration, and puzzle-solving, with updated visuals and improved controls enhancing the terrifying experience.`
        },
        
        {
          namaGame: `Sons of the Forest`,
          gambar: `Sons of the Forest.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Sons of the Forest is a survival horror game that plunges players into a mysterious and dangerous forest filled with mutated creatures. Players must craft weapons, build shelters, and scavenge for resources to survive. The game features a dynamic open world, a complex AI system for enemies, and a focus on player choice, creating an immersive and terrifying experience.`
        },
        
        {
          namaGame: `Alan Wake 2`,
          gambar: `Alan Wake 2.jpg`,
          genre: `Survival Horror`,
          deskripsi: `Alan Wake 2 is a sequel to the psychological thriller, combining survival horror elements with a deeply immersive and narrative-driven experience. Players return to the eerie town of Bright Falls, where Alan Wake confronts supernatural horrors and his own inner demons. The game emphasizes atmosphere, storytelling, and tense gameplay, blending reality with the nightmarish world of Wake’s mind.`
        },

        {
          namaGame: `Until Dawn`,
          gambar: `Until Dawn.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Until Dawn is an interactive drama and survival horror game where players control a group of friends who are stranded on a remote mountain retreat. The story unfolds based on player choices, utilizing the "butterfly effect" system, which can lead to different outcomes, including the death or survival of characters. The game features tense exploration, QTEs, and a haunting atmosphere.`
        },
        
        {
          namaGame: `Man of Medan`,
          gambar: `Man of Medan.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Man of Medan is the first entry in *The Dark Pictures Anthology*, where players explore a ghost ship in the South Pacific. The game focuses on player choice and features branching storylines where decisions affect the fate of characters. It offers both single-player and multiplayer modes, allowing for shared experiences in a cinematic and terrifying environment.`
        },
        
        {
          namaGame: `Little Hope`,
          gambar: `Little Hope.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Little Hope is the second installment in *The Dark Pictures Anthology*, where players control a group trapped in a fog-shrouded town haunted by witchcraft and supernatural forces. The game emphasizes decision-making, as choices impact character relationships and story outcomes. It features a chilling narrative inspired by real historical events and psychological horror elements.`
        },
        
        {
          namaGame: `House of Ashes`,
          gambar: `House of Ashes.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `House of Ashes is the third entry in *The Dark Pictures Anthology*, set in the ruins of an ancient Sumerian temple during the Iraq War. Players control a group of soldiers and archaeologists who must survive supernatural creatures lurking underground. The game features dynamic character interactions, moral choices, and multiple endings influenced by player decisions.`
        },
        
        {
          namaGame: `The Devil in Me`,
          gambar: `The Devil in Me.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `The Devil in Me is the fourth game in *The Dark Pictures Anthology*, centering on a group of documentary filmmakers who find themselves trapped in a murder house inspired by real-life serial killer H.H. Holmes. Players must make life-or-death decisions as they explore the mansion and face deadly traps. The game focuses on player choices and survival horror elements.`
        },
        
        {
          namaGame: `The Inpatient`,
          gambar: `The Inpatient.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `The Inpatient is a psychological horror VR game set in the Blackwood Sanatorium, a prequel to *Until Dawn*. Players assume the role of a patient with amnesia, experiencing an immersive story where choices shape the outcome. The game utilizes VR technology to heighten tension and features a narrative-driven experience with a haunting atmosphere.`
        },
        
        {
          namaGame: `The Walking Dead`,
          gambar: `The Walking Dead.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `The Walking Dead is a critically acclaimed episodic adventure game based on the comic series by Robert Kirkman. Players control Lee Everett, protecting a young girl named Clementine in a world overrun by zombies. The game emphasizes narrative, player choice, and emotional storytelling, with decisions affecting character relationships and story progression across multiple seasons.`
        },
        
        {
          namaGame: `Late Shift`,
          gambar: `Late Shift.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Late Shift is a cinematic, interactive movie game where players make decisions for Matt, a young man forced into a London heist. The game features a branching narrative with multiple endings, depending on player choices made throughout the high-stakes story. It blends live-action storytelling with decision-making, offering a thrilling experience with high replayability.`
        },
        
        {
          namaGame: `Her Story`,
          gambar: `Her Story.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Her Story is an innovative interactive movie game where players investigate a mystery by searching through a database of police interview footage. Players must piece together the story of a woman being questioned about her missing husband, using keywords to discover video clips. The game emphasizes non-linear storytelling and detective work.`
        },
        
        {
          namaGame: `Detroit: Become Human`,
          gambar: `Detroit Become Human.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Detroit: Become Human is an interactive drama set in a futuristic Detroit where androids coexist with humans. Players control three android protagonists, making choices that shape a branching narrative with multiple outcomes. The game explores themes of consciousness, freedom, and morality, featuring stunning visuals, intense action sequences, and emotional storytelling.`
        },
        
        {
          namaGame: `Florence`,
          gambar: `Florence.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Florence is an interactive story game that follows the life of a young woman named Florence Yeoh as she navigates the highs and lows of her first love. The game uses creative mini-games and a visual novel style to convey the emotional journey. It emphasizes themes of love, growth, and self-discovery through a beautifully crafted narrative experience.`
        },
        
        {
          namaGame: `Coffee Talk`,
          gambar: `Coffee Talk.jpg`,
          genre: `Interactive Movie`,
          deskripsi: `Coffee Talk is a narrative-driven visual novel set in a fantasy version of Seattle, where players run a coffee shop that serves humans and fantastical creatures. The game focuses on listening to customers' stories and serving drinks to match their moods. It features a calming atmosphere, cozy pixel art, and a heartfelt exploration of human and non-human experiences.`
        }
        
        
      ];

    const [selectedGenre, setSelectedGenre] = useState('');
    const [displayedGames, setDisplayedGames] = useState(isiCardGame.slice(0, 8));
    
    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        if (genre) {
            setDisplayedGames(isiCardGame.filter((game) => game.genre === genre));
        } else {
            setDisplayedGames(isiCardGame.slice(0, 8));
        }
        };

          // Fungsi untuk mengatur ulang tampilan ke keadaan awal
        const resetView = () => {
          setSelectedGenre('');
          setDisplayedGames(isiCardGame.slice(0, 8));
        };

        return (
          <>
            <div className="container-fluid px-0">
              <NavbarComponent resetView={resetView} />
            </div>

            <div className="container-flex px-20">    
              <div className="row">
                {/* Sidebar di sebelah kiri */}
                <div className="col-3">
                  <div className="card">
                    <div className="card-body">
                      <h5>Browse By Genre</h5>
                      {isiSidebar.map((bagian, urutan) => (
                        <button
                          key={urutan}
                          onClick={() => handleGenreClick(bagian.genreGame)}
                          className="btn btn-link genrenya"
                        >
                          {bagian.genreGame}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
        
                {/* Konten utama di sebelah kanan */}
                <div className="col-9">
                  {!selectedGenre && (
                    <div className="header-content">
                      <h1>Selamat Datang di GameWeb</h1>
                      <p className="Penjelasan">
                      GameWeb adalah sebuah website yang menyajikan penjelasan mendetail tentang berbagai video game, dirancang untuk memberikan wawasan menyeluruh kepada para penggemar dan pemain game dari semua kalangan. Di GameWeb, kalian dapat menemukan ulasan lengkap yang membahas mekanisme gameplay, latar belakang cerita, grafis, hingga fitur-fitur unik yang dimiliki setiap game. Selain itu, website ini juga menyediakan informasi terkini tentang perkembangan dalam dunia video game, tips dan trik untuk bermain, serta rekomendasi game yang patut dicoba. Dengan konten yang menarik dan informatif, GameWeb bertujuan menjadi sumber utama bagi siapa saja yang ingin lebih memahami dan menikmati dunia video game.
                      </p>
                      <hr />
                    </div>
                  )}
        
                  <div className="row">
                    {displayedGames.map((item, index) => (
                      <div key={index} className="col-3 mb-4">
                        <div className="card card-game">
                          {item.gambar && (
                            <img
                              src={item.gambar}
                              className="card-img-top"
                              alt={item.namaGame}
                            />
                          )}
                          <div className="card-body">
                            <h6 className="card-title">{item.namaGame}</h6>
                            {item.deskripsi && (
                              <p className="card-text">{item.deskripsi}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </>
          );
        }
      
export default Sidebar;