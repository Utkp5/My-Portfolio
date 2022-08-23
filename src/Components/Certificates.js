import { useState, React } from "react";
import './Certificates.css';

function Certificates() {
  const [card, setcard] = useState([
    {
      id: 1,
      Crtfct: require("../images/html.jpg"),
      CrtfctAbout:
        "This Certificate is all about my completion of HTML course where i had learnt what is html , its tags and attributes.",
    },
    {
      id: 2,
      Crtfct: require("../images/css.jpg"),
      CrtfctAbout:
        "This Certificate is all about my completion of CSS course where i had learnt what is css , its properties, flex, grid and transition etc.",
    },
    {
      id: 3,
      Crtfct: require("../images/javascript.jpg"),
      CrtfctAbout:
        "This Certificate is all about my completion of javascript course where i had learnt what is js , Dom how to manuplate class and id.",
    },
    {
      id: 4,
      Crtfct: require("../images/music.jpg"),
      CrtfctAbout:
        "This Certificate is all about my Participation in virtual Singing competition where i selected top 12 participants.",
    },
    {
      id: 5,
      Crtfct: require("../images/chess.jpg"),
      CrtfctAbout:
        "This Certificate is all about my Participation in inter-college virtual chess competition where i reached till semi finals",
    },
    {
      id: 6,
      Crtfct: require("../images/quiz.jpg"),
      CrtfctAbout:
        "This Certificate is all about my Participation in Online Quiz competition unfortunately not win.",
    },
  ]);

  return (
    <div className="achievements">
      <h3 className="achieve_h3">Achievements</h3>
      <div className="achieve_main">
      {
        card.map((certificate) => {
            return(
                <div className="cert_card">
                <img
                  src={certificate.Crtfct}
                  alt="Certificate"
                  id="cert_img1"
                />
                <p className="cert_1_p cert_p">{certificate.CrtfctAbout}</p>
              </div>
            )
        })
      }
      </div>
    </div>
  );
}

export default Certificates;
