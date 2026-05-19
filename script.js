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

window.onload = setup;
