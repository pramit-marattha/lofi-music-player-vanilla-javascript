window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const instrumentButton = document.querySelectorAll(".instrumentButton div");
  const visual = document.querySelector(".visual");
  const visualColors = [
    "#00bd56",
    "#f9fd50",
    "#26baee",
    "#9fe8fa",
    "#8f71ff",
    "#8bffff",
    "#c7004c",
    "#ffaaaa",
    "#55968f",
    "#8acbbb",
    "#226b80",
    "#35b0ab",
    "#3d6cb9",
    "#00fff0",
    "#4d3664",
    "#bab5f6",
    "#fa4659",
    "#e9007f",
    "#00b7c2",
    "#4ef037",
    "#303481",
    "#a100ff",
    "#fc8a15",
    "#fff6a2",
    "#f9d00f",
    "#fbff64",
    "#295e6a",
    "#4797b1",
    "#ff0592",
    "#ffbee3",
  ];

  instrumentButton.forEach((instrumentpad, index) => {
    instrumentpad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createAnimation(index);
    });
  });

  const createAnimation = (index) => {
    const anim = document.createElement("div");
    visual.appendChild(anim);
    anim.style.backgroundColor = visualColors[index];
    anim.style.animation = "floating 1s ease";
    anim.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});

let songsList = [
  "sounds/songs/$orries.mp3",
  "sounds/songs/[oops].mp3",
  "sounds/songs/5 32pm.mp3",
  "sounds/songs/88 Keys.mp3",
  "sounds/songs/Affection.mp3",
  "sounds/songs/Again.mp3",
  "sounds/songs/Alone and Lonely.mp3",
  "sounds/songs/Baby You're Worth It.mp3",
  "sounds/songs/Backpack City.mp3",
  "sounds/songs/Beauty.mp3",
  "sounds/songs/Better Than He Can.mp3",
  "sounds/songs/Break My Heart Again.mp3",
  "sounds/songs/Brightness.mp3",
  "sounds/songs/Call me.mp3",
  "sounds/songs/Can We Kiss Forever .mp3",
  "sounds/songs/Can't Love Myself.mp3",
  "sounds/songs/Can't Take My Eyes off You.mp3",
  "sounds/songs/Cigarettes and Sex.mp3",
  "sounds/songs/Coffee Breath.mp3",
  "sounds/songs/controlla.mp3",
  "sounds/songs/Cream.mp3",
  "sounds/songs/Day in Paris.mp3",
  "sounds/songs/Daydreaming.mp3",
  "sounds/songs/Death Bed.mp3",
  "sounds/songs/drift....mp3",
  "sounds/songs/Evil Morty.mp3",
  "sounds/songs/Feblu.mp3",
  "sounds/songs/Fever Dream.mp3",
  "sounds/songs/First Heartbreak.mp3",
  "sounds/songs/French Inhale.mp3",
  "sounds/songs/Get You The Moon (feat. Snøw).mp3",
  "sounds/songs/Ghost Train Haze.mp3",
  "sounds/songs/Happiness.mp3",
  "sounds/songs/hold up.mp3",
  "sounds/songs/I Can't Help.mp3",
  "sounds/songs/I Don't Sleep.mp3",
  "sounds/songs/I Don't Trust Nobody.mp3",
  "sounds/songs/I'll Bite Your Soul.mp3",
  "sounds/songs/I'll Keep You Safe.mp3",
  "sounds/songs/i'm closing my eyes (feat. shiloh).mp3",
  "sounds/songs/I'm Drunk and Confused.mp3",
  "sounds/songs/I'm Shy. I'm Anxious.mp3",
  "sounds/songs/I'm Sorry.mp3",
  "sounds/songs/I'm Yours.mp3",
  "sounds/songs/I've Changed for You.mp3",
  "sounds/songs/In My Eyes.mp3",
  "sounds/songs/infinity.mp3",
  "sounds/songs/Kiss.mp3",
  "sounds/songs/Landing.mp3",
  "sounds/songs/Let Her Go.mp3",
  "sounds/songs/Long.mp3",
  "sounds/songs/Loosing Interest.mp3",
  "sounds/songs/Losing .Interest.mp3",
  "sounds/songs/Losing Interest(2).mp3",
  "sounds/songs/Love Is More Depressing Than Depression.mp3",
  "sounds/songs/Medieval.mp3",
  "sounds/songs/Mirror Image.mp3",
  "sounds/songs/Monday.mp3",
  "sounds/songs/my new love.mp3",
  "sounds/songs/nagashi.mp3",
  "sounds/songs/Night Walk.mp3",
  "sounds/songs/Nightfall.mp3",
  "sounds/songs/Nostalgia.mp3",
  "sounds/songs/Not Even Her (feat. Shiloh).mp3",
  "sounds/songs/Nova.mp3",
  "sounds/songs/Oblivion.mp3",
  "sounds/songs/Our Adventures.mp3",
  "sounds/songs/over u.mp3",
  "sounds/songs/Raindrops.mp3",
  "sounds/songs/Riptide.mp3",
  "sounds/songs/Sad Vibes.mp3",
  "sounds/songs/Self Affray.mp3",
  "sounds/songs/Show and Prove.mp3",
  "sounds/songs/sincerely, yours.mp3",
  "sounds/songs/sleep static.mp3",
  "sounds/songs/Snow & Sand.mp3",
  "sounds/songs/Snowman.mp3",
  "sounds/songs/Space Cadet.mp3",
  "sounds/songs/Stay Awake.mp3",
  "sounds/songs/this girl.mp3",
  "sounds/songs/Topaz.mp3",
  "sounds/songs/trust u.mp3",
  "sounds/songs/walk but in a garden.mp3",
  "sounds/songs/warm breeze.mp3",
  "sounds/songs/We Let Go.mp3",
  "sounds/songs/Why.mp3",
  "sounds/songs/Wish I Was Better.mp3",
  "sounds/songs/Wish You Were Mine.mp3",
  "sounds/songs/Wishes.mp3",
  "sounds/songs/With Somebody Else.mp3",
  "sounds/songs/Yesterday.mp3",
  "sounds/songs/Yoga.mp3",
  "sounds/songs/Young Dumb & Broke.mp3",
  "sounds/songs/Your Voice.mp3",
];
let songsArt = [
  "songs_images/$orries_Cover (front)_e.jpg",
  "songs_images/[oops]_Cover (front)_e.jpg",
  "songs_images/5 32pm_Cover (front)_e.jpg",
  "songs_images/88 Keys_Cover (front)_e.jpg",
  "songs_images/Affection_Cover (front)_e.jpg",
  "songs_images/Again_Cover (front)_e.jpg",
  "songs_images/Alone and Lonely_Cover (front)_e.jpg",
  "songs_images/Baby You're Worth It_Cover (front)_e.jpg",
  "songs_images/Beauty_Cover (front)_e.jpg",
  "songs_images/Better Than He Can_Cover (front)_e.jpg",
  "songs_images/Break My Heart Again_Cover (front)_e.jpg",
  "songs_images/Brightness_Cover (front)_e.jpg",
  "songs_images/Call me_Cover (front)_e.jpg",
  "songs_images/Can We Kiss Forever _Cover (front)_e.jpg",
  "songs_images/Can't Love Myself_Cover (front)_e.jpg",
  "songs_images/Can't Take My Eyes off You_Cover (front)_e.jpg",
  "songs_images/Cigarettes and Sex_Cover (front)_e.jpg",
  "songs_images/Coffee Breath_Cover (front)_e.jpg",
  "songs_images/controlla_Cover (front)_e.jpg",
  "songs_images/Cream_Cover (front)_e.jpg",
  "songs_images/Day in Paris_Cover (front)_e.jpg",
  "songs_images/Daydreaming_Cover (front)_e.jpg",
  "songs_images/Death Bed_Cover (front)_e.jpg",
  "songs_images/drift..._Cover (front)_e.jpg",
  "songs_images/Evil Morty_Cover (front)_e.jpg",
  "songs_images/Feblu_Cover (front)_e.jpg",
  "songs_images/Fever Dream_Cover (front)_e.jpg",
  "songs_images/First Heartbreak_Cover (front)_e.jpg",
  "songs_images/French Inhale_Cover (front)_e.jpg",
  "songs_images/Get You The Moon (feat. Snøw)_Cover (front)_e.jpg",
  "songs_images/Ghost Train Haze_Cover (front)_e.jpg",
  "songs_images/Happiness_Cover (front)_e.jpg",
  "songs_images/hold up_Cover (front)_e.jpg",
  "songs_images/I Can't Help_Cover (front)_e.jpg",
  "songs_images/I Don't Sleep_Cover (front)_e.jpg",
  "songs_images/I Don't Trust Nobody_Cover (front)_e.jpg",
  "songs_images/I'll Bite Your Soul_Cover (front)_e.jpg",
  "songs_images/I'll Keep You Safe_Cover (front)_e.jpg",
  "songs_images/i'm closing my eyes (feat. shiloh)_Cover (front)_e.jpg",
  "songs_images/I'm Drunk and Confused_Cover (front)_e.jpg",
  "songs_images/I'm Shy. I'm Anxious_Cover (front)_e.jpg",
  "songs_images/I'm Sorry_Cover (front)_e.jpg",
  "songs_images/I'm Yours_Cover (front)_e.jpg",
  "songs_images/I've Changed for You_Cover (front)_e.jpg",
  "songs_images/In My Eyes_Cover (front)_e.jpg",
  "songs_images/infinity_Cover (front)_e.jpg",
  "songs_images/Kiss_Cover (front)_e.jpg",
  "songs_images/Landing_Cover (front)_e.jpg",
  "songs_images/Let Her Go_Cover (front)_e.jpg",
  "songs_images/Long_Cover (front)_e.jpg",
  "songs_images/Loosing Interest_Cover (front)_e.jpg",
  "songs_images/Losing .Interest_Cover (front)_e.jpg",
  "songs_images/Losing Interest(2)_Cover (front)_e.jpg",
  "songs_images/Love Again_Cover (front)_e.jpg",
  "songs_images/Love Is More Depressing Than Depression_Cover (front)_e.jpg",
  "songs_images/Medieval_Cover (front)_e.jpg",
  "songs_images/Mirror Image_Cover (front)_e.jpg",
  "songs_images/Miss You_Cover (front)_e.jpg",
  "songs_images/Monday_Cover (front)_e.jpg",
  "songs_images/my new love_Cover (front)_e.jpg",
  "songs_images/nagashi_Cover (front)_e.jpg",
  "songs_images/Night Walk_Cover (front)_e.jpg",
  "songs_images/Nightfall_Cover (front)_e.jpg",
  "songs_images/Nostalgia_Cover (front)_e.jpg",
  "songs_images/Not Even Her (feat. Shiloh)_Cover (front)_e.jpg",
  "songs_images/Nova_Cover (front)_e.jpg",
  "songs_images/Oblivion_Cover (front)_e.jpg",
  "songs_images/Our Adventures_Cover (front)_e.jpg",
  "songs_images/over u_Cover (front)_e.jpg",
  "songs_images/Raindrops_Cover (front)_e.jpg",
  "songs_images/Riptide_Cover (front)_e.jpg",
  "songs_images/Sad Vibes_Cover (front)_e.jpg",
  "songs_images/Self Affray_Cover (front)_e.jpg",
  "songs_images/Show and Prove_Cover (front)_e.jpg",
  "songs_images/sincerely, yours_Cover (front)_e.jpg",
  "songs_images/sleep static_Cover (front)_e.jpg",
  "songs_images/Snow & Sand_Cover (front)_e.jpg",
  "songs_images/Snowman_Cover (front)_e.jpg",
  "songs_images/Space Cadet_Cover (front)_e.jpg",
  "songs_images/Stay Awake_Cover (front)_e.jpg",
  "songs_images/Sunday Afternoon_Cover (front)_e.jpg",
  "songs_images/this girl_Cover (front)_e.jpg",
  "songs_images/Topaz_Cover (front)_e.jpg",
  "songs_images/trust u_Cover (front)_e.jpg",
  "songs_images/walk but in a garden_Cover (front)_e.jpg",
  "songs_images/warm breeze_Cover (front)_e.jpg",
  "songs_images/We Let Go_Cover (front)_e.jpg",
  "songs_images/Why_Cover (front)_e.jpg",
  "songs_images/Wish I Was Better_Cover (front)_e.jpg",
  "songs_images/Wish You Were Mine_Cover (front)_e.jpg",
  "songs_images/Wishes_Cover (front)_e.jpg",
  "songs_images/With Somebody Else_Cover (front)_e.jpg",
  "songs_images/Yesterday_Cover (front)_e.jpg",
  "songs_images/Yoga_Cover (front)_e.jpg",
  "songs_images/Young Dumb & Broke_Cover (front)_e.jpg",
  "songs_images/Your Voice_Cover (front)_e.jpg",
];
let timeCalculate = document.querySelector(".time");

// New Audio Object

let audio = new Audio();
let playingSong = 0;

window.onload = playSong;

function playSong() {
  audio.src = songsList[playingSong];
  audio.play();
}

function playAndPauseButton() {
  if (audio.paused) {
    audio.play();
    let buttonPlaying = document.querySelector(".play-and-pause");
    buttonPlaying.innerHTML = '<i class="fa fa-pause"></i>';
    buttonPlaying.style.paddingLeft = "20px 20px 20px 23px";
  } else {
    audio.pause();
    buttonPlaying = document.querySelector(".play-and-pause");
    buttonPlaying.innerHTML = '<i class="fa fa-play"></i>';
    buttonPlaying.style.paddingLeft = "20px 20px 20px 23px";
  }
}

function loadNextSong() {
  playingSong++;
  if (playingSong > 100) {
    playingSong = 0;
  }
  playSong();
  buttonPlaying = document.querySelector(".play-and-pause");
  buttonPlaying.innerHTML = '<i class="fa fa-pause"></i>';
  buttonPlaying.style.paddingLeft = "20px 20px 20px 23px";

  $(".img img").attr("src", songsArt[playingSong]);
}

function loadPreviousSong() {
  playingSong--;
  if (playingSong < 0) {
    playingSong = 100;
  }
  playSong();
  buttonPlaying = document.querySelector(".play-and-pause");
  buttonPlaying.innerHTML = '<i class="fa fa-pause"></i>';
  buttonPlaying.style.paddingLeft = "20px 20px 20px 23px";

  $(".img img").attr("src", songsArt[playingSong]);
}

function decreaseVolume() {
  audio.volume -= 0.3;
}

function increaseVolume() {
  audio.volume += 0.3;
}

let increaseVol = document.querySelector(".volume-up");
increaseVol.addEventListener("click", function () {
  if (audio.volume === 1) {
    audio.volume = 0;
    document.querySelector(".volume-up i").className = "fa fa-volume-mute";
  } else {
    audio.volume = 1;
    document.querySelector(".volume-up i").className = "fa fa-volume-up";
  }
});
