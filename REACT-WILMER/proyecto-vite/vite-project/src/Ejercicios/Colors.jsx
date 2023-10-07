const Colors = ({items}) => {
    console.log('Contenido del componente Colors:', items);
    return (
        <ul>
            {items.map((color, index) => (
                <li key={color.id}>{color.name}</li>
            ))}
        </ul>
        
    );
};

export default Colors;