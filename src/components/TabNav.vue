<template>
  <div
    :class="{
      'flex space-x-4': variant === 'horizontal',
    }"
  >
    <ul class="list-none bg-transparent p-1.5 rounded-md text-center overflow-auto whitespace-nowrap "
      :class="{
        'flex items-center mb-6 ': variant === 'vertical',
      }"
    >
      <li v-for="(tab, index) in tabList" :key="index" class="w-full px-4 py-1.5 hover:border-b-2 hover:border-blue-400 hover:shadow-md" :class="{
          'text-blue-500 font-semibold border-b-2 border-blue-400 shadow-md ' : index + 1 === activeTab,
          'text-black': index + 1 !== activeTab, }">
        <label :for="`${_uid}${index}`" v-text="tab" class="cursor-pointer block" />
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
          class="hidden"
        />
      </li>
    </ul>

    <template v-for="(tab, index) in tabList">
    <div></div>
      <div :key="index" v-if="index + 1 === activeTab" class="bg-white rounded-lg shadow-xl p-4 ">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
      <div></div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: () => "vertical",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
  },
  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>

<style>
.flex {
  display: flex;
}
</style>