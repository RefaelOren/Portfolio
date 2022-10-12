'use strict';

function onInitPage() {
    const projs = getProjForDisplay();
    renderProjs(projs);
}

function renderProjs(projs) {
    const strHTML = projs
        .map(
            (proj) =>
                `
    <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4" 
        onclick="onClickedProj('${proj.id}')">
           <div class="portfolio-hover">
             <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
             </div>
           </div>
           <img id="portfolio-img" class="img-fluid" src="img/portfolio/${proj.id}.png" >
        </a>
        <div class="portfolio-caption">
          <h4 style="font-size:1.2rem;">${proj.name}</h4>
          <p style="font-size:1rem;" class="text-muted">${proj.title}</p>
        </div>
    </div>
    `
        )
        .join('');
    document.querySelector('#projs-container').innerHTML = strHTML;
}

function onClickedProj(projId) {
    renderProjModal(projId);
}

function renderProjModal(projId) {
    const proj = getProjById(projId);
    var elProjModal = document.querySelector();
}
