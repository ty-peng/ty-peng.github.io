/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "21b4a7be169307b02ba55336abfd0c1b"
  },
  {
    "url": "assets/css/0.styles.803c785b.css",
    "revision": "88b79bf6ecf255b51d03007ad6478102"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.1523e2ce.js",
    "revision": "30b68addb40106d7cab8d6ec17f188fd"
  },
  {
    "url": "assets/js/10.6b6591e1.js",
    "revision": "af8d38113c916e9440706cfb57d208f1"
  },
  {
    "url": "assets/js/100.ae21db75.js",
    "revision": "849f47c88208b1fe201736ce7a4c7140"
  },
  {
    "url": "assets/js/101.c974bd6b.js",
    "revision": "1505c426f77f42cd01cb6728fa6f770d"
  },
  {
    "url": "assets/js/102.6e94abee.js",
    "revision": "07010a35c56c03fe4c40e8a3586c9924"
  },
  {
    "url": "assets/js/103.21b38c37.js",
    "revision": "604ed16c7b39a3843e8778c9dd3feb90"
  },
  {
    "url": "assets/js/104.9543a04e.js",
    "revision": "3cb8c8f4a975d22d2c327af11e1ba7fe"
  },
  {
    "url": "assets/js/105.97131c58.js",
    "revision": "d9c45b60f99cd9e48911a8051f5a8d6e"
  },
  {
    "url": "assets/js/106.3ba06954.js",
    "revision": "460c5ba10a02ebc5a715aa1242472a98"
  },
  {
    "url": "assets/js/107.70f3ab43.js",
    "revision": "369fc5434c107b375064688d659329d2"
  },
  {
    "url": "assets/js/108.26403c96.js",
    "revision": "fccda73b8b0f8301c61f6178da892db2"
  },
  {
    "url": "assets/js/109.43717c97.js",
    "revision": "b62d33b3546e2eadf749f975ac1d4539"
  },
  {
    "url": "assets/js/11.e67f5c27.js",
    "revision": "eeeed78d6f6478a992ae43e22af1ef7f"
  },
  {
    "url": "assets/js/110.0a7a1f12.js",
    "revision": "ff8fa82f5be58933a0d88b8d13959992"
  },
  {
    "url": "assets/js/111.83c7035c.js",
    "revision": "838527bc63b235240a2b82d4d80bba3e"
  },
  {
    "url": "assets/js/12.62aaabd1.js",
    "revision": "27f7a5eb5d44905442177f1645bdc95f"
  },
  {
    "url": "assets/js/13.b92fe7a6.js",
    "revision": "45f8980a90a40fd21d2c2389a8a0beea"
  },
  {
    "url": "assets/js/14.f413b7ba.js",
    "revision": "febbaf7fa046c3f1dd7827f24e6015ea"
  },
  {
    "url": "assets/js/15.21d805fb.js",
    "revision": "12101a2ff2c6e475a2d3183da0d83138"
  },
  {
    "url": "assets/js/16.0fca6bb6.js",
    "revision": "b711a3a8f368b280edb1b6cad442834d"
  },
  {
    "url": "assets/js/17.aef304ee.js",
    "revision": "e40a64837ca2ef858cf9656cd8e9502e"
  },
  {
    "url": "assets/js/18.a557e4e0.js",
    "revision": "f41ef5c32ea6f14469c6d5db09d52ea0"
  },
  {
    "url": "assets/js/19.4d636efe.js",
    "revision": "58828d07638ef745f064b89448df503a"
  },
  {
    "url": "assets/js/20.63b18a09.js",
    "revision": "c2db8f1a245f8955786ecbef1cdfc383"
  },
  {
    "url": "assets/js/21.0972ae3e.js",
    "revision": "d0ad1d508eef279930d13ba18bbd2391"
  },
  {
    "url": "assets/js/22.19b0813b.js",
    "revision": "9424a7369bf0228cbf87323016a107f9"
  },
  {
    "url": "assets/js/23.b62a6faf.js",
    "revision": "b696cd0259b5818f0cb5569da3b4b6eb"
  },
  {
    "url": "assets/js/24.70873736.js",
    "revision": "89780fa1f9a1238a70de031b7c0a925a"
  },
  {
    "url": "assets/js/25.9f8c6c8c.js",
    "revision": "dad3f3c508ec124ba80f708858427955"
  },
  {
    "url": "assets/js/26.e6a0c5f3.js",
    "revision": "175c547b244cf9ffcddc96c2b828f513"
  },
  {
    "url": "assets/js/27.642f64a3.js",
    "revision": "db8ebb494aa66ac9c999e4ee1d8d86e9"
  },
  {
    "url": "assets/js/28.1f1752c8.js",
    "revision": "da2a881fa92c1446d8cd3492d689628a"
  },
  {
    "url": "assets/js/29.8bc91005.js",
    "revision": "4d324e40d0f7a170c4f0affbcaebfdf9"
  },
  {
    "url": "assets/js/30.b02ffe4f.js",
    "revision": "00cf546fa61909dd1b710cba20750d50"
  },
  {
    "url": "assets/js/31.0e23993e.js",
    "revision": "ee6e1dd78df7e38f710f84f5c1710f3d"
  },
  {
    "url": "assets/js/32.7f0289ca.js",
    "revision": "4945668a279f6c9011f5b82dd92b9be1"
  },
  {
    "url": "assets/js/33.8d638594.js",
    "revision": "e73a4155b1d037f6d7e0d7dbd8aeb73c"
  },
  {
    "url": "assets/js/34.17ac5603.js",
    "revision": "48c30b03bb36247e54eceb0402b3915f"
  },
  {
    "url": "assets/js/35.cbdd5828.js",
    "revision": "a04a495f9b5549759465d83cf8a0fe22"
  },
  {
    "url": "assets/js/36.adf2690b.js",
    "revision": "4d5a2e62020e4854aa3720181d1f06b4"
  },
  {
    "url": "assets/js/37.ecf2c9c8.js",
    "revision": "ce2fa1aa225a385ebf82536606454da6"
  },
  {
    "url": "assets/js/38.3514f76b.js",
    "revision": "c857e14f5fb01a190c8caf4535d3d795"
  },
  {
    "url": "assets/js/39.0df2c961.js",
    "revision": "bd59a3b7482433ea43b7c40bc8e497de"
  },
  {
    "url": "assets/js/4.6b1d0d33.js",
    "revision": "b4cf14f17c7252b01e6229892da225b8"
  },
  {
    "url": "assets/js/40.650db3e2.js",
    "revision": "6cbd9807ca4884db9f875e919fba5866"
  },
  {
    "url": "assets/js/41.b1b86ac1.js",
    "revision": "b4d1ce9f9885f5215e03e82699df0994"
  },
  {
    "url": "assets/js/42.76dcc693.js",
    "revision": "a6a65fe94baaedb7aa46390b209cc6e5"
  },
  {
    "url": "assets/js/43.0e2782a6.js",
    "revision": "84a28a49e6759cdc9b8408dfcee40ab0"
  },
  {
    "url": "assets/js/44.3740e0d3.js",
    "revision": "19cf3ba3913c38815ad94a0254a356d4"
  },
  {
    "url": "assets/js/45.80ac1998.js",
    "revision": "ec663698188d0b94067925649123b781"
  },
  {
    "url": "assets/js/46.419d3541.js",
    "revision": "5c7dc4d43845a614088f6b5c2574cfd4"
  },
  {
    "url": "assets/js/47.afa41e80.js",
    "revision": "f1854ffaa8a4843b98a268bf4133b6d3"
  },
  {
    "url": "assets/js/48.01f37867.js",
    "revision": "78fcc96ef1ffaa5e3bac825002fc3ed3"
  },
  {
    "url": "assets/js/49.16338994.js",
    "revision": "9f113b2fa9293d67040b0c5cf9ac76e8"
  },
  {
    "url": "assets/js/5.78eddf9e.js",
    "revision": "1f9e90428d0b58d22da811828186df43"
  },
  {
    "url": "assets/js/50.f5d7e044.js",
    "revision": "bb0dc1e081eaa55b5101419d6b77e22e"
  },
  {
    "url": "assets/js/51.e3532ff7.js",
    "revision": "a39c58133f263b45d2a8d4fe9576556f"
  },
  {
    "url": "assets/js/52.f1e2f9a3.js",
    "revision": "fddfc02729e5e02186315700291be866"
  },
  {
    "url": "assets/js/53.9dae0d86.js",
    "revision": "bb3f7652d6f962e963f73f8b9d3a1872"
  },
  {
    "url": "assets/js/54.2de17383.js",
    "revision": "7a856e3224dd41f0ac6230a4d2e9f747"
  },
  {
    "url": "assets/js/55.31580a8d.js",
    "revision": "4e5fc51fb929bf37e291c935bdba7cfd"
  },
  {
    "url": "assets/js/56.f9c6896e.js",
    "revision": "f45bc6d9b62c164a21641a49fd15ab15"
  },
  {
    "url": "assets/js/57.4836947d.js",
    "revision": "a1ff4664d5f7c6fb1e3559a524c0fd30"
  },
  {
    "url": "assets/js/58.7821e265.js",
    "revision": "e7f82e5635444255b462ebae01ba8232"
  },
  {
    "url": "assets/js/59.b9a5df8a.js",
    "revision": "37727b2d97b09a5cd6382d9336aef891"
  },
  {
    "url": "assets/js/6.2495e67b.js",
    "revision": "9fdb715fabc335df57d6ede6eff353d5"
  },
  {
    "url": "assets/js/60.5fc8c3c7.js",
    "revision": "5524efc86ed209dd4834479611de0c07"
  },
  {
    "url": "assets/js/61.97b786a4.js",
    "revision": "f16f27b81c279875ba0993f788d95914"
  },
  {
    "url": "assets/js/62.ef031cff.js",
    "revision": "3ed8beb99f56fb33e339f7cc83a3ea5c"
  },
  {
    "url": "assets/js/63.87c592cb.js",
    "revision": "c86e088f029395f07b15cb2229676ccc"
  },
  {
    "url": "assets/js/64.fce7a41b.js",
    "revision": "6edcbe8eeb8610e94f64e1d95f5d50ce"
  },
  {
    "url": "assets/js/65.92af7c19.js",
    "revision": "e37ada28cb0c58c967ca9bb9a54cf44f"
  },
  {
    "url": "assets/js/66.4ad29581.js",
    "revision": "466e04f078922a8137a66905e5961fc1"
  },
  {
    "url": "assets/js/67.6b9baa69.js",
    "revision": "0e1bf0c421347cb6b49521b112784d5f"
  },
  {
    "url": "assets/js/68.4f1ea8c0.js",
    "revision": "0d5af2bbdfc80ada777f1e73bbca403c"
  },
  {
    "url": "assets/js/69.66120420.js",
    "revision": "353dae12cf52973a026fb036d5259354"
  },
  {
    "url": "assets/js/7.e61b7feb.js",
    "revision": "7e267aa15e9df093be7e4bc3bffdd1e6"
  },
  {
    "url": "assets/js/70.9c597325.js",
    "revision": "077e3564317d888bd9eaf89b3719966c"
  },
  {
    "url": "assets/js/71.46b3785c.js",
    "revision": "a966339a2d229e69c3ef27621dc7b400"
  },
  {
    "url": "assets/js/72.b1b6abcb.js",
    "revision": "647b6d39b2e4b273131cb1cbf2f4a7a4"
  },
  {
    "url": "assets/js/73.ab48e004.js",
    "revision": "c10b829b1cbee8c89b6aff2fda425a62"
  },
  {
    "url": "assets/js/74.a406a0e8.js",
    "revision": "332bf50674def672ac70c19a05530647"
  },
  {
    "url": "assets/js/75.83d8875f.js",
    "revision": "3bbdce1d870778c355abbf29dd1b267b"
  },
  {
    "url": "assets/js/76.51d08c4c.js",
    "revision": "826e416baf0b79d8b48514e5570ce0cd"
  },
  {
    "url": "assets/js/77.846da60c.js",
    "revision": "2439be5bbe2b1c9c134ae5b80bcd23d9"
  },
  {
    "url": "assets/js/78.56522ad0.js",
    "revision": "b49643b3eb2fadf590cb999f0d928c03"
  },
  {
    "url": "assets/js/79.97fc6c67.js",
    "revision": "281e9d1b778c8f143f3c94c0dffa19b0"
  },
  {
    "url": "assets/js/8.443db2c2.js",
    "revision": "5f612bedf83a3b520d0944fecc64bb76"
  },
  {
    "url": "assets/js/80.cd305b60.js",
    "revision": "8b4a9c5b1e31c9e31d5b42c068235e93"
  },
  {
    "url": "assets/js/81.e84ac5f9.js",
    "revision": "d2db52a909c6243c3dfed604124bf24c"
  },
  {
    "url": "assets/js/82.449442eb.js",
    "revision": "8d76d7b596f7503855d5b2a7a5336762"
  },
  {
    "url": "assets/js/83.2be1c956.js",
    "revision": "7ab84e8745041784b64a864b9872cfd0"
  },
  {
    "url": "assets/js/84.b91acdb8.js",
    "revision": "4bbbec634ef3cde52a4f717696e5020f"
  },
  {
    "url": "assets/js/85.8a6c7acc.js",
    "revision": "9b85364afdf76c11f6096537bccf93c5"
  },
  {
    "url": "assets/js/86.aa2d0966.js",
    "revision": "158c6ce0c2a8c158f2c680e238eed63e"
  },
  {
    "url": "assets/js/87.6def62f7.js",
    "revision": "d5dfc2445d4c7ee4c985f73d2192d6e5"
  },
  {
    "url": "assets/js/88.22a343f4.js",
    "revision": "9dff99ed508873ff5339426df3c61540"
  },
  {
    "url": "assets/js/89.e1f07c48.js",
    "revision": "d5134e3032b503e73065b434c6926a77"
  },
  {
    "url": "assets/js/9.098a38d8.js",
    "revision": "0f21e5cba4fccd85028fb93d68155acb"
  },
  {
    "url": "assets/js/90.21aaadb8.js",
    "revision": "5b682725b7c70d445837902e1c9bcc89"
  },
  {
    "url": "assets/js/91.46bc8ae8.js",
    "revision": "40f6bff58e6708fda4a93656c3ce3562"
  },
  {
    "url": "assets/js/92.bc7c46ce.js",
    "revision": "40fc887f7f78a1dd563b3c505962340e"
  },
  {
    "url": "assets/js/93.94c99c68.js",
    "revision": "6eacef7fbf60a9af0924de353a77d2cf"
  },
  {
    "url": "assets/js/94.0555b1ab.js",
    "revision": "70065e9b0e6d2d42a1417dc9be62df22"
  },
  {
    "url": "assets/js/95.1bb2c7dd.js",
    "revision": "70c4cf119a7d4ef2e1ec4d021df7e605"
  },
  {
    "url": "assets/js/96.9aef14e9.js",
    "revision": "63a6016aa1bd261e376b9e53a61f55f3"
  },
  {
    "url": "assets/js/97.bed374d8.js",
    "revision": "787667a3a540d8b6e694625c8d20e402"
  },
  {
    "url": "assets/js/98.0176c04c.js",
    "revision": "71e2da2ee0326cbc84cafce6159d8427"
  },
  {
    "url": "assets/js/99.757f1321.js",
    "revision": "243390473469409cccfa1e52ddf9a1ed"
  },
  {
    "url": "assets/js/app.cc203b1f.js",
    "revision": "27b56887b03cc79a04bb97851f72af2f"
  },
  {
    "url": "assets/js/vendors~flowchart.ecdf697a.js",
    "revision": "8c0ac8e9d1753ee63205fc62e66b6db8"
  },
  {
    "url": "avatar.png",
    "revision": "f1511f9d0f5eab671ed1e00e7c2a4a75"
  },
  {
    "url": "baidu_verify_UMNmWdWYdG.html",
    "revision": "ccd49ecafa072065494a46dc49f3badc"
  },
  {
    "url": "bg.jpg",
    "revision": "eeb52a7402b93340c8370fedd1e9e745"
  },
  {
    "url": "categories/ai/index.html",
    "revision": "ef5ba3606eff74514d4917caf999bb79"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "586239fd74ffe13b2adcc5f3488653bb"
  },
  {
    "url": "categories/back-end/index.html",
    "revision": "e762fe4ed954801f1c6b253ae42a18ed"
  },
  {
    "url": "categories/back-end/page/2/index.html",
    "revision": "c2efeb7fba28dd208ec012bb804804a6"
  },
  {
    "url": "categories/back-end/page/3/index.html",
    "revision": "60883c0d09fcd8ce1eaf0bfe64bd0645"
  },
  {
    "url": "categories/back-end/page/4/index.html",
    "revision": "8c51ca24130f938233176f91ec3f3b5d"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "f24b38c2c6885a507abd42f7a37d1c7a"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "73e36ce756a2dc4a859dfa11090853dd"
  },
  {
    "url": "categories/index.html",
    "revision": "5a300e2489e963de9fd9b5eead8fee51"
  },
  {
    "url": "categories/machine-leaning/index.html",
    "revision": "23052070b929db1482f3aed958b56926"
  },
  {
    "url": "categories/machine-learning/index.html",
    "revision": "78389dca8a4cd69075878cfede81650d"
  },
  {
    "url": "categories/note/index.html",
    "revision": "721cc8ae5ee65e4cf423a18c17c98a0f"
  },
  {
    "url": "categories/note/page/2/index.html",
    "revision": "a3956813c693d039d91563b017a8ff9e"
  },
  {
    "url": "categories/note/page/3/index.html",
    "revision": "d496da8187297afca2fa1e918fe67a5b"
  },
  {
    "url": "categories/note/page/4/index.html",
    "revision": "c54ba391eb8d43e70e4f53b19bb5ed5f"
  },
  {
    "url": "categories/note/page/5/index.html",
    "revision": "419d5054ae0e3d544c3edb3d32d80646"
  },
  {
    "url": "categories/note/page/6/index.html",
    "revision": "53792df4068104cfd8a67b9dc85ea379"
  },
  {
    "url": "categories/note/page/7/index.html",
    "revision": "a4cee78532cb87fb673fca7be1b4fc95"
  },
  {
    "url": "categories/ops/index.html",
    "revision": "6a259f140fdfe099dba29cd844393de5"
  },
  {
    "url": "categories/ops/page/2/index.html",
    "revision": "ac53f20a83a4a94dc039502af955525b"
  },
  {
    "url": "categories/ops/page/3/index.html",
    "revision": "84716683c5c73f3270bd3ad9b433f480"
  },
  {
    "url": "categories/other/index.html",
    "revision": "fea34c21aea7eff48a0c250969b4632d"
  },
  {
    "url": "categories/security/index.html",
    "revision": "4ee258150b29b9e4ddf3b1afba3c4fe9"
  },
  {
    "url": "categories/wanji/index.html",
    "revision": "14d9521d24f62b3f37aa53f3d06bc600"
  },
  {
    "url": "categories/wanji/page/2/index.html",
    "revision": "76a8bf1ac730c62de7870ef17b21c9de"
  },
  {
    "url": "google6598f2831dbc9230.html",
    "revision": "fe6f2763cc3b4f14854bc6f0dac78347"
  },
  {
    "url": "hero.png",
    "revision": "324856481fc40a7b4cdceade04701f1f"
  },
  {
    "url": "img/cover/animation/DEPTH OF FIELD ～ 爱与憎恨的剧场 中二病でも恋がしたい！ DEPTH OF FIELD 〜 愛と憎しみ劇場_1589003207.8591747.jpg",
    "revision": "1dc40a3c436e87c039e7710848edb405"
  },
  {
    "url": "img/cover/animation/naruto.jpg",
    "revision": "d4f903063c8ff4b91b52328cb0389080"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活 Reゼロから始める異世界生活_1585969677.9443781.jpg",
    "revision": "364b79959e5e5eb9940a6be3feeed9b1"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_冰结之绊.jpg",
    "revision": "853082e53c0d785d39ecf4ec6678f12e"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_第二季.jpg",
    "revision": "8b328ede30d59d4d2050c1416373ba87"
  },
  {
    "url": "img/cover/animation/Re：从零开始的异世界生活_雪之回忆.jpg",
    "revision": "3e2d7a83f5719588e3a16409f866efbc"
  },
  {
    "url": "img/cover/animation/一人之下 第一季_1587816625.6930337.jpg",
    "revision": "41bd78575898cd05cad6fe20d175f90e"
  },
  {
    "url": "img/cover/animation/一人之下 第三季_1587816626.661105.jpg",
    "revision": "16b26c075b380dc80abf13e82f2f2c60"
  },
  {
    "url": "img/cover/animation/一人之下 第二季_1587816624.7733808.jpg",
    "revision": "5970fe54b41132a717baeed7a34052a0"
  },
  {
    "url": "img/cover/animation/一人之下2番外篇天师下山_1587816627.4403129.jpg",
    "revision": "49c20cddc639d76cebc1bfd9fd174844"
  },
  {
    "url": "img/cover/animation/东京食尸鬼 第四季 東京喰種トーキョーグール：re_1585969945.843714.jpg",
    "revision": "869bf8b700db7065f378bade73532737"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ Lite 中二病でも恋がしたい！ Lite_1589003203.3650713.jpg",
    "revision": "99ffacc6615bb8ece677226fe3d72323"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ 中二病でも恋がしたい！_1589003197.8079042.jpg",
    "revision": "54b0709406506ff60f75cd6cab213a4b"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！ 闪耀的圣爆诞祭 中二病でも恋がしたい！ 煌めきの…聖爆誕祭_1589003201.3334818.jpg",
    "revision": "2177535396c2b123b133b315d81b8134"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！剧场版 -Take On Me- 映画 中二病でも恋がしたい！ -Take On Me-_1589003198.7844956.jpg",
    "revision": "3231cca9303ea4ad4276be0bc248e10f"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 Lite 中二病でも恋がしたい！戀 Lite_1589003208.825747.jpg",
    "revision": "5f67b89fa8b485828a60875edb6a3456"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 OVA 中二病でも恋がしたい！戀 再生の…邪王真眼黙示録_1589003205.5471196.jpg",
    "revision": "e1c186513226a6296a4d5add0760c0e1"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 SP 中二病でも恋がしたい！戀 SP_1589003206.6409478.jpg",
    "revision": "a551e98c461789a79ec770589e58c9f0"
  },
  {
    "url": "img/cover/animation/中二病也要谈恋爱！恋 中二病でも恋がしたい！戀_1589003199.9848888.jpg",
    "revision": "49bcc090fadc4534166e11fb6ac32d76"
  },
  {
    "url": "img/cover/animation/为美好的世界献上祝福！ この素晴らしい世界に祝福を!_1605425565.4270442.jpg",
    "revision": "f4e71ec9933edfe78a790527ca50634e"
  },
  {
    "url": "img/cover/animation/伍六七之最强发型师_1607848862.3159475.jpg",
    "revision": "7f1c023d91c3ca92ea214504dff214a9"
  },
  {
    "url": "img/cover/animation/元龙_1598680444.8660152.jpg",
    "revision": "04730a3787a99be7d9eb6333d4e3257c"
  },
  {
    "url": "img/cover/animation/全员恶玉 アクダマドライブ_1604816490.532245.jpg",
    "revision": "560d1a814df0eb4c71df5d262347b139"
  },
  {
    "url": "img/cover/animation/全职高手 第二季_1602221982.5260127.jpg",
    "revision": "97dcaa9b4986a4f33155f0e048f44404"
  },
  {
    "url": "img/cover/animation/关于我转生变成史莱姆这档事 第二季 転生したらスライムだった件 第2期_1589002260.311745.jpg",
    "revision": "555ffb8563eda00256775f749dc3ef85"
  },
  {
    "url": "img/cover/animation/关于我转生变成史莱姆这档事 転生したらスライムだった件_1589002258.9276857.jpg",
    "revision": "b64c4b3aa101a33b6e1b7a3a5098c9dc"
  },
  {
    "url": "img/cover/animation/冰菓 氷菓_1586575399.2935002.jpg",
    "revision": "09df73333da8de3ec03a6d6b97c2ff18"
  },
  {
    "url": "img/cover/animation/凡人修仙传 燕家堡之战_1610855727.2835217.jpg",
    "revision": "f8a7cbc0159e7faec10cfb0e94f6496c"
  },
  {
    "url": "img/cover/animation/凡人修仙传 燕家堡之战_1613896836.3889074.jpg",
    "revision": "a4127d0086780003c9d2cbf7763ea53b"
  },
  {
    "url": "img/cover/animation/凡人修仙传_1598791855.6524.jpg",
    "revision": "fc7eb9096a13690ad4ec2d66e6df49e5"
  },
  {
    "url": "img/cover/animation/凸变英雄 LEAF_1585926386.4507935.jpg",
    "revision": "b9f61d2a822e5052e1d5c13d25a664a8"
  },
  {
    "url": "img/cover/animation/凸变英雄 TO BE HERO_1585926335.596215.jpg",
    "revision": "aab4fd801566090a65fcff50026e51c2"
  },
  {
    "url": "img/cover/animation/刀剑神域 ソードアート・オンライン_1585970062.6267538.jpg",
    "revision": "9daa245fe5ece39fdee9a02f71ed227d"
  },
  {
    "url": "img/cover/animation/刺客伍六七 第一季_1585926238.4364276.jpg",
    "revision": "b76700252358ef9cddafc13995490c52"
  },
  {
    "url": "img/cover/animation/刺客伍六七 第三季_1607848863.228451.jpg",
    "revision": "5701db8c55fe3d8c7997a0369635abeb"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心 第一季_1585926273.1405962.jpg",
    "revision": "d42191ca8499be8a40b574bc7056de1f"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心 第二季_1598791705.330565.jpg",
    "revision": "7c4cd509a9e0b0644c274879d5d3ed68"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心之长漂_1604640938.1598358.jpg",
    "revision": "bfb4f862708d27e5b69e09eaa59ed93f"
  },
  {
    "url": "img/cover/animation/剑网3·侠肝义胆沈剑心第三季_1604640806.6842566.jpg",
    "revision": "4b9f20ca4a5819012c4a947e3ade4ba6"
  },
  {
    "url": "img/cover/animation/剧场版 中二病也要谈恋爱！ Lite 映画 中二病でも恋がしたい！ Lite_1589003204.3897648.jpg",
    "revision": "ce01db5c94af996f216df3e4126bc851"
  },
  {
    "url": "img/cover/animation/命运之夜 无限剑制 Fate stay night [Unlimited Blade Works]_1585926115.8239627.jpg",
    "revision": "318d8257c46a89bb4ee09936e011f548"
  },
  {
    "url": "img/cover/animation/命运之夜前传 第一期 Fate Zero_1585969392.6366308.jpg",
    "revision": "9055f23f11f0bc5b5dbcac938ac13a5b"
  },
  {
    "url": "img/cover/animation/命运石之门 STEINS;GATE_1589003785.1149235.jpg",
    "revision": "81cb98646dd085a12a2cac2834351e0e"
  },
  {
    "url": "img/cover/animation/命运石之门：横行跋扈的浪荡之徒 STEINS;GATE 横行跋扈のポリオマニア_1589003787.6910338.jpg",
    "revision": "ac783697be87db2abb19df00ca0a3880"
  },
  {
    "url": "img/cover/animation/命运石之门：聪明睿智的认知计算 STEINS;GATE 聡明叡智のコグニティブ・コンピューティング_1589003788.7402122.jpg",
    "revision": "afe82b59a0e7e599d8aca95097d1c1de"
  },
  {
    "url": "img/cover/animation/命运石之门0 STEINS;GATE 0_1589003786.6583555.jpg",
    "revision": "47f8469c8a2fbe6b0eff5f8acc1e1d14"
  },
  {
    "url": "img/cover/animation/命运石之门0：结晶多形的情人节 STEINS;GATE 0 結晶多形のヴァレンティヌス_1589003791.7312207.jpg",
    "revision": "ba680ecbc1820bf75ff66b1affa093ad"
  },
  {
    "url": "img/cover/animation/命运石之门23β：境界面上的缺失之环.jpg",
    "revision": "1fb724860e51c6810584c7239e2bb530"
  },
  {
    "url": "img/cover/animation/命运石之门剧场版：负荷领域的既视感 劇場版 STEINS;GATE 負荷領域のデジャヴ_1589003789.7337732.jpg",
    "revision": "c9c3b235471959ce620a9a6df58b5e3e"
  },
  {
    "url": "img/cover/animation/咒术回战 呪術廻戦_1604816542.0103776.jpg",
    "revision": "ab6cf9eca3ac85105d67ca94c11543c8"
  },
  {
    "url": "img/cover/animation/团子大家族 CLANNAD -クラナド-_1585926172.4044523.jpg",
    "revision": "f0eddb551798b7c5aff92a9eee37e8f9"
  },
  {
    "url": "img/cover/animation/堀与宫村_ホリミヤ_1615731141.8307843.jpg",
    "revision": "487a9ee87845ec5cc568c8878a5c7657"
  },
  {
    "url": "img/cover/animation/境界的彼方 TV未放送话 境界の彼方 未放映エピソード（第0話）_1589003613.76756.jpg",
    "revision": "4b966d1cf563dfc09732e6761166f01e"
  },
  {
    "url": "img/cover/animation/境界的彼方 偶像裁判！～即使迷茫也要裁决之人～ きょうかいのかなた アイドル裁判！～迷いながらも君を裁く民～_1589003614.5766551.jpg",
    "revision": "f9e924c01ba242dd959d4eab13efca31"
  },
  {
    "url": "img/cover/animation/境界的彼方 剧场版 未来篇 劇場版 境界の彼方 I’LL BE HERE 未来篇_1589003611.6783621.jpg",
    "revision": "0c7bec5e628b349865935b0455a9c4e8"
  },
  {
    "url": "img/cover/animation/境界的彼方 剧场版 过去篇 劇場版 境界の彼方 I’LL BE HERE 過去篇_1589003612.5371315.jpg",
    "revision": "34f1a86de6251bb57b87b64ed86708cd"
  },
  {
    "url": "img/cover/animation/境界的彼方 境界の彼方_1589003610.7269473.jpg",
    "revision": "848473974794fd8f2b8725974cac6f31"
  },
  {
    "url": "img/cover/animation/境界的彼方SP 境界の彼方ミニ劇場_1589003615.747619.jpg",
    "revision": "f8a7cbc0159e7faec10cfb0e94f6496c"
  },
  {
    "url": "img/cover/animation/声之形 聲の形_1591865423.033343.jpg",
    "revision": "a04fe8c3619559465c61214df7a1bc92"
  },
  {
    "url": "img/cover/animation/夏目友人帐 劇場版 夏目友人帳 ～うつせみに結ぶ～_1586575710.5734751.jpg",
    "revision": "93adc25f20c0734a65d14fec183a5108"
  },
  {
    "url": "img/cover/animation/夏目友人帐 夏目友人帳_1586575711.549216.jpg",
    "revision": "3235e580a2326a92e00b677de36d9140"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第三季 夏目友人帳 参_1586575719.189755.jpg",
    "revision": "30c09c0f0361d153dff6b9e786bc3369"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第二季 続 夏目友人帳_1586575717.2175088.jpg",
    "revision": "98f36589b48a0ada985003665d69486d"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 夏目友人帳 伍_1586575713.2895663.jpg",
    "revision": "1b2bd95df99f00a68b39a7754e527d5e"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 特别篇 一夜酒杯 夏目友人帳 伍 特別編 一夜盃_1586575721.841378.jpg",
    "revision": "3892866f6cbef6064af1bb27242384c7"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第五季 特别篇 游戏盛宴 夏目友人帳 伍 特別編 遊戯の宴_1586575720.090627.jpg",
    "revision": "9328f238a1bb065a7670943c5bd0d378"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 夏目友人帳 陸_1586575718.1654663.jpg",
    "revision": "06c243c55c2a69119700a1eb664fcab9"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 特别篇 梦幻的碎片 夏目友人帳 陸 特別編 夢幻のかけら_1586575720.9363923.jpg",
    "revision": "df21b1a8a626ed74d68463bade959761"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第六季 特别篇 铃响的残株 夏目友人帳 陸 特別編 鈴鳴るの切り株_1586575716.1299927.jpg",
    "revision": "7a79a78f6d8ab0d31e452ace56ed194f"
  },
  {
    "url": "img/cover/animation/夏目友人帐 第四季 夏目友人帳 肆_1586575714.298881.jpg",
    "revision": "ef43587ee4bd184ff916cbd0fe4407c8"
  },
  {
    "url": "img/cover/animation/夏目友人帐：曾几何时下雪之日 夏目友人帳 いつかゆきのひに_1586575712.3281357.jpg",
    "revision": "270799ff7d3ccf5c42dd1d37c5b3a90f"
  },
  {
    "url": "img/cover/animation/夏目友人帐：猫咪老师首次变身使者 夏目友人帳 ニャンコ先生とはじめてのおつかい_1586575715.1216898.jpg",
    "revision": "25f3d4a010e224eacd28c81ea078a656"
  },
  {
    "url": "img/cover/animation/大欺诈师 GREAT PRETENDER_1593323282.6797037.jpg",
    "revision": "82e422da3475b7c6f5798f2497cec5ba"
  },
  {
    "url": "img/cover/animation/大理寺日志_1586576302.7692626.jpg",
    "revision": "4f044b73ee5f6f0e1e4e539770e36dc1"
  },
  {
    "url": "img/cover/animation/女高中生的虚度日常 女子高生の無駄づかい_1589002852.7528338.jpg",
    "revision": "b97219089ec3d9e96072356faa7b359c"
  },
  {
    "url": "img/cover/animation/妄想学生会 生徒会役員共_1596356746.1200936.jpg",
    "revision": "55c0c0b188f19c4bef887a362c4494f9"
  },
  {
    "url": "img/cover/animation/家庭教师 家庭教師ヒットマンREBORN!_1585925087.2388551.jpg",
    "revision": "d86e9e566714817c887d45eebea0a141"
  },
  {
    "url": "img/cover/animation/寒蝉鸣泣之时 ひぐらしのなく頃に_1610112378.2165432.jpg",
    "revision": "6998ab0bf42b0b76400aeb63996f137e"
  },
  {
    "url": "img/cover/animation/寒蝉鸣泣之时·业 ひぐらしのなく頃に 業_1610112379.2500236.jpg",
    "revision": "296d0710e5591dbfa9c5e593d8e51353"
  },
  {
    "url": "img/cover/animation/小鸟游六花·改 剧场版 中二病也要谈恋爱！ 小鳥遊六花・改 ～劇場版 中二病でも恋がしたい！～_1589003202.2089472.jpg",
    "revision": "0faeffe5e5022a818d19d9861f940e9d"
  },
  {
    "url": "img/cover/animation/心理测量者3 PSYCHO-PASS サイコパス 3_1585925325.6729088.jpg",
    "revision": "ad01253c24f2a37d0b9071dc6cda3b8c"
  },
  {
    "url": "img/cover/animation/我们仍未知道那天所看见的花的名字_1598682205.0430555.jpg",
    "revision": "73a8aef300ae09f4c72569954d31a6a3"
  },
  {
    "url": "img/cover/animation/我们仍未知道那天所看见的花的名字_剧场版_1598682206.1141315.jpg",
    "revision": "84322230ed54f187abff484a8d76f3d1"
  },
  {
    "url": "img/cover/animation/我家大师兄脑子有坑 第二季_1604640859.9180338.jpg",
    "revision": "9861c654cdeaf64e8538805780570ae6"
  },
  {
    "url": "img/cover/animation/我想吃掉你的胰脏 君の膵臓をたべたい_1589001286.8862827.jpg",
    "revision": "327ccfec98f7303b170c8137ff67efe0"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 OVA やはり俺の青春ラブコメはまちがっている。 OVA_1589002438.557332.jpg",
    "revision": "85c9cfeedf6214361b0ce3b927eaad09"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 やはり俺の青春ラブコメはまちがっている。_1585969733.0615635.jpg",
    "revision": "556a17a6562c5116c7b15623e7c176a0"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第三季 完 やはり俺の青春ラブコメはまちがっている。完_1589002436.3329194.jpg",
    "revision": "b1917adfed2ecb02b30aa0ac8e9dc8d6"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第二季 OVA やはり俺の青春ラブコメはまちがっている。続 OVA_1589002440.034373.jpg",
    "revision": "f842c131bfc4a20019a602b9c0b3e59d"
  },
  {
    "url": "img/cover/animation/我的青春恋爱物语果然有问题 第二季 续 やはり俺の青春ラブコメはまちがっている。続_1589002437.4796777.jpg",
    "revision": "ffd4a659482cf90c164b2c32867d0565"
  },
  {
    "url": "img/cover/animation/文豪野犬 文豪ストレイドッグス_1594102113.5871732.jpg",
    "revision": "211770dea7d88efc0e7f6679b3e03b82"
  },
  {
    "url": "img/cover/animation/新世纪福音战士 新世紀エヴァンゲリオン_1610111952.1978788.jpg",
    "revision": "58bb51510d63629c0dbeefe17dbbce97"
  },
  {
    "url": "img/cover/animation/星游记 第一季_1612013075.9135053.jpg",
    "revision": "909898173f4d6ccc3f72275abb2b695e"
  },
  {
    "url": "img/cover/animation/极主夫道 極主夫道_1615094066.365526.jpg",
    "revision": "4c88ba1c42cec753a137a13d4cadd182"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮 とある科学の超電磁砲_1598790861.4960368.jpg",
    "revision": "e6f599856e6e566b5131589e28acaae9"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮OVA：御坂学姐现在是焦点人物_1598790862.9439692.jpg",
    "revision": "780565c599caa5f0122bb3f5cc1e70a8"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮OVA：炎炎酷日下做摄影模特也不轻松啊_1598790864.429887.jpg",
    "revision": "537b3f3e12fc1c18d8b5d639936166ff"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮S OVA とある科学の超電磁砲S 大事なことはぜんぶ銭湯に教わった_1598790867.7153492.jpg",
    "revision": "be0b8d48bf76929d887417f27b54edd5"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮S とある科学の超電磁砲S_1598790866.0815735.jpg",
    "revision": "fa38c04c9f931476900283fecea96a43"
  },
  {
    "url": "img/cover/animation/某科学的超电磁炮T とある科学の超電磁砲T_1598790869.2180655.jpg",
    "revision": "7df8e355e9dd734442f9a3a7fb4c5c42"
  },
  {
    "url": "img/cover/animation/汉化日记 第一季_1604815396.6564424.jpg",
    "revision": "4a7bdaa808f553a625da972825f810e4"
  },
  {
    "url": "img/cover/animation/汉化日记 第二季_1604815385.2098784.jpg",
    "revision": "e9de57bda7d2a050cac10721908b8fde"
  },
  {
    "url": "img/cover/animation/游戏人生 ノーゲーム・ノーライフ_1589001578.2607884.jpg",
    "revision": "be61befc8b9ec5e06b33e3f5ff58c9e7"
  },
  {
    "url": "img/cover/animation/游戏人生 零 ノーゲーム・ノーライフ ゼロ_1589001580.7540507.jpg",
    "revision": "a56bbea47ea0563a9ed522d741bbcd06"
  },
  {
    "url": "img/cover/animation/炎炎消防队 二之章 炎炎ノ消防隊 弐ノ章_1598790666.003107.jpg",
    "revision": "7320a0a2e48bb68b08f548f6d2aa6b1a"
  },
  {
    "url": "img/cover/animation/炎炎消防队 炎炎ノ消防隊_1598790664.7653487.jpg",
    "revision": "2f03bffe44da8b0f34060c4e5835b942"
  },
  {
    "url": "img/cover/animation/爱，死亡和机器人 第一季 Love, Death & Robots Season 1_1587187812.607653.jpg",
    "revision": "bf037aa181d6f3cd7b5f3b5ad1e6901e"
  },
  {
    "url": "img/cover/animation/电锯人.jpg",
    "revision": "dfc83b362410ee54397644a1f713d931"
  },
  {
    "url": "img/cover/animation/男子高中生的日常 男子高校生の日常_1589003026.677807.jpg",
    "revision": "d00d8179d09087c6bc49d6329a417068"
  },
  {
    "url": "img/cover/animation/知晓天空之蓝的人啊 空の青さを知る人よ_1601270270.8203645.jpg",
    "revision": "0d6ffab1075cbd0e1a2d0ab525ca195c"
  },
  {
    "url": "img/cover/animation/碧蓝之海 ぐらんぶる_1585925141.7311099.jpg",
    "revision": "5c922e608e653aaa14dee7d047e3ed00"
  },
  {
    "url": "img/cover/animation/秦时明月之沧海横流_1602222187.037226.jpg",
    "revision": "13795badaa5afc8755a81f7250f443ea"
  },
  {
    "url": "img/cover/animation/红白黑黄 第一季 RWBY Season 1_1600613356.4275353.jpg",
    "revision": "14bde917d79f1403855b2184ece6148b"
  },
  {
    "url": "img/cover/animation/绝园的暴风雨 絶園のテンペスト_1598680683.5899887.jpg",
    "revision": "63e83292211c1182ce2748fa0ff29516"
  },
  {
    "url": "img/cover/animation/罪恶王冠 ギルティクラウン_1586575578.8566122.jpg",
    "revision": "8d57e47c8363fa133eb78c59da0c7077"
  },
  {
    "url": "img/cover/animation/致不灭的你 不滅のあなたへ_1605425771.1585212.jpg",
    "revision": "e3512412253965af1084d01f9280e0da"
  },
  {
    "url": "img/cover/animation/致不灭的你 不滅のあなたへ_1615093823.8227906.jpg",
    "revision": "8a3f3040589e99d036032ee4f69ec6ff"
  },
  {
    "url": "img/cover/animation/葬送的芙莉莲.jpg",
    "revision": "3f44391634e854eeedf63c46659d1e90"
  },
  {
    "url": "img/cover/animation/辉夜大小姐想让我告白 第一季 天才们的恋爱头脑战 かぐや様は告らせたい～天才たちの恋愛頭脳戦～_1585970219.5961487.jpg",
    "revision": "efed35f65cf7c5b9c20277ce2d76e98f"
  },
  {
    "url": "img/cover/animation/辉夜大小姐想让我告白 第二季 かぐや様は告らせたい？ ～天才たちの恋愛頭脳戦～_1586668715.4943583.jpg",
    "revision": "63833630ee09db53076d78bb6161c1ba"
  },
  {
    "url": "img/cover/animation/达尔文游戏 ダーウィンズゲーム_1594102176.291782.jpg",
    "revision": "feba54ec1e136e95e4eebf3e8f6867ea"
  },
  {
    "url": "img/cover/animation/进击的巨人 第三季 Part.2 進撃の巨人 Season 3 Part.2_1607307893.38439.jpg",
    "revision": "39173c58ad893fd847fe1ae08234fe39"
  },
  {
    "url": "img/cover/animation/进击的巨人 第四季 進撃の巨人 The Final Season_1607306144.6104312.jpg",
    "revision": "9f21346dd2c832830ac399c644dcfb4e"
  },
  {
    "url": "img/cover/animation/进击的巨人.jpg",
    "revision": "b52d068ea8d96f2f8a9e7328de5839ba"
  },
  {
    "url": "img/cover/animation/进击的巨人第三季.jpg",
    "revision": "deba934b28f073977f44f8e1a211b0e4"
  },
  {
    "url": "img/cover/animation/进击的巨人第二季.jpg",
    "revision": "275b9bb2d10b1e81c9700f70744823ac"
  },
  {
    "url": "img/cover/animation/钢之炼金术师 鋼の錬金術師_1610112161.1140132.jpg",
    "revision": "94c3ad9198c106ff7428fc3d209b7955"
  },
  {
    "url": "img/cover/animation/钢之炼金术师FA 鋼の錬金術師 FULLMETAL ALCHEMIST_1610112162.3668275.jpg",
    "revision": "9d536e8f6a3b0139f0d7b320d5561d10"
  },
  {
    "url": "img/cover/animation/银魂 銀魂_1596350080.1353695.jpg",
    "revision": "296429c30046b9a61057666c2fd62fb1"
  },
  {
    "url": "img/cover/animation/间谍过家家.jpg",
    "revision": "7cc95be7bc1eb31c1df1801f43675194"
  },
  {
    "url": "img/cover/animation/隐瞒之事 かくしごと_1610855819.9664078.jpg",
    "revision": "fa066b6ae21868fa8b1df56fe0aee2cb"
  },
  {
    "url": "img/cover/animation/雾山五行_1598792049.0016093.jpg",
    "revision": "c50e196e230168313fe95a061f2f7b64"
  },
  {
    "url": "img/cover/animation/青春期猪头少年不做兔女郎学姐的梦 青春ブタ野郎はバニーガール先輩の夢を見ない_1589002733.6539207.jpg",
    "revision": "12c96c661541a4f4cc130b6fb858bc13"
  },
  {
    "url": "img/cover/animation/青春期猪头少年不做怀梦少女的梦 青春ブタ野郎はゆめみる少女の夢を見ない_1589002732.726506.jpg",
    "revision": "21b460e488d988298b558c8ba733c0d1"
  },
  {
    "url": "img/cover/animation/非人哉_1589002638.7049315.jpg",
    "revision": "113e145aff5864c4616e2fbefbb9a5da"
  },
  {
    "url": "img/cover/animation/风灵玉秀_1585969616.0985014.jpg",
    "revision": "88ab60da65c377f12f06b6468bf8b3d4"
  },
  {
    "url": "img/cover/animation/鬼灭之刃 鬼滅の刃_1598792127.4313507.jpg",
    "revision": "42dbd68d2498074a6cb0a0e3b774a17a"
  },
  {
    "url": "img/cover/animation/齐木楠雄的灾难 斉木楠雄のΨ難_1585970519.8406558.jpg",
    "revision": "05e5d9d7b5852358099ef2e51cda5230"
  },
  {
    "url": "img/cover/book/4321_1585897435.8476274.jpg",
    "revision": "992e7e15677bec0065ac38836c4199a5"
  },
  {
    "url": "img/cover/book/三体_1585897694.8293366.jpg",
    "revision": "352b77c9426300b32ac08b8f0db978cc"
  },
  {
    "url": "img/cover/book/人类简史_1585897561.6528192.jpg",
    "revision": "73c0c171203951b1bc9b8189731a3a73"
  },
  {
    "url": "img/cover/book/人行道王国_1585897470.283358.jpg",
    "revision": "75b2d284f18a1e684ca3b3e3fa01a20c"
  },
  {
    "url": "img/cover/book/你当像鸟飞往你的山_1585897725.865459.jpg",
    "revision": "e0dfc7b7804b797f27f0372431469dbc"
  },
  {
    "url": "img/cover/book/最好的时光在路上_1615041403.651003.jpg",
    "revision": "5e196335f62af6202eea8d231ba9822f"
  },
  {
    "url": "img/cover/book/君主论_1585896884.5916448.jpg",
    "revision": "ef8c86e29177d69558b25f4607a7e6ce"
  },
  {
    "url": "img/cover/book/嫌疑人X的献身_1587825216.9453857.jpg",
    "revision": "037b2645f76588d71e79efa63a348bdc"
  },
  {
    "url": "img/cover/book/富爸爸，穷爸爸_1585897639.017536.jpg",
    "revision": "d412a0a3d8f76154122fafe6441a485a"
  },
  {
    "url": "img/cover/book/时间的秩序_1585897590.5492332.jpg",
    "revision": "48d249d28483d1b2fb7641494dc4fe1d"
  },
  {
    "url": "img/cover/book/洞穴奇案_1585896027.198742.jpg",
    "revision": "12ff91107a85e164a9c5c800d6a7f6f2"
  },
  {
    "url": "img/cover/book/潜规则_1585896937.9712746.jpg",
    "revision": "17a25c9fd8f100b92f63bf8a8b46e84f"
  },
  {
    "url": "img/cover/book/爱的博弈_1585897032.5092676.jpg",
    "revision": "9c1020b7b1514f873078b9351a6f3c80"
  },
  {
    "url": "img/cover/book/白夜行_1585895973.8514829.jpg",
    "revision": "d8d6801a69ade76da9dc59464bc85f0b"
  },
  {
    "url": "img/cover/book/看不见的剪辑_1597317749.9047.jpg",
    "revision": "112cb78d6a98050aa22f43d8499e8151"
  },
  {
    "url": "img/cover/book/眨眼之间_1597317912.09056.jpg",
    "revision": "491f89a8395f110cc709e43fa6e706d8"
  },
  {
    "url": "img/cover/book/美丽新世界_1585897386.9219372.jpg",
    "revision": "ec5a1ee8ed29b862780f40c456ce4a03"
  },
  {
    "url": "img/cover/book/血酬定律_1585896971.4534743.jpg",
    "revision": "ffcb9704e0cf0ed521fe8a034f20e63b"
  },
  {
    "url": "img/cover/book/解忧杂货店_1587824761.17957.jpg",
    "revision": "86e6c7aedf3105cda7b303d7bda40bf8"
  },
  {
    "url": "img/cover/book/资本论_1585897326.1348414.jpg",
    "revision": "51d5dd420485891553844480174ab695"
  },
  {
    "url": "img/cover/book/超越感觉_1585897532.9392817.jpg",
    "revision": "c1207982eaab9ccf700210b3df87e844"
  },
  {
    "url": "img/cover/book/黑客与画家_1597317981.5908504.jpg",
    "revision": "ac5500ba67811391054b7cd2f47bc614"
  },
  {
    "url": "img/cover/default.jpg",
    "revision": "5c10cd29509954ea73cbc09d4304ff58"
  },
  {
    "url": "img/cover/movie/七宗罪 Se7en_1605424194.307574.jpg",
    "revision": "a0276c947611a7311dcbb03b043ed3b2"
  },
  {
    "url": "img/cover/movie/三傻大闹宝莱坞 3 Idiots_1601793342.5394852.jpg",
    "revision": "c01d8035edbf61286935543a5062c1af"
  },
  {
    "url": "img/cover/movie/再次出发之纽约遇见你 Begin Again_1601797399.4216352.jpg",
    "revision": "5f773042dbd1b0c45f5c6c1c76e78ba8"
  },
  {
    "url": "img/cover/movie/利刃出鞘 Knives Out_1589622614.554978.jpg",
    "revision": "ac68e5d420cf17356b50c7d91ba507cf"
  },
  {
    "url": "img/cover/movie/可可西里_1601796654.738392.jpg",
    "revision": "8f2fb23fbf7df2baae85453cbd2ad783"
  },
  {
    "url": "img/cover/movie/复仇者联盟3：无限战争 Avengers.jpg",
    "revision": "7da962a91072a78a3d5e7a4e8ac0a065"
  },
  {
    "url": "img/cover/movie/复仇者联盟4：终局之战 Avengers.jpg",
    "revision": "559d432fc35c94b07ad0cf1ea5fe1708"
  },
  {
    "url": "img/cover/movie/大话西游之大圣娶亲 西遊記大結局之仙履奇緣_1601793517.5869331.jpg",
    "revision": "541094105557befc42526d9b01ece668"
  },
  {
    "url": "img/cover/movie/大话西游之月光宝盒 西遊記第壹佰零壹回之月光寶盒_1601793519.0343032.jpg",
    "revision": "ca3aa79b945bd478f586e4e2fc8b3633"
  },
  {
    "url": "img/cover/movie/寄生虫 기생충_1589623219.768211.jpg",
    "revision": "614ab729d659a0da48dc6965d3780994"
  },
  {
    "url": "img/cover/movie/寻梦环游记 Coco_1601794237.4108212.jpg",
    "revision": "073ee045fc09813763dfa6a101ad0ab1"
  },
  {
    "url": "img/cover/movie/小萝莉的猴神大叔 Bajrangi Bhaijaan_1601793808.451275.jpg",
    "revision": "c32ac303e00915d21147108cbe9fd883"
  },
  {
    "url": "img/cover/movie/怦然心动 Flipped_1589623063.6880758.jpg",
    "revision": "c8fe428afd6ff91ccf61935476566f62"
  },
  {
    "url": "img/cover/movie/我不是药神_1601794370.8576474.jpg",
    "revision": "42833315d48542b8f1fd5c98e906befc"
  },
  {
    "url": "img/cover/movie/我和我的家乡_1611370645.3507812.jpg",
    "revision": "4753fb2c574f6bbf234026081929b4f3"
  },
  {
    "url": "img/cover/movie/控方证人 Witness for the Prosecution_1589622779.5202994.jpg",
    "revision": "87bdc47c4ce640b6869b741b596d099b"
  },
  {
    "url": "img/cover/movie/生化危机 Resident Evil_1601796410.396677.jpg",
    "revision": "74d7027b15312c7e6e5e86ac5376c9af"
  },
  {
    "url": "img/cover/movie/疯狂动物城 Zootopia_1601793897.819059.jpg",
    "revision": "b144c23b4f8e99729e69e9dbc48980f4"
  },
  {
    "url": "img/cover/movie/疯狂的麦克斯4：狂暴之路 Mad Max.jpg",
    "revision": "73ef90dd331d8ce79aae16d2b1acafeb"
  },
  {
    "url": "img/cover/movie/盗梦空间 Inception_1589623271.7394319.jpg",
    "revision": "b693f9bea994d730e45ddbdc9523f310"
  },
  {
    "url": "img/cover/movie/盗钥匙的方法 鍵泥棒のメソッド_1606834155.667749.jpg",
    "revision": "97e1825bbec648769324b23d05128007"
  },
  {
    "url": "img/cover/movie/看不见的客人 Contratiempo_1589518291.3730936.jpg",
    "revision": "3aba91d51811844945aa894df6e52a42"
  },
  {
    "url": "img/cover/movie/神偷奶爸 Despicable Me_1601796114.4692767.jpg",
    "revision": "c1eaa8da5c45a4cce4250aea58d985e7"
  },
  {
    "url": "img/cover/movie/穿越时空的少女 時をかける少女_1608474088.6478672.jpg",
    "revision": "24aa72926f189e3d460c3c7f2daf7a32"
  },
  {
    "url": "img/cover/movie/窃听风暴 Das Leben der Anderen_1608474235.761454.jpg",
    "revision": "5745aea684caf06fe46bd04ba330fde1"
  },
  {
    "url": "img/cover/movie/红辣椒 パプリカ_1608474330.818665.jpg",
    "revision": "806c6da9cdd55a0cd90ea78dd2440faf"
  },
  {
    "url": "img/cover/movie/终结者 The Terminator_1601796350.5186133.jpg",
    "revision": "469db37d593f5da82b6aa9a9dc3ea4f8"
  },
  {
    "url": "img/cover/movie/绿皮书 Green Book_1589622940.5721269.jpg",
    "revision": "5fe64b86199e4193a870b727ea13ba67"
  },
  {
    "url": "img/cover/movie/网络谜踪 Searching_1589698684.1172712.jpg",
    "revision": "836d8e6574a95cf7811044ef979a1c20"
  },
  {
    "url": "img/cover/movie/被嫌弃的松子的一生 嫌われ松子の一生_1608474278.109583.jpg",
    "revision": "05d168b82fe1f558fd9a6c73ef03a6ea"
  },
  {
    "url": "img/cover/movie/调音师 Andhadhun_1589623557.2217262.jpg",
    "revision": "3ee982977527b6697f9dca8db1badf32"
  },
  {
    "url": "img/cover/movie/辩护人 변호인_1608474181.4256582.jpg",
    "revision": "9c90070e01da8bc2433229d1ef18ba91"
  },
  {
    "url": "img/cover/movie/这个杀手不太冷 Léon_1601794670.9565396.jpg",
    "revision": "3beebb4581790cfdc9f59f61ae2e42c6"
  },
  {
    "url": "img/cover/movie/送你一朵小红花_1609633472.2473087.jpg",
    "revision": "e8bc9726548ca648346d2e83992ae746"
  },
  {
    "url": "img/cover/tvSeries/3年A班：从现在起，大家都是人质_1608474512.099212.jpg",
    "revision": "77ac87094c7e1af640a3b8b137d4ef1c"
  },
  {
    "url": "img/cover/tvSeries/亚当的超狂工作室 Savage Builds_1605424546.159232.jpg",
    "revision": "57caa602ba667292c643c00ec6d25b19"
  },
  {
    "url": "img/cover/tvSeries/人生删除事务所 dele ディーリー_1585923321.6637092.jpg",
    "revision": "4991e6bdb64948e99c27e730287de4c6"
  },
  {
    "url": "img/cover/tvSeries/仙剑奇侠传_1585923132.341561.jpg",
    "revision": "7be553e2e9a7fca758c92904e6a430af"
  },
  {
    "url": "img/cover/tvSeries/信号 시그널_1585924044.934179.jpg",
    "revision": "a0333ad6f17ef2661999c24966e8a96d"
  },
  {
    "url": "img/cover/tvSeries/匹诺曹 피노키오_1606210299.4421241.jpg",
    "revision": "349450aaacf5a66a0502f222417eda8e"
  },
  {
    "url": "img/cover/tvSeries/半泽直树 半沢直樹_1595146887.3777108.jpg",
    "revision": "01ba6805810901dfff399fe2201c8e72"
  },
  {
    "url": "img/cover/tvSeries/半泽直树2 半沢直樹2_1595146888.5461469.jpg",
    "revision": "7389ea97a65e4efa4861ab317e9e05af"
  },
  {
    "url": "img/cover/tvSeries/去他妈的世界 第一季 The End of the Fucking World Season 1_1585924220.552149.jpg",
    "revision": "875e6226e998ef31eedd49f1a28badda"
  },
  {
    "url": "img/cover/tvSeries/坡道上的家 坂の途中の家_1608474449.0222256.jpg",
    "revision": "99a275da7e772bfdf2ae542e41bba283"
  },
  {
    "url": "img/cover/tvSeries/大江大河_1608516875.2203677.jpg",
    "revision": "fd77c0625390abbf74aa98a19eb394fb"
  },
  {
    "url": "img/cover/tvSeries/大江大河2_1608516876.4397173.jpg",
    "revision": "9c43f11ebb62712c49990a512f26123c"
  },
  {
    "url": "img/cover/tvSeries/天赐的声音 第一季_1611725307.4245465.jpg",
    "revision": "2e03c0b86c4b42a4a7f9921d78b91188"
  },
  {
    "url": "img/cover/tvSeries/天赐的声音 第二季_1611725308.3943996.jpg",
    "revision": "a5c1647e69ca4564e5f580da24a0ca8a"
  },
  {
    "url": "img/cover/tvSeries/姐姐的爱乐之程_1611490586.1068618.jpg",
    "revision": "8afd8dd8037079a40d35f1131ad9eb96"
  },
  {
    "url": "img/cover/tvSeries/巅峰拍档 第二十八季 Top Gear Season 28_1586272743.9453914.jpg",
    "revision": "26064ab920da124739a8fe5d1793e250"
  },
  {
    "url": "img/cover/tvSeries/我，喜欢你_1602130189.8904605.jpg",
    "revision": "af4800c3e251751a0f7d59b43302b6d2"
  },
  {
    "url": "img/cover/tvSeries/我们与恶的距离 我們與惡的距離_1585924294.6041443.jpg",
    "revision": "32097172496ee7829f7a1ff357e75693"
  },
  {
    "url": "img/cover/tvSeries/我是歌手 第一季_1605423874.4925146.jpg",
    "revision": "9668cc38a78bc29453d80b0e0ec0c05d"
  },
  {
    "url": "img/cover/tvSeries/无证之罪_1603034715.5966406.jpg",
    "revision": "06a17236cf9c6aec33cadadd5e23dd87"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第一季_1594102371.1799963.jpg",
    "revision": "2a1679ee69092e5d5252d4a28b44d181"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第三季_1594102368.61622.jpg",
    "revision": "eff0f88e6653080cf0e392460b431bde"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第二季_1594102370.0204074.jpg",
    "revision": "c84957a6017fef82ea2360163abe3562"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第五季_1594102372.539142.jpg",
    "revision": "52af648b4b0201cf8324603d273815fd"
  },
  {
    "url": "img/cover/tvSeries/明星大侦探 第四季_1594102367.622257.jpg",
    "revision": "3ec291fe077705392c3c4626e16aa836"
  },
  {
    "url": "img/cover/tvSeries/暴走大事件 第八季_1613896768.529891.jpg",
    "revision": "8e1660de483a22880e97eb444c3a0c15"
  },
  {
    "url": "img/cover/tvSeries/暴走大事件 第六季_1605424009.4009516.jpg",
    "revision": "6423d5ef64e9a342b86675ae1ae4f7e5"
  },
  {
    "url": "img/cover/tvSeries/梦想改造家 第六季_1592891305.6434877.jpg",
    "revision": "11a3bb22ad8430317fbbb7264af7645d"
  },
  {
    "url": "img/cover/tvSeries/沉默的真相_1601793033.7507782.jpg",
    "revision": "363165e442ba009813f41b88657daf56"
  },
  {
    "url": "img/cover/tvSeries/爱情公寓_1585921972.3063571.jpg",
    "revision": "58a2730b184e07d736f5368265d15232"
  },
  {
    "url": "img/cover/tvSeries/生活大爆炸  第一季 The Big Bang Theory Season 1_1585922087.7021892.jpg",
    "revision": "21d9e4a70651ccb321b50ffebd5a811c"
  },
  {
    "url": "img/cover/tvSeries/男人帮_1585924355.9011319.jpg",
    "revision": "a1164c809d31069e294f63de8d3bc310"
  },
  {
    "url": "img/cover/tvSeries/破产姐妹 第一季 2 Broke Girls Season 1_1585924798.0466225.jpg",
    "revision": "f1c28a6dc73b67725aaa377cfd29e20e"
  },
  {
    "url": "img/cover/tvSeries/绝命毒师 第一季 Breaking Bad Season 1_1585923360.451869.jpg",
    "revision": "a8a723de5403f707fe42f892441bb5aa"
  },
  {
    "url": "img/cover/tvSeries/胜者即是正义 リーガル・ハイ_1593323566.1153116.jpg",
    "revision": "be0d74926a534b061e29feb30ed1cc2b"
  },
  {
    "url": "img/cover/tvSeries/胜者即是正义2 リーガルハイ2_1595147132.5017843.jpg",
    "revision": "aac650bb4195df52b9c694efc226ea21"
  },
  {
    "url": "img/cover/tvSeries/脱口秀大会 第三季_1601270890.8320255.jpg",
    "revision": "54e4b6f648df24b6454cd05bfd179f7a"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第一季_1596179742.8977056.jpg",
    "revision": "d43061e070f5c152387b4f84d383b503"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第五季_1611725887.4262514.jpg",
    "revision": "6a61405a0bf61e24e2e9cb3e260d3f68"
  },
  {
    "url": "img/cover/tvSeries/蒙面唱将猜猜猜 第四季_1596179744.4396722.jpg",
    "revision": "11934c948ec298bfc438957b4bcd7642"
  },
  {
    "url": "img/cover/tvSeries/行骗天下JP コンフィデンスマンJP_1593323492.5273848.jpg",
    "revision": "104ce630aeb4cac828a579b53f6bcc91"
  },
  {
    "url": "img/cover/tvSeries/诗歌之王 第二季_1611725722.9074235.jpg",
    "revision": "d82b1fb4e067df8986ab7427a840383d"
  },
  {
    "url": "img/cover/tvSeries/请回答1988 응답하라 1988_1585923935.8388011.jpg",
    "revision": "6c1422b5f38f84c1e86c58a91152fe7c"
  },
  {
    "url": "img/cover/tvSeries/轮到你了 あなたの番です_1605425270.4120092.jpg",
    "revision": "7d477edcb008bbf652385c079e1df8b3"
  },
  {
    "url": "img/cover/tvSeries/隐秘的角落_1592891172.6912322.jpg",
    "revision": "433946bd5f0b80c7bfa27195b3a4f4be"
  },
  {
    "url": "img/cover/video/狂おしいほど僕には美しい - majiko.jpg",
    "revision": "a46d9e0fab04ff972fb4f52257c14425"
  },
  {
    "url": "img/essay/20200326_130024_yrxnjerdx_1.jpg",
    "revision": "2d69fb61a7add7fdd3acbb5218eaf65e"
  },
  {
    "url": "img/essay/20200326_130024_yrxnjerdx.jpg",
    "revision": "d795fd1d77b78b09797554fbb6626772"
  },
  {
    "url": "img/note/20200325162737-mq-rabbitmq.jpg",
    "revision": "899b3142d83bf840c8f89c4342ed2311"
  },
  {
    "url": "img/note/20200325164844-mq-rabbitmq.jpg",
    "revision": "be1b876e816c7ad03da14f373892966f"
  },
  {
    "url": "img/note/20200325170202-mq-rabbitmq.jpg",
    "revision": "693d6a0432f3d391d1d74bf752b586f2"
  },
  {
    "url": "img/note/20200325170650-mq-rabbitmq.jpg",
    "revision": "3dbcb1d12fcfb3f3367074edcaab5d69"
  },
  {
    "url": "img/note/20200325170750-mq-rabbitmq.jpg",
    "revision": "a492e9bda053d58a5e4b4424909fba11"
  },
  {
    "url": "img/note/20200325170846-mq-rabbitmq.jpg",
    "revision": "200c49ab7bb4c6f73214a7de59411b27"
  },
  {
    "url": "img/other/20200323230011.jpg",
    "revision": "fb6262c55669169d81ca55b6879b3bc9"
  },
  {
    "url": "img/other/20200323234051.jpg",
    "revision": "6357aa782af56c40467967537a685c83"
  },
  {
    "url": "img/other/20200323234753.jpg",
    "revision": "4022cae61e79ab2d4fa0abe1103cca53"
  },
  {
    "url": "img/other/20200325125911.png",
    "revision": "9f6fedff808fd3961181cd6828029963"
  },
  {
    "url": "img/other/20200325130218.png",
    "revision": "115c76c8bbe6a9955026e56586486dbf"
  },
  {
    "url": "img/other/upyun.png",
    "revision": "561e9d0af96ca7983bf3d721fc72ed39"
  },
  {
    "url": "img/photo/daily_20200811_1.jpg",
    "revision": "e04892c72ab483067a88a171d4bdc4c7"
  },
  {
    "url": "img/photo/daily_20200811_2.jpg",
    "revision": "0cb9a9da7fd98e3e9502f2e74a27aefe"
  },
  {
    "url": "img/photo/xili_ecological_park_1.jpg",
    "revision": "c01f5fbfcb10a821560381317be0c081"
  },
  {
    "url": "img/photo/xili_ecological_park_2.jpg",
    "revision": "2542612b7b696fabe41643a5bcffcbcf"
  },
  {
    "url": "img/photo/xili_ecological_park_3.jpg",
    "revision": "a9198ad09a5a13ae3a1f977719c9949f"
  },
  {
    "url": "img/photo/xili_ecological_park_4.jpg",
    "revision": "823c9f4a64d52c8f1fe8b060f9af1b4b"
  },
  {
    "url": "index.html",
    "revision": "fc1144e5d6c79c4e510df752f6861e92"
  },
  {
    "url": "logo_original.png",
    "revision": "417aae886a6faa02c41a910188e0cba1"
  },
  {
    "url": "logo.png",
    "revision": "fac1e9667afc37aa618b482fd5776f96"
  },
  {
    "url": "tag/analysis/index.html",
    "revision": "7cb40e604c7ab256b5f69858fd9dabf8"
  },
  {
    "url": "tag/android/index.html",
    "revision": "9366b1c46ef01f7ad69d6b858097891b"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "8f0707dfc0c5e34af366a1650b4d0ed1"
  },
  {
    "url": "tag/cache/index.html",
    "revision": "3adbeb64c3d76382c262241d049b7c6d"
  },
  {
    "url": "tag/camera/index.html",
    "revision": "d7beb64cdea15b3246feb7709172fbf3"
  },
  {
    "url": "tag/chrome/index.html",
    "revision": "73276b7c93157f84169057fc9672b97f"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "992fa21ef1b05b00987d605a0b3b3c27"
  },
  {
    "url": "tag/data-leak/index.html",
    "revision": "b3e90af53faa1727edee3bd9607d25e8"
  },
  {
    "url": "tag/debug/index.html",
    "revision": "59d021358db95a64bc88815fcc11c702"
  },
  {
    "url": "tag/design/index.html",
    "revision": "dbc14fa20a71083b56387e01191ef6af"
  },
  {
    "url": "tag/dev/index.html",
    "revision": "698db1fe81f911eb97aeeda891927307"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "64a2fa7ff22c726177d7bbc7ee3c0eda"
  },
  {
    "url": "tag/dubbo/index.html",
    "revision": "566cf2a2653904f348b2e58444ae5327"
  },
  {
    "url": "tag/env/index.html",
    "revision": "ae89c133e622cbb13e9c267f4cb29dbf"
  },
  {
    "url": "tag/es/index.html",
    "revision": "516cbda0bd0c0697769c3996b780992c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "41885209247f0941b05c7501c3d56643"
  },
  {
    "url": "tag/github/index.html",
    "revision": "57b93a5f60b1ab5dd9ed2be6ea269277"
  },
  {
    "url": "tag/IDE/index.html",
    "revision": "802cca344c9bcfa0770ab1ab6310b81a"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "3d78d6e190fe15e2b232b4de9efff4a0"
  },
  {
    "url": "tag/ideas/index.html",
    "revision": "9bb249790674b2132e7ce5094f714477"
  },
  {
    "url": "tag/index.html",
    "revision": "8a4183781b44517017755cf43ede9097"
  },
  {
    "url": "tag/interesting/index.html",
    "revision": "5f680ecee0cf2a780d21976d5aceb478"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "558ede7c65871a853959d1a6c94d9034"
  },
  {
    "url": "tag/java/index.html",
    "revision": "e5337fddf20b039afacd618ff6504fd3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7e17a50195faacd3b0dec130b92777e7"
  },
  {
    "url": "tag/kafka/index.html",
    "revision": "9d1475952dbda8fbe4e0b753df5ea870"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "0472b76f5fedf10643b2e31043e6e806"
  },
  {
    "url": "tag/life/index.html",
    "revision": "71cfb4a46395b7e1e8090500cef583b3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4df064ad8c833343d5a31c285a3c16f1"
  },
  {
    "url": "tag/logger/index.html",
    "revision": "84af18343a0591d721cfb9b29a5aabb7"
  },
  {
    "url": "tag/MQ/index.html",
    "revision": "f2c3f6b4eb2b1bd5adbf7f95e15ee920"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "32e32920f92c500fd48902e7835c1980"
  },
  {
    "url": "tag/office/index.html",
    "revision": "1a6f74638541fa85e73c1b317561f3f2"
  },
  {
    "url": "tag/opensuse/index.html",
    "revision": "2bcd4cc1b8fee01e0e6162a17222bc01"
  },
  {
    "url": "tag/pc/index.html",
    "revision": "c96e93041b5beca5684b52174685677d"
  },
  {
    "url": "tag/PC/index.html",
    "revision": "880ec6dbc3daa2147c801bd544790b17"
  },
  {
    "url": "tag/perf/index.html",
    "revision": "be19e439a7e2e82dd616bee59e401a52"
  },
  {
    "url": "tag/photography/index.html",
    "revision": "324139586c2049527ccd64704c86375b"
  },
  {
    "url": "tag/practice/index.html",
    "revision": "db64119f06c8beddccfdc4cf9c7f6dea"
  },
  {
    "url": "tag/privacy/index.html",
    "revision": "0798513ef3f29b88a5cfbf082f88fc4e"
  },
  {
    "url": "tag/PS/index.html",
    "revision": "23ced12417c5e19927f3cb0197afcc9b"
  },
  {
    "url": "tag/python/index.html",
    "revision": "e5ee20148cceebeb92e61a6b74bd850c"
  },
  {
    "url": "tag/Q&A/index.html",
    "revision": "53f3fd7274a5a92eb4177754a2d19ff4"
  },
  {
    "url": "tag/router/index.html",
    "revision": "59ec05f23cc6f22ff02f31c2528af5e6"
  },
  {
    "url": "tag/search/index.html",
    "revision": "9686d677d05d3976a02d1b20a8353434"
  },
  {
    "url": "tag/spider/index.html",
    "revision": "ca71a61ddd82a26eb1b4b70bd7b85bb3"
  },
  {
    "url": "tag/spring boot/index.html",
    "revision": "24b8f6f20813e58804ad481029fbb30e"
  },
  {
    "url": "tag/study/index.html",
    "revision": "138896dffe4067a3753ebc529d1414ac"
  },
  {
    "url": "tag/summary/index.html",
    "revision": "8fcadab22eba531642acfa7b24f74466"
  },
  {
    "url": "tag/telegram/index.html",
    "revision": "a5b1547ae652eceae63e4dc672895ae3"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "4cae6aee3c4b3e33d3a6a5fe28644f95"
  },
  {
    "url": "tag/tomcat/index.html",
    "revision": "39104c5d76d1b1e1dcd586c15c586754"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "158d4e154fcba68ed52942a15ce4d5be"
  },
  {
    "url": "tag/troubleshoot/index.html",
    "revision": "52569a1eed6a0d8e6a0a1ba74dea453b"
  },
  {
    "url": "tag/troubleshoot/page/2/index.html",
    "revision": "1117cbcc1335758f665371e98bcdbeab"
  },
  {
    "url": "tag/tv/index.html",
    "revision": "61b58aa81f5e76865de444841f695dc8"
  },
  {
    "url": "tag/vpn/index.html",
    "revision": "0aacfdc39dd4887b2a452ccb4a9d40c7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "53aa8845581e9b661f3d247743294b77"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "a17f39b4aeab96d6fc7b5ac098813fa1"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "cb773c683f0b8c083e9971812a33660f"
  },
  {
    "url": "tag/zookeeper/index.html",
    "revision": "edcf95778d9ff7740d3edc070f11cd30"
  },
  {
    "url": "tag/分布式/index.html",
    "revision": "9f833d7c103f6e34e161d7f65950b359"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "aeb9a63f449dbb238faebfe963ddc007"
  },
  {
    "url": "tag/在线播放/index.html",
    "revision": "618f21bb2a91f755c94573c7aa7fba22"
  },
  {
    "url": "tag/追剧/index.html",
    "revision": "322dbd79977ac62984f7988f2021fcd9"
  },
  {
    "url": "tag/阿里云盘/index.html",
    "revision": "690574d877916eb5130e4d6fd5f9ac59"
  },
  {
    "url": "timeline/index.html",
    "revision": "70b5f5f6484d7472d7bec34c521180a9"
  },
  {
    "url": "views/memo.html",
    "revision": "3877fdb07427f1f8141c19388296e9b1"
  },
  {
    "url": "views/message-board.html",
    "revision": "e48107659cad5ab67ed444894327dc3d"
  },
  {
    "url": "views/news.html",
    "revision": "ee00bd8aba26568ca84ece7e4426b176"
  },
  {
    "url": "views/note/ai/202101211832-ai-machine-leaning-deep-leaning.html",
    "revision": "9c8d7dcdd0821058298506a078939a59"
  },
  {
    "url": "views/note/algorithm/202003171553-algorithm-in-practice.html",
    "revision": "47abef391df5a4b8793a53d1af12c863"
  },
  {
    "url": "views/note/algorithm/202007131836-time-of-sum.html",
    "revision": "dbceddac0ccc641c0d6542c6ce066eb7"
  },
  {
    "url": "views/note/algorithm/202008252322-algorithm-learning.html",
    "revision": "28456da03473c221f091209c0df96abb"
  },
  {
    "url": "views/note/algorithm/202008311800-leetcode-0001.html",
    "revision": "a8d33037205326b98e19ae50500370a3"
  },
  {
    "url": "views/note/algorithm/202104161400-leetcode-198-213.html",
    "revision": "a395e4322d9baf3ee0137191bc593af1"
  },
  {
    "url": "views/note/back-end/202003170000-qa-sumary.html",
    "revision": "4612f9807fb26b5db5ca17e75c848584"
  },
  {
    "url": "views/note/back-end/202003220000-mq-1.html",
    "revision": "600bdd37a525349825dcc9cf2d8f6780"
  },
  {
    "url": "views/note/back-end/202003251037-tomcat-remote-debugging.html",
    "revision": "10eff6ba1b954e007fc0c77cacb03f95"
  },
  {
    "url": "views/note/back-end/202003251549-mq-2.html",
    "revision": "6a2d8c19be41e296279ba105268e63b3"
  },
  {
    "url": "views/note/back-end/202004021613-java-log.html",
    "revision": "87bfde5e7aa5f54421679969e7fbeed2"
  },
  {
    "url": "views/note/back-end/202004071826-zookeeper-install.html",
    "revision": "a715a39a03db659b7430e571d002f3fd"
  },
  {
    "url": "views/note/back-end/202004081325-mq-kafka-install.html",
    "revision": "f470f80f2345e23005bda338661ae225"
  },
  {
    "url": "views/note/back-end/202004081353-java-for-update-value.html",
    "revision": "51816f256049d00371c639d35def4cca"
  },
  {
    "url": "views/note/back-end/202004110912-mq-kafka-spring-boot-quick-start.html",
    "revision": "02d61e343a625970207a5f54951e8514"
  },
  {
    "url": "views/note/back-end/202004181200-paging-when-data-changed.html",
    "revision": "fded173597e131cafb67c2cd4955f279"
  },
  {
    "url": "views/note/back-end/202004211800-mysql-index-about-like.html",
    "revision": "075934c39adddad18374f0b9ee9a909e"
  },
  {
    "url": "views/note/back-end/202005111040-troubleshoot-advice.html",
    "revision": "0dcd0e8ec15d7b468b14e5711493c272"
  },
  {
    "url": "views/note/back-end/202006231316-java-programming-thinking.html",
    "revision": "03d9a3d5340719193f67549bdaa08c0c"
  },
  {
    "url": "views/note/back-end/202006301740-es-search-perf.html",
    "revision": "1689678269944d73b0ea0ce5a6d474fd"
  },
  {
    "url": "views/note/back-end/202009111657-troubleshoot-map-containsKey.html",
    "revision": "390b198113a9fbc7d9aad81f200b376d"
  },
  {
    "url": "views/note/back-end/202009151110-troubleshoot-dubbo.html",
    "revision": "45c1c69fa5763cdb274344e5c0190655"
  },
  {
    "url": "views/note/back-end/202009151113-troubleshoot-record.html",
    "revision": "0b80f30e1e3d3439c6ccb06d5b89776c"
  },
  {
    "url": "views/note/back-end/202009161800-design-resource-rank.html",
    "revision": "5060a8076e8adb9a186b9cc197dd2929"
  },
  {
    "url": "views/note/back-end/202009181055-java-basic-knowledge.html",
    "revision": "26d21e767db1acb453a3ae976fc17476"
  },
  {
    "url": "views/note/back-end/202009291133-common-deign-sharing.html",
    "revision": "f51dc74fa9f5dd0d74e3422384571924"
  },
  {
    "url": "views/note/back-end/202010141945-troubleshoot-mysql-timestamp-range.html",
    "revision": "788283c37939073b3f73dbdbed1163c4"
  },
  {
    "url": "views/note/back-end/202010151119-design-img-multiple-size-upload.html",
    "revision": "7287a61e744b391bde585ffddcfa0c2c"
  },
  {
    "url": "views/note/back-end/202010171641-troubleshoot-call-chain-analysis.html",
    "revision": "11810732495e7af8a07e0f71c7c9e92f"
  },
  {
    "url": "views/note/back-end/202011041635-troubleshoot-oom.html",
    "revision": "f71ea9d54a52f0eb56a38fcbea962906"
  },
  {
    "url": "views/note/back-end/202011061053-struts-to-spring-mvc.html",
    "revision": "f9669ca90cef69d5121cc84c4deda402"
  },
  {
    "url": "views/note/back-end/202011111918-ip-parse-service-design.html",
    "revision": "67a2a50b35b95389dd4aca8349d966a8"
  },
  {
    "url": "views/note/back-end/202012120023-cache.html",
    "revision": "7818a83235c460fbe0103434be6417eb"
  },
  {
    "url": "views/note/back-end/202012141640-troubleshoot-dubbo-registry.html",
    "revision": "181fbd0898b358ac0239bd54f66897ac"
  },
  {
    "url": "views/note/back-end/202012291105-elasticsearch-analysis-ik.html",
    "revision": "83240175d1dbded0bb0ddc5b8b7a2586"
  },
  {
    "url": "views/note/back-end/202101291313-arthas.html",
    "revision": "53f3f18d8646186683c07bd5768b112c"
  },
  {
    "url": "views/note/back-end/202104131352-idea-debug.html",
    "revision": "23030438d62d091b8cc55004483e92fa"
  },
  {
    "url": "views/note/back-end/202105201717-ip-parsing-service-troubleshoot-and-perf.html",
    "revision": "d1d55c136c77ac055f5df576e53b5a25"
  },
  {
    "url": "views/note/back-end/202303210705-mysql-note.html",
    "revision": "d4c668c882b4408684624a1909e85d85"
  },
  {
    "url": "views/note/dev/202008032201-dev-log.html",
    "revision": "303ddb675c7055799bcec46e16aa8cb8"
  },
  {
    "url": "views/note/dev/202010301115-improve-the-development-experience.html",
    "revision": "04cb5b1d591c44bcec008bbadcdfe776"
  },
  {
    "url": "views/note/dev/idea.html",
    "revision": "a1a30eea8fe03d4014772a0856a819b1"
  },
  {
    "url": "views/note/front-end/202003281955-vuepress-favorites-dev.html",
    "revision": "1a6f74842f717321d0e13bc4c559efd2"
  },
  {
    "url": "views/note/front-end/202004021835-js-date-format.html",
    "revision": "0179fcadb8816c525096c5a0f3a68f96"
  },
  {
    "url": "views/note/machine-learning/202003060000-init.html",
    "revision": "360a7262b5c06c07a6bc7fc2459804a2"
  },
  {
    "url": "views/note/ops/202003080000-how-to-set-up-blog.html",
    "revision": "bdd7dd429ffc7ce641ee28799a64e3a6"
  },
  {
    "url": "views/note/ops/202003231800-github-actions.html",
    "revision": "727fa90b07ab4db74cceefff7964bf47"
  },
  {
    "url": "views/note/ops/202003241800-vuepress-plugin.html",
    "revision": "b58a500729c472e2065433f1848b32d0"
  },
  {
    "url": "views/note/ops/202003291850-douban-search-tool.html",
    "revision": "13ca7c7acfaaa9aeb5510efdb4df0e83"
  },
  {
    "url": "views/note/ops/202003302049-git-merge-problem.html",
    "revision": "227ca563f08a6e79fd45d24110fc4b93"
  },
  {
    "url": "views/note/ops/202004031522-linux-environment-variable.html",
    "revision": "34d687de67b265f343348718d472f537"
  },
  {
    "url": "views/note/ops/202004061808-vuepress-enhance-app.html",
    "revision": "ccfba3f084ffdbdafba692f7d69918de"
  },
  {
    "url": "views/note/ops/202004081131-linux-command.html",
    "revision": "60b651fb471bf7530433117d829f6fa7"
  },
  {
    "url": "views/note/ops/202004141352-vuepress-last-updated.html",
    "revision": "7a38d0ee91d7e49bf92ea922a5caa1ce"
  },
  {
    "url": "views/note/ops/202006051715-about-bilibili-share-iframe.html",
    "revision": "e3af60bc6197be6135519bfe50a1be0a"
  },
  {
    "url": "views/note/ops/202006061325-windows-command.html",
    "revision": "3c6679caf5ded0027b418b3fa5cc4fa8"
  },
  {
    "url": "views/note/ops/202007151700-dev-env-and-tools.html",
    "revision": "148e7a009bf8945a83c722102a3f833b"
  },
  {
    "url": "views/note/ops/202008211422-docker.html",
    "revision": "2b6bf5a8f8130a0bb33f823021afa7bd"
  },
  {
    "url": "views/note/ops/202008222201-microsoft-e5.html",
    "revision": "fbafb37016ae59ee9cc42badc2d591aa"
  },
  {
    "url": "views/note/ops/202009041358-forestry-vuepress-cms.html",
    "revision": "874862ffbeb0bd16adfaf6fa1b36aa0f"
  },
  {
    "url": "views/note/ops/202012202137-linux.html",
    "revision": "7be2e9fb18556c5b78982bf31597391d"
  },
  {
    "url": "views/note/ops/202101032118-github-default-branch.html",
    "revision": "ad2905dab0509ee80d6083fc8e7df2a0"
  },
  {
    "url": "views/note/ops/202210171019-opensuse-guide.html",
    "revision": "25f09a678f88fd01fabe37b0d29b9a8c"
  },
  {
    "url": "views/note/photography/202006231335-photography-composition.html",
    "revision": "e9c6fbfe8003f83b0ed196c986c42e62"
  },
  {
    "url": "views/note/photography/202102241315-ps-blending-modes.html",
    "revision": "ff6184a1eb721b9afc645f439c2e3330"
  },
  {
    "url": "views/note/security/202004131057-security-blog-link.html",
    "revision": "e0e80dbbaa7fc312d5839235102b5c87"
  },
  {
    "url": "views/note/security/202004151107-gsil-github-actions.html",
    "revision": "b901b4e46d3dd78238003dd859099bce"
  },
  {
    "url": "views/note/security/202103071400-immunity-canvas-7.26.html",
    "revision": "ad656d6b4e4239d5b223c1dc9a429703"
  },
  {
    "url": "views/note/security/202104131325-personal-privacy-protect.html",
    "revision": "50169842e2bca6376d8671e78e965c2d"
  },
  {
    "url": "views/note/study.html",
    "revision": "26bfc9dbfa588d9cabb86eff6abd264f"
  },
  {
    "url": "views/other/202003050000-hello-world.html",
    "revision": "6ee9312b39d6cb71c35e3491ba0da2e3"
  },
  {
    "url": "views/other/202003170000-vpn.html",
    "revision": "1afc316b32cca47bd036b89a6fdc1a8b"
  },
  {
    "url": "views/wanji/202005171916-remove-mitv-ad.html",
    "revision": "7f62a9c33dfa219cbaf1be8f4fde3bb7"
  },
  {
    "url": "views/wanji/202005211317-wanji-resource-share.html",
    "revision": "60b62ef70f45d1f330242dc370ff1d2b"
  },
  {
    "url": "views/wanji/202008261312-control-phone-on-pc.html",
    "revision": "8d3c4a70fd1ef5c9ded2bf99f7b9f199"
  },
  {
    "url": "views/wanji/202010251703-taobao-yangmao.html",
    "revision": "b00043040355b58346dc16e598c2c4f8"
  },
  {
    "url": "views/wanji/202012132201-router-k2p.html",
    "revision": "bae4472c454f6cace56c1029a9a1c55a"
  },
  {
    "url": "views/wanji/202012201630-termux.html",
    "revision": "4729cf294c1e56869af67ffdce215dd9"
  },
  {
    "url": "views/wanji/202012201650-chrome-extensions.html",
    "revision": "607f746957839faaa65b7b790b98ec0c"
  },
  {
    "url": "views/wanji/202101211843-sony-α6000.html",
    "revision": "ac2f8ce3c51a372a993ab5f0dcdf5fde"
  },
  {
    "url": "views/wanji/202101291137-remote-boot-wake-on-lan.html",
    "revision": "9e98474c3a7024e2a105c476dd40d3d7"
  },
  {
    "url": "views/wanji/202101291140-add-wechat-by-wxid.html",
    "revision": "ef30dd60f5b4f6ad550fe70eef577ef3"
  },
  {
    "url": "views/wanji/202102131832-magisk-issure-fix.html",
    "revision": "b45bcca8f4336f285da7a0384822778c"
  },
  {
    "url": "views/wanji/202104131338-telegram.html",
    "revision": "676227391ccf2e8fb24f5727957f31c5"
  },
  {
    "url": "views/wanji/202104131346-interesting-website.html",
    "revision": "bed716ff42e4c8fe4f540530feb35898"
  },
  {
    "url": "views/wanji/202109181949-play-video-online.html",
    "revision": "f68d15b73bb5c0ae47b04d6ae3c56aab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
