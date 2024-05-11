<template>

<section class="form bg-dark p-3 p-md-4 p-xl-5">
    <div class="container">
        <div class="row justify-content-center text-white">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                <div class="card bg-dark border border-dark-subtle" style="background-color: black !important;">
                    <div class="card-body p-3 p-md-4 p-xl-5">
                        <div class="row ">
                            <div class="col-12">
                                <div class="mb-4">
                                    <div class="d-flex align-items-center ps-3 justify-content-center">
                                        <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/d/dd/MGM_2021.svg"
                                            alt="MGM Logo" width="124" height="74">
                                        <div class="pb-3 text-start">
                                            <h4>Global</h4>
                                            <h4>Distribution</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="/done">


                            <h3 class="text-start mb-4">Sign in</h3>
            <div class="row gy-3 gy-md-4 overflow-hidden">
              <div class="col-12 text-start">
                <label for="email" class="form-label ep">Email</label>
                <input type="email" v-model="email" @input="validateEmail" class="form-control epInput" name="email"  placeholder="Enter your email address"  required>
    <span v-if="!isValidEmail" style="color: red;">Invalid email format</span>
              </div>
              <div class="col-12 text-start">
                <label for="password" class="form-label ep">Password </label>
                <div class="input-group">
                    <input :type="visibility" class="form-control epInput" name="password"  placeholder="Enter your password" maxlength="30" required>
                    <button class="btn btn-outline-secondary toggle-password" type="button" v-on:click="showPassword()" v-if="visibility ==='password'"><i class="fas fa-eye-slash" ></i> </button>
                    <button class="btn btn-outline-secondary toggle-password" type="button" v-on:click="hidePassword()" v-if="visibility ==='text'"><i class="fas fa-eye" ></i> </button>
   
                </div>
                <div class="text-end col-12"><a href="#!" onclick="alert('YOU FORGOT THE PASSWORD?')" class="link-secondary text-decoration-none  ">Forgot password?</a></div>
              </div>
             
              <div class="col-12">
                <div class="form-check text-start">
                  <input class="form-check-input checkstyle" type="checkbox" value="" name="remember_me" id="remember_me">
                  <label class="form-check-label text-secondary " for="remember_me">Keep me signed in for 30 days
                  </label>
                </div>
              </div>
              <div class="col-12">
                <div class="d-grid">
                  <button class="btn btn-lg btn-primary sinbt" type="submit" >SIGN IN</button>
                  <a href="#!" class="link-primary text-decoration-none mt-1">Create new account</a>
                </div>
              </div>
            </div>
          </form>
                        <div class="row ">
                            <div class="col-12">
                                <hr class="mt-4 mb-2 border-secondary-subtle">
                                <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-start">
                                    <a href="#!" class="link-secondary text-decoration-none mt-1" style="font-weight: light">Read our terms of service <i class="fa-solid fa-arrow-up-right-from-square fa-2xs" style="color: #ffffff;"></i></a>
                                    
                                </div>
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                            <div class = 'p-0 m-0' >
                                <p class="mt-3 mb-3 text-center">Other ways to watch</p>
                                <div class="d-flex gap-2 gap-sm-3 justify-content-center">
                                    <a href="#!" ><img class="apple p-1" src="https://hyken.com/wp-content/uploads/2023/01/Apple-TV-Logo-2019-present.png" alt="apple tv logo"></a>
                                    <a href="#!"><img class="ios mt-2 p-1" src="https://cdn.freebiesupply.com/images/large/2x/ios-logo-png-transparent.png" alt="I O S"></a>
                                    <a href="#!" class="brand"><img class='roku mt-2 p-1' src="https://static-00.iconduck.com/assets.00/roku-icon-2048x639-2jznrc44.png" alt="roku"></a>
                                    <a href="#!" class="brand"><img class='amazon mt-2 p-1' src="https://www.dotstudiopro.com/assets/site_v2/img/firetv/firetv-logo.png" alt="amazon fire tv"></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</template>
<script>
export default{
    data(){
        return{
            visibility:"password",
            email: '',
            isValidEmail: true,
        }
    },
    methods:{
        showPassword(){
            this.visibility = 'text';
        },
        hidePassword(){
            this.visibility = 'password';
        },
        validateEmail() {
      // Regular expression pattern to match email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Validate email format using RegEx test method
      this.isValidEmail = emailPattern.test(this.email);
    }
        
    }
};

</script>
<style>

*{
    color: white;

}
body{
    background-image: linear-gradient(to right, rgba(0,0,0,0.6),rgba(0,0,0,0.95)),url(https://s3-alpha-sig.figma.com/img/0c37/0203/0959257e0ec7de02b8038c0959e0e9bd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGuWCoiTJ2vxsSW6hGO7x8EXBazjhtPWYTlv-J~6B~HjAp4NNltZgYOv0pFEN6T-xU5RP880379PvjHuYreNktpclaoJExCDYwBK5Oum4xBWOYofE8V~n9PYAAb3UbNoPjPKmBVCGzQt4dC1bOOkHyuo0sCmgvgOiSQTo4ZNcjzzYTEuyxnwpvWb4k7q~Kk9fbC0LTYl~Se5WHdqIMyqbyhDo9NrkUfntFdDCnka0YhNaantPfg7VfxfDQGhQjCl9CykoL6O~rvSnFn8v6NJUWX8hCfoNRIWfs93bafmXtxSDf5293vz6x1h8Xyk9IjHfn2qsYesUceCJLoLOHgvsg__);
}
.apple{
    height: 35px;
    z-index: 2;
}
.ios{
    
   filter: invert(1);
    height: 25px;
    z-index: 2;
}
.roku{
    filter: invert(1);
    height: 25px;
    z-index: 2;
}
.amazon{
    height: 25px;
    z-index: 2;
}
.sinbt{
    background-color: #1A68FF !important;
    font-family: 'Noto Sans';
}
.form{
    
    background-image: linear-gradient(to right, rgba(0,0,0,0.6),rgba(0,0,0,0.95)),url(https://s3-alpha-sig.figma.com/img/0c37/0203/0959257e0ec7de02b8038c0959e0e9bd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RGuWCoiTJ2vxsSW6hGO7x8EXBazjhtPWYTlv-J~6B~HjAp4NNltZgYOv0pFEN6T-xU5RP880379PvjHuYreNktpclaoJExCDYwBK5Oum4xBWOYofE8V~n9PYAAb3UbNoPjPKmBVCGzQt4dC1bOOkHyuo0sCmgvgOiSQTo4ZNcjzzYTEuyxnwpvWb4k7q~Kk9fbC0LTYl~Se5WHdqIMyqbyhDo9NrkUfntFdDCnka0YhNaantPfg7VfxfDQGhQjCl9CykoL6O~rvSnFn8v6NJUWX8hCfoNRIWfs93bafmXtxSDf5293vz6x1h8Xyk9IjHfn2qsYesUceCJLoLOHgvsg__);
}
.logo{
    filter: invert(1);
}
.ep{
    color: #1A68FF;
}
.checkstyle{
    background-color: #1C1C1E;
}
.epInput{
    background-color: #1C1C1E;
    border-color: #363637;
    color: #BCBCBC;
    border-radius: 2px;
    height: 60px;
   
}
.epInput::placeholder{
    color: #BCBCBC;
    font-weight: lighter;
    font-size: smaller;
}
.epInput:focus{
    background-color: #1C1C1E !important;
    color: #BCBCBC !important;
    border-color: #363637;
    border-radius: 2px;
    height: 60px;
}
h4{
    padding: 0%;
    margin: 0%;
    font-family: 'Noto Sans';
}

@media only screen and (min-width:1024px) {
 .container{
    top: 5%;
    left: 15%;
   

 }
}
</style>