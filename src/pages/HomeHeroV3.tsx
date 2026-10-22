import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeHeroV3: React.FC = () => {
  const stageRef = useRef<HTMLElement>(null);
  const filmRef = useRef<HTMLVideoElement>(null);
  const brandRef = useRef<HTMLElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const shockRef = useRef<HTMLDivElement>(null);

  const [skipText, setSkipText] = useState('Saltar intro ↗');
  const revealTimerRef = useRef<NodeJS.Timeout | null>(null);
  const doneRef = useRef(false);

  const reveal = (skip = false) => {
    if (doneRef.current) return;
    doneRef.current = true;

    if (filmRef.current) {
      filmRef.current.pause();
    }

    // El impacto ocurre inmediatamente al terminar el vídeo; después, 500 ms de pausa.
    if (!skip && stageRef.current && flashRef.current && shockRef.current) {
      stageRef.current.classList.add('impact', 'shake');
      flashRef.current.classList.remove('fire');
      shockRef.current.classList.remove('fire');
      void flashRef.current.offsetWidth; // Trigger reflow
      flashRef.current.classList.add('fire');
      shockRef.current.classList.add('fire');

      setTimeout(() => {
        stageRef.current?.classList.remove('shake');
      }, 380);
    }

    revealTimerRef.current = setTimeout(() => {
      brandRef.current?.classList.add('visible');
      stageRef.current?.classList.add('done');
    }, skip ? 0 : 500);
  };

  const handleReplay = () => {
    if (revealTimerRef.current) {
      clearTimeout(revealTimerRef.current);
    }
    doneRef.current = false;

    if (brandRef.current) brandRef.current.classList.remove('visible');
    if (stageRef.current) stageRef.current.classList.remove('done', 'impact', 'shake');
    if (flashRef.current) flashRef.current.classList.remove('fire');
    if (shockRef.current) shockRef.current.classList.remove('fire');

    if (filmRef.current) {
      filmRef.current.currentTime = 0;
      filmRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    const film = filmRef.current;
    if (!film) return;

    const onEnded = () => reveal(false);
    const onError = () => reveal(true);

    film.addEventListener('ended', onEnded);
    film.addEventListener('error', onError);

    // Intentar autoreproducción
    film.play().catch(() => {
      // Si el navegador bloquea autoplay, ofrecer acceso directo
      setSkipText('Entrar →');
    });

    return () => {
      film.removeEventListener('ended', onEnded);
      film.removeEventListener('error', onError);
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
    };
  }, []);

  return (
    <div className="v3-root">
      <main id="stage" ref={stageRef}>
        <video
          id="film"
          ref={filmRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="./assets/media/bailaora-poster.png"
        >
          <source src="./assets/media/bailaora.mp4" type="video/mp4" />
        </video>

        <div id="shade"></div>
        <div className="flash" id="flash" ref={flashRef}></div>
        <div className="shock" id="shock" ref={shockRef}></div>

        <section className="brand" id="brand" ref={brandRef}>
          <img src="./assets/media/logo.png" alt="Emblema original Gaditanísima" />
          <h1>Gaditanísima</h1>
          <p className="sub">Un rincón del sur en Bilbao</p>
          <div className="orn"></div>

          <nav aria-label="Navegación principal" className="v3-nav">
            <Link to="/carta">La carta</Link>
            <Link to="/nuestra-esencia">Nuestra esencia</Link>
            <Link to="/el-local">El local</Link>
            <Link to="/visitanos">Visítanos</Link>
          </nav>

          <div className="v3-address address">Egaña 3 · Bilbao</div>
        </section>
      </main>

      <button id="skip" onClick={() => reveal(true)}>
        {skipText}
      </button>

      <button id="replay" onClick={handleReplay}>
        ↺ Ver intro
      </button>
    </div>
  );
};
