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
    ><h2 style={{fontSize:30, fontWeight: 'bold', color:'#FF0200'}}>Mariages</h2>
      <p className="p-style">
        {
          "L’organisation d’un mariage est une étape cruciale dans la préparation\
        de ce grand événement. Cela commence par la définition d’une vision\
        commune entre les futurs mariés. Avant même de plonger dans les détails,\
        il est essentiel de discuter du style souhaité : un mariage intime ou\
        grandiose, en plein air ou dans une salle somptueuse, avec un thème\
        spécifique ou plutôt classique. Ces choix guideront toutes les décisions\
        à venir et permettront de créer une cérémonie à l'image des futurs\
        mariés, pleine d’émotions et de moments inoubliables."
        }
      </p>
      <p className="p-style">
        {
          "Le budget est également un élément central dans l’organisation d’un\
        mariage. Établir une enveloppe financière réaliste permet d’éviter les\
        mauvaises surprises et de mieux répartir les dépenses. Les postes de\
        dépense les plus importants incluent souvent la location de la salle, le\
        traiteur, la robe de mariée, les costumes, et bien sûr, la photographie\
        ou la vidéo pour immortaliser ce moment. Chaque couple doit réfléchir à\
        ses priorités et définir les éléments sur lesquels il est prêt à\
        investir davantage, tout en tenant compte des petits imprévus qui\
        peuvent survenir."
        }
      </p>

      <p className="p-style">
        {
          "Le choix de la date est un autre aspect déterminant dans la\
        planification. En fonction de la saison, les disponibilités des lieux\
        peuvent varier, tout comme les tarifs. Certains couples choisissent une\
        date symbolique, comme l'anniversaire de leur rencontre, tandis que\
        d’autres privilégient une période où tous les proches seront\
        disponibles. Une fois la date fixée, il devient plus facile de réserver\
        les prestataires et d’envoyer les invitations dans les délais adéquats."
        }
      </p>
      <p className="p-style">
        {
          "La sélection des prestataires est une tâche clé qui demande du temps et\
        de la recherche. Du traiteur à la décoration florale, en passant par le\
        DJ ou le groupe de musique, chacun joue un rôle essentiel dans le bon\
        déroulement de la journée. Il est souvent conseillé de rencontrer\
        plusieurs prestataires avant de faire un choix définitif, pour s’assurer\
        qu’ils partagent la vision du mariage et qu’ils sauront la concrétiser\
        avec professionnalisme. Les témoignages d’autres mariés peuvent\
        également être précieux pour faire un choix éclairé."
        }
      </p>
      <p className="p-style">
        {
          "La gestion des invités est un autre défi de taille. Élaborer la liste\
        d’invités peut être source de discussions, car il faut souvent jongler\
        entre les envies de partager ce moment avec un maximum de proches et les\
        contraintes de place ou de budget. Ensuite vient la création et l’envoi\
        des faire-part, qui doivent être envoyés bien à l’avance pour que chacun\
        puisse réserver la date. Le suivi des réponses est également crucial\
        pour anticiper le nombre de convives et ajuster les réservations de\
        repas, d'hébergement, etc."
        }
      </p>
      <p className="p-style">
        {
          "La décoration du mariage représente l'une des parties les plus créatives\
        de l'organisation. Qu'il s'agisse d'une cérémonie en extérieur avec des\
        guirlandes lumineuses et des bouquets champêtres, ou d'une salle ornée\
        de chandeliers et de nappes en satin, le décor doit refléter le style et\
        les goûts des mariés. Il est souvent utile de faire appel à un\
        décorateur professionnel pour coordonner les différents éléments et\
        s'assurer que tout est harmonieux, depuis les centres de table jusqu’au\
        choix des couleurs."
        }
      </p>
      <p className="p-style">
        {
          "Enfin, l'organisation d'un mariage ne serait pas complète sans la\
        préparation de la cérémonie elle-même. Qu’elle soit religieuse, civile\
        ou symbolique, il est important de réfléchir au déroulement de cette\
        étape clé, aux vœux échangés, et à l’ambiance qui en découlera. Certains\
        couples choisissent des rituels symboliques ou des lectures qui leur\
        tiennent à cœur, tandis que d’autres optent pour une cérémonie plus\
        traditionnelle. Dans tous les cas, l’émotion sera au rendez-vous,\
        faisant de ce moment l’un des plus marquants de la journée."
        }
      </p>
      <style jsx>{`
        .container-style {
          display: flex;
          // margin-left: 15%;
          // margin-right: 15%;
          // width: 70%;
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
