<template>
  
</template>
<style scoped>
.container {
  /* margin-top: 40px; */
  display: flex;
  gap: 52px;
  box-shadow: 0 0 15px 10px rgba(86, 84, 84, 0.2);
  padding: 16px;
  border-radius: 20px;
  width: max-content;
}
.flat {
  width: 320px;
  height: 120px;
}
.flat img {
  width: 300px;
  height: auto;
  transition: all 0.3s ease;
  border-radius: 8px;
}
.flat img:hover {
  width: 310px;
}
.weather-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  .country {
    font-size: 16px;
  }
  .condate {
    .condition {
      text-align: center;
      color: rgb(151, 146, 146);
    }
    .condition,
    .datetime {
      font-size: 16px;
    }
  }

  .temp {
    font-size: 50px;
    display: flex;
    gap: 4px;
    font-weight: 700;
    align-items: center;
    .degree {
      margin-top: -2px;
      font-size: 24px;
    }
  }
}
</style>
