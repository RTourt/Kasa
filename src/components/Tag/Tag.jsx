import "./Tag.css"

function Tag(props) {
    return (
        // permet d'afficher les tags se trouvant sur une page Logement
        <div className='container-tags'>
            <span className='button-tag'>{props.tag}</span>
        </div>
    )
}
export default Tag