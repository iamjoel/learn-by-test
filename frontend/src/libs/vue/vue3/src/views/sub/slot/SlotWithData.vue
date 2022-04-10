<template>
    <ul>
        <li v-for="(item, index) in [1, 2, 3]" :key="item">
            <slot :item="item" />
        </li>
    </ul>
</template>