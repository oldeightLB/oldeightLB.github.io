import { reactive } from 'vue'

export const emoticon: {
  title: string
  list: Emoticon[]
}[] = reactive([
  {
    title: '米游社',
    list: [
      {
        title: '阮•梅 吃点心',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/004eaecffcc6755e116a4ebb3101bcb8_7432375174838127293.png'
      },
      {
        title: '阮•梅 敷衍',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/abc1d862d82b1912a7eb8415114b50c0_8979430960975794253.png'
      },
      {
        title: '阮•梅 什么事',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/f27af9aaef413086389d667227ffb503_3846603955709511018.png'
      },
      {
        title: '阮•梅 真棒',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/fbe2d2e2861f1d23bf928661e9fdfcf6_90135467997125628.png'
      },
      {
        title: '真理医生 不屑',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/b934a1717d07d7994b602e47fa656747_5381268646061041341.png'
      },
      {
        title: '真理医生 扔粉笔',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/00e238908f0bbd4fda084181baa1cb1d_3060234326794407271.png'
      },
      {
        title: '真理医生 计算中',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/e0b413ade715eb75aba2731c839bb724_6900592663590997950.png'
      },
      {
        title: '真理医生 裂开',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/190b724e523a106f66501b78daded09d_1307672139121863195.png'
      },
      {
        title: '雪衣 无言',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/ecfc14f48484637539d7eecfb48b1178_5785018828453527028.png'
      },
      {
        title: '雪衣 到点了',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/7db55ffd8c3471e8d5b7189eff570b93_6666268496367522363.png'
      },
      {
        title: '雪衣 逮捕',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/2f3dbb500f3e7f78d9c32f577a155c62_2550392836154570910.png'
      },
      {
        title: '姬子 喝杯热水',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/1223681a2483d22883bd7d9761020c09_5684454427826272188.png'
      },
      {
        title: '佩佩 递茶',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/31a1b38428cdcc037c03adce19abffbe_4299725472634554597.png'
      },
      {
        title: '螺丝咕姆 宕机',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/53a316bdef4a16e29dc8d5bb8a0be976_1706072813871686262.png'
      },
      {
        title: '黑塔 噗嗤',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/b1a8be09685f1e00953ca2b8d9461bb6_938336862456557086.png'
      },
      {
        title: '阮•梅造物 贴贴',
        url: 'https://bbs-static.miyoushe.com/static/2023/12/19/944d14d2a7f8f9049fba6e1b25392ee0_5147753172740263035.png'
      },

      {
        title: '姬子 计算',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/919c110ea2f23f33557b2d630971193c_1208672549796794648.png'
      },
      {
        title: '杰帕德 开门',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/b230c88688140975ac490bbcc1cf198d_4276013326525000853.png'
      },

      {
        title: '帕姆 奋斗',
        url: 'https://img-static.mihoyo.com/communityweb/upload/fe751e28e2c19713409703ff8ede5991.png'
      },
      {
        title: '帕姆 喝茶',
        url: 'https://img-static.mihoyo.com/communityweb/upload/5f05cd9b0bad4ad7e3bc979fc8b4ab78.png'
      },
      {
        title: '帕姆 睡觉',
        url: 'https://img-static.mihoyo.com/communityweb/upload/b691ded240cc08160f15d7f3993615ef.png'
      },
      {
        title: '帕姆 瘫倒',
        url: 'https://img-static.mihoyo.com/communityweb/upload/a7304904a31329464114b1074218967e.png'
      },
      {
        title: '帕姆 舞动',
        url: 'https://img-static.mihoyo.com/communityweb/upload/15c1d1f40c290b6f8c3f279d569e218d.png'
      },
      {
        title: '帕姆 震惊',
        url: 'https://img-static.mihoyo.com/communityweb/upload/2bc65c226456bea0398f59387142d6cf.png'
      },
      {
        title: '帕姆 自闭',
        url: 'https://img-static.mihoyo.com/communityweb/upload/10cf94c3601c8d5c62ced474653eb01e.png'
      },
      {
        title: '帕姆_比心',
        url: 'https://img-static.mihoyo.com/communityweb/upload/bf7e7cae6c42a727faa3d5e76b4a4c1c.png'
      },
      {
        title: '帕姆_叉腰',
        url: 'https://img-static.mihoyo.com/communityweb/upload/eb1f17ea60f29d814dd158a486e588cb.png'
      },
      {
        title: '帕姆_打咩',
        url: 'https://img-static.mihoyo.com/communityweb/upload/1855f119fa081eb25b742a83827ef797.png'
      },
      {
        title: '帕姆_记笔记',
        url: 'https://img-static.mihoyo.com/communityweb/upload/0974795f6494d066c9fe178d515f643c.png'
      },
      {
        title: '帕姆_举牌',
        url: 'https://img-static.mihoyo.com/communityweb/upload/30466cebf4f97f4facd1ea9d85e15fdb.png'
      },
      {
        title: '帕姆_送礼物',
        url: 'https://img-static.mihoyo.com/communityweb/upload/2a9cef8d0e95571e89961c99f8b17e10.png'
      },
      {
        title: '帕姆_哭哭',
        url: 'https://img-static.mihoyo.com/communityweb/upload/9939adf214795d97dad9abd90265aab2.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第1弹',
    list: [
      {
        title: '三月七_吃糖',
        url: 'https://img-static.mihoyo.com/communityweb/upload/8debf4de875496c2515b005734200fe8.png'
      },
      {
        title: '三月七_Biu',
        name: '能量发射',
        url: 'https://img-static.mihoyo.com/communityweb/upload/0b5acb4c4e49bf8733806b11450f6c50.png'
      },
      {
        title: '三月七_点赞',
        url: 'https://img-static.mihoyo.com/communityweb/upload/d41b52daa44ef813710cf4b482a256b2.png'
      },
      {
        title: '三月七_生日快乐',
        url: 'https://img-static.mihoyo.com/communityweb/upload/2acb27e080342fde7ecee055d153f080.png'
      },
      {
        title: '三月七_悄悄话',
        url: 'https://img-static.mihoyo.com/communityweb/upload/a8b2f0d6c5173547b23b7557d9595391.png'
      },
      {
        title: '三月七_生气',
        url: 'https://img-static.mihoyo.com/communityweb/upload/5c433e340acca5043629fc84299a326a.png'
      },
      {
        title: '三月七_盯',
        url: 'https://img-static.mihoyo.com/communityweb/upload/a370edf80a844b3abcececf055ab9cf9.png'
      },
      {
        title: '三月七_骄傲',
        url: 'https://img-static.mihoyo.com/communityweb/upload/8f9225dcc57a028231f1d67fdab9135c.png'
      },
      {
        title: '三月七_加油',
        url: 'https://img-static.mihoyo.com/communityweb/upload/8aee1ff2c6508b43813237163cacec1c.png'
      },
      {
        title: '三月七_尴尬',
        url: 'https://img-static.mihoyo.com/communityweb/upload/0a74f8be80231a76381738498edd52a6.png'
      },
      {
        title: '三月七_开心',
        url: 'https://img-static.mihoyo.com/communityweb/upload/66f5c4854e9212e50fae7aeb97995a73.png'
      },
      {
        title: '三月七_哭',
        url: 'https://img-static.mihoyo.com/communityweb/upload/7bd889870907d2d96673d09afb53cf63.png'
      },
      {
        title: '三月七_无语',
        url: 'https://img-static.mihoyo.com/communityweb/upload/366bd6df27c1291e86c699ddc25bc816.png'
      },
      {
        title: '三月七_暗中观察',
        url: 'https://img-static.mihoyo.com/communityweb/upload/3b2e51180d866548d11c650a2dcf6d43.png'
      },
      {
        title: '三月七_困',
        url: 'https://img-static.mihoyo.com/communityweb/upload/f9760abdbec7f6488f62221935e08f62.png'
      },
      {
        title: '三月七_买买买',
        url: 'https://img-static.mihoyo.com/communityweb/upload/9a5750d4e1808d6f3b4ddca18fd4bda9.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第2弹',
    list: [
      {
        title: '丹恒 思考',
        url: 'https://img-static.mihoyo.com/communityweb/upload/73aabfbe4b49722db27bd5341431f58a.png'
      },
      {
        title: '姬子 微笑',
        name: '笑',
        url: 'https://img-static.mihoyo.com/communityweb/upload/17f60d2d36be5f75d00d88804df4a0c4.png'
      },
      {
        title: '瓦杨-🎶',
        name: '开心',
        url: 'https://img-static.mihoyo.com/communityweb/upload/bfbb9401c01ff80ddb2f2c47ece16acd.png'
      },
      {
        title: '黑塔 你说咩啊',
        name: '你说什么',
        url: 'https://img-static.mihoyo.com/communityweb/upload/27fb9141bd6d9a72a5ebff8b6ae10a00.png'
      },
      {
        title: '艾丝妲 OK',
        name: '没问题',
        url: 'https://img-static.mihoyo.com/communityweb/upload/e678db5bd8a8b2d12c0daeb0d64061a1.png'
      },
      {
        title: '阿兰 别别别',
        url: 'https://img-static.mihoyo.com/communityweb/upload/47ea70b50b95d7424ed84b5dd239f943.png'
      },
      {
        title: '卡芙卡 怒',
        name: '生气',
        url: 'https://img-static.mihoyo.com/communityweb/upload/677e18698f28c655cd39bfb7f16a86f2.png'
      },
      {
        title: '希露瓦 放电',
        name: '眨眼',
        url: 'https://img-static.mihoyo.com/communityweb/upload/9f49c04a7aeb5324760df769e1d9acbe.png'
      },
      {
        title: '银狼 吹泡泡',
        url: 'https://img-static.mihoyo.com/communityweb/upload/76cc94063d9c0efb2335e8487299cd0a.png'
      },
      {
        title: '虎克 哭哭',
        name: '哭',
        url: 'https://img-static.mihoyo.com/communityweb/upload/bab8ff43277f319e3a77cba8af4cf711.png'
      },
      {
        title: '杰帕德 叹气',
        url: 'https://img-static.mihoyo.com/communityweb/upload/22a0b41d9b75365f71f50348ef6c3233.png'
      },
      {
        title: '佩拉 懵',
        name: '呆',
        url: 'https://img-static.mihoyo.com/communityweb/upload/460a345beb85c449f354a38e2cd8e01c.png'
      },
      {
        title: '桑博 满是世俗的欲望',
        name: '许愿',
        url: 'https://img-static.mihoyo.com/communityweb/upload/856d513772f4f83df68fe7854be750d7.png'
      },
      {
        title: '克拉拉 给你心心',
        name: '心',
        url: 'https://img-static.mihoyo.com/communityweb/upload/54f6c5f6a4bf851877158b0000e636c5.png'
      },
      {
        title: '男主 摇人',
        url: 'https://img-static.mihoyo.com/communityweb/upload/f60e9a13f20efa46c9b545546d6c2414.png'
      },
      {
        title: '女主 摇人',
        url: 'https://img-static.mihoyo.com/communityweb/upload/51b3567dc5fed5d9b25decdb854b6d39.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第3弹',
    list: [
      {
        title: '彦卿 穷',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/a9dddd4198905b3036b531b53a199188_2510873814852127692.png'
      },
      {
        title: '彦卿 哼',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/01e64050e1304a68e0234639bbdb7188_855263133676056799.png'
      },
      {
        title: '丹恒 惊',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/7cb87b286c3d062300d31224508c0c9e_8768116406867668880.png'
      },
      {
        title: '开拓者 吃瓜ing',
        name: '吃瓜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/3173bc3e69fcfebecfda741340c9ad22_6841250310756275678.png'
      },
      {
        title: '开拓者 吃瓜脸',
        name: '吃瓜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/3d389fd2885b008e46d843c552c02bf3_5073438697399152551.png'
      },
      {
        title: '三月七 无语',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/40f465ef5312e4ba0b19c596b9999cef_8760502457253372865.png'
      },
      {
        title: '刃 来了',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/33b49a8bbead2a9e85290a75160d584e_2942391851204099012.png'
      },
      {
        title: '驭空 叹气',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/c0ee663156c5bb4dc518341f2fd231dd_2752194756869066332.png'
      },
      {
        title: '停云 暴富',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/b6352ebdefa5f62ac25ccc5317fe832a_7207836849676334708.png'
      },
      {
        title: '青雀 溜了',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/01c96af07865b0d5215c9bc97ebeca73_8859049719826705182.png'
      },
      {
        title: '罗刹 送花',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/3996afc68a13bfc5b5718af31e610f43_6807527097924316704.png'
      },
      {
        title: '景元 困',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/1719edbe458e6ea7147676632ddc0ca2_8989714708965482225.png'
      },
      {
        title: '景元 吸猫',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/8b9838175cb6312df34c32648a8e6649_1050729359995605746.png'
      },
      {
        title: '素裳 冲鸭',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/a785e557e39e100ce93d80508f112615_3814701686582051674.png'
      },
      {
        title: '白露 饿',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/34a86cbdf30331a9694cb9165188e3b5_6588321211650828715.png'
      },
      {
        title: '白露 给你',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/03/09/21dca94786b821dc6b448804baa1ff20_5579665276093320337.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第4弹',
    list: [
      {
        title: '希儿 哈欠',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/d3aff69a7813091e4bbab00976c01102_8986465711411928814.png'
      },
      {
        title: '希儿 怒',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/362c6ca877f65d820263eceb0517049a_3511022826083000682.png'
      },
      {
        title: '希儿 看不见我',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/b8339a6e239cd6bc312890b5a2b1d2b4_5203775527809838507.png'
      },
      {
        title: '景元 微笑',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/fe7d06fbfcf046384c80272b92c86030_1905096421019322702.png'
      },
      {
        title: '驭空 辛苦啦',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/04ea8e50c6d1d040e78fa527416c888d_3571267858134795543.png'
      },
      {
        title: '布洛妮娅 加班',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/309a7e89a280e8859b3e81934ac65eb3_1286616032136105993.png'
      },
      {
        title: '景元 记录',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/f4eb1205157cdaf7c620309d1dfba08f_8757557654822847568.png'
      },
      {
        title: '景元 鼓掌',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/12c66f1b9776593c3c72dc60425a3586_212501451985974117.png'
      },
      {
        title: '罗刹 交易成功',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/a62eb63ab236ccfcafc5f541c663f989_3560192199419290982.png'
      },
      {
        title: '罗刹 治疗',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/9834f2be541e2cb81b8a4cbf5160b2b0_6075466775997410414.png'
      },
      {
        title: '银狼 撤回',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/0e35415058aeff4b770ecd579a26b97f_321923979100135920.png'
      },
      {
        title: '银狼 有了',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/68323407b6af468cd1b80109783f9e89_983886735489491202.png'
      },
      {
        title: '克拉拉 拜托拜托',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/a10eabb3490880445dca229f8d497f8a_896673721189484005.png'
      },
      {
        title: '瓦尔特 看破',
        url: 'https://bbs-static.miyoushe.com/static/2023/05/31/6abcd2a2278cbd19e3203b221eefe6da_1513902848358695036.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第5弹',
    list: [
      {
        title: '求饶呜呜',
        name: '委屈',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/004d0d701e82bdfaebfaabac327498da_131680735947960883.png'
      },
      {
        title: '惊吓呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/d1dd2f84c4b22880f119fb2151a33eba_4066649589662777644.png'
      },
      {
        title: '开心呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/40f1fa005025ca16085ce7af268ef476_7562416552156179589.png'
      },
      {
        title: '睡觉呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/c63c5b15e01084a303dc71e9b110cee9_7708583280016716711.png'
      },
      {
        title: '比心呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/4472cd0df40afd96c096b4b9aa0b46d3_4641285137433734627.png'
      },
      {
        title: '无奈呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/569eb3011cb0253ca12055ed055ed0b4_2495493822724485444.png'
      },
      {
        title: '无语呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/6a055646a2017fd16251feb4a06786a8_3524208470425464936.png'
      },
      {
        title: '点赞呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/e5cf284f0136dd3dd6d161bc100690ad_2530421789229081234.png'
      },
      {
        title: '眩晕呜呜',
        name: '晕',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/d6fd67df7bf49cbadb6d96365c7f3364_2611280373330702568.png'
      },
      {
        title: '气气呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/1c1fa90e736c853f4d572764bbbf47cf_1717785802853310570.png'
      },
      {
        title: '疑惑呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/9c6372ecac2a16b11f3680194d00870d_7405142885051349596.png'
      },
      {
        title: '冲刺呜呜',
        name: '恶作剧',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/889ec04140bf60811490c8d14a2ac327_6845707261677208256.png'
      },
      {
        title: '坏笑呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/75adfa52a99a851d79e095aaaab4a4dd_453132178558594967.png'
      },
      {
        title: '期待呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/ae22a709f20fc7a50de3e3ddec59fc36_5043911018495078160.png'
      },
      {
        title: '认真呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/d72fbaf9008fa1f36524f90898d9cfbc_8887382496033527228.png'
      },
      {
        title: '敲黑板呜呜',
        url: 'https://upload-bbs.miyoushe.com/upload/2023/01/17/05225a897fbe27f883510ca6db73d1c1_6800969112711591823.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第6弹',
    list: [
      {
        title: '卡芙卡 优雅',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/ee2f63bef13481014a300a2f8c1db227_2374030898989969003.png'
      },
      {
        title: '卡芙卡 嘘',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/9014591729dd19ab99aca0baab4a43b3_7725247739019076707.png'
      },
      {
        title: '卡芙卡 爆炸',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/c26049786bada1fcf01be3b131bfef74_6478633253186512901.png'
      },
      {
        title: '卡芙卡 来电',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/5feaa0e288d9add277eaeb3f3ed1e643_8521468816037109101.png'
      },
      {
        title: '刃 啧',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/9dbc1c2740b388f3a2d13ba6fcb6bad6_7051517561296874422.png'
      },
      {
        title: '刃 锁定',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/38d924d952f0e674f5ce7580890cbc65_3662132904829338895.png'
      },
      {
        title: '刃 我没事',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/01f0b790c3cf094cee1f746ca776333c_5208857258239921879.png'
      },
      {
        title: '刃 看不见我',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/63eb5389e25fbad446a9cdbc4ad362a2_7385282869470240957.png'
      },
      {
        title: '卢卡 重拳出击',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/c817398bd8236cb932da0d3a9726d8b1_5682161033975977403.png'
      },
      {
        title: '卢卡 燃起来了',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/308627006c8663449c3f8e552447bbe9_496389543269753508.png'
      },
      {
        title: '卢卡 沮丧',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/bcf10494a14602f037c2443c2b23285e_2565003589273688569.png'
      },
      {
        title: '桑博 暗中观察',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/dfc4abca39cefdd9dbfd92177403a6db_6477267477114125760.png'
      },
      {
        title: '阿兰 抱抱',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/2d27bd11a61fb8f53ae00bef8b794fd2_85656851373122952.png'
      },
      {
        title: '娜塔莎 吃药了',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/5d6ad1499d312716dac28a598989cce8_4838350669362256011.png'
      },
      {
        title: '素裳 犯困',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/a20c3930b7e3f48c5e33d25c758a26a9_8607760215627482294.png'
      },
      {
        title: '希露瓦 嗨起来',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/11/1e50fbdfcddb837e811613402c5d66d9_3602892085025677894.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第7弹',
    list: [
      {
        title: '帕姆_嗨',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/e0e5b4f3dfb65e8a7777e30f9c37a5bb_3147752964558714736.png'
      },
      {
        title: '帕姆 比心',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/af5b12845af9905e288be3db536e6983_6628549822366343088.png'
      },
      {
        title: '帕姆_不可以',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/06e21f5dc06d93f9e69144c621114dd3_6443285262123990781.png'
      },
      {
        title: '帕姆_收到',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/09762d1498abafaef3e22c97b19ef4c1_2934227936834976350.png'
      },
      {
        title: '帕姆 哭哭',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/61bc6bb036f05c6deb3b6e8d21699234_2780715002462542354.png'
      },
      {
        title: '帕姆_点赞',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/041ab3fd1c16a616b703e0c254cdc4ad_7800210310515169099.png'
      },
      {
        title: '帕姆_疑惑',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/09cb4f3c1f28b44668caec12407601f1_1441988173853771936.png'
      },
      {
        title: '帕姆_震惊',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/3ff2277f04ccb8de78abd4b089d5bfbb_4343167930005750254.png'
      },
      {
        title: '帕姆_注意',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/98481243540309884b98979e39fde66d_6148736171473106316.png'
      },

      {
        title: '帕姆_礼物',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/d99eb16a20d0014d112b8da8fbcf151a_1415200807767201436.png'
      },
      {
        title: '帕姆_干饭',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/890af34c734b66b5aa807a459884e18e_5782231249937858548.png'
      },
      {
        title: '帕姆_好耶',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/f69ce32ddf7e521cac66a0736037d28b_1263766224684326415.png'
      },
      {
        title: '帕姆_出金',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/46a3460e867dcb38733c3ca687ed5077_1211613483112850443.png'
      },
      {
        title: '帕姆_加班',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/0f716ea71cdec732913b4ba03c328b56_2515347113415200098.png'
      },
      {
        title: '帕姆_害羞',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/b4d12cbf5bd68f2f4d88f1e480824d07_740759019081287507.png'
      },
      {
        title: '帕姆_好奇',
        url: 'https://bbs-static.miyoushe.com/static/2023/07/12/deae762cf6de86c07c341f3979ebdbda_2984956847437597229.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第8弹',
    list: [
      {
        title: '丹恒•饮月 摸摸',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/711da0498a52bffe87d6a34d29848e68_3633372855171920029.png'
      },
      {
        title: '丹恒•饮月 打一架',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/2ce878a882d67c2147492ab1fda5f4da_3225660971979872796.png'
      },
      {
        title: '丹恒•饮月 想开了',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/5b1e83bd6ce8ca875fc2c1ffe2b4eed1_2648406854036804754.png'
      },
      {
        title: '丹恒•饮月 听不见',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/449d41b595204bb0e422d37b59720051_6670911159183606619.png'
      },
      {
        title: '符玄 算一卦',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/2d1135163d42f28c44a882cef81c52db_7816121444361556952.png'
      },
      {
        title: '符玄 闪亮登场',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/e11a8420b6200f1f15add973d8d931cc_4272907653532202315.png'
      },
      {
        title: '符玄 看到了',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/86f3503d0365e0d70627f5ee166ab6cb_8664729249226913105.png'
      },
      {
        title: '符玄 坏蛋',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/7f19daf57762fb3cb097d4355be175d0_7527617030187211936.png'
      },
      {
        title: '玲可 冷',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/08ac545e14a3c8047182b120dcd9550c_1216508846012193807.png'
      },
      {
        title: '玲可 舒服',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/5bf2935771fe5ed5d5a8697e3e0e875c_3263166826505044437.png'
      },
      {
        title: '玲可 冲',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/417c33de8f5640fa681f765747e0a45e_7619612916240022229.png'
      },
      {
        title: '艾丝妲 发红包',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/31351e7491e6523505d5d1ef85b83430_2386177510293938242.png'
      },
      {
        title: '白露 吐泡泡',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/b7889aec1e475b734f7b945d2d05ff3c_7354746959406462078.png'
      },
      {
        title: '驭空 飙车',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/da38e5e2b93f92f1292be29b09f76a9b_6828892350232663371.png'
      },
      {
        title: '虎克 诶嘿',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/828d560737c7ceb79b7a86f84a68bd1f_3852115434643857833.png'
      },
      {
        title: '佩拉 哇',
        url: 'https://bbs-static.miyoushe.com/static/2023/08/23/f40897fc9b83d4cc11583312a4fa11a5_1248458060610486979.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第9弹',
    list: [
      {
        title: '托帕&账账 肯定',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/a74bef45413382fafe41111d15d299b0_273291246745481614.png'
      },
      {
        title: '托帕&账账 震惊',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/eb7513484ec7a0b18f97989f3cd781e3_3717882688449907834.png'
      },
      {
        title: '托帕&账账 好耶',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/64902ff64de23634335e434fc5c483e0_3700022124609370798.png'
      },
      {
        title: '托帕&账账 注意',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/0140b936e7852a46a1eb97b40ed334a4_7459351197391961931.png'
      },
      {
        title: '镜流 喝茶',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/5f51ed773afa3bfc1e9ae27b0bf3cd60_336916127128913071.png'
      },
      {
        title: '镜流 休息',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/5b8268c5c7509ff2923b983cbd1bed9c_8670005681589707815.png'
      },
      {
        title: '镜流 惆怅',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/01d70a40da821b37da8055874957bc9d_7369251544892264357.png'
      },
      {
        title: '镜流 消灭你',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/93d99f4cb23164eae566e40d95ffb303_649522493904444178.png'
      },
      {
        title: '桂乃芬 开播',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/5c09a20f8988f31780c819a79f53e28f_836353439693569042.png'
      },
      {
        title: '桂乃芬 庆祝',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/9f9f34009d5eb85c97b91b89a5d7456b_3842306543158547991.png'
      },
      {
        title: '桂乃芬 略略',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/68c2e3d5b3c532204ff1f3a6dce75772_1275297343691337661.png'
      },
      {
        title: '杰帕德 浇花',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/cb01b82277b2dcef44ac4634d06d6513_4996259304113462973.png'
      },
      {
        title: '素裳 好重',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/61b80291ae5df6b75bd866bd88194901_9104410693080092017.png'
      },
      {
        title: '停云 扇风',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/3f2bced2ab31ea6b4e36881d5415d413_3048389265191318558.png'
      },
      {
        title: '青雀 自摸',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/5544bdda374594956bd665016ae6c315_3206484229771419050.png'
      },
      {
        title: '桑博 谢谢老板',
        url: 'https://bbs-static.miyoushe.com/static/2023/10/07/517616fc27ab885b28447813af1a840f_323677886540923380.png'
      }
    ]
  },
  {
    title: '帕姆展览馆第10弹',
    list: [
      {
        title: '藿藿 抓狂',
        name: '发疯',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/722fc5f2e631e5c02184afdc15c2209f_7114079448845986183.png'
      },
      {
        title: '藿藿 呆滞',
        name: '呆',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/4b762974715bbecb517b87acc99013a8_603864051907375271.png'
      },
      {
        title: '藿藿 捏脸',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/fb24d0f231d3254eee14156fdafa1df1_416280374400170107.png'
      },
      {
        title: '藿藿 好痛',
        name: '疼',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/93326ec6a7d99d3b20fa6ba9c70979e5_4473453907417676491.png'
      },
      {
        title: '银枝 玫瑰',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/4ce180405448a40da61e2436818c248a_2441556849474571368.png'
      },
      {
        title: '银枝 邀请',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/b9dec377e6453d402233e8e1945b4a67_2652820278244814669.png'
      },
      {
        title: '银枝 静音',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/68299c1e6c62ec161e6100ce9be37992_5111967268306421070.png'
      },
      {
        title: '银枝 登场',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/7373a1d0f0e417ea40d6fda0b7e6300a_1628297853655473088.png'
      },
      {
        title: '寒鸦 碎碎念',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/898ef9cfa458a0d7d0827e16bb614c7a_8789318838137872638.png'
      },
      {
        title: '寒鸦 困倦',
        name: '困',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/d31ef08d95c7013e9a49506458e0993e_4222665192735317985.png'
      },
      {
        title: '寒鸦 打叉',
        name: '不行',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/9193077bb91f5fd2824b4e25f8ff2b66_7638043943100803204.png'
      },
      {
        title: '瓦尔特 喷',
        name: '噗',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/7f1433518c51f5a303d8981a3b2b2cd6_6339144569846334691.png'
      },
      {
        title: '藿藿小纸人 瞧一瞧',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/eb21f3817964090393e8415883579b9c_6759076945872269429.png'
      },
      {
        title: '尾巴 就这',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/5f0581151a00ca4efe963928c2607df0_5889753033090282341.png'
      },
      {
        title: '桂乃芬 惊',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/feb46dc482bc621cc68058b0f77478d6_3301492614879353942.png'
      },
      {
        title: '桂乃芬 看透',
        url: 'https://bbs-static.miyoushe.com/static/2023/11/07/871f79b8ddee2245852b71444a65bba5_6286795372259014652.png'
      }
    ]
  },
  {
    title: '布洛妮娅',
    list: [
      {
        title: '中年人_早上好',
        url: 'https://patchwiki.biligame.com/images/sr/c/cc/r1g235z2gp3hgqq6n4opu5gt8xonn60.png'
      },
      {
        title: '中年人_干杯',
        url: 'https://patchwiki.biligame.com/images/sr/0/00/o6q5i3bzyvwh658jq1ylqlbnyunejo9.png'
      }
    ]
  }
])

for (const i in emoticon) {
  for (const j in emoticon[i].list) {
    if (emoticon[i].list[j].name) {
      emoticon[i].list[j].title = emoticon[i].list[j].name as string
    } else {
      emoticon[i].list[j].title = emoticon[i].list[j].title.replace(
        /(^\S+ )|(^\S+-)|(^\S+_)|呜呜/,
        ''
      )
    }
  }
}
