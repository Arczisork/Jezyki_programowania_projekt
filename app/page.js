
import ImageSlideshow from "./components/images/image-slideshow";
import classes from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>

        <div className={classes.hero}>
          <h1>Odkryj następny poziom smacznego jedzenia!</h1>
          <p>Dołącz i dziel sie smakiem na całym świecie.</p>
          <div className={classes.cta}>
            <Link href="/community">Dołącz do naszj społeczności!</Link>
            <Link href="/meals">Odkryj smaki</Link>
          </div>
        </div>
      </header>

      <main className={classes.main}>
        <section className={classes.section}>
          <h2>Sprawdź jak to działa</h2>
          <p>Doświadczyliśmy czystego smaku. Test kolacji w ciemności
Pierwsza reakcja - nieopanowany śmiech. Czyżby stres? Może za dużo powiedziane, ale dreszczyk emocji na pewno. Mam chwycić kelnerkę uzbrojoną w noktowizor za ramię, moja towarzyszka ma chwycić za moje i tak „gęsiego” wejdziemy na salę, przebijając się przez kompletną ciemność.</p>
        </section>

        <section className={classes.section}>
          <h2>Dlaczego chcesz więcej?</h2>
          <p>Padają słowa: „ Tu jest kant stołu, tu krzesło. Tu, po lewej stronie sztućce.” I to by było na tyle.

Zaczyna się osobliwy spektakl. Muzyka na żywo, wjeżdżają przystawki. Orientuję się tylko po czerwonym punkciku migającym na sali, ze coś, ktoś się zbliża.

Dwie rzeczy uderzają mnie najbardziej. Pierwsza: przemożna chęć jedzenia palcami. Niewprawne posługiwanie się widelcem powoduje, że nie wiem jakiej wielkości kęsy wkładam sobie do ust.

Druga: brak orientacji przestrzennej. Na końcu kolacji, kiedy spada zasłona ciemności jestem zaskoczona, że pomieszczenie jest 3 razy mniejsze niż mi się wydawało, układ stolików inny niż sobie wyobrażałam. Nawet wielkość talerza wydaje mi się abstrakcyjna. I tu pojawia się kolejne pragnienie: ach, mieć tak zmysł echolokacji!</p>
        </section>
      </main>
    </>
  );
}

