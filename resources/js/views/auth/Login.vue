<template>
    <div class="ui-entry py-5">
        <div class="container">
            <img src="img/logo.png" class="logo d-block mb-3 mx-auto">
            <form class="card card-body">
                <h1>Iniciar sesión</h1>
                <p class="small">¿Todavía no tienes una cuenta? <router-link :to="{ name: 'register' }" class="text-danger">Regístrate</router-link></p>
                <label for="user-info" class="mb-1">Inicio de sesión</label>
                <input type="text" name="usernameEmail" id="user-info" class="form-control mb-3" placeholder="Nombre usuario o correo electrónico" v-model="nickOrEmail">
                <label for="Contraseña" class="mb-1">Inicio de sesión</label>
                <input type="password" name="passw" id="user-passw" class="form-control mb-3" placeholder="Contraseña" v-model="passw">

                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="box">
                        <input type="checkbox" name="remember" id="remember">
                        <label for="remember" class="m-0">Recordar mis datos</label>
                    </div>
                    <div class="box">
                        <router-link :to="{ name: 'forgot-passw' }" class="small text-danger">¿Olvidaste tu contraseña?</router-link>
                    </div>
                </div>
                <input class="btn btn-danger btn-block" value="Iniciar sesión">
            </form>
            <div class="social-links d-flex justify-content-center mt-3">
                <a href="" class="fb"><i class="fab fa-facebook-f"></i></a>
                <a href="" class="ig mx-1"><i class="fab fa-instagram"></i></a>
                <a href="" class="tw mr-1"><i class="fab fa-twitter"></i></a>
                <a href="" class="gg"><i class="fab fa-google"></i></a>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            nickOrEmail: '',
            passw: '',
        }
    },
    methods: {
        Login() {
            let user = {
                username: this.nickOrEmail,
                passw: this.password
            }
            axios.post('/login', user)
            .then((res) => {
                this.response = res.data;
                console.log(res.data);
            });
        }
    }
}
</script>