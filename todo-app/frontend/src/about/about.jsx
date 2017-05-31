import React, {Component} from 'react';
import PageHeader from '../template/pageHeader'

export default class Todo extends Component {
    render(){
        return(
            <div>
                <PageHeader name="Sobre" small="Nós"></PageHeader>
                <h2>Nossa história</h2>
                <p>är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet,</p>
                <h2>Visão</h2>
                <p>är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet,</p>
                <h2>Valores</h2>
                <p>är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet,</p>                
            </div>
        )
    }
}