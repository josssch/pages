<script>
    import '../assets/default.css'

    import Sidebar from '$lib/components/Sidebar.svelte'
    import SidebarSection from '$lib/components/SidebarSection.svelte'
    import {
        DISCORD_INVITE_URL,
        EMAIL,
        GITHUB_URL,
        SIGNAL_URL,
        YOUTUBE_URL,
    } from '$lib/constants.js'
    import DiscordIcon from '../assets/icons/discord.svg?component'
    import GitHubIcon from '../assets/icons/github.svg?component'
    import SignalIcon from '../assets/icons/signal.svg?component'
    import YouTubeIcon from '../assets/icons/youtube.svg?component'
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

        <Sidebar>
            <SidebarSection title="Find Me Here">
                <!-- probably could have just used css... or done this better... -->
                <ul class="[&>li>a]:flex [&>li>a]:gap-md [&>li>a>svg]:w-4">
                    <li>
                        <a href={DISCORD_INVITE_URL}>
                            <DiscordIcon />
                            Discord
                        </a>
                    </li>
                    <li>
                        <a href={GITHUB_URL}>
                            <GitHubIcon />
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href={SIGNAL_URL}>
                            <SignalIcon />
                            Signal
                        </a>
                    </li>
                    <li>
                        <a href={YOUTUBE_URL}>
                            <YouTubeIcon />
                            YouTube
                        </a>
                    </li>
                </ul>
            </SidebarSection>

            <SidebarSection title="Contact">
                <a href="mailto:{EMAIL}">{EMAIL}</a>
            </SidebarSection>
        </Sidebar>
    </div>
</div>
