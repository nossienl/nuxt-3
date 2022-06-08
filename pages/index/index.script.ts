import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const productName: string = "Nuxt 3 portfolio";

    return { productName };
  },
  layout: false,
});
