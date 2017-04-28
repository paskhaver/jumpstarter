import React from "react";
import SaveBar from "./save_bar";

class BasicsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      title: "",
      blurb: "",
      category: "Art",
      end_date: "",
      funding_goal: ""
    };
  }

  componentDidMount() {
    const projectId = this.props.params.id;
    this.props.fetchProject(projectId)
              .then(response => {
                this.setState(response);
              });
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }


  render() {

    debugger
    return (

      <div>

        <div className="basics">

          <div className="basics-header">
            <h2>Let’s get started.</h2>
            <p>Make a great first impression with your project’s title and image, and set your funding goal, campaign duration, and project category.</p>
          </div>

          <div className="basics-form">
            <div className="basics-main-content">

              <div className="question-box">
                <div className="question">
                  <p>Project image</p>
                </div>

                <div className="answer">
                  <input type="file" />
                  <p>This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. Here are some tips.</p>
                </div>
              </div>

              <div className="question-box">
                <div className="question">
                  <p>Project title</p>
                </div>

                <div className="answer">
                  <input type="text"
                         onChange={this.handleEdit("title")}
                         value={this.state.title}
                         />

                  <p>Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.</p>
                  <p>These words will help people find your project, so choose them wisely! Your name will be searchable too.</p>
                </div>
              </div>

              <div className="question-box">
                <div className="question">
                  <p>Short blurb</p>
                </div>

                <div className="answer">
                  <textarea
                      onChange={this.handleEdit("blurb")}
                      value={this.state.blurb}>
                  </textarea>
                  <p>Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.</p>
                </div>
              </div>

              <div className="question-box">
                <div className="question">
                  <p>Category</p>
                </div>

                <div className="answer">
                  <select onChange={this.handleEdit("category")}
                          value={this.state.category} >
                    <option value={"Art"}>Art</option>
                    <option value={"Comics"}>Comics</option>
                    <option value={"Crafts"}>Crafts</option>
                    <option value={"Dance"}>Dance</option>
                  </select>
                </div>
              </div>

              <div className="question-box">
                <div className="question">
                  <p>End date</p>
                </div>

                <div className="answer">
                  <input type="date"
                         onChange={this.handleEdit("end_date")}
                         value={this.state.end_date}>
                  </input>
                  <p>
                    Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.
                    </p>
                </div>
              </div>

              <div className="question-box">
                <div className="question">
                  <p>Funding goal</p>
                </div>

                <div className="answer">
                  <input type="text"
                         onChange={this.handleEdit("funding_goal")}
                         value={this.state.funding_goal} >
                  </input>
                  <p>
                    Funding on Kickstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.</p>

                  <p>
                    If your project is successfully funded, the following fees will be collected from your funding total: Kickstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.
                  </p>

                </div>
              </div>

            </div>

            <div className="basics-sidebar">
              <h5>Need advice?</h5>
              <p>Ahoy handsomely scuttle tender reef sails walk the plank warp brigantine Nelsons folly sutler. Cat o'nine tails tackle scurvy gun rum ye flogging sutler maroon hang the jib. Jack Ketch matey Jolly Roger warp chase prow Blimey bilge crow's nest transom.</p>
              <p>Bring a spring upon her cable Nelsons folly fathom spanker pressgang spike ye quarter clap of thunder matey. Spanish Main long boat dance the hempen jig sloop heave down grog draft weigh anchor loaded to the gunwalls lugger. Quarter parrel furl sheet landlubber or just lubber trysail transom dance the hempen jig gangway cackle fruit.</p>
              <p>Scallywag stern bounty sheet measured fer yer chains parley American Main topmast Shiver me timbers list. Sloop line Privateer sutler lugger transom yardarm fore American Main chantey. Walk the plank splice the main brace Blimey me line mizzen fire ship scuppers log tackle.</p>
            </div>

          </div>

        </div>

      <SaveBar project={this.state} />
      </div>
    );
  }

}

export default BasicsForm;
