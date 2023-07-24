<template>
  <div class="isolate bg-white px-6 lg:px-8 lg:pt-28 lg:pb-5">
    <div
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    >
      <svg
        class="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
        viewBox="0 0 1155 678"
      >
        <path
          fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
          fill-opacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9089FC" />
            <stop offset="1" stop-color="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="mx-auto max-w-2xl text-center -mt-20 -mb-12">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        ارتباط با ما
      </h2>
    </div>
    <form
      @submit.prevent="acceptForm"
      method="POST"
      class="mx-auto mt-16 max-w-xl sm:mt-20"
      dir="rtl"
    >
      <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2 text-right">
        <div>
          <label
            for="first-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >نام</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              @input="changeData"
              v-model="form.title"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="last-name"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >نام خانوادگی</label
          >
          <div class="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >ایمیل</label
          >
          <div class="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-gray-900"
            >متن پیام</label
          >
          <div class="mt-2.5">
            <textarea
              @input="changeData"
              v-model="form.content"
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
            ></textarea>
          </div>
        </div>
        <!-- <SwitchGroup class="flex gap-x-4 sm:col-span-2"> </SwitchGroup> -->
      </div>
      <div class="mt-1">
        <button
          type="submit"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          ارسال پیام
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
export default {
  setup() {
    const agreed = ref(false);

    const form = reactive({
      title: "Ali",
      content: "",
    });

    function changeData(event) {
      // console.log(event.target.value);
    }

    function acceptForm() {
      console.log(form);
    }

    return { agreed, form, changeData, acceptForm ,SwitchGroup};
  },
};
</script>

<style scoped>
label {
  @apply mr-2;
}
</style>
