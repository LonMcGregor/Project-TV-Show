//You can edit ALL of the code here

let DATA = {};

async function getAllEpisodes(){
  DATA = await fetch(`https://api.tvmaze.com/shows/82/episodes`)
  .then(body => body.json())
}

async function setup() {
  await getAllEpisodes();
  makePageForEpisodes(DATA);
}

function addSingleEp(ep){
  document.getElementById("root").insertAdjacentHTML("beforeend", `<p>${ep.season}-${ep.number}: ${ep.name}</p>`);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeList.forEach(addSingleEp);
}

function search(e){
  const rootel = document.getElementById("root");
  Array.from(rootel.children).forEach(child => {
    rootel.removeChild(child);
  })
  if(e.target.value.length > 0){
    const allEpisodes = DATA.filter(ep => ep.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
    makePageForEpisodes(allEpisodes);
  } else {
    setup();
  }

}

document.getElementById("search").addEventListener("input", search);

window.onload = setup;
