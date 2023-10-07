const Colors = ({items}) => {
    return (
        <ul>
            {items.map((color, index) => (
                <li key={index}>{color}</li>
            ))}
        </ul>
    );
};

export default Colors;