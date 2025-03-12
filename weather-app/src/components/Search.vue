<template>
  <form action="">
    <input type="text" style="width: 750px;" class="search" placeholder="Viet nam"/>
    <input type="button" value="Search" class="btnsearch" />
  </form>
</template>
<style scoped>

.search{
    box-shadow: 0 0 15px 10px rgba(111, 40, 40, 0.2);
}
.search::placeholder {
  color: black; 
}
.btnsearch {
  color: white;
  cursor: pointer;
  background-color: #48319d;
  margin-left: -120px;
  width: 120px;
  font-weight: 600;
  font-size: 14px;
}
</style>
