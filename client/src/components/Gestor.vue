<template>
  <div class="container">
    <Header />
    <div class="criacao">
      <button @click="toggleInput('categoria')">Criar categoria</button>
      <input v-if="mostrarInputCategoria" v-model="categoria.nome" placeholder="Nome da categoria">
      <button v-if="mostrarInputCategoria" @click="salvarCategoria">Salvar Categoria</button>

      <button @click="toggleInput('item')">Adicionar item</button>
      <div v-if="mostrarInputItem">
        <input v-model="item.name" placeholder="Nome do item">
        <input v-model="item.itemDescription" placeholder="Descrição do item">
        <input v-model="item.unitPrice" placeholder="Preço do item">
        <input v-model="item.amount" placeholder="Quantidade do item">
        <button @click="salvarItem">Salvar Item</button>
      </div>
    </div>
    <div class="categorias">
      <h3>Nome da categoria</h3>
      <div id="linha"></div>
      <div class="products">
        <Product v-for="product in products" :key="product.name" v-bind="product" @product-change="onProductChange" />
      </div>
    </div>
    <Chart :products="cartProducts" />
  </div>
</template>
  
<script>
import axios from 'axios';
import Header from './Header.vue';
import Product from './Product.vue';
import Chart from './Chart.vue';

export default {
  components: {
    Header,
    Product,
    Chart,
  },
  data() {
    return {
      mostrarInputCategoria: false,
      mostrarInputItem: false,
      categoria: {
        nome: '',
      },
      item: {
        name: '',
        unitPrice: '',
        amount: '',
      },
      products: [
        {
          id: 1,
          name: 'Feijoada',
          price: 19.90,
          amount: 5,
        },
        {
          id: 2,
          name: 'Camarão na moranga',
          price: 39.99,
          amount: 5,
        },
      ],
      cartProducts: [],
    };
  },
  methods: {
    onProductChange(id, count) {
      const product = this.products.find(product => product.id === id);
      product.count = count;
      this.cartProducts = this.products.filter(product => product.count > 0);
    },
    toggleInput(tipo) {
      // Resetar valores e alternar a visibilidade do input
      if (tipo === 'categoria') {
        this.mostrarInputCategoria = !this.mostrarInputCategoria;
        this.categoria.nome = '';
      } else if (tipo === 'item') {
        this.mostrarInputItem = !this.mostrarInputItem;
        this.item = {
          name: '',
          itemDescription: '',
          unitPrice: '',
          amount: '',
        };
      }
    },
    async salvarCategoria() {
      try {
        if (this.categoria.nome === '') {
          alert('Preencha o nome da categoria antes de salvar');
          return;
        }

        const response = await axios.post('http://localhost:3000/categoria/criarCategoria', this.categoria);

        console.log('Categoria criada com sucesso: ', response.data);
        // Reinicializar estado após salvar
        this.mostrarInputCategoria = false;
        this.categoria.nome = '';
      } catch (error) {
        console.error('Erro ao realizar a criação de categoria: ', error);
      }
    },
    async salvarItem() {
      try {
        // Validar se todos os campos do item estão preenchidos
        if (Object.values(this.item).some(value => value === '')) {
          alert('Preencha todos os campos do item para adicioná-lo.');
          return;
        }

        const response = await axios.post('http://localhost:3000/item/createItem', this.item);

        console.log('Item adicionado com sucesso: ', response.data);
        // Reinicializar estado após salvar
        this.mostrarInputItem = false;
        this.item = {
          name: '',
          itemDescription: '',
          unitPrice: '',
          amount: '',
        };
      } catch (error) {
        console.error('Erro ao realizar a criação do item: ', error);
      }
    },
  },
};
</script>
<style scoped>
#nomeprod {
  margin-left: 50px;
  margin-top: 30px;
}

#toggleitem {
  display: none;
}

#toggleitem+label {
  margin-left: 20px;
  margin-top: 50px;
  width: 40px;
  height: 18px;
  background-color: darkslategray;
  display: block;
  position: relative;
  border: 1px solid black;
  border-radius: 100px;
  padding: 2px;
  transition: 200ms;
  cursor: pointer;
}

#toggleitem+label::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 16px;
  background: white;
  display: block;
  border-radius: 50%;
  right: unset;
  left: 2px;
  top: 3px;
  transition: 200ms;
}

#toggleitem:checked+label {
  background: blue;
}

#toggleitem:checked+label::before {
  content: '';
  left: calc(100% - 22px);
}

#togglestatus {
  display: none;
}

#togglestatus+label {
  bottom: 62px;
  left: 1100px;
  width: 55px;
  height: 20px;
  background: lightgrey;
  display: block;
  position: relative;
  border-radius: 100px;
  padding: 2.5px;
  transition: 200ms;
  cursor: pointer;
}

#togglestatus+label:before {
  content: '';
  position: absolute;
  width: 20px;
  height: 18px;
  background: white;
  display: block;
  border-radius: 50%;
  right: unset;
  left: 2px;
  top: 3px;
  transition: 200ms;
}

#togglestatus:checked+label {
  background: #4DFF44;
}

#togglestatus:checked+label::before {
  content: '';
  left: calc(100% - 22px);
}

.criacao {
  margin-top: 35px;
}

.categorias {
  margin-top: 60px;
  margin-left: 40px;
}

.itens {
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background: rgba(204, 199, 199, 0.80);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 220px;
  height: 273px;
}

#botaonav {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-left: 20px;
  bottom: 15px;
  left: 100px;
  position: relative;
  width: 130px;
  height: 35px;
  border-radius: 7px;
  border: none;
  background-color: #FFD0AA;
}

#botaocriacao {
  margin-left: 20px;
  width: 250px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background: rgba(170, 101, 45, 0.70);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

#fotoitem {
  top: 25px;
  left: 40px;
  position: relative;
  max-width: 130px;
  max-height: 122px;
  background-color: #FFF;
  border: 1px solid black;
}

.preco {
  display: block;
  margin-top: -39.5px;
  margin-left: 80px;
  width: 40px;
  height: 16px;
  border-radius: 8px;
  border: 2px solid #343434;
  background: #FFF;
  position: relative;
}

#botaoedit {
  margin-top: -38px;
  margin-left: 140px;
  display: block;
  position: relative;
}

#linha {
  margin-top: 10px;
  width: 99%;
  border-bottom: 2px solid black;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px 32px 16px 16px;
}
</style>
  