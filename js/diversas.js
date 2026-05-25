function changeFontSize(step) {
    currentA11yScale += step;
    if(currentA11yScale < 0.8) currentA11yScale = 0.8;
    if(currentA11yScale > 1.4) currentA11yScale = 1.4;
    document.documentElement.style.setProperty('--a11y-scale', currentA11yScale);
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('text-accent', 'opacity-100');
        btn.classList.add('opacity-40');
    });
    document.getElementById('btn-' + lang).classList.remove('opacity-40');
    document.getElementById('btn-' + lang).classList.add('text-accent', 'opacity-100');

    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (staticTranslations[lang][key]) {
            el.innerText = staticTranslations[lang][key];
        }
    });

    const data = themesData[currentLang][currentThemeKey];

    document.getElementById('u-label-side').innerText = data.label;
    document.getElementById('u-label-top').innerText = data.label;
    document.getElementById('h-desc').innerText = data.desc;
    document.getElementById('h-extra').innerText = data.extra;
    document.getElementById('s-title').innerText = data.st;
    document.getElementById('s-subtitle').innerText = data.ss;

    document.getElementById('grid-content').innerHTML = renderGridItems(data);

    const hTitle = document.getElementById('h-title');
    if(currentThemeKey === 'monochrome' && lang === 'en') {
        hTitle.innerHTML = "THE BOT<br>TEGA";
    } else if (currentThemeKey === 'monochrome') {
        hTitle.innerHTML = "A BOT<br>TEGA";
    } else {
        hTitle.innerHTML = data.title;
    }

    document.querySelectorAll('.u-node')[0].setAttribute('title', lang === 'en' ? 'The Bottega' : 'A Bottega');
    document.querySelectorAll('.u-node')[1].setAttribute('title', lang === 'en' ? 'Acting' : 'Atuação');
    document.querySelectorAll('.u-node')[2].setAttribute('title', lang === 'en' ? 'Projects' : 'Projetos');
    document.querySelectorAll('.u-node')[3].setAttribute('title', lang === 'en' ? 'Services' : 'Serviços');
}

function scrambleText(id, targetHTML, duration = 800) {
    const el = document.getElementById(id); if(!el) return;
    const chars = ["X", "Y", "Z", "—", "BOT", "TE", "GA", "D'", "AR", "///", "[ ]", "§", "|||"];
    let iter = 0; const steps = 25; const intervalTime = duration / steps;
    const tokens = []; let temp = ""; let inTag = false;
    for(let i=0; i<targetHTML.length; i++) {
        if(targetHTML[i] === '<') { if(temp) tokens.push({type: 'text', val: temp}); temp = '<'; inTag = true; }
        else if (targetHTML[i] === '>') { temp += '>'; tokens.push({type: 'tag', val: temp}); temp = ''; inTag = false; }
        else { temp += targetHTML[i]; }
    }
    if(temp) tokens.push({type: inTag ? 'tag' : 'text', val: temp});

    const interval = setInterval(() => {
        let result = tokens.map((token) => {
            if (token.type === 'tag') return token.val;
            return token.val.split('').map((char, index) => {
                if (char === ' ' || char === '\n') return char;
                if (index < (iter / steps) * token.val.length) return token.val[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');
        }).join('');
        el.innerHTML = result;
        if (iter < (steps * 0.75) && Math.random() > 0.4) AudioFX.playScrambleTick();
        if(iter >= steps) { clearInterval(interval); el.innerHTML = targetHTML; }
        iter++;
    }, intervalTime);
}


function setTheme(themeKey, btn) {


      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // currentThemeKey = theme;

    if (isTransitioning) return; isTransitioning = true; currentThemeKey = themeKey; const data = themesData[currentLang][themeKey];
    AudioFX.startAmbience(themeKey); AudioFX.playWhoosh(1.2, themeKey === 'monochrome' || themeKey === 'elenco');

    clearInterval(titleCycleInterval); clearInterval(orbitDotInterval);

    document.querySelectorAll('.reality-layer').forEach(s => s.classList.add('shutter-active'));
    canvas.style.opacity = "1"; initLiquid(data.accent); drawLiquid();

    const hTitle = document.getElementById('h-title'); const bpDot = document.getElementById('blueprint-dot');
    hTitle.classList.add('hero-entry'); scrambleText('main-logo', "Bottega D'Arte", 600);

    setTimeout(() => {
        document.body.removeAttribute('style');
        document.documentElement.removeAttribute('style');

        document.body.classList.remove('theme-vibrant', 'theme-light', 'theme-elenco');
        if (themeKey !== 'monochrome') document.body.classList.add(`theme-${themeKey}`);
        cursor.className = `cursor-${themeKey}`;

        document.getElementById('sw-bg').style.setProperty('--sw-color', data.bg);
        document.querySelector('#sw-bg input').value = data.bg.toLowerCase();

        document.getElementById('sw-tx').style.setProperty('--sw-color', data.tx);
        document.querySelector('#sw-tx input').value = data.tx.toLowerCase();

        document.getElementById('sw-ac').style.setProperty('--sw-color', data.accent);
        document.querySelector('#sw-ac input').value = data.accent.toLowerCase();

        document.getElementById('u-label-side').innerText = data.label; document.getElementById('u-label-top').innerText = data.label;
        document.getElementById('h-desc').innerText = data.desc; document.getElementById('h-extra').innerText = data.extra;
        document.getElementById('s-title').innerText = data.st; document.getElementById('s-subtitle').innerText = data.ss;

        document.getElementById('grid-content').innerHTML = renderGridItems(data);
        hTitle.classList.remove('hero-entry');

        if (themeKey === 'monochrome') {
            let cycleIndex = 0; const cycleWords = currentLang === 'en' ? ["THE BOT<br>TEGA", "D'AR<br>TE"] : ["A BOT<br>TEGA", "D'AR<br>TE"]; bpDot.style.display = 'none';
            scrambleText('h-title', cycleWords[0], 1200);
            titleCycleInterval = setInterval(() => { cycleIndex = (cycleIndex + 1) % cycleWords.length; scrambleText('h-title', cycleWords[cycleIndex], 1200); }, 3500);
        } else if (themeKey === 'elenco') {
            scrambleText('h-title', data.title, 1200); bpDot.style.display = 'block'; bpDot.className = 'orbit-square';
            orbitDotInterval = setInterval(() => { bpDot.className = bpDot.classList.contains('orbit-square') ? 'orbit-organic' : 'orbit-square'; }, 5000);
        } else {
            bpDot.style.display = 'none'; scrambleText('h-title', data.title, 1200);
        }

        document.querySelectorAll('.u-node').forEach(n => n.classList.remove('active'));
        if(btn) btn.classList.add('active'); else document.querySelectorAll('.u-node')[['monochrome', 'vibrant', 'light', 'elenco'].indexOf(themeKey)].classList.add('active');
    }, 450);

    setTimeout(() => { document.querySelectorAll('.reality-layer').forEach(s => s.classList.remove('shutter-active')); isTransitioning = false; }, 1000);
}

function updateLiveColor(varName, value, swatchId) {
    document.body.style.transition = 'none';
    document.documentElement.style.transition = 'none';

    document.body.style.setProperty(varName, value);
    document.documentElement.style.setProperty(varName, value);

    document.getElementById(swatchId).style.setProperty('--sw-color', value);
    document.querySelector(`#${swatchId} input`).value = value;

    clearTimeout(window.liveColorTimeout);
    window.liveColorTimeout = setTimeout(() => {
        document.body.style.transition = '';
        document.documentElement.style.transition = '';
    }, 100);
}

function initScrollAnimations() {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('in-view');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-up').forEach(el => scrollObserver.observe(el));
}

function initLiquid(color) {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight; fragments = [];
    for(let i=0; i<60; i++) fragments.push({ x: Math.random()*canvas.width, y: -100, vx: (Math.random()-0.5)*15, vy: Math.random()*50+30, w: Math.random()*400+100, h: Math.random()*3+1, color, alpha: 1.5 });
}
function drawLiquid() {
    ctx.clearRect(0,0,canvas.width,canvas.height); let alive = false;
    fragments.forEach(f => {
        if(f.alpha > 0) { alive = true; ctx.globalAlpha = Math.max(0, f.alpha); ctx.fillStyle = f.color; ctx.fillRect(f.x, f.y, f.w, f.h); f.y += f.vy; f.x += f.vx; f.alpha -= 0.04; }
    });
    if(alive) requestAnimationFrame(drawLiquid); else canvas.style.opacity="0";
}


function renderGridItems(data) {
    return data.items.map((i, categoryIndex) => {
        const content = i.projects
            ? `<ul class="list-none space-y-2">
                ${i.projects.map((p, projectIndex) => `
                    <li>
                    <button type="button"
                            class="project-list-item"
                            onclick="event.preventDefault(); event.stopPropagation(); openProjectModal(${categoryIndex}, ${projectIndex});">
                        ${p.t}
                    </button>
                    </li>
                `).join('')}
               </ul>`
            : i.d;

        return `
            <div class="group py-6 flex flex-col justify-start reveal-up in-view">
                <h3 class="font-display a11y-title mb-4 group-hover:text-accent transition-colors tracking-tight">${i.t}</h3>
                <div class="prose-body opacity-70 font-light a11y-reading leading-relaxed">${content}</div>
            </div>
        `;
    }).join('');
}

let currentCategoryIndex = 0;
let currentProjectIndex = 0;
window.openProjectModal = function(categoryIndex, projectIndex) {

    currentCategoryIndex = categoryIndex;
    currentProjectIndex = projectIndex;

    const project =
        themesData[currentLang]
        .light
        .items[categoryIndex]
        .projects[projectIndex];

    document.getElementById('project-modal-img').src = project.img || '';

    const category =
        themesData[currentLang]
        .light
        .items[categoryIndex];

    document.getElementById('project-modal-content').innerHTML = `
        <div class="project-category-label">
            ${category.t}
        </div>

        ${project.modal || ''}
    `;

    document.body.classList.add('project-modal-open');

    updateProjectNavigation();
};


function updateProjectNavigation() {

    const projects =
        themesData[currentLang]
        .light
        .items[currentCategoryIndex]
        .projects;

    document.getElementById('project-prev').style.opacity =
        currentProjectIndex === 0 ? '0.2' : '1';

    document.getElementById('project-next').style.opacity =
        currentProjectIndex === projects.length - 1 ? '0.2' : '1';
}

window.nextProject = function() {

    const projects =
        themesData[currentLang]
        .light
        .items[currentCategoryIndex]
        .projects;

    if (currentProjectIndex >= projects.length - 1) return;

    currentProjectIndex++;

    openProjectModal(currentCategoryIndex, currentProjectIndex);
};

window.prevProject = function() {

    if (currentProjectIndex <= 0) return;

    currentProjectIndex--;

    openProjectModal(currentCategoryIndex, currentProjectIndex);
};

window.closeProjectModal = function() {
    document.body.classList.remove('project-modal-open');
};
