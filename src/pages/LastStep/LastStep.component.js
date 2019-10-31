import React from "react";
import "../../App.css";
import teams from "../../config.json";

export class LastStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { match } = this.props;
    const team = teams.find(team => team.id === match.params.teamId);
    const regex = new RegExp(team.killer);
    if (this.state.value.match(regex)) {
      alert(
        `Bravo détective ! Tu as trouvé le meurtrier ! Rendez vous au Café Bienvenue, 4 Rue du Bourg l'Abbé, 75003 Paris`
      );
    } else {
      alert(`Dayum ! C'est raté 😰 Retente ta chance !`);
    }
    event.preventDefault();
  }

  render = () => {
    return (
      <>
        <div className="Container">
          <div style={{ paddingTop: 32, paddingBottom: 128 }}>
            <div style={{ textAlign: "center" }}>
              <span role="img" style={{ fontSize: 54 }} aria-label="ghost">
                👻
              </span>
            </div>
            <span>
              Alors détective as-tu trouvé le nom de l'assassin que tu
              poursuivait ? As tu enfin résolu le mystère de tous ces crimes ?
              <br />
              Tente ta chance en écrivant le nom de ton suspect !
            </span>
            <div style={{ textAlign: "center" }}>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <input type="submit" value="Envoyer" />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
}
