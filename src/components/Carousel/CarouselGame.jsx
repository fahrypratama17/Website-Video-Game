import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselGame.css'

function CarouselGame () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const isi = [
    { src: '/WarThunder1.jpg', 
      title: 'War Thunder', 
      description: 'War Thunder is an online war simulation game that combines air, land, and sea battles, allowing players to control various military vehicles from different eras in realistic and detailed combat.', 
      customGambar: 'custom-img-wt'},
    { src: '/Forza Horizon.jpg', 
      title: 'Forza Horizon 5', 
      description: 'Forza Horizon 5 is an open-world racing game set in a vibrant recreation of Mexico, where players explore, race, and customize cars in a dynamic, realistic environment.', 
      customGambar: 'custom-img-fh'},
    { src: '/Manor Lords.jpg', 
      title: 'Manor Lords', 
      description: 'Manor Lords is a medieval city-building and strategy game focused on realistic town management and tactical battles.', 
      customGambar: 'custom-img-ml'},
    { src: '/Ghost of Tsushima.jpg', 
      title: 'Ghost of Tsushima', 
      description: 'Ghost of Tsushima is an action-adventure game set in feudal Japan, where players take on the role of a samurai fighting to protect his homeland from Mongol invaders.', 
      customGambar: 'custom-img-got'},
    { src: '/TLOU.jpg', 
      title: 'The Last Of Us 2', 
      description: 'The Last of Us Part II is an action-adventure game that follows Ellie on a journey of survival and revenge in a post-apocalyptic world filled with danger and emotional challenges.', 
      customGambar: 'custom-img-tlou'},
    { src: '/Red Dead Redemption.jpg', 
      title: 'Red Dead Redemption 2', 
      description: 'Red Dead Redemption 2 is an open-world action-adventure game set in the American Wild West, where players follow outlaw Arthur Morgan’s journey through a rich, immersive story of survival, loyalty, and redemption.', 
      customGambar: 'custom-img-rdr'},
    { src: '/Resident Evil.jpg', 
      title: 'Resident Evil : Biohazard', 
      description: 'Resident Evil: Biohazard is a survival horror game that follows Ethan Winters as he searches for his missing wife in a derelict plantation inhabited by terrifying creatures and a sinister family.', 
      customGambar: 'custom-img-re'},
    { src: '/Call of Duty.jpg', 
      title: 'Call of Duty', 
      description: 'Call of Duty is a popular first-person shooter franchise known for its intense multiplayer battles and cinematic single-player campaigns set in various historical and modern warfare scenarios.', 
      customGambar: 'custom-img-cod'},
    { src: '/Horizon Zero.jpg', 
      title: 'Horizon Zero', 
      description: 'Horizon Zero Dawn is an action RPG set in a post-apocalyptic world where players control Aloy, a hunter navigating a land overrun by robotic creatures, while uncovering her past and the fate of humanity.', 
      customGambar: 'custom-img-hz'},
    { src: '/Middle Earth Shadow of Mordor.jpg', 
      title: 'Middle Earth : Shadow of Mordor', 
      description: 'Middle-earth: Shadow of Mordor is an action-adventure game where players control Talion, a ranger seeking revenge against Sauron’s forces using a unique nemesis system.', 
      customGambar: 'custom-img-mesm'},
    { src: '/Spider Man.jpg', 
      title: 'Spider Man', 
      description: 'Spider-Man is an action-adventure game that follows Peter Parker as he fights crime and explores an open-world New York City, featuring a blend of web-slinging mechanics and engaging storytelling.', 
      customGambar: 'custom-img-sm'},
    { src: '/Titanfall.jpg', 
      title: 'Titanfall 2', 
      description: 'Titanfall 2 is a first-person shooter that combines fast-paced infantry combat with the ability to pilot giant mechs called Titans, featuring a captivating single-player campaign and robust multiplayer modes.', 
      customGambar: 'custom-img-t'},
    { src: '/Mortal Kombat 1.jpg', 
      title: 'Mortal Kombat 1', 
      description: 'Mortal Kombat 1 is a fighting game that reboots the iconic series, featuring reimagined characters and storylines, intense battles, and the franchise’s signature brutal finishing moves, known as Fatalities.', 
      customGambar: 'custom-img-mk'},
    { src: '/StarWarsJediSurvivor.jpg', 
      title: 'Star Wars Jedi Survivor', 
      description: 'Star Wars Jedi: Survivor is an action-adventure game where you follow Cal Kestis, a young Jedi, as he fights to survive against the Empire and discovers his path across the galaxy.', 
      customGambar: 'custom-img-swjs'},
    { src: '/God of War Ragnarok.jpg', 
      title: 'God of War Ragnarok', 
      description: 'God of War Ragnarök is an action-adventure game where Kratos and his son Atreus face powerful Norse gods and mythical creatures as they confront the looming apocalyptic event, Ragnarök.', 
      customGambar: 'custom-img-gowR'},
    ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {isi.map((bagian, urutan) => (
        <Carousel.Item key={urutan}>
          <img
            className={`d-block w-100 ${bagian.customGambar}`}
            src={bagian.src}
            alt={`${bagian.title} image`}
          />
          <Carousel.Caption className="rounded-caption">
            <h5>{bagian.title}</h5>
            <p>{bagian.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselGame;
