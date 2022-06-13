<template>
<div>
    <section id="sectionId" @click="close"></section>
<div id="loginDiv">
    <div id="loginDiv2">
        <div id="loginDiv3">
            <div id="loginDiv4">
            <h1 id="loginH1">Login</h1>

            <form id="formId" @submit.prevent="submit">

                <div id="formdiv"> 
                   <label>Email or User Name</label>
                    <input v-model="email" 
                        type="text" id="inputUserId" 
                        placeholder="Enter your email or username"
                        ref="emailRef"> 
                </div>

                <div id="formdiv">
                    <label>Password</label>
                    <input v-model="password" type="password" id="inputPassId" placeholder="Enter your password">
                </div>

                <div id="formdiv">
                    <button type="submit" id="btnIdLogin">
                        <span v-if="!isLoading">Login</span>
                        <span v-else>....</span>
                    </button>
                </div>
            </form>

            </div>
        </div>     
    </div>      
</div>
</div>

</template>

<script>
import firebase from '../utilities/firebase';

export default {
    data(){
        return{
            email: "nishajames04@gmail.com",
            password: "password",
            isLoading: false,
        }
    },
    mounted(){
        this.$refs.emailRef.focus();
    },
    methods: {
        submit(){
            this.isLoading = true;
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(res =>{
                console.log(res);

                this.email = '';
                this.password = '';
                this.isLoading = false;
                this.close();
            })
            .catch(e =>{
                console.log(e);
                this.isLoading = false;

            });
            
        },
        close(){
            this.$emit('close-login')
        },
    }
}
</script>

<style>

#loginDiv{
    position:absolute;
    top: 0%;
    margin-left: 40%;
    margin-right: 50%;
    height: 80%;
    margin-top: 15%;
    margin-bottom: 50%;
}
#loginDiv2{
    display: flex;
}
#loginDiv3{
    background-color: white;
    width: 15em;
    padding: 2%;
    border-radius: 0.25rem;
    margin: auto;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
#loginDiv4{
    padding: 2%;
    margin: auto;
    background-color: white;
    border-block-color: gray;
    /* --tw-border-opacity: 1;
    border-color: rgba(52, 211, 153, var(--tw-border-opacity)); */
}
#loginH1{
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
}
#formId{
    padding: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
}
#formdiv{
    margin-bottom: 4%;
    margin-top: 4%;
}
#inputUserId{
    border-radius: 0rem;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    padding: 2%;
    width: 90%;
}
#inputPassId{
    border-radius: 0rem;
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    padding: 2%;
    width: 90%;
}
#btnIdLogin{
    width: 95%;
    border-radius: 0rem;
    background-color: teal;
    color: white;
    font-size: 18px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

#sectionId{
    width: 100%;
    height: 100%;
    background-color: grey;
    top: 0%;
    position: absolute;
    opacity: 50%;
}
</style>