import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/carousel";
import BlocLocationVehicules from "./bloc-location-vehicules";
import BlocTraiteurs from "./bloc-traiteurs";
import BlocBeaute from "./bloc-beaute";
import BlocDecorateursSalles from "./bloc-decorateurs-salles";
import { Inter, Roboto, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const montserrat_bold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={montserrat.className}>
      <Carousel />
      <div className="paragraphes">
        <div style={{ border: "1px #EDB8A6 solid" }} className={`paragraphe_1`}>
          {"Ousmane Bah, Aliyou Binaté, Cheick Faye, pour les citer dans l&#39;ordre alpabétique\
          de leur nom de famille, sont trois ingénieurs informatiques qui ont\
          apporté leur savoir-faire technique pour créer des outils performants\
          et intuitifs lors de la mise en place de cette plateforme. \
          Passionnés par les nouvelles technologies et notamment par le monde du\
          Devops, ils ont su donner vie à ce site web ergonomique, rapide, et\
          doté d’un algorithme de recherche puissant pour permettre aux\
          utilisateurs de trouver rapidement les prestataires correspondant à\
          leurs besoins. \
          Grâce à leurs compétences, la plateforme est capable de filtrer les\
          prestataires par catégorie (photographes, traiteurs, décorateurs,\
          etc.), par région et par budget, tout en offrant une interface fluide."}
        </div>
      </div>
      <div className="main_blocs_prestataires_container">
        <div className="blocs_prestataires_image_wrapper_container">
        {/* <div className={`blocs_prestataires_image_wrapper_container`}> */}
          <div className="bloc_prestataire_image_wrapper">
          {/* <div className={`bloc_prestataire_image_wrapper`}> */}
            <h2 className={`${montserrat_bold.className}`}>Beauté</h2>
            <Image
              src="/presta-events-images/beaute.jpg"
              alt="beauté"
              width={192}
              height={192}
              className="image_style"
              priority
            />
          </div>
          <div className="bloc_prestataire_image_wrapper">
          {/* <div className={`bloc_prestataire_image_wrapper`}> */}
            <h2 className={`${montserrat_bold.className}`}>
              Location de Véhicules
            </h2>
            <Image
              src="/presta-events-images/location-vehicules.jpg"
              alt="location véhicules"
              width={192}
              height={144}
              className="image_style"
              priority
            />
          </div>
          <div className={`bloc_prestataire_image_wrapper`}>
            <h2 className={`${montserrat_bold.className}`}>Taiteurs</h2>
            <Image
              src="/presta-events-images/traiteurs.jpg"
              alt="traiteurs"
              width={192}
              height={240}
              className="image_style"
              priority
            />
          </div>
          <div className={`bloc_prestataire_image_wrapper`}>
            <h2 className={`${montserrat_bold.className}`}>
              Décoration de Salles
            </h2>
            <Image
              src="/presta-events-images/decoration.jpg"
              alt="décoration"
              width={192}
              height={128}
              className="image_style"
              priority
            />
          </div>
        </div>
      </div>
      <div className="paragraphes">
        <div style={{ border: "1px #EDB8A6 solid" }} className="paragraphe_1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          commodi distinctio, est dicta similique nostrum ab nemo vero minus
          voluptatem dolore temporibus sit dolores atque deserunt perferendis
          neque ipsum assumenda.
        </div>
      </div>
      <div className="paragraphes">
        <div style={{ border: "1px #EDB8A6 solid" }} className="paragraphe_1">
          Quos dolore laborum quibusdam iusto perferendis soluta animi, ullam
          exercitationem. Porro cumque a rerum saepe iste magnam officiis ea
          minus voluptates architecto accusantium rem, nam aliquid quo qui quos
          dicta officia facilis explicabo. Expedita accusantium molestiae quam
          natus ab sunt repellendus dolores, tempora tempore fugiat ut a?
          Numquam animi repellendus assumenda, soluta necessitatibus aspernatur
          accusantium id repudiandae dolor provident veniam unde aliquid illum
          eligendi possimus modi, quis, laboriosam perspiciatis. Quis voluptas,
          aliquid cupiditate fugiat magni repellat ut ab aperiam, ea accusantium
          quasi placeat possimus facilis recusandae, totam delectus? Blanditiis,
          cum voluptatem distinctio illo aut adipisci, inventore nostrum eos,
          similique commodi voluptate culpa dolorem unde vitae explicabo ipsam
          error facilis deleniti veniam labore ad impedit sunt? Optio,
          repudiandae maxime. Veritatis recusandae sunt, esse libero voluptas
          quisquam accusamus molestias eligendi qui sit, distinctio fuga,
          mollitia iste fugit dicta velit reprehenderit ducimus excepturi iure.
        </div>
      </div>
    </main>
  );
}
