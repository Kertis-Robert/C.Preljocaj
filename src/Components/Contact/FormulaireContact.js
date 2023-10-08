import React, { Component } from 'react';

class FormulaireContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            telephone: '',
            commentaire: '',
            captcha: '',
            accepteConditions: false,
        };
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Vous pouvez ajouter ici la logique pour soumettre le formulaire
        // Par exemple, valider les données, envoyer une requête HTTP, etc.
    };

    render() {
        return (
            <div>
                <h2>Formulaire de Contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Nom*:</label>
                        <input
                            type="text"
                            name="nom"
                            value={this.state.nom}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Prénom*:</label>
                        <input
                            type="text"
                            name="prenom"
                            value={this.state.prenom}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Téléphone*:</label>
                        <input
                            type="tel"
                            name="telephone"
                            value={this.state.telephone}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Vos Commentaires*:</label>
                        <textarea
                            name="commentaire"
                            value={this.state.commentaire}
                            onChange={this.handleChange}
                            rows="4"
                            required
                        />
                    </div>
                    <div>
                        <label>Captcha (Je ne suis pas un robot)*:</label>
                        <input
                            type="text"
                            name="captcha"
                            value={this.state.captcha}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="accepteConditions"
                                checked={this.state.accepteConditions}
                                onChange={this.handleChange}
                                required
                            />
                            J'accepte que Christine Preljocaj collecte mon nom, mon prénom, mon adresse mail et mon numéro de téléphone*
                        </label>
                    </div>
                    <div>
                        <button type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormulaireContact;
