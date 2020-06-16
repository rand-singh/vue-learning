<template>
    <div class="box is-info">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.box{
    background: grey;
    padding: 10px;
    border: 1px solid #c5c5c5;
    margin-bottom: 1em;
}

</style>