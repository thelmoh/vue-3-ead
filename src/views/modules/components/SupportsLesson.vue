<template>
  <div class="comments">
    <div class="header">
      <span class="title">Dúvidas</span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>
    <supports-global />
  </div>
</template>
<script>
import SupportsGlobal from "@/components/Supports.vue";
export default {
    name: "SuportsLesson",
    components: {
        SupportsGlobal
    }
};
</script>