document.body.addEventListener('click', () => { if (!AudioFX.hasInteracted) { AudioFX.init(); AudioFX.hasInteracted = true; } }, { once: true });
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button, a, .u-node, .side-text, .swatch-box').forEach(el => {
        el.addEventListener('mouseenter', () => { AudioFX.playHover(currentThemeKey); });
    });
});

const galleryPieces = [
    { id: 1, title: 'Obra 01', material: 'Monólito Safira', seed: 100 },
    { id: 2, title: 'Obra 02', material: 'Núcleo Rubi', seed: 200 },
    { id: 3, title: 'Obra 03', material: 'Refração Âmbar', seed: 300 }
];

let currentFrames = [];
let currentFrameIndex = 0;
let isDragging360 = false;
let startX = 0;
let startFrame = 0;
let thumbIntervals = {};

const viewerModal = document.getElementById('piece-viewer');
const viewerImg = document.getElementById('viewer-img');
const viewerLoader = document.getElementById('viewer-loader');
const viewerContainer = document.getElementById('viewer-360-container');
const cursor = document.getElementById('custom-cursor');

document.getElementById('edge-vault').addEventListener('click', openVault);
document.getElementById('vault-backdrop').addEventListener('click', closeVault);

viewerImg.ondragstart = () => false;

viewerModal.addEventListener('mousedown', handleDragStart);
window.addEventListener('mousemove', handleDragMove);
window.addEventListener('mouseup', handleDragEnd);

viewerModal.addEventListener('touchstart', handleDragStart, {passive: false});
window.addEventListener('touchmove', handleDragMove, {passive: false});
window.addEventListener('touchend', handleDragEnd);

let scrollThrottle = false;
viewerModal.addEventListener('wheel', (e) => {
    if (!viewerModal.classList.contains('viewer-active')) return;
    if (currentFrames.length === 0) return;

    if(e.cancelable) e.preventDefault();

    if (scrollThrottle) return;
    scrollThrottle = true;
    setTimeout(() => scrollThrottle = false, 35);

    const direction = e.deltaY > 0 ? 1 : -1;
    let newIndex = (currentFrameIndex + direction) % currentFrames.length;
    if (newIndex < 0) newIndex += currentFrames.length;

    if (newIndex !== currentFrameIndex) {
        currentFrameIndex = newIndex;
        viewerImg.src = currentFrames[currentFrameIndex];
        AudioFX.playHover('light');
    }
}, {passive: false});

let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
let cursorX = mouseX, cursorY = mouseY;
document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
function updateCursorLerp() {
    cursorX += (mouseX - cursorX) * 0.15; cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(updateCursorLerp);
}
updateCursorLerp();

document.body.addEventListener('mouseover', e => {
    if(e.target.closest('button, a, .swatch-box, input, #edge-vault, .olho-magico-container, .magic-eye-mini, #vault-backdrop, .u-node, .side-text, #viewer-360-container')) {
        cursor.classList.add('c-hover');
    }
});
document.body.addEventListener('mouseout', e => {
    if(e.target.closest('button, a, .swatch-box, input, #edge-vault, .olho-magico-container, .magic-eye-mini, #vault-backdrop, .u-node, .side-text, #viewer-360-container')) {
        cursor.classList.remove('c-hover');
    }
});

let currentLang = 'pt';
let currentThemeKey = 'monochrome';
let currentA11yScale = 1;
const canvas = document.getElementById('liquid-canvas'); const ctx = canvas.getContext('2d'); let fragments = [];
let isTransitioning = false; let titleCycleInterval; let orbitDotInterval; let vaultIsOpen = false;

window.onload = () => {
    initGallery();
    initScrollAnimations();
    setTheme('monochrome');
    setLanguage('pt');
}
