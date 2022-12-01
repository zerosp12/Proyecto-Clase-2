<template>
  <div class="table-responsive text-center">
    <table :class="estilo">
      <thead>
        <tr>
          <th scope="col" class="w-50">{{ nombresColumnas[tipo][0] }}</th>
          <th scope="col">{{ nombresColumnas[tipo][1] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="(objeto, index) of objetos" :key="index">
          <td scope="row">{{ objeto.name }}</td>
          <td>{{ objeto.name2 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "RenderTable",

  data: function () {
    return {
      nombresColumnas: [
        ["Nombre", "Apellido"],
        ["Marca", "Modelo"],
        ["Sucursal", "Calle"],
      ],
    };
  },

  props: {
    estilo: String,
    tipo: Number,
    objetos: Object,
  },
};
</script>

<style scoped>
</style>