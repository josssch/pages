<script>
    import '../assets/default.css'

    import SidebarSection from '$lib/components/SidebarSection.svelte'
    import {
        DISCORD_INVITE_URL,
        EMAIL,
        GITHUB_URL,
        SIGNAL_URL,
        YOUTUBE_URL,
    } from '$lib/constants.js'
</script>

<svelte:head>
    <link
        href="https://api.fontshare.com/v2/css?f[]=space-grotesk@1&display=swap"
        rel="stylesheet"
    />

    <title>I'm Josh 👋</title>
</svelte:head>

<div class="mx-auto flex h-full max-w-5xl py-2xl p-xl">
    <div class="flex gap-2xl my-auto max-sm:flex-col">
        <slot />

        <aside
            class="min-w-36 flex sm:flex-col gap-lg max-sm:flex-wrap max-sm:justify-evenly"
        >
            <SidebarSection title="Find Me Here">
                <ul>
                    <li><a href={DISCORD_INVITE_URL}>Discord</a></li>
                    <li><a href={GITHUB_URL}>GitHub</a></li>
                    <li><a href={SIGNAL_URL}>Signal</a></li>
                    <li><a href={YOUTUBE_URL}>YouTube</a></li>
                </ul>
            </SidebarSection>

            <SidebarSection title="Contact">
                <a href="mailto:{EMAIL}">{EMAIL}</a>
            </SidebarSection>
        </aside>
    </div>
</div>
