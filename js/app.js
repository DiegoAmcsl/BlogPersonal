
document.addEventListener('DOMContentLoaded', () => {

    //* Captra de elemtos del Html
    const inputUsuario = document.querySelector('#txtLogUser');
    const inputPassw = document.querySelector('#pswLoginUser');
    const btnLogin = document.querySelector('#btnLogin');
    const formLogin = document.querySelector('#formLogin');
    const spinner = document.querySelector('#spinner');

    const datos = {
        usuario: '',
        password: ''
    }

    //* Agregamos los eventos
    inputUsuario.addEventListener('input', validarCampo);
    inputPassw.addEventListener('input', validarCampo);
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        spinner.classList.remove('hidden');
        spinner.classList.add('center');

        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('center');

            const ingreso = document.createElement('P');
            ingreso.textContent = 'Ingreso Exitoso';
            ingreso.classList.add('ingreso--ok');
            formLogin.appendChild(ingreso);
            resetLogin();

            setTimeout(() => {
                ingreso.remove();
            }, 2000);

        }, 3000);
    })

    function validarCampo(e) {
        // console.log(e.target.value);
        const campo = e.target.value;
        if (campo.trim() === '') {
            const alerta = document.createElement('P');
            alerta.textContent = 'Este campo es obligatorio'
            alerta.classList.add('input--invalid');
            quitarAlerta(e.target.parentElement);
            e.target.parentElement.appendChild(alerta);
            datos[e.target.name] = '';
            validarBoton();
            return;
        }
        datos[e.target.name] = campo;
        quitarAlerta(e.target.parentElement);
        validarBoton();
    }

    function quitarAlerta(referencia) {
        const alerta = referencia.querySelector('.input--invalid');
        if (alerta) {
            alerta.remove();
            return;
        }
    }

    function validarBoton() {
        if (Object.values(datos).includes('')) {
            btnLogin.classList.add('btn--disabled');
            btnLogin.disabled = true;
            return;
        }
        btnLogin.classList.remove('btn--disabled');
        btnLogin.disabled = false;
    }

    function resetLogin() {
        formLogin.reset();
        datos.usuario = '';
        datos.password = '';
    }

})

