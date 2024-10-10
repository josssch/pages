<script>
    export let title
</script>

<section {...$$restProps}>
    <h2 class="font-bold text-lg mb-sm capitalize">{title}</h2>

    <slot />
</section>
