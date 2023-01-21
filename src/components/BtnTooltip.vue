<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "../store/index";
const store = useStore();
const props = defineProps({
  counter: Number,
  isTooltip: Boolean,
});
</script>

<template>
  <div @click="isTooltip = true" class="btn-tooltip">
    <a @click="counter++" href="#" class="btn-tooltip_btn"
      >{{ store.btnName }}: {{ counter }}</a
    >
    <div v-if="isTooltip" class="btn-tooltip_tooltip">
      <div class="tooltip__inner">
        <p class="tooltip__text">
          {{ store.tooltipText }}
        </p>
      </div>
    </div>
    <p>{{ isTooltip }}</p>
  </div>
</template>

<style lang="scss">
.btn-tooltip {
  position: relative;
  display: flex;
  &_btn {
    font-family: Roboto;
    font-size: 18px;
    padding: 20px 40px;
    background-color: $btn-background-color;
    color: #fff;
    text-decoration: none;
    border-radius: 10px;
    position: relative;
  }
  &_tooltip {
    position: absolute;
    bottom: -70px;
    display: inline-block;
    background-color: $tooltip-background-color;
    border-radius: 8px;
    box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.45);
    &::before {
      content: "";
      border: solid transparent;
      position: absolute;
      bottom: 100%;
      left: 49%;
      border-bottom-color: #000;
      border-width: 5px;
    }
  }
}
.tooltip {
  &__inner {
    padding: 12px;
  }
  &__text {
    font-family: "Roboto";
    color: #fefefe;
    font-size: 12px;
  }
}
</style>
