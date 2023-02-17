<template>
  <div class="pagination">
    <hr class="my-0" />
    <ul class="flex justify-center items-center my-4">
      <li :class="{ 'opacity-50 text-gray-300': isInFirstPage }">
        <button type="button" class="bg-slate-500" :disabled="isInFirstPage">
          Newer
        </button>
      </li>

      <li :class="{ 'opacity-50 text-gray-300': isInLastPage }">
        <button type="button" class="bg-slate-700" :disabled="isInLastPage">
          Older
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: { type: Number, required: true },
    prePage: { type: Number, required: true },
    currentPage: { type: Number, required: true },
  },
  data() {
    return {};
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPage;
    },
  },
};
</script>
