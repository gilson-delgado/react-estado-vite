import { Component } from 'react'
import './panel.css'

class Panel extends Component{
    constructor(){
        super()
        this.state = {
            title: 'Título do painel'
        }
    }

    render(){   
          const thisComponent = this
        return(
            <section className="panel" onClick={
            function () {              
                thisComponent.setState(
                        {title: 'Título novo'}
                    )
                }
            }>
                <h2>{this.state.title}</h2>
            </section>
        )
    }
}

export default Panel