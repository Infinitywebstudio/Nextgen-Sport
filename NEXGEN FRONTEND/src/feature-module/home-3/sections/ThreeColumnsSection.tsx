const ThreeColumnsSection = () => {
  return (
    <section className="three-columns-section">
      <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="three-columns-container">
        <div className="column-left">
          <div className="column-left-overlay">
            <h3 className="column-left-title">Profils vérifiés</h3>
            <p className="column-left-text">
              Chaque profil est contrôlé pour garantir sérieux et fiabilité.
            </p>
          </div>
        </div>
        <div className="column-right-top">
          <div className="column-right-top-content">
            <h4 className="column-right-top-title">Clients satisfaits</h4>
            <p className="column-right-top-stat">+95%</p>
          </div>
          <div className="column-right-top-image">
            <img src="/cherrydeck-oVWc3lehRz8-unsplash.jpg" alt="Clients satisfaits" />
          </div>
        </div>
        <div className="column-right-bottom">
          <div className="column-right-bottom-inner">
            <div className="liquidGlass-effect"></div>
            <div className="liquidGlass-tint"></div>
            <div className="liquidGlass-shine"></div>
            <div className="liquidGlass-content">
              <h4 className="glass-title">Disponibilité rapide</h4>
              <p className="glass-text">Prestation réalisée le même jour</p>
              <span className="glass-stat">&lt;24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnsSection;
