import React from "react";

class BasicsForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

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
                <input type="file"></input>

                <p>
                  This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. Here are some tips.
                </p>
              </div>

            </div>

            <div className="question-box">

              <div className="question">
                <p>Project title</p>
              </div>

              <div className="answer">
                <input type="text"></input>
                <p>Our search looks through words from your project title and blurb, so make them clear and descriptive of what you’re making. Your profile name will be searchable, too.</p>

                <p>These words will help people find your project, so choose them wisely! Your name will be searchable too.</p>
              </div>

            </div>

            <div className="question-box">
              <div className="question">
                <p>Short blurb</p>
              </div>

              <div className="answer">
                <textarea></textarea>
                <p>Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making.</p>
              </div>
            </div>

            <div className="question-box">
              <div className="question">
                <p>Category</p>
              </div>

              <div className="answer">
                <select>
                  <option>Art</option>
                  <option>Comics</option>
                  <option>Crafts</option>
                  <option>Dance</option>
                </select>
              </div>
            </div>

            <div className="question-box">
              <div className="question">
                <p>End date</p>
              </div>

              <div className="answer">
                <input type="date"></input>
                <p>Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch.</p>
              </div>
            </div>

            <div className="question-box">
              <div className="question">
                <p>Funding goal</p>
              </div>

              <div className="answer">
                <input type="text"></input>
                <p>Funding on Kickstarter is all-or-nothing. It’s okay to raise more than your goal, but if your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project and send out rewards, and include a buffer for payments processing fees.</p>

                <p>If your project is successfully funded, the following fees will be collected from your funding total: Kickstarter’s 5% fee, and payment processing fees (between 3% and 5%). If funding isn’t successful, there are no fees.</p>
              </div>
            </div>

          </div>






          <div className="basics-sidebar">
            <p>
            </p>
          </div>
        </div>

      </div>
    );
  }

}

export default BasicsForm;
