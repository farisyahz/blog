const project_img = document.getElementById('project-img');

const img_list = [
  'handsant_auto.jpg',
  'tugasify_1.jpg',
  'snake-game.png',
  'arduino-handsant.jpg'
]

const shuffle_img = () =>{
  const project = img_list[Math.floor(Math.random()*img_list.length)];
  project_img.style.backgroundImage = `url(img/${project})`
}

setInterval(shuffle_img, 7000);