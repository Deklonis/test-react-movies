import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        mtype: 'all'
    };
    

    changeFilter = (event) => {
        this.setState({mtype: event.target.value}, ()=>{
            this.props.searchMovies(this.state.search, this.state.mtype)
        })
    }

    clearSearch = () => {
        this.setState({search: ''})
    }

    render() {
        return <div>
            <div className="row">
            <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="Search"
            value={this.state.search}
            onChange={(event)=>this.setState({search: event.target.value})}
            />
            <button onClick={this.clearSearch}>Очистить</button>
            <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.mtype)}>Search</button>
            </div>
            <div className="radiobut">
                <label>
                <input className="with-gap" name="type" type="radio" onChange={this.changeFilter} value={'all'} checked={this.state.mtype === 'all'}/>
                <span>All</span>
                </label>
                <label>
                <input className="with-gap" name="type" type="radio" onChange={this.changeFilter} value={'movie'} checked={this.state.mtype === 'movie'}/>
                <span>Movies</span>
                </label>
                <label>
                <input className="with-gap" name="type" type="radio" onChange={this.changeFilter} value={'series'} checked={this.state.mtype === 'series'}/>
                <span>Serials</span>
                </label>
            </div>

        </div>
        
    }
}

export {Search}