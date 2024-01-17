<script>
import axios from 'axios';

export default {
    name: 'Register',
    data() {
        return {
            name: '',
            phoneNumber: '',
            address: '',
            email: '',
            password: '',
            confirmPassword: '',
            cnpj: '',
            bank: '',
            agency: '',
            account: '',
        }
    }, 
    methods: {
        async register() {
            this.loading = true;
            try {
                const response = await axios.post('/admin/novoAdmin', {
                    name: this.name,
                    phoneNumber: this.phoneNumber,
                    address: this.address,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    cnpj: this.cnpj,
                    bank: this.bank,
                    agency: this.agency,
                    account: this.account,
                });
                this.$store.dispatch('setAdmin', true);
                this.$router.push('/');
            } catch (error) {
                console.error('Erro ao fazer login: ', error);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>
<template>
    <div class="registerContainer">
        <v-card class="cardContainer">
            <v-card-title class="cardTitle">
                <h1>Register</h1>
            </v-card-title>
            <v-card-text>
                <v-form class="formContainer">
                    <v-text-field v-model="name" label="Name" type="text" hide-details></v-text-field>
                    <v-text-field v-model="phoneNumber" label="Phone Number" type="text" hide-details></v-text-field>
                    <v-text-field v-model="address" label="Address" type="text" hide-details></v-text-field>
                    <v-text-field v-model="email" label="Email" type="email" hide-details></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password" hide-details></v-text-field>
                    <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" hide-details></v-text-field>
                    <v-text-field v-model="cnpj" label="CNPJ" type="text" hide-details></v-text-field>
                    <v-text-field v-model="bank" label="Bank" type="text" hide-details></v-text-field>
                    <v-text-field v-model="agency" label="Agency" type="text" hide-details></v-text-field>
                    <v-text-field v-model="account" label="Account" type="text" hide-details></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" :loading="loading" @click="register">Register</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<style scoped>  
.cardTitle {
  padding-right: 64px;
}

.formContainer {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.registerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 64px;
}

.cardContainer {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 16px 16px;
  min-width: 600px;
}
</style>