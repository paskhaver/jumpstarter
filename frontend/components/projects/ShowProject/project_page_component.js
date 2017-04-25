import React from "react";
import { Link, hashHistory } from 'react-router';
import YouTube from "react-youtube";
import RewardSidebarIndex from "./reward_sidebar_index";

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  // Semi-functional --- seems to be forcing a refresh
  // on occasional new project fetches

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {

      const projectId = nextProps.params.id;
      this.props.fetchProject(projectId)
                .then(() => {
                  const { title, category, residence, blurb } = this.props.currentProject;
                  this.setState({ title, category, residence, blurb});
                });
    }
  }

  componentDidMount() {
    const projectId = this.props.params.id;
    const project   = this.props.fetchProject(projectId);

    project.then(() => {
      const { title, category, residence, blurb } = this.props.currentProject;
      this.setState({ title, category, residence, blurb });
    });
  }

  videoOptions() {
    const videoOptions = {
        height: "100%",
        width: "100%",
        playerVars: {
          autoplay: 0
        }
      };

    return videoOptions;

  }

  render() {
    let rewards;
    if (this.props.currentProject) {
      rewards = this.props.currentProject.rewards;
    } else {
      rewards = [];
    }

    if (this.props.children) {
      return this.props.children;
    }

    return (

      <div className="project-page">
        <div className="above-the-fold">

          <header className="header">
            <div className="creator-info">
              <div className="creator-image"></div>
              <span>By Boris Paskhaver</span>
            </div>

            <div className="project-title">
              <h2>{this.state.title}</h2>
              <p>One of a kind sand-cast pieces, hand crafted in Kuwait.</p>
            </div>
          </header>

          <div className="primary-info">
            <div className="project-page-video">
              <YouTube
                videoId="MXKEccRiMeQ"
                onEnd={event => { event.target.pauseVideo(); }}
                opts={this.videoOptions()}
              />
            </div>

            <div className="fundraising-box">
              <span className="pledge-amount">$59,094</span>
              <span className="statistic-category">pledged of $100,000 goal</span>

              <span className="statistic">333</span>
              <span className="statistic-category">backers</span>

              <span className="statistic">36</span>
              <span className="statistic-category">days to go</span>

              <button>Back this Project</button>

              <div className="social-stuff">
                <div className="social-button">Remind Me</div>
                <div className="social-button">Share</div>
              </div>

              <p>
                All or nothing. This project will only be funded if it
                reaches its goal by Sun, May 28 2017 10:00 AM EDT.
              </p>

            </div>
          </div>
        </div>

        <div className="white-box">
          <div className="below-the-fold">

            <div className="description-container">
              <h3>About this Project</h3>

              <img src="https://ksr-ugc.imgix.net/assets/015/923/025/f35112cea6b5a8a216cdf13913937125_original.jpg?w=680&fit=max&v=1489943369&auto=format&q=92&s=37d4107b35e1a49c809cf34f4c745241" />

              <p>
                Dual Bowls are irreplaceable, one-of-a-kind castings made
                with an unexpected combination of two metals. You could
                say they are affordable art pieces, as well as functional
                objects, using unique sand-casting methods developed with
                Alwafi Foundry in Kuwait.
              </p>

              <p>
                Cum prefrontal cortex horribilem walking fornix dead resurgere brains de crazed limbic cortex optic nerve sepulcris creaturis, braaaaaiins zombie sicut hypothalamus de grave hippocampus feeding iride brainz et serpens. Pestilentia, pitiutary gland shaun ofthe optic gland dead scythe brains animated corpses spinal cord ipsa screams medulla. Pestilentia braynz est plague locus coeruleus haec decaying lateral geniculate nucleus ambulabat mortuos. Sicut breins zeder apathetic superior colliculus malus voodoo. Brains aenean a cerebellum dolor plan cerveau et terror braaaaaaiiiinssss soulless vulnerum cerebro contagium accedunt, cervello mortui iam thalamus vivam unlife. Qui berrains tardius moveri, basal ganglia brid eof prefrontal cortex reanimator sed fornix in magna brains copia sint limbic cortex terribiles undeath optic nerve legionis. Alii hypothalamus missing oculis brayns aliorum sicut hippocampus serpere crabs pitiutary gland nostram. Braynz putridi braindead optic gland odores kill substantia nigra and infect brains, aere implent spinal cord left four dead.
              </p>

              <p>
                Medulla lucio brains fulci tremor locus coeruleus est dark vivos lateral geniculate nucleus magna. Breins expansis creepy superior colliculus arm yof cerebellum darkness ulnis brains witchcraft missing cerveau carnem armis cerebro Kirkman Moore braaiiiinnns and Adlard cervello caeruleum in thalamus locis. Romero basal ganglia morbo brains Congress amarus prefrontal cortex in auras fornix. Nihil horum braaiins sagittis tincidunt, limbic cortex zombie slack-jawed optic nerve gelida survival breins portenta. The hypothalamus unleashed virus hippocampus est, et pitiutary gland iam zombie braynz mortui ambulabunt optic gland super terram substantia nigra. Souless mortuum braynz glassy-eyed oculos spinal cord attonitos indifferent medulla back zom brains bieapoc alypse locus coeruleus. An hoc lateral geniculate nucleus dead snow braaaiiiins sociopathic inciperesuperior colliculus Clairvius Narcisse cerebellum, an ante cerveau? Is bello brains mundi z?
              </p>

              <p>
                In Craven cerebro omni memoria cervello patriae zombieland breins clairvius narcisse thalamus religionis sunt sweet bread diri undead basal ganglia historiarum. Golums, brain zombies unrelenting et prefrontal cortex Raimi fascinati fornix beheading. Maleficia! Vel limbic cortex cemetery man braaiiins a modern optic nerve bursting eyeballs hypothalamus perhsaps morbi hippocampus. A terrenti Brains flesh contagium pitiutary gland. Forsitan deadgurl optic gland illud corpse braynz Apocalypsi, vel substantia nigra staggering malum spinal cord zomby poenae brains chainsaw zombi medulla horrifying fecimus locus coeruleus burial ground lateral geniculate nucleus. Indeflexus shotgun braaaiiinnnns coup de superior colliculus poudre monstra cerebellum per plateas cerveau currere. Fit brains de decay cerebro nostra carne cervello undead. Poenitentiam thalamus violent zom basal ganglia biehig hway braaiiinns agite RE:dead prefrontal cortex pœnitentiam! Vivens fornix mortua sunt brains apud nos limbic cortex night of optic nerve the living brain dead.
              </p>

              <p>
                Whyt zomby brains Ut fames hypothalamus after death hippocampus cerebro virus pitiutary gland enim carnis optic gland grusome, viscera substantia nigra et organa braaiiins viventium. Sicut spinal cord spargit virus medulla ad impetum, brayns qui supersumus locus coeruleus flesh eating. Lateral geniculate nucleus avium, brains guts, superior colliculus ghouls, unholy brain canum, fugere cerebellum ferae et brein infecti horrenda braiinnns monstra. Videmus twenty-eight cerveau deformis pale, cerebro horrenda daemonum brains. Panduntur brains cervello portae rotting thalamus inferi. Finis braaaiiins accedens walking basal ganglia deadsentio terrore prefrontal cortex perterritus et brains twen fornix tee ate limbic cortex daze leighter brains taedium wal optic nerve kingdead. The hypothalamus horror, monstra hippocampus epidemic significant braaaaiiins finem. Terror pitiutary gland brains sit optic gland unum viral substantia nigra superesse undead braynz medulla sentit, ut caro breins eaters maggots, locus coeruleus caule nobis. Brains
              </p>
            </div>

            <div className="pledge-container">
              <h3>Support this Project</h3>

            <RewardSidebarIndex rewards={rewards}/>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default ProjectPage;
