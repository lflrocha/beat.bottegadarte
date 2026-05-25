function initGallery() {
    const grid = document.getElementById('gallery-grid');
    grid.innerHTML = galleryPieces.map(piece => `
        <div class="flex flex-col items-center gap-6">
            <div class="olho-magico-container"
                 onclick="openViewer(event, ${piece.id})"
                 onmouseenter="startThumbSpin(${piece.id})"
                 onmouseleave="stopThumbSpin(${piece.id})">
                <div class="olho-magico">
                    <div class="thumb-frame" id="thumb-frame-${piece.id}"></div>
                </div>
            </div>
            <div class="text-center transition-colors duration-[800ms]">
                <h4 class="font-display font-bold text-lg tracking-tight uppercase text-textBase transition-colors duration-[800ms]">${piece.title}</h4>
                <span class="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 text-accent transition-colors duration-[800ms]">${piece.material}</span>
            </div>
        </div>
    `).join('');

    window.allPieceFrames = {};

    galleryPieces.forEach(piece => {
        const f0 = generateHyperRealEggFrame(piece.seed, 0);
        window.allPieceFrames[piece.id] = [f0];
        document.getElementById(`thumb-frame-${piece.id}`).style.backgroundImage = `url('${f0}')`;
    });

    let renderQueue = [];
    galleryPieces.forEach(piece => {
        for(let i=1; i<36; i++) { renderQueue.push({ id: piece.id, seed: piece.seed, angle: i }); }
    });

    let qIndex = 0;
    function processNextFrame() {
        if (qIndex >= renderQueue.length) return;
        const job = renderQueue[qIndex];
        window.allPieceFrames[job.id].push(generateHyperRealEggFrame(job.seed, job.angle, 36));
        qIndex++;
        setTimeout(processNextFrame, 15);
    }
    setTimeout(processNextFrame, 300);
}

function startThumbSpin(id) {
    AudioFX.playHover('light');
    const thumb = document.getElementById(`thumb-frame-${id}`);
    const frames = window.allPieceFrames[id];
    if(!frames || frames.length < 36) return;

    let frameIdx = 0;
    thumbIntervals[id] = setInterval(() => {
        frameIdx = (frameIdx + 1) % frames.length;
        thumb.style.backgroundImage = `url('${frames[frameIdx]}')`;
    }, 120);
}

function stopThumbSpin(id) {
    clearInterval(thumbIntervals[id]);
}

function generateHyperRealEggFrame(seed, angleIndex, totalFrames = 36) {
    const canvas = document.createElement('canvas');
    const size = 400;
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, size, size);
    ctx.translate(size / 2, size / 2);

    const rot = (angleIndex / totalFrames) * Math.PI * 2;

    let coreH;
    if (seed === 100) { coreH = 210; }
    else if (seed === 200) { coreH = 345; }
    else { coreH = 40; }

    ctx.save();
    ctx.scale(1, 0.2);
    const shadowGrad = ctx.createRadialGradient(0, 600, 0, 0, 600, 150);
    shadowGrad.addColorStop(0, 'rgba(0,0,0,0.3)');
    shadowGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.arc(0, 600, 150, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();

    const radius = 130;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);

    const sphereGrad = ctx.createRadialGradient(-40, -40, 10, 0, 0, radius);
    sphereGrad.addColorStop(0, 'hsl(0, 0%, 65%)');
    sphereGrad.addColorStop(0.4, 'hsl(0, 0%, 40%)');
    sphereGrad.addColorStop(1, 'hsl(0, 0%, 15%)');
    ctx.fillStyle = sphereGrad;
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.clip();

    ctx.rotate(Math.PI / 6);

    const numStripes = 6;
    for(let i=0; i<numStripes; i++) {
        const angle = rot + (i * Math.PI * 2 / numStripes);
        const xRadius = Math.sin(angle) * radius;
        const zPos = Math.cos(angle);

        if (zPos > -0.1) {
            ctx.beginPath();
            ctx.ellipse(0, 0, Math.abs(xRadius), radius, 0, -Math.PI/2, Math.PI/2, xRadius < 0);

            ctx.lineWidth = 14;
            ctx.strokeStyle = `hsla(${coreH}, 80%, 45%, ${0.3 + zPos * 0.7})`;
            ctx.stroke();

            ctx.lineWidth = 4;
            ctx.strokeStyle = `hsla(${coreH}, 100%, 75%, ${0.5 + zPos * 0.5})`;
            ctx.stroke();
        }
    }
    ctx.restore();

    const glossGrad = ctx.createRadialGradient(-45, -45, 5, -35, -35, 70);
    glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
    glossGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glossGrad;
    ctx.beginPath();
    ctx.arc(-40, -40, 70, 0, Math.PI*2);
    ctx.fill();

    const rimGrad = ctx.createLinearGradient(-radius, -radius, radius, radius);
    rimGrad.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    rimGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0)');
    rimGrad.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.strokeStyle = rimGrad;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
    return canvas.toDataURL('image/png');
}

function openViewer(e, pieceId) {
    if(e) e.stopPropagation();
    const piece = galleryPieces.find(p => p.id === pieceId);
    if(!piece) return;

    document.getElementById('viewer-title').innerText = piece.title;
    document.getElementById('viewer-material').innerText = piece.material;

    viewerModal.classList.add('viewer-active');
    document.body.classList.add('viewer-open');
    viewerImg.style.opacity = '0';
    viewerLoader.style.display = 'none';

    AudioFX.playWhoosh(0.8, true);

    currentFrames = window.allPieceFrames[piece.id] || [];
    currentFrameIndex = 0;

    if(currentFrames.length > 0) {
        viewerImg.src = currentFrames[0];
        viewerImg.style.opacity = '1';
    }
}

function closeViewer(e) {
    if(e) e.stopPropagation();
    viewerModal.classList.remove('viewer-active');
    document.body.classList.remove('viewer-open');
    AudioFX.playWhoosh(0.6, false);
}

function openVault(e) {
    if(!vaultIsOpen && !e.target.closest('[data-close-vault]')) {
        if(e) e.stopPropagation();
        AudioFX.playWhoosh(0.8, false);
        vaultIsOpen = true;
        document.body.classList.add('vault-open');
    }
}

function closeVault(e) {
    if(e) e.stopPropagation();
    if(vaultIsOpen) {
        AudioFX.playWhoosh(0.7, true);
        vaultIsOpen = false;
        document.body.classList.remove('vault-open');
    }
}

function handleDragStart(e) {
    if(e.target.closest('button') || e.target.closest('a')) return;
    if(e.type.includes('mouse') && e.button !== 0) return;

    if(currentFrames.length === 0) return;

    if(e.cancelable) e.preventDefault();

    isDragging360 = true;
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    startFrame = currentFrameIndex;
    cursor.classList.add('c-grab');
}

function handleDragMove(e) {
    if(!isDragging360) return;

    if(e.cancelable) e.preventDefault();

    const x = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const delta = x - startX;

    const frameShift = Math.floor(delta / 15);

    let newIndex = (startFrame + frameShift) % currentFrames.length;
    if (newIndex < 0) newIndex += currentFrames.length;

    if (newIndex !== currentFrameIndex) {
        currentFrameIndex = newIndex;
        viewerImg.src = currentFrames[currentFrameIndex];
        AudioFX.playHover('light');
    }
}

function handleDragEnd() {
    isDragging360 = false;
    cursor.classList.remove('c-grab');
}
