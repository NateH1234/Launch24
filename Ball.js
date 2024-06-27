class Ball {
    constructor(x, y, vx, vy, r, c) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.c = c;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    bounceWall() {
        // TOP WALL
        if (this.y - this.r < 0) {
            this.vy = Math.abs(this.vy);
            ball.c = rgb(Math.random(255), Math.random(255), Math.random(255));
        }

        // BOTTOM WALL
        if (this.y + this.r > boardHeight) {
            this.vy = -1 * Math.abs(this.vy);
            ball.c = "rgb(Math.random(255), Math.random(255), Math.random(255))";
        }
    }

    bouncePaddleL(paddle) {
        if (this.x - this.r > paddle.x + paddle.w) return false;
        if (this.x - this.r < 0) return true; //Stop the game
        if (this.y < paddle.y) return false;
        if (this.y > paddle.y + paddle.l) return false;
        if (this.vx < 0) {
            this.vx = Math.abs(this.vx);
            ball.c = "rgb(Math.random(255), Math.random(255), Math.random(255))";
        }
        
        this.vy += paddleLDistance / 22;
        return false;
    }

    bouncePaddleR(paddle) {
        if (this.x + this.r < paddle.x) return false;
        if (this.x + this.r > paddle.x + paddle.w) return true; //Stop the game
        if (this.y < paddle.y) return false;
        if (this.y > paddle.y + paddle.l) return false;
        if (this.vx > 0) {
            this.vx = -1 * Math.abs(this.vx);
            ball.c = "rgb(Math.random(255), Math.random(255), Math.random(255))";
        }
        this.vy += paddleRDistance / 22;
        return false;
    }
}