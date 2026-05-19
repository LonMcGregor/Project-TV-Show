//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
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
    const allEpisodes = getAllEpisodes().filter(ep => ep.name.indexOf(e.target.value) > -1);
    makePageForEpisodes(allEpisodes);
  } else {
    setup();
  }

}

document.getElementById("search").addEventListener("input", search);

window.onload = setup;
