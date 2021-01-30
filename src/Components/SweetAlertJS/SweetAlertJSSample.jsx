import React from 'react'
import Swal from 'sweetalert2'

const SweetAlertJSSample = () => {

    const clickHandler = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
    return (
        <div>
            <header>SweetAlertJSSample</header>
            <button
                onClick={clickHandler}
            >
                click me!
            </button>
        </div>
    )
}

export default SweetAlertJSSample
