<template>
    <div class="Warning">
        <div class="outer"></div>
        <iframe src="http://122.9.166.142:3000/d/xtkCtBkiz/yuan-qu-gao-jing-jian-kong?orgId=1&kiosk" frameborder="0"
            id="inneriframe"></iframe>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.Warning {
    position: relative;
    padding: 0;
    margin: 0;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 70px);


    #inneriframe {
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
</style>