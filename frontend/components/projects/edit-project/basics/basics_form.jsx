import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchProject } from "../../../../actions/project_actions";

import AJAXLoader from "./../../../ajax-loader/ajax_loader";
import BasicsHeader from "./basics_header";
import Question from "./question";
import BasicsSidebar from "./basics_sidebar";
import SaveBar from "./save_bar";

const mapStateToProps = state => ({
  project: state.project
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: projectId => { return dispatch(fetchProject(projectId)); }
  };
};

class BasicsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      project: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchProject(id)
              .then(project => {
                this.setState({ loading: false, project });
              });
  }

  handleEdit(field) {
    return event => {
      event.preventDefault();
      const project = Object.assign(this.state.project);
      project[field] = event.target.value;
      this.setState({ project });
    };
  }

  render() {
    if (this.state.loading) { return <AJAXLoader />; }

    const { title, description, blurb,
            category, end_date, funding_goal } = this.state.project;

    return (

      <div>
        <div className="basics">
          <BasicsHeader />

          <div className="basics-form">
            <div className="basics-main-content">
              <div className="question-box">

                <Question text={"Project title"} />

                <div className="answer">
                  <input type="text"
                         onChange={this.handleEdit("title")}
                         value={title}
                         />

                  <p>Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.</p>
                  <p>These words will help people find your project, so choose them wisely! Your name will be searchable too.</p>
                </div>
              </div>

              <div className="question-box">
                <Question text={"Description"} />

                <div className="answer">
                  <textarea
                      onChange={this.handleEdit("description")}
                      value={description}>
                  </textarea>
                  <p>This will appear immediately below the project image.</p>
                </div>
              </div>

              <div className="question-box">
                <Question text={"Short blurb"} />

                <div className="answer">
                  <textarea
                      onChange={this.handleEdit("blurb")}
                      value={blurb}>
                  </textarea>
                  <p>Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.</p>
                </div>
              </div>

              <div className="question-box">
                <Question text={"Category"} />

                <div className="answer">
                  <select onChange={this.handleEdit("category")}
                          value={category} >
                    <option value={"Art"}>Art</option>
                    <option value={"Comics"}>Comics</option>
                    <option value={"Crafts"}>Crafts</option>
                    <option value={"Dance"}>Dance</option>
                  </select>
                </div>
              </div>

              <div className="question-box">
                <Question text={"End date"} />

                <div className="answer">
                  <input type="date"
                         onChange={this.handleEdit("end_date")}
                         value={end_date}>
                  </input>
                  <p>Projects with shorter durations have higher success
                     rates. You won’t be able to adjust your duration
                     after you launch.</p>
                </div>
              </div>

              <div className="question-box">
                <Question text={"Funding goal"} />

                <div className="answer">
                  <input type="text"
                         onChange={this.handleEdit("funding_goal")}
                         value={funding_goal}>
                  </input>
                  <p>
                    Funding on Jumpstarter is all-or-nothing. It’s okay
                    to raise more than your goal, but if your goal isn’t
                   met, no money will be collected. Your goal should
                   reflect the minimum amount of funds you need to
                   complete your project and send out rewards, and
                   include a buffer for payments processing fees.
                 </p>

                  <p>
                    If your project is successfully funded, the following
                    fees will be collected from your funding total:
                    Jumpstarter’s 5% fee, and payment processing fees
                    (between 3% and 5%). If funding isn’t successful,
                    there are no fees.
                  </p>

                </div>
              </div>

            </div>

            <BasicsSidebar />

          </div>

        </div>

      <SaveBar project={this.state.project} />
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicsForm));
