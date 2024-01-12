<template>
  <el-form :model="form" label-width="80px">
    <el-form-item label="原价">
      <el-input v-model="form.price" />
    </el-form-item>
    <el-form-item label="折扣">
      <el-input v-model="form.discount" />
    </el-form-item>
    <el-form-item label="折扣价">
      <el-text type="primary" size="large">
        {{ discountPrice ? discountPrice : "" }}
      </el-text>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { computed, reactive } from "vue";
import moneyAmount from "../utils/moneyAmount";

let form = reactive({
  price: "",
  discount: "",
});

let discountPrice = computed(() => {
  let originPrice = form.price.includes(",")
    ? Number(form.price.replaceAll(",", ""))
    : Number(form.price);
  const discountPrice = Number(form.discount) / 100;
  const afterDiscountPrice = originPrice - originPrice * discountPrice;
  return moneyAmount(String(afterDiscountPrice));
});
</script>

<style lang="scss" scoped>
.el-form {
  width: 260px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  :deep(.el-form-item) {
    .el-form-item__label {
      font-size: 16px;
    }
  }
}
</style>
