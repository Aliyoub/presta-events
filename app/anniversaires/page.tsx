"use client";


import Image from "next/image";

  export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
      className="container-style"
    > <h2 style={{fontSize:30, fontWeight: 'bold', color:'#FF0200'}}>Anniversaires</h2>
      <p className="p-style">
        {"L’organisation d’un anniversaire demande une bonne dose de planification\
        pour garantir une célébration réussie. Tout commence par la définition\
        du type de fête souhaitée. S'agit-il d'une grande fête réunissant\
        famille et amis ou d'un événement plus intime avec quelques proches?\
        Les goûts de la personne fêtée sont également un point essentiel à\
        prendre en compte pour personnaliser l'événement : une soirée dansante,\
        un dîner raffiné ou une sortie à thème peuvent être envisagés en\
        fonction de ses préférences. Ce choix de base influence le reste de\
        l’organisation."}
      </p>
      <p className="p-style">
        {"Le choix du lieu est crucial pour accueillir tous les invités dans les\
        meilleures conditions. Certains préféreront organiser la fête à\
        domicile, surtout si l’ambiance est conviviale et familiale. D’autres\
        opteront pour une salle de réception, un restaurant ou même un espace en\
        plein air, selon la saison. Le lieu doit être adapté au nombre\
        d’invités, mais aussi à l’atmosphère que l’on souhaite créer. Une salle\
        élégante conviendra à une fête formelle, tandis qu’un jardin ou une\
        terrasse sera idéal pour une célébration décontractée et festive."}
      </p>

      <p className="p-style">
        {"Le thème de l’anniversaire est souvent un élément phare de\
        l’organisation. Il permet de donner une direction claire à la décoration\
        et aux activités prévues. Que ce soit un thème basé sur une décennie\
        spécifique (années 80, années 90), sur une passion de la personne\
        (cinéma, voyage, super-héros) ou simplement sur une couleur ou une\
        ambiance (tropicale, chic, bohème), le thème doit refléter la\
        personnalité de l’hôte. Une fois le thème choisi, les invitations, les\
        tenues, et même le gâteau peuvent être adaptés pour créer une cohérence\
        visuelle et thématique."}
      </p>

      <p className="p-style">
        {"L’un des aspects les plus importants d’une fête d’anniversaire est la\
        gestion des invitations. La liste des invités doit être soigneusement\
        élaborée en tenant compte des relations proches et des affinités de la\
        personne célébrée. Les invitations peuvent être envoyées sous forme\
        physique, pour un côté plus traditionnel, ou numérique, pour plus de\
        praticité. Quel que soit le format, elles doivent préciser les\
        informations essentielles comme la date, l'heure, le lieu et\
        éventuellement le thème, pour que chaque invité puisse se préparer\
        correctement."}
      </p>
      <p className="p-style">
        {"La décoration joue un rôle central dans l’ambiance générale de la fête.\
        Que ce soit pour un anniversaire enfantin avec des ballons multicolores\
        et des personnages de dessins animés, ou pour un anniversaire adulte\
        avec des fleurs, des lumières tamisées et des éléments plus\
        sophistiqués, la décoration doit capter l’esprit de la fête. Les tables,\
        le buffet, et même l’espace où se déroulera la soirée dansante, si\
        prévu, doivent être soignés. On peut aussi personnaliser l’espace avec\
        des photos ou des objets qui rappellent des moments marquants de la vie\
        de la personne fêtée."}
      </p>
      <p className="p-style">
        {"Les animations sont un élément clé pour garantir que les invités passent\
        un bon moment. Selon le type d'anniversaire, cela peut aller des jeux\
        traditionnels pour enfants, à des karaokés, des jeux de société ou des\
        photobooths pour des invités plus âgés. Il est aussi possible d’engager\
        des professionnels, comme un DJ, un groupe de musique ou un magicien,\
        pour animer la soirée et créer des moments mémorables. L’important est\
        de s’assurer que les animations sont adaptées au public et qu’elles\
        reflètent l’esprit de la fête."}
      </p>
      <p className="p-style">
        {"Enfin, le choix du gâteau d’anniversaire est une étape incontournable.\
        Il ne s’agit pas seulement d’un dessert, mais d’un élément central de la\
        célébration. Le gâteau doit être à la hauteur de l’événement, tant par\
        son goût que par son apparence. Il peut être personnalisé en fonction\
        des goûts de la personne fêtée, que ce soit en termes de saveurs\
        (chocolat, fruits, vanille) ou de design (avec des motifs, des\
        figurines, ou même en forme d’objet symbolique). Le moment du gâteau,\
        souvent accompagné d'une chanson d’anniversaire, est l'un des plus\
        attendus, et doit être un véritable point fort de la soirée."}
      </p>
      <style jsx>{`
        .container-style {
          display: flex;
          // margin-left:5%;
          // margin-right:5%;
          // width: 90%;
          flex-direction: column;
          alignitems: center;
          padding-top: 30px;
          // border: 1px solid red;
        }
        .p-style {
          // width: 55%;
          padding: 20px;
          margin-bottom: 10px;
          border: 1px solid pink;
          border-radius: 10px;
          text-align: justify;
          cursor: pointer;
          transition: transform 0.6s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
