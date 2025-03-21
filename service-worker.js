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
    "revision": "3492fb0d5270848d89fb081a4e7e2985"
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
    "url": "assets/js/101.08b529c1.js",
    "revision": "449220d56d9151e7163cc62d04b484cc"
  },
  {
    "url": "assets/js/102.515c29f0.js",
    "revision": "f8eeb194c38667c7e6578d4613b24cdf"
  },
  {
    "url": "assets/js/103.f02bab75.js",
    "revision": "10d598848cee1d507fe52850dade99cf"
  },
  {
    "url": "assets/js/104.37010906.js",
    "revision": "3c09ebf380caf9e57765ca0bc09d18f6"
  },
  {
    "url": "assets/js/105.76d64d26.js",
    "revision": "ae8235c617c5f6e64a887373b3bd1041"
  },
  {
    "url": "assets/js/106.6684604d.js",
    "revision": "3926ae71cd76d995617e0571f555815a"
  },
  {
    "url": "assets/js/107.6ce21232.js",
    "revision": "9866d35198c37944a782d78f26ecf539"
  },
  {
    "url": "assets/js/108.562694e8.js",
    "revision": "0f71a9c8307b2788a6efe64499ef4dbb"
  },
  {
    "url": "assets/js/109.e069b54c.js",
    "revision": "101346a632bb2abf2289f99e7f1e527c"
  },
  {
    "url": "assets/js/11.e67f5c27.js",
    "revision": "eeeed78d6f6478a992ae43e22af1ef7f"
  },
  {
    "url": "assets/js/110.5c7c24cf.js",
    "revision": "003770e632c6636cfe24a86567412ed5"
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
    "url": "assets/js/22.34603a67.js",
    "revision": "087bbc75208e55d6adf2071092e0ccfa"
  },
  {
    "url": "assets/js/23.add7227d.js",
    "revision": "630d0c0b40c950ee2c8df70c0c0b77e6"
  },
  {
    "url": "assets/js/24.0e081e51.js",
    "revision": "2cdde706e639f895eb7c4376602aaac2"
  },
  {
    "url": "assets/js/25.c0b4c01d.js",
    "revision": "9f5223f65af758a0ba56c27b3ce0edad"
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
    "url": "assets/js/28.a6dfd009.js",
    "revision": "a6ecedcb6e1591d4cfdd8cbc99bcc7e4"
  },
  {
    "url": "assets/js/29.0ce38344.js",
    "revision": "0f3646339d7035b8e320334a7fffb2bd"
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
    "url": "assets/js/39.8578e3fd.js",
    "revision": "23c309877f367a46276a7bc7c2b1c75f"
  },
  {
    "url": "assets/js/4.6b1d0d33.js",
    "revision": "b4cf14f17c7252b01e6229892da225b8"
  },
  {
    "url": "assets/js/40.8d6376a2.js",
    "revision": "8974bdd8711b9bcc18290ba9b42e57af"
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
    "url": "assets/js/46.28a53156.js",
    "revision": "b5e7320fcb87a17964fc42e01783014a"
  },
  {
    "url": "assets/js/47.712e1807.js",
    "revision": "d5aa3e100aea1990d0f4515a6e3d5ef8"
  },
  {
    "url": "assets/js/48.d59edad6.js",
    "revision": "023b6a77728b1ec49de699e3de22ac62"
  },
  {
    "url": "assets/js/49.4ea9f151.js",
    "revision": "ab894e0935b9aa44e47b89716784e24c"
  },
  {
    "url": "assets/js/5.78eddf9e.js",
    "revision": "1f9e90428d0b58d22da811828186df43"
  },
  {
    "url": "assets/js/50.1dd6d3df.js",
    "revision": "b9bc64a1c6517cfec1126c2f37bdec02"
  },
  {
    "url": "assets/js/51.815ab8b6.js",
    "revision": "e52ada20d3b0e5054b007cac340e468f"
  },
  {
    "url": "assets/js/52.8096c4d7.js",
    "revision": "b435d9161c5206d3b3f3909f489d25b5"
  },
  {
    "url": "assets/js/53.3f45c24e.js",
    "revision": "1ea05266e417cde8f43e271a755de00f"
  },
  {
    "url": "assets/js/54.eb01a02b.js",
    "revision": "b72ec4d940b1761d985fde1732622386"
  },
  {
    "url": "assets/js/55.36de8cfd.js",
    "revision": "ba1dff032a5d715642c2fb3dcddb6ed4"
  },
  {
    "url": "assets/js/56.7c3cc3b3.js",
    "revision": "e3a30d745a9f3e846d5a19e5cbbdd7f5"
  },
  {
    "url": "assets/js/57.6d476f8f.js",
    "revision": "2c81a9b8e916b553e4e9a510324ed936"
  },
  {
    "url": "assets/js/58.d1437cd5.js",
    "revision": "061ddb5969541a0743e834b4ce6602ce"
  },
  {
    "url": "assets/js/59.010b916d.js",
    "revision": "eb4afdbac8f4a345bf8f34b014c48b50"
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
    "url": "assets/js/62.4ab3dfde.js",
    "revision": "7ab72b23680ec1b7d504da800513481d"
  },
  {
    "url": "assets/js/63.862e2391.js",
    "revision": "9ee0824e1b4488822413819aa5009c1f"
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
    "url": "assets/js/67.a73b9277.js",
    "revision": "f451022ddba91ea3ac9f1d12da407cde"
  },
  {
    "url": "assets/js/68.b3fe5c77.js",
    "revision": "4c893cb7e391dd711e718cb6a9ee8636"
  },
  {
    "url": "assets/js/69.748f38ec.js",
    "revision": "86ba09b329105fb487cad65c8d284b0f"
  },
  {
    "url": "assets/js/7.e61b7feb.js",
    "revision": "7e267aa15e9df093be7e4bc3bffdd1e6"
  },
  {
    "url": "assets/js/70.cf5e8745.js",
    "revision": "4046f0a2496277c226d24296727e1270"
  },
  {
    "url": "assets/js/71.abb7dbe3.js",
    "revision": "9d09f8ab12a2ebf1d07ef9b90566ee2c"
  },
  {
    "url": "assets/js/72.a5abbe3b.js",
    "revision": "a24b97df63df01fd0496fcb41b24a531"
  },
  {
    "url": "assets/js/73.bd05d1bd.js",
    "revision": "48dc29d7939164c2d486f55770cc58eb"
  },
  {
    "url": "assets/js/74.b8c1fd92.js",
    "revision": "29e7822a4cbbc3918c3918b7cbb805dd"
  },
  {
    "url": "assets/js/75.4dbd51a4.js",
    "revision": "107c8fb0e8762380f5ef97897865474c"
  },
  {
    "url": "assets/js/76.18f4d3ea.js",
    "revision": "3e2e4bda89f2638151448f6db053ac10"
  },
  {
    "url": "assets/js/77.7603a041.js",
    "revision": "74ddc854f5491fec88445418adf80c43"
  },
  {
    "url": "assets/js/78.251e3c8c.js",
    "revision": "7133c1c630d54776e8161ba2793ee671"
  },
  {
    "url": "assets/js/79.cab724c3.js",
    "revision": "819f068b4763adf755141f3d72348019"
  },
  {
    "url": "assets/js/8.443db2c2.js",
    "revision": "5f612bedf83a3b520d0944fecc64bb76"
  },
  {
    "url": "assets/js/80.7bd01b27.js",
    "revision": "10be561bb2dc5885b299476a16b0be55"
  },
  {
    "url": "assets/js/81.e26df10e.js",
    "revision": "b583afc67bac441e56e42f77a48dab3d"
  },
  {
    "url": "assets/js/82.a143537a.js",
    "revision": "2d666f9d7f697fc3ce3ba216163ca443"
  },
  {
    "url": "assets/js/83.9ca94b98.js",
    "revision": "5988fed8afa1c3576a3fd183e3b3c992"
  },
  {
    "url": "assets/js/84.c4d211c5.js",
    "revision": "ae8776a35ca6ccda2ce8c9f322a90777"
  },
  {
    "url": "assets/js/85.50d6f84c.js",
    "revision": "24c2c667c9bee7d6989956f43f341628"
  },
  {
    "url": "assets/js/86.c4b3c031.js",
    "revision": "6cf94e7fa207de3b9d337343f8abf27f"
  },
  {
    "url": "assets/js/87.01a99000.js",
    "revision": "dc4c769412b20f53ed1ac7acd0bdcb27"
  },
  {
    "url": "assets/js/88.fc7f1645.js",
    "revision": "cfb979f2c0f307df77255d5455183c2b"
  },
  {
    "url": "assets/js/89.aba8f125.js",
    "revision": "0d0cb071820b5fc93f0d95178a7deed5"
  },
  {
    "url": "assets/js/9.098a38d8.js",
    "revision": "0f21e5cba4fccd85028fb93d68155acb"
  },
  {
    "url": "assets/js/90.a5ae38f0.js",
    "revision": "9453862b03b2696af71b88faf4772f6e"
  },
  {
    "url": "assets/js/91.9c841015.js",
    "revision": "1f9f8efa7fc3ce17b4a0f859dd909ba4"
  },
  {
    "url": "assets/js/92.18d18f1a.js",
    "revision": "4c31b2e7a08ca3fb51c960b91a691e60"
  },
  {
    "url": "assets/js/93.440b59f6.js",
    "revision": "0c53d3beb52990ec4e4bd9405341ceba"
  },
  {
    "url": "assets/js/94.c29c65ab.js",
    "revision": "932599395263e0f2fbf24f57fbcfe79c"
  },
  {
    "url": "assets/js/95.dfc99cc7.js",
    "revision": "d27aadd11241d16fb4f21c43502fd86c"
  },
  {
    "url": "assets/js/96.f55f00d2.js",
    "revision": "c4ef7af259a372d647784451a21abef6"
  },
  {
    "url": "assets/js/97.21f024b9.js",
    "revision": "7169df7ef9782a5d9c93f5cbbf73a9cc"
  },
  {
    "url": "assets/js/98.f379989c.js",
    "revision": "0a8285ccd05868a999cdd1bcf1f7ffa9"
  },
  {
    "url": "assets/js/99.2473d478.js",
    "revision": "bba50da5e41358259f8c638135c943b1"
  },
  {
    "url": "assets/js/app.f3581fbc.js",
    "revision": "8620ca1c5e696fecebe611550e5922fd"
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
    "revision": "144a9486572214a921a9c4de9359b5eb"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "7cbee01422a4760755909b1605348d5d"
  },
  {
    "url": "categories/back-end/index.html",
    "revision": "8325ece06dca24ab515d3c5c446eb3df"
  },
  {
    "url": "categories/back-end/page/2/index.html",
    "revision": "6e050a41bdda3be15344a372d2b6b0c9"
  },
  {
    "url": "categories/back-end/page/3/index.html",
    "revision": "c33bfeb4cec40ceaa088cec8ecaeb06f"
  },
  {
    "url": "categories/back-end/page/4/index.html",
    "revision": "3e56347089ec45c81d0acbf7d4d7cda8"
  },
  {
    "url": "categories/dev/index.html",
    "revision": "e57112fd202d0c41f23655390dd39b3f"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "6cb5488e62a1e51987e98e3fa0418d98"
  },
  {
    "url": "categories/index.html",
    "revision": "1196b788b90a45945bb1fc34e81f8db3"
  },
  {
    "url": "categories/machine-leaning/index.html",
    "revision": "f0327d2def86b85d711412da0bc70803"
  },
  {
    "url": "categories/machine-learning/index.html",
    "revision": "87ef4f5eadc738407dd452577aa81976"
  },
  {
    "url": "categories/note/index.html",
    "revision": "b4980f78f3546eb1e09421c04cd60062"
  },
  {
    "url": "categories/note/page/2/index.html",
    "revision": "5fcd1235fb3995e028ad268222d62a11"
  },
  {
    "url": "categories/note/page/3/index.html",
    "revision": "6d1526e580d33b9b863e088546bb7b7a"
  },
  {
    "url": "categories/note/page/4/index.html",
    "revision": "673c40e25bc05bfe1726414ad4916e61"
  },
  {
    "url": "categories/note/page/5/index.html",
    "revision": "27a9d013051cd44dcf25c5d635829218"
  },
  {
    "url": "categories/note/page/6/index.html",
    "revision": "6c83fd310534f90ea41783c3116b3931"
  },
  {
    "url": "categories/note/page/7/index.html",
    "revision": "c64f8e310e524d5833cd29206bd7213e"
  },
  {
    "url": "categories/ops/index.html",
    "revision": "a18c51fc914c301a8b243dd70937c3e1"
  },
  {
    "url": "categories/ops/page/2/index.html",
    "revision": "0e2adeca3771750305684b9e7f8e4c06"
  },
  {
    "url": "categories/ops/page/3/index.html",
    "revision": "de5706fa0d51854e32db1c9753c3182b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "cce87c830920be44f3c2a65fdd2c7f89"
  },
  {
    "url": "categories/security/index.html",
    "revision": "c7c0cdf0692e9e218c6b70ae5d80f76b"
  },
  {
    "url": "categories/wanji/index.html",
    "revision": "b41e51985cd75db732a00ad37dfa1d98"
  },
  {
    "url": "categories/wanji/page/2/index.html",
    "revision": "44c8957e85d18fd58d73b21ca754eb0c"
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
    "revision": "a0ae265eef0499e85fef014e47680f6a"
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
    "revision": "e0ab4ae279220738fe661f8eb76f978e"
  },
  {
    "url": "tag/android/index.html",
    "revision": "ea9a87600452a08f4d8a7268444992cf"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "d3cfb2d848999cfef6c7c0732d418f92"
  },
  {
    "url": "tag/cache/index.html",
    "revision": "51c887a085e547c32a9ff3eca478a48f"
  },
  {
    "url": "tag/camera/index.html",
    "revision": "9f87a9182337b52ae4e83d913c73c706"
  },
  {
    "url": "tag/chrome/index.html",
    "revision": "12b76b3e03bf32ba8452b36bed11011e"
  },
  {
    "url": "tag/CI/index.html",
    "revision": "299400e192d5d93e7ead14f552443c8d"
  },
  {
    "url": "tag/data-leak/index.html",
    "revision": "863afb5d2530cccde0e9e9eddee11d6a"
  },
  {
    "url": "tag/debug/index.html",
    "revision": "a8f5f7981f181b78ae29c172271c29e1"
  },
  {
    "url": "tag/design/index.html",
    "revision": "daa5d324fcb0cae8027ec8a9cf23032b"
  },
  {
    "url": "tag/dev/index.html",
    "revision": "19137049c2b2feb60b6c22a2b2fd0a1a"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "21850dcabdaa017957ad675b26d82b61"
  },
  {
    "url": "tag/dubbo/index.html",
    "revision": "d61915a478aa3472129c580ff5709f24"
  },
  {
    "url": "tag/env/index.html",
    "revision": "53375fa458e062bfcf90fd22a47f33df"
  },
  {
    "url": "tag/es/index.html",
    "revision": "452c818a614f6732196e3506a2cb1752"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d10275f4e55385454b428524a3d034cb"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8fad20ab706a0078b55b7b9b554dfa62"
  },
  {
    "url": "tag/IDE/index.html",
    "revision": "1890fcd94924cb2551a86e3031e18d1f"
  },
  {
    "url": "tag/IDEA/index.html",
    "revision": "85d3087deb259db31f345778d3a72deb"
  },
  {
    "url": "tag/ideas/index.html",
    "revision": "b23978246a7efdefafc6ac67a205c6d0"
  },
  {
    "url": "tag/index.html",
    "revision": "8115017c18082978f82a1a52e41b6321"
  },
  {
    "url": "tag/interesting/index.html",
    "revision": "e2f4fecd181ac497424b7c2d7188f301"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "7d37680291edcf752d9544a1c7287952"
  },
  {
    "url": "tag/java/index.html",
    "revision": "449d565541d4df9456c42d874a681acc"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0ddd6fe20f4e75ea9605de39fe182be4"
  },
  {
    "url": "tag/kafka/index.html",
    "revision": "e0e69975499295b4d50c8b082145659a"
  },
  {
    "url": "tag/leetcode/index.html",
    "revision": "c9988dafd57a5adf78e9553891c1deeb"
  },
  {
    "url": "tag/life/index.html",
    "revision": "40d6d181c6d9a8813320577b531efd48"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3b8898b8a6a99ac11c9e09bb42ab15fa"
  },
  {
    "url": "tag/logger/index.html",
    "revision": "f999f6aa4871ae32f7e23f0614b09e38"
  },
  {
    "url": "tag/MQ/index.html",
    "revision": "b140d14b99eeb589311702af6f61a495"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "3ffbecead177dd4e5bf12586597c7f8c"
  },
  {
    "url": "tag/office/index.html",
    "revision": "54070331c5a1d33dd3d5df1d3d93f119"
  },
  {
    "url": "tag/opensuse/index.html",
    "revision": "e4e14f6a22f839892efc03b318186898"
  },
  {
    "url": "tag/pc/index.html",
    "revision": "4978bd29bf616c5a3c9aea01e5c2ddd9"
  },
  {
    "url": "tag/PC/index.html",
    "revision": "145177f8fbd2ec5c619a5d88a652c7c8"
  },
  {
    "url": "tag/perf/index.html",
    "revision": "bcc8188f6a2a38095c371de1e7e9bd18"
  },
  {
    "url": "tag/photography/index.html",
    "revision": "91a5f6d5f7f09e0b84f738a03ad7bd2a"
  },
  {
    "url": "tag/practice/index.html",
    "revision": "4ee6169301256394719d4bbeb9d83cc2"
  },
  {
    "url": "tag/privacy/index.html",
    "revision": "b6984f02244c40690c40410ae57ad1e0"
  },
  {
    "url": "tag/PS/index.html",
    "revision": "5875538ff8a07b80bdc8fae3525ab548"
  },
  {
    "url": "tag/python/index.html",
    "revision": "7a0beb7374ba7b8650d9880c71a026a4"
  },
  {
    "url": "tag/Q&A/index.html",
    "revision": "6e77ccf8cd1dab3c6c52d379f731b7f8"
  },
  {
    "url": "tag/router/index.html",
    "revision": "a01f5c626189913c4085d687cec1a528"
  },
  {
    "url": "tag/search/index.html",
    "revision": "4b24b11f3ea1d997725ebbe574e4d7d2"
  },
  {
    "url": "tag/spider/index.html",
    "revision": "fa1719140503ed154e956300824511f7"
  },
  {
    "url": "tag/spring boot/index.html",
    "revision": "c464a84ef89807f6d69080a57a6fab85"
  },
  {
    "url": "tag/study/index.html",
    "revision": "ecd4813a06cc6537d276036c21f1c1b1"
  },
  {
    "url": "tag/summary/index.html",
    "revision": "e0cc34a0addbe925c50b1f3fdf3e95f9"
  },
  {
    "url": "tag/telegram/index.html",
    "revision": "9df44bce78b84464b987d8a4b51d285b"
  },
  {
    "url": "tag/tips/index.html",
    "revision": "52e4ff889f897021356d2fc541a2972c"
  },
  {
    "url": "tag/tomcat/index.html",
    "revision": "85c785d21762f4a51baf96b5589d1847"
  },
  {
    "url": "tag/tools/index.html",
    "revision": "0e177e583ccfc7dea3fba306c3d2645f"
  },
  {
    "url": "tag/troubleshoot/index.html",
    "revision": "3b298d6194a0f7ce5a4024fd9dac80b4"
  },
  {
    "url": "tag/troubleshoot/page/2/index.html",
    "revision": "3831a0b44a89e03d3c4cb01f4405f5a2"
  },
  {
    "url": "tag/tv/index.html",
    "revision": "50afa0b9c391caaab2e69d426a42b338"
  },
  {
    "url": "tag/vpn/index.html",
    "revision": "6aafafe345df4967df9c4b816275af84"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "38ed40db477b5551f3a4beb2e83f8c57"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "871a262937aad978f07991dcc7b882ba"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "5429ba013a012082893a08d0e2f6549d"
  },
  {
    "url": "tag/zookeeper/index.html",
    "revision": "8acd8b4a38e1eb34dc46b83c4458baa7"
  },
  {
    "url": "tag/分布式/index.html",
    "revision": "39657b73f8fa74751d85b587ce30c0b3"
  },
  {
    "url": "tag/动态规划/index.html",
    "revision": "a3ea2172610fcb779db518f6a0151fac"
  },
  {
    "url": "tag/在线播放/index.html",
    "revision": "4011e9c69d0780827ff971ee116b2038"
  },
  {
    "url": "tag/追剧/index.html",
    "revision": "84817055dab621333995ec0f10303eae"
  },
  {
    "url": "tag/阿里云盘/index.html",
    "revision": "901652b7bd8d1db0d5b6a3c90693d210"
  },
  {
    "url": "timeline/index.html",
    "revision": "7ad1dac1c706d8f3f230a7c23b70d1e2"
  },
  {
    "url": "views/memo.html",
    "revision": "a79c7a31e96837b273db44c13a6a0245"
  },
  {
    "url": "views/message-board.html",
    "revision": "d176aff3ecac89b1afbf5e30a29b8aca"
  },
  {
    "url": "views/news.html",
    "revision": "0870230186958eb63d31eac210676a35"
  },
  {
    "url": "views/note/ai/202101211832-ai-machine-leaning-deep-leaning.html",
    "revision": "48442edfbf58fd917de657052126b2d8"
  },
  {
    "url": "views/note/algorithm/202003171553-algorithm-in-practice.html",
    "revision": "66764dd7336ca304dc03ec21e0693659"
  },
  {
    "url": "views/note/algorithm/202007131836-time-of-sum.html",
    "revision": "2b62579a8b82099ffdc6e7d7a854e4c8"
  },
  {
    "url": "views/note/algorithm/202008252322-algorithm-learning.html",
    "revision": "956554e100678c0f3009daec488d8c01"
  },
  {
    "url": "views/note/algorithm/202008311800-leetcode-0001.html",
    "revision": "a6bd1efa8a84453696725044781296d4"
  },
  {
    "url": "views/note/algorithm/202104161400-leetcode-198-213.html",
    "revision": "ca4c7abe76f75c0de945c090f407a706"
  },
  {
    "url": "views/note/back-end/202003170000-qa-sumary.html",
    "revision": "dea139267e28c15cb6ee51ce4413b62d"
  },
  {
    "url": "views/note/back-end/202003220000-mq-1.html",
    "revision": "573368f25e0d2f1f25410b9d4ed4e306"
  },
  {
    "url": "views/note/back-end/202003251037-tomcat-remote-debugging.html",
    "revision": "a1d331db9367d6e839be91098377f845"
  },
  {
    "url": "views/note/back-end/202003251549-mq-2.html",
    "revision": "94fd82cdb2c9b5943e14f3e775536286"
  },
  {
    "url": "views/note/back-end/202004021613-java-log.html",
    "revision": "b4d25e260233aafb9e71122b2834cd17"
  },
  {
    "url": "views/note/back-end/202004071826-zookeeper-install.html",
    "revision": "cab29a36beef6d468d394da183c33ae8"
  },
  {
    "url": "views/note/back-end/202004081325-mq-kafka-install.html",
    "revision": "9e4724720f10e80c0955e54d4d566926"
  },
  {
    "url": "views/note/back-end/202004081353-java-for-update-value.html",
    "revision": "e5416db0fde8daa263d4df1b6afbdb43"
  },
  {
    "url": "views/note/back-end/202004110912-mq-kafka-spring-boot-quick-start.html",
    "revision": "b4ab9c58b57a9c9fd9a8eef779681536"
  },
  {
    "url": "views/note/back-end/202004181200-paging-when-data-changed.html",
    "revision": "1582256a519a8a4896ca68c70a0179f4"
  },
  {
    "url": "views/note/back-end/202004211800-mysql-index-about-like.html",
    "revision": "52b7081145c4610d07866e02e39f047a"
  },
  {
    "url": "views/note/back-end/202005111040-troubleshoot-advice.html",
    "revision": "38e105e69056722fabca4e21cb287636"
  },
  {
    "url": "views/note/back-end/202006231316-java-programming-thinking.html",
    "revision": "3a8cf690e634be8bea2464647adfd7f3"
  },
  {
    "url": "views/note/back-end/202006301740-es-search-perf.html",
    "revision": "e19bf0164b2533ad3f493021e1713472"
  },
  {
    "url": "views/note/back-end/202009111657-troubleshoot-map-containsKey.html",
    "revision": "095868c8285928dc0aa00c5421509deb"
  },
  {
    "url": "views/note/back-end/202009151110-troubleshoot-dubbo.html",
    "revision": "2b2162c0be1fc5a601d61aaec6ba4389"
  },
  {
    "url": "views/note/back-end/202009151113-troubleshoot-record.html",
    "revision": "a2d970cccceb23ea802e135b63014188"
  },
  {
    "url": "views/note/back-end/202009161800-design-resource-rank.html",
    "revision": "25885d1c8e58ecfba38782dd1e43a639"
  },
  {
    "url": "views/note/back-end/202009181055-java-basic-knowledge.html",
    "revision": "812bc6dda11742de1ffadbc7bca85bf1"
  },
  {
    "url": "views/note/back-end/202009291133-common-deign-sharing.html",
    "revision": "fdaaf5560c004c9b8fdb17ef2090227f"
  },
  {
    "url": "views/note/back-end/202010141945-troubleshoot-mysql-timestamp-range.html",
    "revision": "57d61c3d5ead3922f2d25cf3e3709596"
  },
  {
    "url": "views/note/back-end/202010151119-design-img-multiple-size-upload.html",
    "revision": "c8cdccedd4fda777af3a6627418ada9c"
  },
  {
    "url": "views/note/back-end/202010171641-troubleshoot-call-chain-analysis.html",
    "revision": "422af3be8f45977242c12eb9a6773e40"
  },
  {
    "url": "views/note/back-end/202011041635-troubleshoot-oom.html",
    "revision": "b76e42a718dbda8393c63a47c5359ad6"
  },
  {
    "url": "views/note/back-end/202011061053-struts-to-spring-mvc.html",
    "revision": "01d57d8c5401cd989db5e96a063d5abd"
  },
  {
    "url": "views/note/back-end/202011111918-ip-parse-service-design.html",
    "revision": "6e29174e11985d937fdc43d68cf7072d"
  },
  {
    "url": "views/note/back-end/202012120023-cache.html",
    "revision": "1431255535a8e5fb38f8c9b6de478bec"
  },
  {
    "url": "views/note/back-end/202012141640-troubleshoot-dubbo-registry.html",
    "revision": "b2260e8b8e1d675306a793cfcaadaad0"
  },
  {
    "url": "views/note/back-end/202012291105-elasticsearch-analysis-ik.html",
    "revision": "b8951dad5d523cd04048cdcb093dcfe9"
  },
  {
    "url": "views/note/back-end/202101291313-arthas.html",
    "revision": "7335e4a0f569420472ca22b2d00decec"
  },
  {
    "url": "views/note/back-end/202104131352-idea-debug.html",
    "revision": "bc5c5e4ce5c98b1c6e4e494e0e9c125d"
  },
  {
    "url": "views/note/back-end/202105201717-ip-parsing-service-troubleshoot-and-perf.html",
    "revision": "2670b24b397109a9313b6b1f5047c604"
  },
  {
    "url": "views/note/back-end/202303210705-mysql-note.html",
    "revision": "f3676a39b31c720bf5cf6457572cd1af"
  },
  {
    "url": "views/note/dev/202008032201-dev-log.html",
    "revision": "33b60a4b2262419a994031cb73dc9717"
  },
  {
    "url": "views/note/dev/202010301115-improve-the-development-experience.html",
    "revision": "c0b9fe788a7820185499f144e3a9f3db"
  },
  {
    "url": "views/note/dev/idea.html",
    "revision": "e3c8372fdd838ba51208c27adb4db420"
  },
  {
    "url": "views/note/front-end/202003281955-vuepress-favorites-dev.html",
    "revision": "926de054cba6ea342bc3971945f6be5a"
  },
  {
    "url": "views/note/front-end/202004021835-js-date-format.html",
    "revision": "4a6f71f61389745704968168d17866d8"
  },
  {
    "url": "views/note/machine-learning/202003060000-init.html",
    "revision": "b8c24e9a75823a88a39b1e2fbb26a7c0"
  },
  {
    "url": "views/note/ops/202003080000-how-to-set-up-blog.html",
    "revision": "3e0f7590872ec8c956db548665f74aa7"
  },
  {
    "url": "views/note/ops/202003231800-github-actions.html",
    "revision": "4cc46421ba8e7d2e52cbf1dd4c789bf2"
  },
  {
    "url": "views/note/ops/202003241800-vuepress-plugin.html",
    "revision": "e992c23ac0207e7a34d44c2143fe9243"
  },
  {
    "url": "views/note/ops/202003291850-douban-search-tool.html",
    "revision": "7eefc84db5148b7e5b4f98e1d0fd33cf"
  },
  {
    "url": "views/note/ops/202003302049-git-merge-problem.html",
    "revision": "26b3e972816aabc80a90abeba4ad0b97"
  },
  {
    "url": "views/note/ops/202004031522-linux-environment-variable.html",
    "revision": "0273b63ab62fcb5c8c1c192fdf8cabfe"
  },
  {
    "url": "views/note/ops/202004061808-vuepress-enhance-app.html",
    "revision": "a046032b7fd60d4db9e9ee8062809680"
  },
  {
    "url": "views/note/ops/202004081131-linux-command.html",
    "revision": "227417b8c46f1b95271ede3b0aeb3b78"
  },
  {
    "url": "views/note/ops/202004141352-vuepress-last-updated.html",
    "revision": "9b7c6115709b2b4840853bf0d6b5c82b"
  },
  {
    "url": "views/note/ops/202006051715-about-bilibili-share-iframe.html",
    "revision": "f4678d97d7207cd5843f7cafa058cbe6"
  },
  {
    "url": "views/note/ops/202006061325-windows-command.html",
    "revision": "fbac0ef662740b8dca8b6a14dfa163bd"
  },
  {
    "url": "views/note/ops/202007151700-dev-env-and-tools.html",
    "revision": "d061308852647e686ded50a15486f008"
  },
  {
    "url": "views/note/ops/202008211422-docker.html",
    "revision": "b0fbc55df4255b77a50d9f9f0d2dd317"
  },
  {
    "url": "views/note/ops/202008222201-microsoft-e5.html",
    "revision": "251e1842da3fd6449331b68873a8e036"
  },
  {
    "url": "views/note/ops/202009041358-forestry-vuepress-cms.html",
    "revision": "5989176febb292e9e1977dcf29ce1e81"
  },
  {
    "url": "views/note/ops/202012202137-linux.html",
    "revision": "131df926b9435b44c9f3eac9af5c02f3"
  },
  {
    "url": "views/note/ops/202101032118-github-default-branch.html",
    "revision": "4e09f3b57d63ab319789b61543b0b34a"
  },
  {
    "url": "views/note/ops/202210171019-opensuse-guide.html",
    "revision": "519c9273171a128d633a2953780e5b64"
  },
  {
    "url": "views/note/photography/202006231335-photography-composition.html",
    "revision": "4747be513df451a03ce44f4473fc41ce"
  },
  {
    "url": "views/note/photography/202102241315-ps-blending-modes.html",
    "revision": "4cd9e396107c14d3bdadff467c89f085"
  },
  {
    "url": "views/note/security/202004131057-security-blog-link.html",
    "revision": "488b987ba2d50a8028884608df8b8a44"
  },
  {
    "url": "views/note/security/202004151107-gsil-github-actions.html",
    "revision": "3296d17ea82fd8bf4fafea7294a14504"
  },
  {
    "url": "views/note/security/202103071400-immunity-canvas-7.26.html",
    "revision": "28d6b93576bf6be25983f5d30da0a81d"
  },
  {
    "url": "views/note/security/202104131325-personal-privacy-protect.html",
    "revision": "0d18a42836e6c57adf0752e477789972"
  },
  {
    "url": "views/note/study.html",
    "revision": "2430f08ce3c791d4138e9db2cb590903"
  },
  {
    "url": "views/other/202003050000-hello-world.html",
    "revision": "33e15fef6388dc21618d2b8a792a0d7d"
  },
  {
    "url": "views/other/202003170000-vpn.html",
    "revision": "45fa2e026ce45221de4ff45323813f0e"
  },
  {
    "url": "views/wanji/202005171916-remove-mitv-ad.html",
    "revision": "9a07c2d01fa202601db34b243246bde8"
  },
  {
    "url": "views/wanji/202005211317-wanji-resource-share.html",
    "revision": "d93bed424e4ef3898c1a89f1e69a3383"
  },
  {
    "url": "views/wanji/202008261312-control-phone-on-pc.html",
    "revision": "b6b595769fc30cf0c88bd61914c67f0b"
  },
  {
    "url": "views/wanji/202010251703-taobao-yangmao.html",
    "revision": "9333ee5e9e43f508f8cc7b87bab4e5b5"
  },
  {
    "url": "views/wanji/202012132201-router-k2p.html",
    "revision": "87ebc7aad5a88f2e92a507a6ea61c5a2"
  },
  {
    "url": "views/wanji/202012201630-termux.html",
    "revision": "6dd77f0ca6e25ce0e589f5259dbab5d0"
  },
  {
    "url": "views/wanji/202012201650-chrome-extensions.html",
    "revision": "c842c627ddaca732d4f10f46d1ac09b6"
  },
  {
    "url": "views/wanji/202101211843-sony-α6000.html",
    "revision": "01e07fa0e4ea01aedaf63ee281dc36c6"
  },
  {
    "url": "views/wanji/202101291137-remote-boot-wake-on-lan.html",
    "revision": "fa11818178f36f076c05324b12b297ad"
  },
  {
    "url": "views/wanji/202101291140-add-wechat-by-wxid.html",
    "revision": "bd2da535d17fdd2d8d4989aeb00ef95f"
  },
  {
    "url": "views/wanji/202102131832-magisk-issure-fix.html",
    "revision": "f59a4f078f5340698f265dc24df3f8f5"
  },
  {
    "url": "views/wanji/202104131338-telegram.html",
    "revision": "50018c90f26c69d45e42c300e936c580"
  },
  {
    "url": "views/wanji/202104131346-interesting-website.html",
    "revision": "cbdd03f074af599bb84c32de9551301f"
  },
  {
    "url": "views/wanji/202109181949-play-video-online.html",
    "revision": "7403e3a2814e6fd59218013e91a4681d"
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
