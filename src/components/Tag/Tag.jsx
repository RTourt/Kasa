import "./Tag.css"

function Tag(props) {
    return (
        <div className='container-tags'>
            <span className='button-tag'>{props.tag}</span>
        </div>
    )
}
export default Tag