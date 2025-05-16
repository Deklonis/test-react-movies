function Movie(props) {
    return <div className="mcard">
        <div className="card-image">
            <img src={props.poster} alt=""/>
            <br />
            <span className="card-title">{props.title}</span>
        </div>
        <div className="about">
            <p className="year">{props.year}</p>
            <p className="type">{props.type}</p>
        </div>
    </div>
}

export {Movie}