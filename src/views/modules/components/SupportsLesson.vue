<template>
  <div class="comments" v-show="lesson.name">
    <div class="header">
      <span class="title">Dúvidas (total: {{ supports.length }}) <span v-if="loading">(Carregando...)</span></span>
      <button class="btn primary"
        @click.prevent="modal.showModal = true">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>
    <supports-global />

    <modal-support
    :show-modal="modal.showModal"
    :support-reply="''"
      @closeModal="modal.showModal = false">
    </modal-support>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed, ref, watch } from 'vue';

import SupportsGlobal from "@/components/Supports.vue";
import ModalSupport from '@/components/SupportModal.vue';

export default {
    name: "SuportsLesson",

    setup() {
        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)

        const supports = computed(() => store.state.supports.supports.data)
        
        const loading = ref(false)

        const modal = ref({
          showModal: false,
          supportReply: ''
        })

        watch(
          () => store.state.courses.lessonPlayer,
          () => {
            loading.value =true
            store.dispatch('getSupportsOfLesson', lesson.value.id)
              .finally(() => loading.value = false)
          }  
        )

        return {
            lesson,
            loading,
            supports,
            modal
        }
    },

    components: {
        SupportsGlobal,
        ModalSupport
    }
};
</script>