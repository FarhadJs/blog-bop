<template>
  <div class="pagination">
    <hr class="my-0" />
    <ul class="flex justify-center items-center my-4">
      <li :class="{ 'opacity-50 text-gray-300': isInFirstPage }">
        <button
          type="button"
          class="bg-slate-500"
          :disabled="isInFirstPage"
          @click="onClickPage(1)"
        >
          Newer
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="page.name"
        :class="[{
          'opacity-100 bg-slate-300 text-black rounded-lg ': page.isActive,
        },'hover:bg-neutral-600 p-2 mx-1 cursor-pointer rounded-lg transition-all font-semibold']"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </li>
      <li :class="{ 'opacity-50 text-gray-300': isInLastPage }">
        <button
          type="button"
          class="bg-slate-700"
          :disabled="isInLastPage"
          @click="onClickPage(totalPage)"
        >
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
    pages() {
      let range = [];
      for (let i = 1; i <= this.totalPage; i++) {
        const element = this.totalPage[i];
        range.push({
          name: i,
          isActive: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPage;
    },
  },
  methods: {
    onClickPage(page) {
      this.$emit("Page-changed", page);
    },
  },
};
</script>
