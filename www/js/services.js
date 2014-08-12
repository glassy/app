angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  var greens = [
    { id: 0, name: '呂東杰', pt:'綠黨', place:'桃園市', join:'市長',
      img: 'http://www.ltn.com.tw/2014/new/may/3/images/bigPic/400_400/136.jpg',
      href: 'https://www.facebook.com/lu.d.jie.1' },

    { id: 1, name: '羅岳峰', pt:'綠黨', place:'桃園市', loc: '桃園區', join:'市議員',
      img: 'https://scontent-a-pao.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10552394_758537830878561_2753608292935298480_n.jpg?oh=e8db0555b5dbebf51a22e22ea9814282&oe=546BE6F8',
      href: 'https://www.facebook.com/greentaiwanrober' },

    { id: 2, name: '王浩宇', pt:'綠黨', place:'桃園市', loc: '中壢區', join:'市議員',
      img: 'http://www.greenparty.org.tw/sites/www.greenparty.org.tw/files/image/people/10432239_4416185300852_241888792_n_1.jpg?1403090690',
      href: 'http://www.greenparty.org.tw/taxonomy/term/7' },

    { id: 3, name: '湯琳翔', pt:'綠黨', place:'桃園市', loc: '平鎮區', join:'市議員',
      img:'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpa1/t1.0-9/10527268_559400594171716_5567739429988365021_n.jpg',
      href: 'https://www.facebook.com/guardourfuture?fref=photo'},

    { id: 4, name: '張明麗', pt:'綠黨', place:'新北市', loc: '七堵區',join:'市議員',
      img:'http://i1148.photobucket.com/albums/o570/Ellen_Chang/1922063_814992261848100_1649062647_n_zps46f5af57.jpg',
      href: 'http://ellen1105.pixnet.net/blog/post/183879549-%E8%B2%AC%E4%BB%BB%E4%BE%86%E4%BA%86%EF%BC%8C%E6%89%BF%E6%93%94%E8%B5%B7%E4%BE%86%EF%BC%81%E2%80%94%E2%80%94%E7%B6%A0%E9%BB%A8%E5%9F%BA%E9%9A%86%E5%B8%82%E8%AD%B0%E5%93%A1%E6%93%AC'},
  
    { id: 5, name: '王鐘銘', pt:'綠黨', place:'新北市',loc: '淡水區', join:'市議員',
      img: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xfp1/t1.0-9/10367590_10152117666682308_7802238503509173900_n.jpg',
      href: 'https://www.facebook.com/mingwangx'  },

    { id: 6, name: '楊木萬', pt:'綠黨', place:'新北市',loc: '樹林區',join:'市議員',
      img: 'http://earthdefenseforce.files.wordpress.com/2011/11/dm.jpg'},
    { id: 7, name: '楊志翔', pt:'綠黨', place:'新竹市',loc: '東區',join:'市議員',
      img: ''},
    { id: 8, name: '梁益誌', pt:'綠黨', place:'高雄市',loc: '三民區',join:'市議員',
      img: 'http://mypaper.pchome.com.tw/show/article/christine1511/A1327405663'},
    { id: 9, name: '傅靜凡', pt:'綠黨', place:'澎湖縣',loc: '馬公區',join:'縣議員',
      img:'http://ext.pimg.tw/antigamble2014/1403145616-2080135968_m.jpg'}
  ];



  var boss = [
    {id: 10, name: '周佳君', pt:'人民民主陣線', place:'台北市',loc:'士林北投區', join:'市議員',
      img: 'http://2.bp.blogspot.com/-w1uSh64-8zs/U-YYp_0RU6I/AAAAAAAAAKo/2kcH1OpR6DU/s1600/%E4%BD%B3%E5%90%9B%E5%85%A8%E5%AE%B6%E7%85%A7%E6%B5%B7%E9%82%8A.jpg',
      herf: 'http://mixing-peopleboss.blogspot.tw/2011/09/2.html'    },
    {id: 11, name: '王奕凱', pt:'人民民主陣線', place:'台北市',loc:'士林北投區', join:'市議員',
      img: 'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10351827_891748514172054_6201258901555931425_n.jpg?oh=a4b5484df53aed01dc1e16bd2b363dc2&oe=545F01D0&__gda__=1416669882_4bc3ec3e2284bf86000fc0f5e85b2459',
      href: 'https://www.facebook.com/xiao.s.feng'},
    {id: 12, name: '王芝安', pt:'人民民主陣線', place:'台北市',loc:'士林區岩山里', join:'里長',
     img:'',
      href: 'http://folkclass.pixnet.net/blog/post/57735831-%E3%80%90%E5%BF%AB%E6%A8%82%E9%81%8E%E5%8B%95%E4%B8%8D%E6%98%AF%E7%97%85%EF%BC%8C%E9%87%8C%E6%B0%91%E4%BD%9C%E4%B8%BB%E6%94%BF%E6%B2%BB%E7%B6%AD%E4%BB%96%E5%91%BD%E3%80%91%E8%AB%96' },
    {id: 13, name: '莊惠玲', pt:'人民民主陣線', place:'台北市',loc:'士林區福華里', join:'里長' },
    {id: 14, name: '侯務葵', pt:'人民民主陣線', place:'台北市',loc:'北投區奇岩里', join:'里長',
      img:'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-frc3/t1.0-9/6233_563259283689396_834296174_n.jpg' },
    {id: 15, name: '李健裕', pt:'人民民主陣線', place:'台北市',loc:'北投區清江里', join:'里長',
      img: 'https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpa1/t1.0-9/10526047_548232095299188_2554240064436820947_n.png',
      href: 'https://www.facebook.com/poorgaypolitics/photos/a.430304107091988.1073741826.400274523428280/548232095299188/?type=1&theater' },
    {id: 16, name: '鄧雅文', pt:'人民民主陣線', place:'台北市',loc:'北投區桃源里', join:'里長',
      img: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/t1.0-9/1625625_751360391596511_4428316630283298898_n.jpg' },
    {id: 17, name: '梁秀眉', pt:'人民民主陣線', place:'台北市',loc:'北投區桃源里', join:'里長' },
    {id: 18, name: '李素楨', pt:'人民民主陣線', place:'新北市',loc:'永和區前溪里', join:'里長' },
    {id: 19, name: '李丹鳳', pt:'人民民主陣線', place:'新北市',loc:'三重蘆洲區', join:'市議員',
      img: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/t1.0-9/71973_553693604664718_342997441_n.jpg',
      href:'https://www.facebook.com/notes/%E6%B0%91%E9%99%A3%E3%81%AE%E4%B8%89%E8%98%86%E5%B7%A5%E4%BD%9C%E7%AB%99/%E6%9D%8E%E4%B8%B9%E9%B3%B3%E5%8F%83%E8%88%87%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%89%E9%87%8D%E8%98%86%E6%B4%B2%E5%8D%80%E5%B8%82%E8%AD%B0%E5%93%A1%E6%93%AC%E5%80%99%E9%81%B8%E4%BA%BA%E7%9A%84%E6%94%BF%E6%B2%BB%E5%91%8A%E7%99%BD4%E9%97%9C%E6%96%BC%E9%81%B8%E8%88%89%E6%88%91%E6%9C%89%E9%81%8E%E4%BB%80%E9%BA%BC%E7%B6%93%E9%A9%97/676999079053161' }
  ];

  return {
    all: function() {
      return greens.concat(boss);
    },
    green: function() {
      return greens;
    },
    boss: function() {
      return boss;
    },
    get: function(friendId){
      return greens.concat(boss)[friendId];
    }

  }
})

.factory('Glassy', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var ways = [
    { id: 0, name: '透明'},
    { id: 2, name: '群策'},
    { id: 3, name: '阿米八'},
  ];

  var targets = [
    {id: 4, name: '透明政黨'},
    {id: 5, name: '透明政府'},
    {id: 6, name: '第三勢力'}
  ];

  return {
    all: function() {
      return greens.concat(boss);
    },
    green: function() {
      return greens;
    },
    boss: function() {
      return boss;
    },
    get: function(friendId){
      return greens.concat(boss)[friendId];
    }

  }
})

.filter("toIcon",function(){
  return function(k){      
      var d = {'綠黨': 'img/green.png',
               '人民民主陣線': 'img/boss.png'};
      return d[k];
  }
})

.filter("toEn",function(){
  return function(k){      
      var d = {'綠黨': 'green',
               '人民民主陣線': 'boss'};
      return d[k];
  }
})

.filter("toDiscribe",function(){
  return function(k){
      var d = {'綠黨': '綠色經濟環保黨',
               '人民民主陣線': '守護弱勢公義黨'};
      return d[k];
  }
});
