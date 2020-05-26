const particles = [];

function setup() {
    // 创建画布
    createCanvas(window.innerWidth, window.innerHeight);

    // 创建随机粒子数量
    const particlesLength = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
};

function draw() {
    background('#333');
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    });
};
// 创建单个粒子 类
class Particle {
    constructor() {
        // 定位
        this.pos = createVector(random(width), random(height));
        // 移动速度
        this.vel = createVector(random(-2, 2), random(-2, 2));
        // 大小
        this.size = 10;
    }

    // 更新动画
    update() {
        this.pos.add(this.vel);
        this.edges();
    };
    // 绘制单个粒子
    draw() {
        noStroke();
        fill('rgba(255,255,255,0.5');
        circle(this.pos.x, this.pos.y, this.size);
    };
    // 检测边缘
    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1; //使它触碰到边界到时候反弹
        }
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1; //使它触碰到边界到时候反弹
        }
    };
    // 粒子连接
    checkParticles(particles) {
        particles.forEach((particle) => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

            if (d < 120) {
                stroke('rgba(255,255,255,0.1)');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    };
}