<template>
    <div class="banner py-5">
        <div class="row container my-0 mx-auto px-0 py-5 justify-content-center align-items-center">
            <div class="col-12 col-sm-10 text-white">
                <img src="img/logo.png" class="logo d-block mb-3 mx-auto">
                <h1 class="mb-4">Pregunta, chatea y repite. <br> ¡De forma anónima!</h1>
                <p class="lead">¿Ya tienes una cuenta? <router-link :to="{ name: 'login' }" class="text-danger">Inicia sesión</router-link></p>
                <form class="form-register">
                    <label for="email-regis" class="mb-1">Correo Electrónico</label>
                    <input type="email" name="" id="email-regis" class="form-control mb-3" placeholder="Correo Electrónico">
                    <p class="small">Al registrarme certifico que soy mayor de 13 años y acepto los <a href="" class="text-danger">Términos del servicio</a> y la <a href="" class="text-danger">Política de privacidad</a></p>
                    <a href="" class="btn btn-danger btn-block">¡Vamos allá!</a>
                </form>
            </div>
        </div>
        <img src="img/banner.jpg" class="bg">
        <div class="shadow"></div>
    </div>    
</template>

<script>
export default {
    
}
</script>