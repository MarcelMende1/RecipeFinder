<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:selected"]);

const showDropdown = ref(false);
const selectedOption = ref(props.options[0]);

const selectOption = (option) => {
  selectedOption.value = option;
  emit("update:selected", option);
  showDropdown.value = false;
};
</script>

<template>
  <div class="relative inline-block text-left">
    <!-- Trigger-Dropdown-Button -->
    <button
      @click="showDropdown = !showDropdown"
      class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      <span class="text-gray-500 mr-1">{{ label }}</span
      >{{ selectedOption }}
      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="showDropdown"
      class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <button
        v-for="option in props.options"
        :key="option"
        @click="selectOption(option)"
        class="w-full block text-sm text-gray-700 text-left hover:bg-gray-100 px-4 py-2"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>
