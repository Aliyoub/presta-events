import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/carousel";
import BlocLocationVehicules from "./bloc-location-vehicules";
import BlocTraiteurs from "./bloc-traiteurs";
import BlocBeaute from "./bloc-beaute";
import BlocDecorateursSalles from "./bloc-decorateurs-salles";


export default function Home() {
  return (
    <main className="main_container">
      <Carousel />
      <div className="paragraphes">

          <div style={{ border: "1px #EDB8A6 solid" }} className="paragraphe_1">
          Quis voluptas, aliquid cupiditate fugiat magni repellat ut ab aperiam,
          ea accusantium quasi placeat possimus facilis recusandae, totam
          delectus? Blanditiis, cum voluptatem distinctio illo aut adipisci,
          inventore nostrum eos, similique commodi voluptate culpa dolorem unde
          vitae explicabo ipsam error facilis deleniti veniam labore ad impedit
          sunt? Optio, repudiandae maxime. Veritatis recusandae sunt, esse
          libero voluptas quisquam accusamus molestias eligendi qui sit,
          distinctio fuga, mollitia iste fugit dicta velit reprehenderit ducimus
          excepturi iure.
        </div>
      </div>
      <div className="border border-color-green my-10 mx-1">
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

        <div className="blocs_container">
          <div className="group_bloc">
            <BlocBeaute />
            <BlocLocationVehicules />
          </div>
        </div>
        <div className="blocs_container">
          <div className="group_bloc">
            <BlocTraiteurs />
            <BlocDecorateursSalles />
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
            minus voluptates architecto accusantium rem, nam aliquid quo qui
            quos dicta officia facilis explicabo. Expedita accusantium molestiae
            quam natus ab sunt repellendus dolores, tempora tempore fugiat ut a?
            Numquam animi repellendus assumenda, soluta necessitatibus
            aspernatur accusantium id repudiandae dolor provident veniam unde
            aliquid illum eligendi possimus modi, quis, laboriosam perspiciatis.
            Quis voluptas, aliquid cupiditate fugiat magni repellat ut ab
            aperiam, ea accusantium quasi placeat possimus facilis recusandae,
            totam delectus? Blanditiis, cum voluptatem distinctio illo aut
            adipisci, inventore nostrum eos, similique commodi voluptate culpa
            dolorem unde vitae explicabo ipsam error facilis deleniti veniam
            labore ad impedit sunt? Optio, repudiandae maxime. Veritatis
            recusandae sunt, esse libero voluptas quisquam accusamus molestias
            eligendi qui sit, distinctio fuga, mollitia iste fugit dicta velit
            reprehenderit ducimus excepturi iure.
          </div>
        </div>
      </div>
    </main>
  );
}
