import MainPagePicture from "../src/assets/image05.jpg";
import "./App.css";
import ParallaxComponent from "./components/ParallaxComponent";
import minnaeLogo from "./assets/png/image01.png";
import twoItem from "./assets/img/image07.jpg";
import dividerPict from "./assets/img/image02.jpg";
import InfoSection from "./components/InfoSection";
import SwiperComponent from "./components/SwiperComponent";

function App() {
  return (
    <div className="App">
      <ParallaxComponent imageUrl={MainPagePicture}>
        <div className="mainpage-center-text">
          <img
            id="mainPageLogo"
            className="fade-in-image"
            src={minnaeLogo}
            alt="logo"
          />
        </div>
      </ParallaxComponent>

      <InfoSection />

      <div className="center-container">
        <SwiperComponent title="Galéria" />
      </div>
      <ParallaxComponent imageUrl={twoItem}>
        Tisztán tartás: Nyissa ki a tisztító folyadékot tartalmazó üvegcsét! Az
        üvegcsét "Tisztító folyadék" felirattal láttuk el! Vegye ki a tisztító
        tégelyt a csomagolásból! Nyissa ki a tégelyt, majd alaposan öblítse ki
        tiszta vízzel, végül törölje szárazra! Az ékszer hatékony tisztítása
        érdekében adagoljon annyi tisztító folyadékot a tégelybe, hogy az
        ékszerét éppen ellepje! A kitöltött folyadék alkalmas többszöri
        tisztításra (maximum 5 alkalom/egy nap), de minden tisztítás előtt
        pótolni kell az elpárolgott folyadék mennyiséget. Mindig gondoskodjon
        arról, hogy a tisztító tégely teteje pontosan és szorosan záródjon!
        Amennyiben látható szennyeződés van az ékszeren, azt le kell róla
        törölni, majd helyezze a folyadékkal töltött tégelybe az ékszert. Hagyja
        ázni 2 percig, majd vegye ki a tégelyből! A folyadék pár másodperc alatt
        elpárolog róla. Az ékszer most készen áll a behelyezésre! Amennyiben
        jelenleg nem szeretné viselni az ékszert, helyezze szárazon a tároló
        tégelybe. Az ékszer viselése előtt és után mindig alaposan mosson fogat!
        A tökéletes szájhigiénia eléréséhez ajánlott fogselymet és
        fogköztisztító kefét is használni! Kérje fogorvosa vagy
        dentálhigiénikusa tanácsát az Ön számára legjobban megfelelő, egyedi
        szájhigiéniai rutin kialakításához! Évente látogasson el fogászati
        ellenőrzésre, mert minden fogászati probléma legjobb megoldása a
        megelőzés!
      </ParallaxComponent>

      <div className="content-red"></div>
    </div>
  );
}

export default App;
