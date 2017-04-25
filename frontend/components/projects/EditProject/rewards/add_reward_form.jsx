import React from "react";
import { connect } from "react-redux";
import SaveBar from "./../mainPage/save_bar";

class AddRewardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "", pledge_amount: "", description: "",
      delivery_date: "", limit_availability: ""
    };
  }

  render() {
    return (
      <div>
        <div className="rewards-tab">

          <div className="rewards-header">
            <h2>Set your rewards and shipping costs.</h2>
            <p>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</p>
          </div>

          <div className="rewards-form">

            <div className="rewards-main-content">




            </div>

            <div className="rewards-sidebar">

              <h5>What to offer</h5>



              <p>
                Bonbon candy chupa chups bear claw icing gingerbread candy canes. Jujubes donut jujubes powder jelly beans lollipop chocolate bar tart. Sweet jelly-o chupa chups apple pie cupcake icing dessert. Cheesecake cookie jelly beans wafer pastry. Pastry gummies oat cake jujubes chocolate powder. Lemon drops sesame snaps marzipan biscuit tiramisu muffin brownie. Halvah danish pastry marzipan gingerbread. Gummies donut gummies muffin apple pie sesame snaps chocolate apple pie. Jelly-o dessert halvah ice cream lollipop biscuit sweet. Gingerbread sweet jujubes marzipan pastry donut candy oat cake carrot cake. Dessert candy marshmallow wafer biscuit. Croissant gummi bears topping. Marshmallow pastry liquorice cake cupcake croissant.
              </p>

             <p>
              Sweet roll gummi bears croissant cookie gummi bears jelly beans. Jelly-o fruitcake tootsie roll. Topping soufflé cupcake. Lollipop cake liquorice danish cookie. Dragée gummies chocolate bar chocolate cake cake jujubes apple pie marzipan dragée. Cake biscuit chocolate cake donut lollipop sweet roll biscuit. Jujubes dragée powder cake biscuit chocolate jelly tiramisu. Tootsie roll oat cake gummies liquorice. Bear claw apple pie gingerbread dragée. Lemon drops carrot cake halvah apple pie lollipop brownie bear claw sweet roll. Pastry biscuit dragée croissant marzipan chocolate bar candy canes jelly-o. Toffee chocolate cake cupcake tootsie roll marshmallow cheesecake jelly marshmallow danish.
            </p>


            <p>
              Gummi bears jelly biscuit candy canes carrot cake gummi bears bonbon cheesecake candy canes. Lemon drops chocolate cake chupa chups. Toffee cake jelly-o. Sugar plum sesame snaps soufflé ice cream tart cotton candy lollipop chocolate bar. Sweet roll jelly halvah jelly dessert toffee bonbon cookie. Candy canes cake pastry dessert jujubes jelly beans carrot cake bonbon jelly beans. Pie toffee pie tootsie roll pudding pastry powder powder. Jelly beans bonbon chocolate tootsie roll candy canes lollipop caramels gingerbread. Soufflé marshmallow candy canes lemon drops tootsie roll. Cookie chupa chups marzipan bonbon wafer biscuit danish jelly-o toffee. Icing jelly beans gummies. Dragée croissant gingerbread candy donut marzipan cupcake jelly-o chupa chups. Caramels biscuit chocolate bar sesame snaps sweet roll. Cake tart chupa chups oat cake sweet roll.
            </p>

            </div>

          </div>

        </div>


        <SaveBar project={this.state} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};


const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRewardForm);
