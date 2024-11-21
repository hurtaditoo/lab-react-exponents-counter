const Exponent = ({ num, exponent }) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= num;
    }

    const expression = Array.from({ length: exponent }, () => num).join(" * "); // Con 'length: exponent' defino un objeto con una propiedad igual al valor de exponent, si exponent = 3, el array tendrá 3 elementos
    // devuelve el valor num para cada elemento del array, si num = 5 y exponent = 3, el array resultante será [5, 5, 5]
    // Toma el array generado en el paso anterior ([5, 5, 5]) y convierte sus elementos en un string, separándolos por " * ". [5, 5, 5] se convertirá en "5 * 5 * 5"
    return (
        <div className="exponent-counter-container">

        <p className="exponent-label">
            {num} <sup>{exponent}</sup>
        </p>

        <p className="exponent-result">
            {`${expression} = `} 
            <span className="total">{result}</span>
        </p>

        </div>
    );
}
  
export default Exponent;