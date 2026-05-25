const AudioFX = {
    ctx: null, isMuted: true, hasInteracted: false, ambienceNodes: [], ambienceInterval: null, ambienceBus: null, delayNode: null, feedbackGain: null, delayFilter: null,
    init: function() {
        try {
            if (!this.ctx) {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
                this.ambienceBus = this.ctx.createGain(); this.ambienceBus.gain.value = 1.0;
                this.delayNode = this.ctx.createDelay(); this.delayNode.delayTime.value = 0.8;
                this.feedbackGain = this.ctx.createGain(); this.feedbackGain.gain.value = 0.5;
                this.delayFilter = this.ctx.createBiquadFilter(); this.delayFilter.type = 'lowpass'; this.delayFilter.frequency.value = 800;
                this.ambienceBus.connect(this.ctx.destination); this.ambienceBus.connect(this.delayNode);
                this.delayNode.connect(this.delayFilter); this.delayFilter.connect(this.feedbackGain);
                this.feedbackGain.connect(this.delayNode); this.feedbackGain.connect(this.ctx.destination);
            }
            if (this.ctx.state === 'suspended') this.ctx.resume();
        } catch(e) {}
    },
    toggleMute: function() {
        this.init(); this.isMuted = !this.isMuted; const btn = document.getElementById('audio-toggle');
        if (this.isMuted) { btn.innerText = 'SOM: OFF'; btn.classList.remove('text-accent', 'opacity-100'); btn.classList.add('opacity-40'); this.stopAmbience(); }
        else { btn.innerText = 'SOM: ON'; btn.classList.remove('opacity-40'); btn.classList.add('text-accent', 'opacity-100'); this.playHover(currentThemeKey); this.startAmbience(currentThemeKey); }
    },
    changeAcoustics: function(theme, t) {
        if (!this.delayNode) return;
        let dTime = 0.8, fGain = 0.5, fFreq = 800;
        if (theme === 'monochrome') { dTime = 0.85; fGain = 0.65; fFreq = 500; }
        else if (theme === 'vibrant') { dTime = 0.25; fGain = 0.3; fFreq = 3000; }
        else if (theme === 'light') { dTime = 0.5; fGain = 0.45; fFreq = 1000; }
        else { dTime = 0.12; fGain = 0.7; fFreq = 4500; }
        this.delayNode.delayTime.linearRampToValueAtTime(dTime, t + 2);
        this.feedbackGain.gain.linearRampToValueAtTime(fGain, t + 2);
        this.delayFilter.frequency.linearRampToValueAtTime(fFreq, t + 2);
    },
    startAmbience: function(theme = 'monochrome') {
        try {
            if (this.isMuted || !this.ctx) return;
            const t = this.ctx.currentTime; this.changeAcoustics(theme, t); clearTimeout(this.ambienceInterval);
            if (this.ambienceNodes.length > 0) {
                this.ambienceNodes.forEach(node => {
                    try {
                        node.volGain.gain.cancelScheduledValues(t); node.volGain.gain.linearRampToValueAtTime(0.0001, t + 2);
                        setTimeout(() => { try { if(node.osc) { node.osc.stop(); node.osc.disconnect(); } if(node.volGain) { node.volGain.disconnect(); } } catch(e){} }, 2500);
                    } catch(e) {}
                });
            }
            this.ambienceNodes = [];

            let baseFrequencies = [];
            let distantFrequencies = [];
            let baseVol = 0.003;

            if (theme === 'monochrome') {
                baseFrequencies = [65.41, 98.00, 130.81];
                distantFrequencies = [196.00, 261.63, 311.13, 392.00, 523.25];
                baseVol = 0.004;
            } else if (theme === 'vibrant') {
                baseFrequencies = [73.42, 110.00, 146.83];
                distantFrequencies = [293.66, 369.99, 440.00, 554.37, 739.99];
                baseVol = 0.002;
            } else if (theme === 'light') {
                baseFrequencies = [87.31, 130.81, 174.61];
                distantFrequencies = [233.08, 261.63, 349.23, 466.16];
                baseVol = 0.005;
            } else {
                baseFrequencies = [55.00, 82.41, 110.00];
                distantFrequencies = [220.00, 246.94, 329.63, 440.00, 523.25];
                baseVol = 0.003;
            }

            baseFrequencies.forEach((freq, i) => {
                const harmonicMultipliers = [1, 2, 3, 4];
                harmonicMultipliers.forEach((hMult, hIdx) => {
                    const osc = this.ctx.createOscillator();

                    if (theme === 'light') osc.type = 'triangle';
                    else if (theme === 'vibrant') osc.type = 'square';
                    else osc.type = 'sine';

                    osc.frequency.value = freq * hMult;

                    const volGain = this.ctx.createGain();
                    volGain.gain.setValueAtTime(0.0001, t);

                    const hTargetVol = Math.max(0.0001, (baseVol / (hIdx + 1)) * 0.8);

                    if (hIdx === 0) {
                        volGain.gain.linearRampToValueAtTime(hTargetVol, t + 4 + i);
                        const volLfo = this.ctx.createOscillator();
                        volLfo.type = 'sine';
                        volLfo.frequency.value = Math.random() * 0.01 + 0.005;
                        const volLfoGain = this.ctx.createGain();
                        volLfoGain.gain.value = hTargetVol * 0.6;
                        volLfo.connect(volLfoGain);
                        volLfoGain.connect(volGain.gain);
                        volLfo.start(t);
                        this.ambienceNodes.push({ osc, volLfo, volGain });
                    } else {
                        const attack = 4 + (hIdx * 2);
                        const release = 15 + (hIdx * 8);
                        volGain.gain.linearRampToValueAtTime(hTargetVol, t + attack);
                        volGain.gain.linearRampToValueAtTime(0.0001, t + attack + release);
                        osc.stop(t + attack + release + 1);
                        this.ambienceNodes.push({ osc, volGain });
                    }

                    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : this.ctx.createGain();
                    if (panner.pan) panner.pan.value = (Math.random() * 1.5 - 0.75) * (hIdx / 4);

                    const filter = this.ctx.createBiquadFilter();
                    filter.type = 'lowpass';
                    filter.frequency.value = (theme === 'light') ? 600 : (theme === 'vibrant' ? 250 : 400);

                    osc.connect(filter);
                    filter.connect(volGain);
                    volGain.connect(panner);
                    panner.connect(this.ambienceBus);

                    osc.start(t);
                });
            });

            const generateEvent = () => {
                try {
                    if (this.isMuted || !this.ctx || this.ambienceNodes.length === 0) return;
                    const currentT = this.ctx.currentTime;
                    const eventType = Math.random();

                    if (eventType < 0.45) {
                        const numNotes = Math.floor(Math.random() * 3) + 1;
                        for(let i=0; i<numNotes; i++) {
                            const noteFreq = distantFrequencies[Math.floor(Math.random() * distantFrequencies.length)];
                            const osc = this.ctx.createOscillator();
                            osc.type = (theme === 'light') ? 'triangle' : 'sine';
                            osc.frequency.value = noteFreq + (Math.random() * 2 - 1);

                            const gain = this.ctx.createGain();
                            gain.gain.setValueAtTime(0.0001, currentT);

                            const attack = Math.random() * 5 + 3;
                            const release = Math.random() * 10 + 5;
                            const peak = Math.max(0.0001, baseVol * (Math.random() * 1.5 + 0.5));

                            gain.gain.linearRampToValueAtTime(peak, currentT + attack);
                            gain.gain.linearRampToValueAtTime(0.0001, currentT + attack + release);

                            const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : this.ctx.createGain();
                            if (panner.pan) panner.pan.value = Math.random() * 2 - 1;

                            const filter = this.ctx.createBiquadFilter();
                            filter.type = 'lowpass'; filter.frequency.value = 600;

                            osc.connect(filter); filter.connect(gain); gain.connect(panner); panner.connect(this.ambienceBus);
                            osc.start(currentT); osc.stop(currentT + attack + release);
                        }
                    } else if (eventType < 0.7) {
                        const dur = Math.random() * 6 + 4;
                        const bufferSize = this.ctx.sampleRate * dur;
                        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                        const data = buffer.getChannelData(0);
                        for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.1;

                        const noise = this.ctx.createBufferSource(); noise.buffer = buffer;

                        const filter = this.ctx.createBiquadFilter();
                        filter.type = 'bandpass'; filter.Q.value = Math.random() * 4 + 1;
                        filter.frequency.setValueAtTime(Math.random() * 1500 + 200, currentT);
                        filter.frequency.linearRampToValueAtTime(Math.random() * 800 + 100, currentT + dur);

                        const noiseGain = this.ctx.createGain();
                        noiseGain.gain.setValueAtTime(0.0001, currentT);
                        noiseGain.gain.linearRampToValueAtTime(baseVol * 1.5, currentT + dur * 0.4);
                        noiseGain.gain.linearRampToValueAtTime(0.0001, currentT + dur);

                        const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : this.ctx.createGain();
                        if (panner.pan) panner.pan.value = Math.random() * 1.8 - 0.9;

                        noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(panner); panner.connect(this.ambienceBus);
                        noise.start(currentT);
                    } else {
                        if (theme === 'vibrant') {
                            const noteFreq = distantFrequencies[Math.floor(Math.random() * distantFrequencies.length)];

                            [0, 0.08].forEach(offset => {
                                const osc = this.ctx.createOscillator();
                                osc.type = 'sawtooth';
                                osc.frequency.value = noteFreq;

                                const gain = this.ctx.createGain();
                                gain.gain.setValueAtTime(0.0001, currentT + offset);
                                gain.gain.linearRampToValueAtTime(baseVol * 4, currentT + offset + 0.01);
                                gain.gain.linearRampToValueAtTime(0.0001, currentT + offset + 0.15);

                                const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : this.ctx.createGain();
                                if (panner.pan) panner.pan.value = Math.random() > 0.5 ? 0.7 : -0.7;

                                const filter = this.ctx.createBiquadFilter();
                                filter.type = 'lowpass';
                                filter.frequency.setValueAtTime(4000, currentT + offset);
                                filter.frequency.exponentialRampToValueAtTime(500, currentT + offset + 0.1);

                                osc.connect(filter); filter.connect(gain); gain.connect(panner); panner.connect(this.ambienceBus);
                                osc.start(currentT + offset); osc.stop(currentT + offset + 0.2);
                            });
                        } else if (theme === 'light') {
                            const noteFreq = distantFrequencies[Math.floor(Math.random() * distantFrequencies.length)];
                            const osc = this.ctx.createOscillator(); osc.type = 'triangle';
                            osc.frequency.setValueAtTime(noteFreq, currentT);
                            osc.frequency.exponentialRampToValueAtTime(noteFreq * 0.8, currentT + 0.15);

                            const gain = this.ctx.createGain();
                            gain.gain.setValueAtTime(0.0001, currentT);
                            gain.gain.linearRampToValueAtTime(baseVol * 6, currentT + 0.01);
                            gain.gain.linearRampToValueAtTime(0.0001, currentT + 0.3);

                            const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : this.ctx.createGain();
                            if (panner.pan) panner.pan.value = Math.random() * 1.6 - 0.8;

                            const filter = this.ctx.createBiquadFilter();
                            filter.type = 'bandpass'; filter.frequency.value = noteFreq; filter.Q.value = 1.5;

                            osc.connect(filter); filter.connect(gain); gain.connect(panner); panner.connect(this.ambienceBus);
                            osc.start(currentT); osc.stop(currentT + 0.4);
                        }
                    }
                    this.ambienceInterval = setTimeout(generateEvent, (Math.random() * 10000) + 4000);
                } catch (err) { console.warn("AudioFX Generate Erro:", err); }
            };

            this.ambienceInterval = setTimeout(generateEvent, 4000);
        } catch (e) { console.warn("AudioFX Ambiente Erro:", e); }
    },
    stopAmbience: function() {
        try {
            clearTimeout(this.ambienceInterval); if (this.ambienceNodes.length === 0) return; const t = this.ctx.currentTime;
            this.ambienceNodes.forEach(node => {
                try { node.volGain.gain.cancelScheduledValues(t); node.volGain.gain.linearRampToValueAtTime(0.0001, t + 2); setTimeout(() => { try { if(node.osc) { node.osc.stop(); node.osc.disconnect(); } if(node.volGain) { node.volGain.disconnect(); } } catch(e){} }, 2500); } catch(e) {}
            });
            this.ambienceNodes = [];
        } catch(e){}
    },
    playHover: function(theme = 'monochrome') {
        try {
            if (this.isMuted || !this.ctx) return;
            const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain(); const t = this.ctx.currentTime;
            osc.connect(gain); gain.connect(this.ctx.destination);
            if (theme === 'light') {
                osc.type = 'triangle'; osc.frequency.setValueAtTime(250, t); osc.frequency.linearRampToValueAtTime(80, t + 0.05);
                gain.gain.setValueAtTime(0.08, t); gain.gain.linearRampToValueAtTime(0.0001, t + 0.1);
            } else if (theme === 'vibrant') {
                osc.type = 'sawtooth'; osc.frequency.setValueAtTime(587.33, t);
                gain.gain.setValueAtTime(0.06, t); gain.gain.linearRampToValueAtTime(0.0001, t + 0.15);
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass'; filter.frequency.setValueAtTime(4000, t); filter.frequency.exponentialRampToValueAtTime(400, t + 0.1);
                osc.disconnect(); osc.connect(filter); filter.connect(gain);
            } else {
                osc.type = 'sine'; osc.frequency.setValueAtTime(320, t); osc.frequency.linearRampToValueAtTime(150, t + 0.15);
                gain.gain.setValueAtTime(0.05, t); gain.gain.linearRampToValueAtTime(0.0001, t + 0.2);
            }
            osc.start(t); osc.stop(t + 0.3);
        } catch(e){}
    },
    playWhoosh: function(duration = 1.0, isDeep = false) {
        try {
            if (this.isMuted || !this.ctx) return;
            const t = this.ctx.currentTime; const bufferSize = this.ctx.sampleRate * duration; const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0); for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.5;
            const noise = this.ctx.createBufferSource(); noise.buffer = buffer;
            const filter = this.ctx.createBiquadFilter(); filter.type = 'bandpass'; filter.Q.value = 1.0;
            filter.frequency.setValueAtTime(isDeep ? 300 : 2000, t); filter.frequency.linearRampToValueAtTime(isDeep ? 1000 : 400, t + duration * 0.5); filter.frequency.linearRampToValueAtTime(isDeep ? 80 : 80, t + duration);
            const noiseGain = this.ctx.createGain(); noiseGain.gain.setValueAtTime(0.0001, t); noiseGain.gain.linearRampToValueAtTime(0.2, t + duration * 0.2); noiseGain.gain.linearRampToValueAtTime(0.0001, t + duration);
            noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(this.ambienceBus || this.ctx.destination); noise.start(t);

            if (isDeep) {
                const osc = this.ctx.createOscillator(); const oscGain = this.ctx.createGain();
                osc.type = 'sine'; osc.frequency.setValueAtTime(80, t); osc.frequency.linearRampToValueAtTime(20, t + duration);
                oscGain.gain.setValueAtTime(0.0001, t); oscGain.gain.linearRampToValueAtTime(0.2, t + 0.1); oscGain.gain.linearRampToValueAtTime(0.0001, t + duration);
                osc.connect(oscGain); oscGain.connect(this.ambienceBus || this.ctx.destination);
                osc.start(t); osc.stop(t + duration);
            }
        } catch(e){}
    },
    playScrambleTick: function() {
        try {
            if (this.isMuted || !this.ctx) return;
            const t = this.ctx.currentTime; const dur = 0.015 + Math.random() * 0.015; const bufferSize = this.ctx.sampleRate * dur;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate); const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.4;
            const noise = this.ctx.createBufferSource(); noise.buffer = buffer;
            const filter = this.ctx.createBiquadFilter(); filter.type = 'bandpass'; filter.frequency.value = 2500 + Math.random() * 1500; filter.Q.value = 0.5;
            const gain = this.ctx.createGain(); gain.gain.setValueAtTime(0.0001, t); gain.gain.linearRampToValueAtTime(0.008 + Math.random() * 0.004, t + 0.005); gain.gain.linearRampToValueAtTime(0.0001, t + dur);
            noise.connect(filter); filter.connect(gain); gain.connect(this.ctx.destination); noise.start(t);
        } catch(e){}
    },
    playThemeChange: function(theme = 'monochrome') {
        try {
            if (this.isMuted || !this.ctx) return;
            const t = this.ctx.currentTime;
            this.playWhoosh(1.2, theme === 'monochrome' || theme === 'elenco');
            const dest = this.ambienceBus || this.ctx.destination;

            if (theme === 'monochrome') {
                [130.81, 261.63, 392.44].forEach((freq, idx) => {
                    const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
                    osc.type = 'sine'; osc.frequency.setValueAtTime(freq, t);
                    gain.gain.setValueAtTime(0.0001, t); gain.gain.linearRampToValueAtTime(0.1 / (idx+1), t + 0.05); gain.gain.linearRampToValueAtTime(0.0001, t + 2.5);
                    osc.connect(gain); gain.connect(dest); osc.start(t); osc.stop(t + 2.5);
                });
            } else if (theme === 'vibrant') {
                const notes = [293.66, 329.63, 369.99, 392.00, 440.00, 493.88, 587.33];
                notes.forEach((freq, idx) => {
                    const delay = t + (idx * 0.05);
                    const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
                    osc.type = 'sawtooth'; osc.frequency.setValueAtTime(freq, delay);
                    gain.gain.setValueAtTime(0.0001, delay); gain.gain.linearRampToValueAtTime(0.06, delay + 0.01); gain.gain.linearRampToValueAtTime(0.0001, delay + 0.15);

                    const filter = this.ctx.createBiquadFilter();
                    filter.type = 'lowpass'; filter.frequency.setValueAtTime(5000, delay); filter.frequency.exponentialRampToValueAtTime(600, delay + 0.1);

                    osc.connect(filter); filter.connect(gain); gain.connect(dest);
                    osc.start(delay); osc.stop(delay + 0.2);
                });
            } else if (theme === 'light') {
                const notes = [174.61, 261.63, 349.23];
                notes.forEach((freq, idx) => {
                    const delay = t + (idx * 0.15);
                    const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq * 0.85, delay);
                    osc.frequency.linearRampToValueAtTime(freq, delay + 0.15);

                    gain.gain.setValueAtTime(0.0001, delay);
                    gain.gain.linearRampToValueAtTime(0.06, delay + 0.15);
                    gain.gain.linearRampToValueAtTime(0.0001, delay + 2.0);

                    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : this.ctx.createGain();
                    if(panner.pan) panner.pan.value = Math.random() * 0.8 - 0.4;

                    const filter = this.ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 600;

                    osc.connect(filter); filter.connect(gain); gain.connect(panner); panner.connect(dest);
                    osc.start(delay); osc.stop(delay + 2.0);
                });

                const dur = 1.8; const bufferSize = this.ctx.sampleRate * dur; const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
                const data = buffer.getChannelData(0); for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.15;
                const noise = this.ctx.createBufferSource(); noise.buffer = buffer;

                const nFilter = this.ctx.createBiquadFilter(); nFilter.type = 'bandpass'; nFilter.Q.value = 2.5;
                nFilter.frequency.setValueAtTime(250, t); nFilter.frequency.linearRampToValueAtTime(500, t + dur);

                const nGain = this.ctx.createGain(); nGain.gain.setValueAtTime(0.0001, t); nGain.gain.linearRampToValueAtTime(0.3, t + 0.2); nGain.gain.linearRampToValueAtTime(0.0001, t + dur);
                noise.connect(nFilter); nFilter.connect(nGain); nGain.connect(dest); noise.start(t);
            } else {
                for(let i=0; i<5; i++) {
                    const delay = t + (i * 0.12);
                    const osc = this.ctx.createOscillator(); const gain = this.ctx.createGain();
                    osc.type = 'sine'; osc.frequency.setValueAtTime(440 + (i*110), delay);
                    gain.gain.setValueAtTime(0.0001, delay); gain.gain.linearRampToValueAtTime(0.01, delay + 0.01); gain.gain.linearRampToValueAtTime(0.0001, delay + 0.1);

                    const filter = this.ctx.createBiquadFilter(); filter.type = 'highpass'; filter.frequency.value = 1000;
                    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : this.ctx.createGain();
                    if(panner.pan) panner.pan.value = (i % 2 === 0) ? -0.8 : 0.8;

                    osc.connect(filter); filter.connect(gain); gain.connect(panner); panner.connect(dest);
                    osc.start(delay); osc.stop(delay + 0.1);
                }
            }
        } catch(e){}
    }
};
