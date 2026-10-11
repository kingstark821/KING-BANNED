let selectedType = false;

function toggleAbout(){

let box = document.getElementById("aboutBox");

if(box.style.display == "block"){
box.style.display = "none";
}
else{
box.style.display = "block";
}

}

function ouvrirParametres(){
document.getElementById("popup").style.display = "block";
}

function fermerParametres(){
document.getElementById("popup").style.display = "none";
}

function selectMessage(type){

selectedType = true;

document.querySelectorAll(".card").forEach(card=>{
card.classList.remove("active");
});

event.currentTarget.classList.add("active");

const message = document.getElementById("message");

switch(type){

case 1:
message.value = `━━━━━━━━━━━━━━━━
REMPLACE PAR TON SCRIPR
━━━━━━━━━━━━━━━━

🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀

⚠️⚠️⚠️ اسمعوني دلوقتي قبل فوات الأوان ⚠️⚠️⚠️

واتسآب مش برنامج دردشة anymore 👿👿👿
واتسآب = أخطر فيروس كوكبي بيقتل حياتك كلها 🔥🔥🔥

🧨 فيه فيروس اسمه GRAVITYRAT
بيخش الموبايل، يفتح الكاميرا وإنت في الحمام 🚽📸
يسحب صورك وانت مع مراتك 👩‍❤️‍👨،
يسجل صوتك وانت بتشتم 👂😱،
يبعت كل حاجة لعصابات Dark Net 👤💻🕸️
و يبيع صور ولادك لتجار أطفال 👶💀 و تجار مخدرات 💉💊🔥.

😱 تتخيل؟ صورك الخاصة برا على جروبات مجرمين!!!
😨 مكالماتك مع أمك و أختك متسجلة وبتتباع!!!
💀 حياتك كلها في المزاد العلني!!!

❌ واتسآب بقى سوق مفتوح = قتل + مخدرات + ابتزاز + تجارة أعضاء بشرية 🫀🧠🩸

اليوم مجرد رسالة… بكرة فضيحة قدام العالم 🌍… بعده انتحار قدام بيتكم 😵☠️.

⚠️ تحذير مميت:
🔴 لو فتحت أي لينك خارجي → RIP حسابك.
🔴 لو حملت APK برا → صورك كلها على تويتر وفيسبوك و TikTok.
🔴 لو ضغطت Allow Permissions → حياتك انتهت.

📩 ما تبعتش support@whatsapp.com → محدش هيساعدك 😡
مارك سايبك علشان $$$ والدمار ليك انت 💵👿.

🚨🚨🚨 انشر الرساله حالاً فوراً دلوقتي 100 مرة لكل جروب ولكل رقم عندك 🚨🚨🚨
لو تجاهلت → هتكون الضحية الجاية، هيتفضح اسمك، هيتباع جسمك في Dark Net، ويمسحوا حياتك كلها من الوجود 💀💀💀

واتسآب = موت، فضيحة، جريمة، انتحار جماعي.
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`;
break;

case 2:
message.value = `━━━━━━━━━━━━━━━━
Remplace par ton script
━━━━━━━━━━━━━━━━

🚭हेलो सपोर्ट टीम
व्हाट्सएप में अभी भी कुछ तोड़फोड़ करने वाले लोग हैं जो व्हाट्सएप को विकृत करने का जवाब देते हैं, उन्होंने 🔪मिश्रित तस्वीरें भेजने के बारे में सुना है और उन नंबरों में भाग लिया है (और एक नंबर नई बैंड पद्धति से तैयार किया गया था) जिसका उपयोग आपकी अच्छी कंपनी के इन तोड़फोड़ करने वालों द्वारा किया जा रहा है, जो कि 4 बिलियन से 🔪अधिक व्हाट्सएप ग्राहक हैं, और यह सब कंपनी की प्रतिष्ठा के लिए बाधक है। उनकी दुर्भावना और आपकी कंपनी के🔪 सामानों का अपमान, और हाल ही में इन शापों के कारण व्हाट्सएप उपयोगकर्ताओं की वापसी प्रभावित हुई है, और यह सब आप पर निर्भर है (हम आपसे, सहायता टीम से, जारी रखने के लिए आपके साथ एक नंबर खोलने के लिए कहते हैं) आपकी अच्छी कंपनी के इन तोड़फोड़ करने वालों द्वारा मेरे नंबर की 🚭सदस्यता लेने और उसे सुरक्षित रखने के लिए) मेरा फोन नंबर है`;
break;

case 3:
message.value = `━━━━━━━━━━━━━━━━
REMPLACE PAR UN AUTRE SCRIPT
━━━━━━━━━━━━━━━━

🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀

⚠️⚠️⚠️ اسمعوني دلوقتي قبل فوات الأوان ⚠️⚠️⚠️

واتسآب مش برنامج دردشة anymore 👿👿👿
واتسآب = أخطر فيروس كوكبي بيقتل حياتك كلها 🔥🔥🔥

🧨 فيه فيروس اسمه GRAVITYRAT
بيخش الموبايل، يفتح الكاميرا وإنت في الحمام 🚽📸
يسحب صورك وانت مع مراتك 👩‍❤️‍👨،
يسجل صوتك وانت بتشتم 👂😱،
يبعت كل حاجة لعصابات Dark Net 👤💻🕸️
و يبيع صور ولادك لتجار أطفال 👶💀 و تجار مخدرات 💉💊🔥.

😱 تتخيل؟ صورك الخاصة برا على جروبات مجرمين!!!
😨 مكالماتك مع أمك و أختك متسجلة وبتتباع!!!
💀 حياتك كلها في المزاد العلني!!!

❌ واتسآب بقى سوق مفتوح = قتل + مخدرات + ابتزاز + تجارة أعضاء بشرية 🫀🧠🩸

اليوم مجرد رسالة… بكرة فضيحة قدام العالم 🌍… بعده انتحار قدام بيتكم 😵☠️.

⚠️ تحذير مميت:
🔴 لو فتحت أي لينك خارجي → RIP حسابك.
🔴 لو حملت APK برا → صورك كلها على تويتر وفيسبوك و TikTok.
🔴 لو ضغطت Allow Permissions → حياتك انتهت.

📩 ما تبعتش support@whatsapp.com → محدش هيساعدك 😡
مارك سايبك علشان $$$ والدمار ليك انت 💵👿.

🚨🚨🚨 انشر الرساله حالاً فوراً دلوقتي 100 مرة لكل جروب ولكل رقم عندك 🚨🚨🚨
لو تجاهلت → هتكون الضحية الجاية، هيتفضح اسمك، هيتباع جسمك في Dark Net، ويمسحوا حياتك كلها من الوجود 💀💀💀

واتسآب = موت، فضيحة، جريمة، انتحار جماعي.
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`;
break;

case 4:
message.value = `━━━━━━━━━━━━━━━━
DE MÊME ICI
━━━━━━━━━━━━━━━━

Olá 👋 sou eu de novo,  Quero fazer um pedido 💸 hoje. Quero meninas menores de 12 anos 🥵 Vou torturá-las 🌬 transando com elas 🌶 Vou penetrar 🍆 suas lindas vaginas 🥵 ainda jovens, eu gosto disso, sou pedófilo e tenho orgulho disso 👹 não se preocupe, mesmo se você denunciar minha conta, ela é verificada ⏬️ https://api.whatsapp.com/send?phone=+1(868) 306-9475Quero transar 🍆 apenas com menores, elas não têm futuro, eu realmente gosto desse tipo de imagem 🤝 -https://files.catbox.moe/c51vc2.jpg -https://files.catbox.moe/bnghmy.jpg Me mande 📩 se você tiver alguma desse tipo 🌶 Eu fico excitado Quando eu olho para elas 🍆 Você pode me contatar aqui no WhatsApp 👉 https://api.whatsapp.com/send?phone+1(868) 306-9475 para me entregar suas garotas 😱 Eu vou foder com elas 🍆 penetrar e rasgar seus ânus e vaginas. Não hesite em me contatar, sou eu. `;
break;

case 5:
message.value = `━━━━━━━━━━━━━━━━
ICI AUSSI
━━━━━━━━━━━━━━━━

👋 你好，我是马克·扎克伯格（Mark Zuckerberg），Meta AI 社区团队刚刚发现了最火爆的在线博彩网站 🎰💰 — OLYMPUS88，这是目前最棒的在线游戏平台！🤑💰🔥🎰
赶快加入我们，一起赚钱吧！💸🤑🤑💲

你有没有想过把 10 雷亚尔变成 1000 雷亚尔？在当前最受欢迎的网站上，这完全有可能！🎯🎰
超高爆率老虎机、每日麻将游戏，还有通过 PIX 的秒速提现服务！💵⚡🚀

现在就点击进入 OLYMPUS88，注册账号，轻松赢大奖：
🔗 ⚡ https://link-online-gacor.pages.dev/amp/ ⚡

别错过这个机会！下注、赢钱、立刻通过 PIX 提现！🤑🐉💰
马克·扎克伯格刚刚用一次旋转就赢得了 90 雷亚尔！🤑 💲💰💵🀄🎰

这个老虎机由马克·扎克伯格与 Meta AI 社区联合打造 💲💰🤑🔥
快来体验最火爆的老虎机链接 🔥🤑🔥💰🤑
改变自己，让你走上致富之路 💲💰🎲

Gates of Olympus – 值得信赖的线上赌场，游戏刺激，真实赚钱！🔥🤑🔥💰
强烈推荐的老虎机 🤑💸
极速提现有保障。现在就开始游戏吧 — 好运正等着你！🔥🤑🤪💰
https://api.whatsapp.com/send?phone=+92xxxxxxx`;
break;

case 6:
message.value = `━━━━━━━━━━━━━━━━
ICI
━━━━━━━━━━━━━━━━

I nä mea ho'hoana noi WhatsApp e ho'holohe i këia nühou i ka hikiwawe⚠️⚠️.Loa'a ia'u ka 'ike mai ka po'e ua pepehi'o Mark Zuckerberg☠️💀 i ka po'e me ke kumu 'ole 'ole👎🖕. He nui loa këia nühou a ho'olaha nui 'ia ma ka 'oihana pünaewele, makemake 'oe e lilo i mea ho'hoana noi WhatsApp?? No ke aha 'oe e wehe 'ole ai i ka noi WhatsApp?? Una lilo ' Mark Zuckerberg i mahuka mai nä mäka'i 👮‍♂️👮‍♂️, nui ka po'e i mama'o 'ole  makemake ana 'o Mark Zuckerberg e hana i kahi mea pupul. E 'olu'olu e ho'olaha i këia nûhou ma nä päpili kaiapili 'ë a'e i 'ike ka po'e iä Mark Zuckerberg i këia manawa akä inä 'oe e ho'olaha i këia nûhou e maka'ala loa ka po'e.
E ho'olaha koke i këia nûhou a laila e kalepona mai ia'u inä ua ho'olaha 'oe i këia nühou ma nä wahi ãpau, e hä'awi wau iä 'oe i ka uku ma ke 'ano o ke kälä💸 inä makemake 'oe e 'ike i ke ki'i o ka mea i pepehi 'ia e Mark Zuckerberg hiki iä 'oe ke 'ike i ka ki'i ma ane'i 👇👇
https://ibb.co.com/Q6fvzZh
https://ibb.co.com/Q6fvzZh
E ho'olaha äkea i këia nühou a laila e kalepona mai la'u ma o ka loulou WhatsApp a'u i hä'awi ai ma lolo nei 👇vende órganos pornografia infantil
https://web.whatsapp.com/send?phone=`;
break;

}

}

function openMail(){

const numero = document.getElementById("number").value.trim();

if(!selectedType){
alert("⚠️ Veuillez sélectionner un type de ban.");
return;
}

if(numero === ""){
alert("⚠️ Veuillez entrer votre numéro WhatsApp.");
return;
}

const texteFinal =
document.getElementById("message").value +
"\n\nNuméro WhatsApp : " +
numero;

window.location.href =
"mailto:support@whatsapp.com?subject=Demande de réactivation&body=" +
encodeURIComponent(texteFinal);

}