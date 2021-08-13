<template>
    <div class="ui-entry py-5">
        <div class="container">
            <img src="img/logo.png" class="logo d-block mb-3 mx-auto">
            <form class="card card-body" @submit.prevent="Register()">
                <h2>Personas reales. Secretos sinceros. Una comunidad auténtica. ¡Descúbrela ya!</h2>
                <p class="small my-3">¿Ya tienes una cuenta? <router-link :to="{ name: 'login' }" class="text-danger">Inicia sesión</router-link></p>
                <label for="user-regis" class="mb-1">Correo electrónico</label>
                <input type="email" name="usernameEmail" id="user-regis" class="form-control mb-3" placeholder="Correo electrónico" v-model="nickOrEmail">

                <label class="mb-1">Cumpleaños</label>
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <select name="day" class="form-control" v-model="day">
                        <option value="">Dia</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select name="month" class="form-control mx-1" v-model="month">
                        <option value="">Mes</option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>
                    <select name="year" class="form-control" v-model="year">
                        <option value="">Año</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                    </select>
                </div>

                <label for="password" class="mb-1">Contraseña</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Contraseña" v-model="password">

                <p class="small my-3 text-center">Al registrarte aceptas nuestras <a href="" class="text-danger"> Condiciones</a> y nuestra <a href="" class="text-danger">Política de privacidad</a></p>
                <input type="submit" class="btn btn-danger btn-block" value="Pruébalo">
                <div class="social-links d-flex justify-content-center mt-3">
                    <a href="" class="fb"><i class="fab fa-facebook-f"></i></a>
                    <a href="" class="ig mx-1"><i class="fab fa-instagram"></i></a>
                    <a href="" class="tw mr-1"><i class="fab fa-twitter"></i></a>
                    <a href="" class="gg"><i class="fab fa-google"></i></a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nickOrEmail: '',
            day: '',
            month: '',
            year: '',
            password: '',
            response: '',
        }
    },
    methods: {
        Register() {
            let user = {
                username: this.nickOrEmail,
                day: this.day,
                month: this.month,
                year: this.year,
                passw: this.password
            }
            axios.post('/register', user)
            .then((res) => {
                this.response = res.data;
                console.log(res.data);
            });
        }
    }
}
</script>