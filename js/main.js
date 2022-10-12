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
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" 
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
    var elProjModal = document.querySelector('.modal-body');
    elProjModal.querySelector('h2').innerText = proj.name;
    elProjModal.querySelector('.item-intro').innerText = proj.phrase;
    elProjModal.querySelector('img').src = proj.url;
    elProjModal.querySelector('.desc').innerText = proj.desc;
    elProjModal.querySelector('ul .date').innerText =
        'Date: ' + getDate(proj.publishAt);
    elProjModal.querySelector('ul .category').innerText =
        'Category: ' + proj.title;
    document.querySelector('.site-link').href = proj.link;
}

function getDate(timeStamp) {
    return new Date(timeStamp).toLocaleString();
}
