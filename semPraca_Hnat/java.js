const albums = [
  {
    title: "Adrenaline",
    year: 1995,
    cover: "../img/adrenaline.jpg",
    description: "The raw debut album from Deftones.",
    tracks: [
      "Bored",
      "Minus Blindfold",
      "One Weak",
      "Nosebleed",
      "Lifter",
      "Root",
      "7 Words",
      "Birthmark",
      "Engine No. 9",
      "Fireal",
      "Fist",
    ],
  },
  {
    title: "Around the Fur",
    year: 1997,
    cover: "../img/aroundthefur.jpg",
    description: "A classic album with aggressive and emotional energy.",
    tracks: [
      "My Own Summer (Shove It)",
      "Lhabia",
      "Mascara",
      "Around the Fur",
      "Rickets",
      "Be Quiet and Drive (Far Away)",
      "Lotion",
      "Dai the Flu",
      "Headup",
      "MX",
    ],
  },
  {
    title: "White Pony",
    year: 2000,
    cover: "../img/whitepony.jpg",
    description:
      "Deftones' experimental masterpiece blending heavy and atmospheric sounds.",
    tracks: [
      "Back To School (Mini Maggit)",
      "Feiticeira",
      "Digital Bath",
      "Elite",
      "Rx Queen",
      "Street Carp",
      "Teenager",
      "Knife Prty",
      "Korea",
      "Passenger",
      "Change (In the House of Flies)",
      "Pink Maggit",
    ],
  },
  {
    title: "Deftones",
    year: 2003,
    cover: "../img/deftones.jpg",
    description: "A dark, emotional and heavy self-titled album.",
    tracks: [
      "Hexagram",
      "Needles and Pins",
      "Minerva",
      "Good Morning Beautiful",
      "Deathblow",
      "When Girls Telephone Boys",
      "Battle-Axe",
      "Lucky You",
      "Bloody Cape",
      "Anniversary of an Uninteresting Event",
      "Moana",
    ],
  },
  {
    title: "Saturday Night Wrist",
    year: 2006,
    cover: "../img/saturdaynightwrist.jpg",
    description:
      "A chaotic yet atmospheric album reflecting the band's personal struggles.",
    tracks: [
      "Hole in the Earth",
      "Rapture",
      "Beware",
      "Cherry Waves",
      "Mein",
      "U, U, D, D, L, R, L, R, A, B, Select, Start",
      "Xerces",
      "Rats!Rats!Rats!",
      "Pink Cellphone",
      "Combat",
      "Kimdracula",
      "Riviere",
      "Drive",
    ],
  },
  {
    title: "Diamond Eyes",
    year: 2010,
    cover: "../img/diamondeyes.jpg",
    description:
      "A powerful, melodic and hopeful record created after Chi Cheng’s accident.",
    tracks: [
      "Diamond Eyes",
      "Royal",
      "CMND/CTRL",
      "You've Seen the Butcher",
      "Beauty School",
      "Prince",
      "Rocket Skates",
      "Sextape",
      "Risk",
      "976-EVIL",
      "This Place Is Death",
    ],
  },
  {
    title: "Koi No Yokan",
    year: 2012,
    cover: "../img/koinoyokan.jpg",
    description: "A polished, emotional and beautifully heavy record.",
    tracks: [
      "Swerve City",
      "Romantic Dreams",
      "Leathers",
      "Poltergeist",
      "Entombed",
      "Graphic Nature",
      "Tempest",
      "Gauze",
      "Rosemary",
      "Goon Squad",
      "What Happened to You?",
    ],
  },
  {
    title: "Gore",
    year: 2016,
    cover: "../img/gore.jpg",
    description: "An atmospheric and experimental album with unique textures.",
    tracks: [
      "Prayers / Triangles",
      "Acid Hologram",
      "Doomed User",
      "Geometric Headdress",
      "Hearts / Wires",
      "Pittura Infamante",
      "Xenon",
      "(L)MIRL",
      "Gore",
      "Phantom Bride",
      "Rubicon",
    ],
  },
  {
    title: "Ohms",
    year: 2020,
    cover: "../img/ohms.jpg",
    description:
      "A return to form, combining heavy riffs with dream-like atmosphere.",
    tracks: [
      "Genesis",
      "Ceremony",
      "Urantia",
      "Error",
      "The Spell of Mathematics",
      "Pompeji",
      "This Link Is Dead",
      "Radiant City",
      "Headless",
      "Ohms",
    ],
  },
  {
    title: "Private Music",
    year: 2025,
    cover: "../img/privatemusic.jpg",
    description:
      "The highly anticipated tenth studio album, blending alternative metal and shoegaze sounds.",
    tracks: [
      "my mind is a mountain",
      "locked club",
      "ecdysis",
      "infinite source",
      "souvenir",
      "cXz",
      "i think about you all the time",
      "milk of the madonna",
      "cut hands",
      "~metal dream",
      "departing the body",
    ],
  },
];

const songs = [
  {
    title: "Bored",
    duration: "3:58",
    file: "../songs/Bored.mp3",
  },
  {
    title: "Minus Blindfold",
    duration: "3:31",
    file: "../songs/MinusBlindfold.mp3",
  },
  {
    title: "One Weak",
    duration: "3:26",
    file: "../songs/OneWeak.mp3",
  },
  {
    title: "Nosebleed",
    duration: "3:05",
    file: "../songs/Nosebleed.mp3",
  },
  {
    title: "Lifter",
    duration: "3:23",
    file: "../songs/Lifter.mp3",
  },
  {
    title: "Root",
    duration: "3:58",
    file: "../songs/Root.mp3",
  },
  {
    title: "7 Words",
    duration: "2:56",
    file: "../songs/7Words.mp3",
  },
  {
    title: "Birthmark",
    duration: "2:58",
    file: "../songs/Birthmark.mp3",
  },
  {
    title: "Engine No. 9",
    duration: "3:39",
    file: "../songs/EngineNo9.mp3",
  },
  {
    title: "Fireal",
    duration: "3:29",
    file: "../songs/Fireal.mp3",
  },
  {
    title: "Fist",
    duration: "4:03",
    file: "../songs/Fist.mp3",
  },
];

document.querySelectorAll(".album-card").forEach((card) => {
  card.addEventListener("click", () => {
    const index = card.dataset.index;
    const album = albums[index];

    document.getElementById(
      "albumTitle"
    ).innerText = `${album.title} (${album.year})`;
    document.getElementById("albumCover").src = album.cover;
    document.getElementById("albumDescription").innerText =
      album.description +
      "\n\n Please click on any track from the tracklist to play audio." +
      '\n\n Click on the "Now Playing" text to hide the audio player.' +
      "\n\n Click on the Deftones logo in the navigation panel to reopen the audio player after hiding it." +
      '\n\n Note: Audio is only available for songs from the "Adrenaline" album due to projects size limitations. ';

    const tracklist = document.getElementById("albumTracks");
    tracklist.innerHTML = "";

    album.tracks.forEach((track) => {
      const li = document.createElement("li");
      li.innerText = track;

      li.onclick = () => {
        if (index !== "0") return;
        const songIndex = album.tracks.indexOf(track);
        playSong(songIndex);
      };

      tracklist.appendChild(li);
    });
  });
});

const search = document.getElementById("search");
if (search) {
  document.getElementById("search").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      const title = card.querySelector(".card-title").innerText.toLowerCase();
      if (title.includes(searchValue)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}
function playSong(index) {
  const audio = document.getElementById("audio");
  const nowPlaying = document.getElementById("nowPlaying");
  const song = songs[index];
  const player = document.getElementById("audioplayer");
  const deftonesLogo = document.getElementById("logo");

  audio.src = song.file;
  audio.play();
  nowPlaying.textContent = `Now Playing: ${index + 1}. ${song.title}`;

  player.classList.add("show");
  nowPlaying.onclick = () => {
    player.classList.remove("show");
  };
  deftonesLogo.onclick = () => {
    player.classList.add("show");
  };
}

const form = document.getElementById("Form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tickets = document.getElementById("tickets").value;
    const ticketType = document.getElementById("ticketType").value;
    document.getElementById(
      "result"
    ).innerText = `Sent by ${name} (${email}).\nNumber of tickets: ${tickets}\nTicket type: ${ticketType}`;
  });
}
