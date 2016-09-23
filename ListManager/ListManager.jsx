var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    // inicializa as propriedades do componente com um array vazio para acomodar os item e uma string vazia 
    // onde será o valor do item que desejamos inserir na lista
    getInitialState: function(){
        return {items: [], newItemText:''};
    },

    onChange: function(e){
        // atualizar o state da propriedade a cada letra digiata no teclado.
        this.setState({newItemText: e.target.value});
    },

    handleSubmit: function(e){
        
        // desabilita o botão a receber clicks quando estiver realizando onSubmit.
        e.preventDefault();
        
        // captura o state atual da propriedade items.
        var currentItems = this.state.items;
        
        // Adiciona um novo item na lista de items atuais
        currentItems.push(this.state.newItemText);
        
        //Atualiza a lista de items. 
        this.setState({items: currentItems, newItemText:''});
        
    },
    render: function(){

        var divStyle = {
            marginTop: 10
        }
        
        var headingStyle = {

        }
        if (this.props.headingColor) {
            <headingStyle className="background"></headingStyle> = this.props.headingColor
        }

        return(
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-9">                                
                                <input onChange={this.onChange} value={this.state.newItemText}/>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
    
});

module.exports = ListManager;