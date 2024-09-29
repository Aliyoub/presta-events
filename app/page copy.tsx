import Image from "next/image";
import Carousel from "../components/carousel";
import BlocLocationVehicules from "./bloc-location-vehicules";
import BlocTraiteurs from "./bloc-traiteurs";
import BlocBeaute from "./bloc-beaute";
import BlocDecorateursSalles from "./bloc-decorateurs-salles";

export default function Home() {
  return (
    <main className="border">
      <div className="border border-color-green my-1 mx-1">
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}

        <Carousel />
        <div className="flex flex-row items-center justify-around p-2">
          <BlocBeaute />
          <BlocLocationVehicules />
        </div>
        <div className="flex flex-row items-center justify-around p-2">
          <BlocTraiteurs />
          <BlocDecorateursSalles />
        </div>

        <div
          style={{
            flex: 1,
            border: 3,
            padding: 33,
            // alignItems: "center",
            // justifyContent: "center",
            borderColor: "gray",
            width: "100%",
            backgroundColor: "pink",
          }}
        >
          azerty
        </div>
      </div>
    </main>
  );
}
