<template>
  <div id="app">
    <div class="container p-4 mt-4">
      <h3>Lista de Clientes</h3>
      <render-table
        :objetos="listaClientes"
        :estilo="estiloClientes"
        tipo="0"
      />
      <h3>Lista de Vehículos</h3>
      <render-table
        :objetos="listaVehiculos"
        :estilo="estiloVehiculos"
        tipo="1"
      />
      <h3>Lista de Sucursales</h3>
      <render-table
        :objetos="listaSucursales"
        :estilo="estiloSucursales"
        tipo="2"
      />
    </div>
  </div>
</template>

<script>
import RenderTable from "./components/RenderTable.vue";

export default {
  name: "App",
  components: {
    RenderTable,
  },
  data() {
    return {
      //-----------------------------
      // Clientes
      //-----------------------------
      estiloClientes: {
        table: true,
        "table-hover": true,
        "table-bordered": true,
        "table-light": true,
      },

      listaClientes: [
        { name: "Juan", name2: "Perez" },
        { name: "Ricardo", name2: "Barin" },
        { name: "Bruno", name2: "Diaz" },
      ],

      //-----------------------------
      // Vehiculos
      //-----------------------------
      estiloVehiculos: {
        table: true,
        "table-hover": true,
        "table-bordered": true,
        "table-info": true,
      },

      listaVehiculos: [
        { name: "Ford Fiesta", name2: "2010" },
        { name: "Renault Oroch", name2: "2018" },
        { name: "Volkswagen Passat", name2: "2014" },
      ],

      //-----------------------------
      // Sucursales
      //-----------------------------
      estiloSucursales: {
        table: true,
        "table-hover": true,
        "table-bordered": true,
        "table-dark": true,
      },

      listaSucursales: [
        { name: "Sucursal Central", name2: "Fake Street 123" },
        { name: "Sucursal CABA", name2: "Balcarce 50" },
        { name: "Sucursal Nueva", name2: "Alguna Calle 1234" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
