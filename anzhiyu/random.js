var posts=["posts/14fdff28/","posts/2e588cea/","posts/a6d8a2bd/","posts/d48132d3/","posts/62d16b0a/","posts/de047ebd/","posts/346c3135/","posts/14ad98df/","posts/f09f0fee/","posts/449b647d/","posts/79cb2f42/","posts/cbc15314/","posts/a906105/","posts/4fb78f59/","posts/cbc34f9e/","posts/464c6b9b/","posts/4a17b156/","posts/8932418/","posts/69558d4b/","posts/8ac430bc/","posts/75b3fea8/","posts/7f826b71/","posts/1e3a940e/","posts/142f8ddb/","posts/951ab7b6/","posts/29e6ce97/","posts/364ea8cc/","posts/de7c53fe/","posts/b6f5643d/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Butterfly主题","link":"https://butterfly.js.org/","avatar":"https://butterfly.js.org/img/avatar.png","descr":"🦋 Hexo的主题","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","recommend":false},{"name":"Fungit","link":"https://fungit.org","avatar":"https://fungit.org/avatar.png","descr":"木秀于林 風必摧之","recommend":false},{"name":"小智の空间站","link":"https://blog.cuixinyu.com","avatar":"https://blog.cuixinyu.com/img/others/avatar.png","descr":"记录学习踩坑","recommend":false},{"name":"Ariasakaの小窝","link":"https://yisous.xyz","avatar":"https://bu.dusays.com/2022/12/15/639a9ebbbc1ad.jpg","descr":"人有悲欢离合 月有阴晴圆缺","recommend":false},{"name":"Winner365のBlog","link":"https://blog.365sites.top","avatar":"http://blog.hicosor.top/favicon.ico","descr":"所谓浮躁，也就是时时刻刻，希望以最短的时间，博取最多的存在感优越感和自我认同","recommend":false},{"name":"Tianli","link":"https://tianli-blog.club/","avatar":"https://img1.tianli0.top/logo.png","descr":"自知之明是最可贵的知识！","recommend":false},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://npm.elemecdn.com/@kmar/fonts@1/avatar/own.png","descr":"开发学习启发性二刺螈","recommend":false},{"name":"探人间","link":"https://www.hydsb0.com","avatar":"https://bu.dusays.com/2023/07/10/64abbf448d530.jpg","descr":"努力吃上更贵的雪糕！","recommend":false},{"name":"虹色轨迹🌠","link":"https://dil.illlli.com","avatar":"https://dil.illlli.com/assets/avatar.webp","descr":"做一颗星星，有棱有角，黑暗中闪闪发光🍭🍭🍭","recommend":false},{"name":"别亦难","link":"https://lazyingman.com","avatar":"https://bu.dusays.com/2023/06/23/64959cf745a4d.png","descr":"准时不定期更新","recommend":false},{"name":"寒烟志","link":"https://yanyuplus.cn/","avatar":"https://www.qiaoxiao.top/static/avater/avater.jpg","descr":"半山腰总是挤的，你得去山顶看看","recommend":false},{"name":"偷闲小站","link":"https://blog.andypang.cc/","avatar":"https://image.andypang.cc/images/202309141917982.jpg","descr":"跨越山海，终见曙光","recommend":false},{"name":"Revincx","link":"https://blog.revincx.icu/","avatar":"https://cdn.jsdelivr.net/gh/Revincx/blog-assets@master/images/avatar.jpg","descr":"可爱就是正义~","recommend":false},{"name":"GanSer","link":"https://www.gan1ser.top/","avatar":"https://pic.imgdb.cn/item/63f16cddf144a010070697c8.jpg","descr":"紫箫吟断，素笺恨切","recommend":false},{"name":"棋の小站","link":"https://blog.qi1.zone/","avatar":"https://blog.qi1.zone/avatar.png","descr":"分享对社会现状的思考和高质量技术知识。","recommend":false},{"name":"鹿啵包の小窝","link":"https://pochacco.top/","avatar":"https://pochacco.top/img/Avatar.gif","descr":"落日橘子海，揽尽世间温柔","recommend":false},{"name":"Mycpen","link":"https://blog.cpen.top/","avatar":"https://blog.cpen.top/img/avatar.jpg","descr":"这是一个有趣的博客","recommend":false},{"name":"Guo Le's Blog","link":"https://blog.guole.fun/","avatar":"https://blog.guole.fun/img/gl.jpg","descr":"生命是独立是自由是爱与和平","recommend":false},{"name":"满心记","link":"https://blog.lovelu.top/","avatar":"https://bu.dusays.com/2023/01/29/63d5bf7fa0d2c.png","descr":"追求让人充实，分享让人快乐","recommend":false},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://www.imaegoo.com/images/avatar.jpg","descr":"虹墨空间站","recommend":false},{"name":"宇阳","link":"https://liuyuyang.net/","avatar":"http://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640","descr":"逐渐强大的全栈工程师","recommend":false},{"name":"快乐小凳凳`Blog","link":"https://www.dqywy.top/","avatar":"https://s1.ax1x.com/2023/06/11/pCVjudK.png","descr":"Sow nothing, reap nothing.","recommend":false},{"name":"又见苍岚","link":"https://www.zywvvd.com","avatar":"https://www.zywvvd.com/image/avatar.png","descr":"蓝天依旧，明眸如初","recommend":false},{"name":"Yang's Harbor","link":"https://discover304.top/","avatar":"https://discover304.top/img/head.jpg","descr":"Space of Tech, Love and Thought.","recommend":false},{"name":"竹山一叶","link":"https://zsyyblog.com","avatar":"https://img.zsyyblog.com/favicon.jpg","descr":"来了就不想走的小家","recommend":false},{"name":"兼一书虫","link":"https://study.hycbook.com/","avatar":"https://pic.hycbook.com/i/hexo/person_img/兼一头像.jpg","descr":"知足且上进，温柔而坚定，生活中的温暖总会与你不期而遇。","recommend":false},{"name":"Ethan.Tzy","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","recommend":false},{"name":"lptexas - の - 小狼窝","link":"https://lptexas.top","avatar":"https://lptexas.top/img/web-info/avator.jpg","descr":"记录学习与生活，分享技术与快乐~","recommend":false},{"name":"爱编程的小明","link":"https://blog.kobal.top/","avatar":"https://gcore.jsdelivr.net/gh/kebuAAA/Picloud@main/img/avatar.webp","descr":"不要温和地走进那个良夜","recommend":false},{"name":"枫叶","link":"https://blog.aqcoder.cn","avatar":"https://blog.aqcoder.cn/img/avatar.png","descr":"分享知识，认识世界","recommend":false},{"name":"摘星怪’ blog","link":"https://www.lovezxg.cn/","avatar":"https://up.lovezxg.cn/logo/blog.jpg","descr":"时光荏苒，流年似水","recommend":false},{"name":"析悦子の梦","link":"https://blog.mcj.life/","avatar":"https://blog.mcj.life/img/avatar.jpg","descr":"笑口常开, 好彩自然来.","recommend":false},{"name":"Ganzhe","link":"https://ganzhe.site/","avatar":"https://pic.imgdb.cn/item/64895d391ddac507cce97bc3.webp","descr":"顺其自然，持之以恒","recommend":false},{"name":"HiPeach","link":"https://blog.opeach.cn","avatar":"https://npm.elemecdn.com/opicture@1.0.0/main/avatar.webp","descr":"妙不可言","recommend":false},{"name":"苏苏の休憩小屋","link":"https://luckysusu.top/","avatar":"https://bu.dusays.com/2023/10/10/6524e2dc0735a.jpg","descr":"归途依旧可爱","recommend":false},{"name":"海拥","link":"https://haiyong.site","avatar":"https://haiyong.site/img/favicon.png","descr":"一枚乐于分享技术与快乐的博主","recommend":false},{"name":"Guo Le's Blog","link":"https://blog.guole.fun/","avatar":"https://blog.guole.fun/img/gl.jpg","descr":"生命是独立是自由是爱与和平","recommend":false},{"name":"Echo 的小窝","link":"https://www.liveout.cn/","avatar":"https://yy.liveout.cn/photo/photo2.jpg","descr":"漂泊于互联网中的小窝","recommend":false},{"name":"一府","link":"https://blog.duolaa.asia/","avatar":"https://resources.blog.duolaa.asia/img/favicon.webp","descr":"学习·分享·成就","recommend":false},{"name":"南方嘉木","link":"https://gavin-chen.top/","avatar":"https://gavin-chen.top/img/avatar.webp","descr":"不畏将来，不念过往。","recommend":false},{"name":"Efu","link":"https://www.efu.me","avatar":"https://s3.qjqq.cn/47/660a7ece07609.webp!color","descr":"An Open Source worker.","recommend":false},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","recommend":false},{"name":"余生","link":"https://yszwbk.com/","avatar":"https://www.yszwbk.com/img/tx.jpg","descr":"好好生活，保持快乐。","recommend":false},{"name":"六月是只猫","link":"https://www.lyszm.com/","avatar":"https://www.lyszm.com/img/avatar.jpg","descr":"生活，一半家长里短，一半山川湖海…","recommend":false},{"name":"葱苓sama","link":"https://blog.ciraos.top","avatar":"https://img01.anheyu.com/useruploads/222/2023/10/16/652cbfc482491.jpg","descr":"Don't worry, Be happy.","recommend":false},{"name":"樱花小镇","link":"https://blog.sakura.vin","avatar":"https://www.sakura.vin/favicon.ico","descr":"小园新种红樱树，闲绕花枝便当游。","recommend":false},{"name":"Calyee","link":"https://blog.calyee.top/","avatar":"https://blog.calyee.top/img/avatar.jpg","descr":"追求充实，分享快乐","recommend":false},{"name":"杜老师说","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑也!","recommend":false},{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://blog.kouseki.cn/imgs/avatar.webp","descr":"愿岁并谢，与友长兮","recommend":false},{"name":"Mr.Nyampasu","link":"https://blog.mpsxx.top/","avatar":"https://blog.mpsxx.top/img/favicon.svg","descr":"分享、学习、生活","recommend":false},{"name":"Cartafi","link":"https://www.startly.cn","avatar":"https://startly.s3.bitiful.net/links/avatar/avatar.webp","descr":"互联网中的寂静之地","recommend":false},{"name":"Shine","link":"https://blog.shineyu.cn/","avatar":"https://blog.shineyu.cn/img/shineyu_avatar.webp","descr":"热爱生活点滴，分享时刻精彩。","recommend":false},{"name":"xiaoger","link":"https://xiaoger.top","avatar":"https://image.xiaoger.top/xiaoger/config/xiaoger.jpg","descr":"个人学习和分享壁纸的博客","recommend":false},{"name":"🏴‍☠️浴巾的贼船🏴‍☠️","link":"https://www.chunyujin.top","avatar":"https://map--depot.oss-cn-hangzhou.aliyuncs.com/image/202303071113259.gif","descr":"水可载舟，亦可赛艇🚤","recommend":false},{"name":"Mr·Ldd Blog","link":"https://nxlbc.cn:8091/","avatar":"https://nxlbc.cn:8091/upload/哆啦A梦.jpg","descr":"Nas、服务器、记录学习","recommend":false},{"name":"任平生","link":"https://buuu.cn/","avatar":"https://buuu.cn/favicon.jpg","descr":"竹杖芒鞋轻胜马 谁怕? 一蓑烟雨任平生","recommend":false}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };