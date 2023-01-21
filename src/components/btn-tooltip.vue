<script setup>
import { ref } from "vue";
import { useStore } from "../store/index";
const store = useStore();
const counter = ref(0);
const isTooltip = ref(false);
</script>

<template>
  <div @click="isTooltip = true" class="btn-tooltip">
    <a @click="counter++" href="#" class="btn-tooltip__btn"
      >{{ store.btnName }}: {{ counter }}</a
    >
    <div v-if="isTooltip" class="btn-tooltip__tooltip">
      <div class="btn-tooltip__tooltip_inner">
        <p class="btn-tooltip__tooltip_text">
          {{ store.tooltipText }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.btn-tooltip {
  position: relative;
  display: flex;
  &__btn {
    font-family: Roboto;
    font-size: 18px;
    padding: 20px 40px;
    background-color: $btn-background-color;
    color: #fff;
    text-decoration: none;
    border-radius: 10px;
    position: relative;
  }
  &__tooltip {
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
    &_inner {
      padding: 12px;
    }
    &_text {
      font-family: "Roboto";
      color: #fefefe;
      font-size: 12px;
    }
  }
}
</style>
