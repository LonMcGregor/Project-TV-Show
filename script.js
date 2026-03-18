//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  for(let ep of episodeList){
    document.writeln(`<article>
    <h1>S${ep.season.toString().padStart(2,"0")} - E${ep.number.toString().padStart(2,"0")}
    <h2>${ep.name}</h2>
    <img src="${ep.image.medium}" />
    <details>
    <summary>blurb</summary>
    ${ep.summary}
    </details>
    </article>`)
  }
}


window.onload = setup;
