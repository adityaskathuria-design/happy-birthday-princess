// --- 1. THE 3 PARAGRAPHS ---
const storyText = `It's finally the day when the sunshine, happiness, and my everything came to this beautiful planet—my babygirl Liyu. ❤️<br><br>
I love youuuuu so much, my princess. Do you know how much you mean to me? You mean everything to me. You're like a rose and I'm like the soil beneath it. A rose can't stand without soil, and soil feels empty without something beautiful growing from it. That's how important you are to me. :3<br><br>
Since the day I met you, I had an instant crush on you. Mwehehehe, when we first met on Yggdrasil, I was so scared to confess. I always thought that if a boy confessed first, he'd somehow mess everything up. And honestly, I kept thinking that you deserved someone way better than me. But at the same time, I couldn't imagine seeing you with anyone else. 😭❤️<br><br>
Babygirl, this day is so special to me because it's the day you came to Earth and made not only my life, but the lives of everyone around you, brighter and happier just by being yourself. You're genuinely one of the cutest, most adorable, most beautiful princesses I've ever known, and I still can't believe I got so lucky.<br><br>
Ever since we met, my life has changed so much for the better. You're so, so loved, my baby. And this is only the beginning. Keep reading, because my words still have a lot more to tell you about how much you deserve every beautiful, cute, magical, and wonderful thing this world has to offer. :3333`;

const oceanText = `Welcome to another cutesy essay about how you make me feel. 💖<br><br>
God damn, I can't even explain this feeling properly. I swear it's like I want to say so much, but yknaurrr my mouth just decides to shut up. 😭 But imma try my best to tell you as much as I can... maybe even more than I can. :3333<br><br>
Ever since your presence came into my life, my princess, you've made me fall so deeply for you. But the thing is, it always felt different. It was never just about having a girlfriend. From somewhere deep inside me, I always felt like, "Yeah... this is the girl I'm going to end up with." I believe in that so much. No matter what challenges life throws at us, I'd always want to work through them together because you're someone I never want to lose. ❤️<br><br>
What made me fall for you was never something as simple as looks or labels. It was your soul. It was your personality. And especially that silly side of you that you show me—the one that is saurrrrr hella cute and makes me smile every single time. 😭💖<br><br>
I love your hobbies, your creativity, your art, and the way you manage things so thoughtfully. I always notice the little things you do. The way you think about our future, the way you save money, and the way you constantly try to give more than you receive. Baby, I swear sometimes it makes me emotional because even when I feel like I'm not enough, you still care about me with your whole heart.<br><br>
And don't even get me started on your yapping. 😭❤️ I could listen to you talk all day and never get tired of it. Honestly, if you wanted to talk all night, I'd happily stay awake just to hear your voice. Because of you, I feel complete, my darling. Thank you for being you. Mwahhhhh. 💋✨`;

const wishesText = `I wish you the HAPPIEST, MOST BEAUTIFUL, ADORABLE, GORGEOUSSSSS BIRTHDAYYYYYYYY, MY PRINCESSSSSSSSS RAPUNZELLLLLLLLLL. 🎂💖✨<br><br>
I wish you the best years ahead, my baby. I know you're going to become the amazing lawyer diva you've always dreamed of being, and I'll be the proudest person cheering for you every step of the way. I know so many people are happy that you're here today, but for a moment, let's put everyone else aside and focus on you and how much you mean to me. :3333<br><br>
Darlinggggg, no matter what happens, I want you to know that I'll always choose us. I want to keep growing with you, creating memories with you, laughing with you, and building a future together. Whenever I think about the future, you're always there in it. ❤️<br><br>
I want our future to be filled with happiness, peace, and all the beautiful things you deserve. And one day, if we're lucky enough to have a family of our own, our kids will know just how strong, kind, caring, adorable, and beautiful their mother is. 😭💖 And yes, even then, you'll still be my babygirl and my princess. I am absolutely going to keep giving you forehead kisses and making you smile. :33333<br><br>
I genuinely manifest every beautiful thing in this world for you. I hope this year brings you happiness, success, good health, amazing memories, and countless reasons to smile. You deserve every single bit of it.<br><br>
Sometimes I still can't believe how lucky I am to have you in my life. You're my pookie, my adorable princess, my gorgeous diva, and one of the most important people in my world. Thank you for staying, thank you for loving me, and thank you for being yourself. ❤️<br><br>
And babyyyyyyyy, don't you EVER think you're not enough. You're more than enough to me. Everyone makes mistakes. Every relationship faces problems. Every time we've faced something difficult, we've worked through it together, and that's what matters. Never forget how loved, appreciated, and important you are.<br><br>
I AM WITH YOU FOR THE ENTIRE LIFEEEEEEEE, MY BABYYYYYYYYY. ❤️<br><br>
Now go enjoy your birthday, my beautiful Rapunzel. Make amazing memories, smile a lot, have the best day ever, and most importantly...<br><br>
DON'T FORGET TO SHARE SOME CAKE WITH MEEEEEEEEEEE. 🎂😭💖<br><br>
MWAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH :333333333`;

// This injects the text into your HTML cards
document.getElementById('para1').innerHTML = storyText;
document.getElementById('para2').innerHTML = oceanText;
document.getElementById('para3').innerHTML = wishesText;

// --- 2. PAGE NAVIGATION ---
function nextPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const target = document.getElementById('page' + pageNum);
    if(target) {
        target.classList.add('active');
    }
}

// --- 3. BLOWING OUT THE CANDLES ---
function blowCandles() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach(candle => {
        candle.classList.add('blown-out');
    });
    const btn = document.querySelector('.cake-page button');
    if(btn) {
        btn.innerText = "See Your Final Surprise! 🎉";
        btn.onclick = () => nextPage(6);
    }
}

// --- 4. ANIMATIONS & HEARTS ---
const extraStyles = document.createElement('style');
extraStyles.innerHTML = `
    .candle.blown-out::before { display: none !important; }
    @keyframes floatUp {
        0% { transform: translateY(100vh) scale(0.5); opacity: 1; }
        100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
    }
`;
document.head.appendChild(extraStyles);

function createHeart() {
    const heartsContainer = document.querySelector('.hearts');
    if(!heartsContainer) return;
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animation = `floatUp ${Math.random() * 3 + 3}s linear forwards`;
    heart.style.fontSize = Math.random() * 1.5 + 0.5 + 'rem';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heartsContainer.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 400);
