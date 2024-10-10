<script>
    import Background from '$lib/components/Background.svelte'
    import { EMAIL } from '$lib/constants.js'
    import Signature from '../assets/signature.svg?component'
</script>

<div class="flex flex-col gap-lg text-pretty">
    <h1 class="font-black text-4xl">Hello, I'm Josh</h1>

    <p>
        Welcome to my website! I'm a software developer based in 🇨🇦 Ontario,
        I've been writing code since the age of <b>11</b>
        <sub>({new Date().getFullYear() - 2016} years)</sub> and haven't stopped
        since.
    </p>

    <p>
        Currently attending college for
        <b>Computer Programming & Analysis</b> and working as a tutor &
        freelancer in the meantime. If you're interested in this please
        <a href="mailto:{EMAIL}">write me an email</a> or open a ticket in my Discord.
    </p>

    <p>
        Before returning to freelancing, I was hired out of my high school co-op
        program to work full-time as a software developer in a department of
        two. Internally, I was developing a suite of tools to tie multiple
        systems together into one easy place, and automating jobs that would
        otherwise take hours.
    </p>

    <Signature class="w-48 ml-auto" />
</div>

<Background />
