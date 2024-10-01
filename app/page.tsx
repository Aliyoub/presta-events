import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/carousel";
import BlocLocationVehicules from "./bloc-location-vehicules";
import BlocTraiteurs from "./bloc-traiteurs";
import BlocBeaute from "./bloc-beaute";
import BlocDecorateursSalles from "./bloc-decorateurs-salles";
import { Inter, Roboto, Montserrat } from "next/font/google";
import Footer from "@/components/footer";

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
      <div className="authors">
        <div>
          {/* <div style={{ border: "1px #EDB8A6 solid" }} className={`paragraphe_1`}> */}
          {
            "Ousmane Bah, Aliyou Binaté, Cheick Faye, pour les citer dans l'ordre alpabétique\
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
          etc.), par région et par budget, tout en offrant une interface fluide."
          }
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
      <div
        // style={{
        //   width: "80%",
        //   marginRight: "10%",
        //   marginLeft: "10%",
        //   marginTop: 30,
        //   // backgroundColor: "#DEDEDE",
        // }}
        className="prestataires"
      >
        {/* </div> */}
        <div className="paragraphes">
          <h2>
            Gastronomie
          </h2>
          <div>
            {
              "Les traiteurs jouent un rôle clé dans la réussite d’un événement, \
              qu'il s'agisse d'un mariage, d'une réception d'entreprise ou d'une soirée privée. Gastronomie Événementielle, un traiteur renommé, met un point d'honneur à sublimer chaque occasion grâce à une cuisine raffinée, élaborée à partir de produits frais et\
               locaux. Leurs chefs expérimentés collaborent étroitement avec les clients pour personnaliser chaque menu, afin qu'il reflète les goûts et les exigences de l'événement. Que ce soit pour un cocktail dinatoire ou un repas gastronomique à plusieurs services, ils garantissent une expérience culinaire mémorable."
            }
          </div>
          <div>
            {
              "L’innovation et la présentation sont au cœur de leur service.\
               Gastronomie Événementielle excelle dans l’art de sublimer les mets, avec des présentations visuelles époustouflantes. Chaque plat est conçu comme une œuvre d’art, alliant couleurs, textures et saveurs uniques. Ce souci du détail fait de leurs prestations \
              un véritable spectacle pour les convives, créant un impact visuel à la hauteur de l’expérience gustative."
            }
          </div>
          <div>
            {
              "En plus de leur excellence culinaire, ils offrent des services complets,\
             incluant la location de matériel, les équipes de service et la décoration de tables. Leur flexibilité leur permet de s'adapter à différents styles d'événements, qu'ils soient classiques ou modernes. Leur engagement à offrir un service personnalisé \
            et de qualité fait d'eux un choix incontournable pour toute organisation d'événement réussi."
            }
          </div>
        </div>
        <div className="paragraphes">
          <h2>
            Les Photographes et Vidéastes
          </h2>
          <div>
            {
              "Pour immortaliser les plus beaux moments d’un événement, les photographes et vidéastes sont des prestataires indispensables. Capture d’Émotions se distingue par son approche artistique et moderne de la photographie événementielle. Spécialisée dans les mariages, cette équipe de photographes met tout en œuvre pour saisir chaque instant important avec spontanéité et élégance. Leur style mêle des techniques de reportage à des prises de vue plus posées, permettant de capturer des moments authentiques et intemporels."
            }
          </div>
          <div>
            {
              "Les vidéastes de Capture d’Émotions apportent une autre dimension à la couverture événementielle. Leur objectif est de raconter une histoire à travers la vidéo, en s’inspirant des émotions des participants et de l’ambiance générale. Leur savoir-faire technique leur permet de créer des films dynamiques, élégants et touchants, qui retracent parfaitement le déroulement de la journée. Le montage vidéo est soigneusement réalisé, combinant les meilleures séquences pour produire un résultat aussi professionnel qu'émotionnel."
            }
          </div>
          <div>
            {
              "En plus de leur sens artistique, ils savent se faire discrets et professionnels. Que ce soit un grand mariage ou une soirée d’entreprise, leur capacité à interagir avec les invités tout en restant invisibles garantit des prises de vue naturelles et réussies. Leurs clients repartent toujours avec des souvenirs gravés dans le temps, prêts à être partagés et revécus encore et encore."
            }
          </div>
        </div>

        <div className="paragraphes">
          <h2>
            Les Décorateurs et Scénographes
          </h2>
          <div>
            {
              "Un événement réussi repose aussi sur l’atmosphère que l’on parvient à créer, et c’est là que les décorateurs entrent en scène. Art & Scène, une agence de décoration événementielle, est spécialisée dans la création d’ambiances sur mesure pour tout type d’événements. De la conception du design jusqu’à la mise en place le jour J, ils transforment les espaces selon les souhaits et les goûts des clients. Que ce soit un mariage champêtre, une fête glamour ou un gala d’entreprise, chaque détail est pensé pour rendre l’atmosphère unique et immersive."
            }
          </div>

          <div>
            {
              "Leur approche repose sur une écoute attentive des besoins et des attentes des clients. Art & Scène s’inspire des tendances actuelles, mais sait également intégrer des touches personnalisées, afin que chaque projet soit unique. Leur expertise en matière de couleurs, de textures, d'éclairage et de mise en scène garantit un résultat visuellement harmonieux. Ils travaillent aussi bien en intérieur qu’en extérieur, et sont capables de gérer des installations complexes pour rendre n’importe quel lieu spectaculaire."
            }
          </div>
          <div>
            {
              "Leur service ne s’arrête pas à la simple décoration. Ils proposent également des scénographies complètes qui vont au-delà de l'esthétique, en intégrant des concepts interactifs et des expériences immersives. Leur équipe de décorateurs, designers et artisans est capable de créer des espaces qui racontent une histoire et plongent les invités dans un univers à part entière. Avec Art & Scène, chaque événement devient une véritable œuvre d’art, mémorable et inoubliable."
            }
          </div>
        </div>
      </div>

      <Footer />
      <style>
        {`
        // .authors {
        // width: 95%; margin-left: 2.5%; margin-top: 30px;
        // transition: transform 0.6s ease;
        // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        // padding: 20px;
        // margin-bottom: 30px;
        // // width: 73%;
        // border-radius: 10px;
        // }
        // .prestataires{
        //   width: 95%;
        //   margin-right: 2.5%;
        //   margin-left: 2.5%;
        //   margin-top: 30px;
        // }
        //   .paragraphes {
        //     display: flex;
        //     flex-direction: column;
        //     align-items: center;
        //     width: 100%;
        //     margin-top: 10px;
        //     // border: 1px solid red
        //   }
        //   .paragraphes div{
        //   display: flex;
        //   padding: 20px;
        //   margin-bottom: 30px;
        //   // width: 73%;
        //   border-radius: 10px;
        //   color: #5d5a5a;
        //   transition: transform 0.6s ease;
        //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        //   }
          `}
      </style>
    </main>
  );
}
