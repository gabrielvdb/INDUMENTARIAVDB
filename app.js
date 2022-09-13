let bienvenido = prompt(`Bienvenido! Que estas buscando?
1.Remeras
2.Buzos
3.Pantalones
4.Zapatillas`)
switch (bienvenido) {
    case "1":
        console.log("Remeras");
        break;
        case "2":
            console.log("Buzos");
            break;
            case "3":
                console.log("Pantalones");
                break;
                case "4":
                    console.log("Zapatillas");
                    break;

    default:
        console.log("No tenemos eso :(")
        break;
}
    


const productos =[
    {nombre: 'Remera', precio:4000},
    {nombre: 'Buzo', precio:5000},
    {nombre: 'Pantalon', precio:3500},
]
productos.push("Zapatillas",20000);
