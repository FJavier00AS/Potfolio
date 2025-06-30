
import Swal from 'sweetalert2';

 export function LogIn(props){

    const handleClick = () => {
        Swal.fire({
            title: '¿Cuál es tu nombre?',
            input: 'text',
            inputPlaceholder: 'Escribí tu nombre aquí',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('Nombre ingresado:', result.value);
            }
        });
    };

    return (
        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
            Mostrar SweetAlert
        </button>
    );
}
