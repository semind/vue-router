<template>
  <div class="product">
    <h1>商品情報</h1>
    <p>このぺーじは ID.{{ id }} の詳細情報</p>
  </div>
</template>

<script>
export default {
  props: { id: Number }
}
</script>
