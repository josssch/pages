<script>
    const UPDATE_FREQUENCY_MS = 1000 / 24
    const LINE_COUNT = 10

    /** @type {HTMLCanvasElement} */
    let canvas

    /** @type {CanvasRenderingContext2D} */
    let ctx

    const lines = []

    class Line {
        width = 100
        height = 1

        constructor(x, y, speed) {
            this.x = x
            this.y = y
            this.speed = speed
        }

        update(delta) {
            this.x += this.speed * delta

            if (this.x > canvas.width) {
                this.x = -this.width
            }
        }

        draw() {
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    $: if (canvas) {
        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight

        ctx = canvas.getContext('2d')

        for (let i = 0; i < LINE_COUNT; i++)
            lines.push(
                new Line(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    Math.random() * (0.4 - 0.1) + 0.1,
                ),
            )

        requestAnimationFrame(loop)
    }

    let lastTimeMs = 0

    function loop(timeMs) {
        const diff = timeMs - lastTimeMs

        if (diff >= UPDATE_FREQUENCY_MS) {
            update(diff)
            lastTimeMs = timeMs
        }

        draw()

        requestAnimationFrame(loop)
    }

    function update(deltaTime) {
        for (const line of lines) line.update(deltaTime)
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = 'currentColor'
        for (const line of lines) line.draw()
    }
</script>

<canvas
    class="absolute inset-0 size-full -z-50 opacity-25"
    bind:this={canvas}
></canvas>
