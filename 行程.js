$(function () {
    // 選日期
    $("#datepicker").datepicker({
        minDate: 0,
        dateFormat: 'yy-mm-dd'
    });


    //假資料 假設是由資料庫轉過來的
    var spots = {
        taipei: [
            { "name": "台北101", "img": "./景點圖片/台北/台北101.jpg", "alt": "Taipei 101" },
            { "name": "故宮博物院", "img": "./景點圖片/台北/故宮博物院.jpg", "alt": "National Palace Museum" },
            { "name": "士林夜市", "img": "./景點圖片/台北/士林夜市.jpg", "alt": "Shilin Night Market" },
            { "name": "陽明山公園", "img": "./景點圖片/台北/陽明山國家公園.jpg", "alt": "Yangmingshan National Park" },
            { "name": "龍山寺", "img": "./景點圖片/台北/龍山寺.jpg", "alt": "Longshan Temple" },
            { "name": "中正紀念堂", "img": "./景點圖片/台北/中正紀念堂.jpg", "alt": "National Chiang Kai-shek Memorial Hall" },
            { "name": "台北動物園", "img": "./景點圖片/台北/台北動物園.jpg", "alt": "Taipei Zoo" },
            { "name": "國父紀念館", "img": "./景點圖片/台北/國父紀念館.jpg", "alt": "Sun Yat-sen Memorial Hall" },
            { "name": "象山", "img": "./景點圖片/台北/象山.jpg", "alt": "Xiangshan" },
            { "name": "迪化街", "img": "./景點圖片/台北/迪化街.jpg", "alt": "Dihua Street" },
            { "name": "松山文創園區", "img": "./景點圖片/台北/松山文創園區.jpg", "alt": "Songshan Cultural and Creative Park" },
            { "name": "北投溫泉區", "img": "./景點圖片/台北/北投溫泉區.jpg", "alt": "Beitou Hot Spring Area" },
            { "name": "淡水老街", "img": "./景點圖片/台北/淡水老街.jpg", "alt": "Tamsui Old Street" },
            { "name": "華山文創園區", "img": "./景點圖片/台北/華山1914文化創意產業園區.jpg", "alt": "Huashan 1914 Creative Park" },
            { "name": "寶藏巖藝術村", "img": "./景點圖片/台北/寶藏巖國際藝術村.jpg", "alt": "Treasure Hill Artist Village" },
        ],
        newtaipei: [
            { "name": "九份老街", "img": "./景點圖片/新北/九份老街.jpg", "alt": "Jiufen Old Street" },
            { "name": "野柳地質公園", "img": "./景點圖片/新北/野柳地質公園.jpg", "alt": "Yehliu Geopark" },
            { "name": "淡水漁人碼頭", "img": "./景點圖片/新北/淡水漁人碼頭.jpg", "alt": "Tamsui Fisherman's Wharf" },
            { "name": "鶯歌陶瓷老街", "img": "./景點圖片/新北/鶯歌陶瓷老街.jpg", "alt": "Yingge Ceramics Old Street" },
            { "name": "平溪天燈節", "img": "./景點圖片/新北/平溪天燈節.jpg", "alt": "Pingxi Sky Lantern Festival" },
            { "name": "深坑老街", "img": "./景點圖片/新北/深坑老街.jpg", "alt": "Shenkeng Old Street" },
            { "name": "十分瀑布", "img": "./景點圖片/新北/十分瀑布.jpg", "alt": "Shifen Waterfall" },
            { "name": "金瓜石黃金博物館", "img": "./景點圖片/新北/金瓜石黃金博物館.jpg", "alt": "Jinguashi Gold Museum" },
            { "name": "烏來溫泉區", "img": "./景點圖片/新北/烏來溫泉區.jpg", "alt": "Wulai Hot Springs Area" },
            { "name": "石門洞", "img": "./景點圖片/新北/石門洞.jpg", "alt": "Shimen Cave" },
            { "name": "金山老街", "img": "./景點圖片/新北/金山老街.jpg", "alt": "Jinshan Old Street" },
            { "name": "萬里桐花公園", "img": "./景點圖片/新北/萬里桐花公園.jpg", "alt": "Wanli Tonghua Park" },
            { "name": "坪林茶業博物館", "img": "./景點圖片/新北/坪林茶業博物館.jpg", "alt": "Pinglin Tea Industry Museum" },
            { "name": "猴硐貓村", "img": "./景點圖片/新北/猴硐貓村.jpg", "alt": "Houtong Cat Village" },
            { "name": "瑞芳九份金瓜石環山步道", "img": "./景點圖片/新北/瑞芳九份金瓜石環山步道.jpg", "alt": "Ruifang Jiufen Jinguashi Mountain Trail" }
        ],
        taoyuan: [
            { "name": "大溪老街", "img": "./景點圖片/桃園/大溪老街.jpg", "alt": "Daxi Old Street" },
            { "name": "小人國樂園", "img": "./景點圖片/桃園/小人國主題樂園.jpg", "alt": "Miniatures Museum of Taiwan" },
            { "name": "拉拉山", "img": "./景點圖片/桃園/拉拉山.jpg", "alt": "Lala Mountain" },
            { "name": "石門水庫", "img": "./景點圖片/桃園/石門水庫.jpg", "alt": "Shimen Reservoir" },
            { "name": "角板山行館", "img": "./景點圖片/桃園/角板山行館.jpg", "alt": "Jiaoban Mountain Villa" },
            { "name": "桃園觀音寺", "img": "./景點圖片/桃園/桃園觀音寺.jpg", "alt": "Taoyuan Guanyin Temple" },
            { "name": "虎頭山公園", "img": "./景點圖片/桃園/虎頭山公園.jpg", "alt": "Hutoushan Park" },
            { "name": "中壢夜市", "img": "./景點圖片/桃園/中壢夜市.jpg", "alt": "Zhongli Night Market" },
            { "name": "大溪花海農場", "img": "./景點圖片/桃園/大溪花海農場.jpg", "alt": "Daxi Flower Sea Farm" },
            { "name": "慈湖紀念公園", "img": "./景點圖片/桃園/慈湖紀念雕塑公園.jpg", "alt": "Cihu Sculpture Memorial Park" },
            { "name": "國際棒球場", "img": "./景點圖片/桃園/桃園國際棒球場.jpg", "alt": "Taoyuan International Baseball Stadium" },
            { "name": "南崁夜市", "img": "./景點圖片/桃園/南崁夜市.jpg", "alt": "Nankan Night Market" },
            { "name": "觀音海濱公園", "img": "./景點圖片/桃園/觀音海濱公園.jpg", "alt": "Guanyin Coastal Park" },
            { "name": "大園花海", "img": "./景點圖片/桃園/大園花海.jpg", "alt": "Dayuan Flower Sea" },
            { "name": "龍潭大池", "img": "./景點圖片/桃園/龍潭大池.jpg", "alt": "Longtan Large Pond" }

        ],
        taichung: [
            { "name": "台中市高美溼地", "img": "./景點圖片/台中/高美溼地.jpg", "alt": "Gaomei Wetlands" },
            { "name": "台中市東海大學路思義教堂", "img": "./景點圖片/台中/東海大學路思義教堂.jpg", "alt": "Luce Memorial Chapel, Tunghai University" },
            { "name": "台中市彩虹眷村", "img": "./景點圖片/台中/彩虹眷村.jpg", "alt": "Rainbow Village" },
            { "name": "谷關溫泉公園", "img": "./景點圖片/台中/谷關溫泉公園.jpg", "alt": "Guguan Hot Spring Park" },
            { "name": "秋紅谷", "img": "./景點圖片/台中/秋紅谷.jpg", "alt": "Autumn Red Valley" },
            { "name": "大坑纜車", "img": "./景點圖片/台中/大坑纜車.jpg", "alt": "Dakeng Cable Car" },
            { "name": "審計新村", "img": "./景點圖片/台中/審計新村.jpg", "alt": "Auditing Village" },
            { "name": "台中都會公園", "img": "./景點圖片/台中/台中都會公園.jpg", "alt": "Taichung Metropolitan Park" },
            { "name": "台中酒家菜文化展示館", "img": "./景點圖片/台中/台中酒家菜文化展示館.jpg", "alt": "Taichung Restaurant Cuisine Cultural Exhibition Hall" },
            { "name": "臺中州廳", "img": "./景點圖片/台中/臺中州廳.jpg", "alt": "Taichung Prefectural Hall" },
            { "name": "中興堂", "img": "./景點圖片/台中/中興堂.jpg", "alt": "Chung-Shing Temple" },
            { "name": "國防園區", "img": "./景點圖片/台中/國防園區.jpg", "alt": "National Defense Park" },
            { "name": "石岡壩外旅遊步道", "img": "./景點圖片/台中/石岡壩外旅遊步道.jpg", "alt": "Shigang Dam Outdoor Tourist Trail" },
            { "name": "潭雅神綠園道", "img": "./景點圖片/台中/潭雅神綠園道.jpg", "alt": "Tan Ya Shen Green Park" },
            { "name": "台中親子館", "img": "./景點圖片/台中/台中親子館.jpg", "alt": "Taichung Parent-Child Pavilion" },
            { "name": "中社觀光花市", "img": "./景點圖片/台中/中社觀光花市.jpg", "alt": "Zhongshe Flower Market" },
            { "name": "石似文化園區", "img": "./景點圖片/台中/石似文化園區.jpg", "alt": "Shisi Cultural Park" }

        ],
        tainan: [
            { "name": "安平古堡", "img": "./景點圖片/台南/安平古堡.jpg", "alt": "Anping Fort" },
            { "name": "赤崁樓", "img": "./景點圖片/台南/赤崁樓.jpg", "alt": "Chihkan Tower" },
            { "name": "台江國家公園", "img": "./景點圖片/台南/台江國家公園.jpg", "alt": "Taijiang National Park" },
            { "name": "安平樹屋", "img": "./景點圖片/台南/安平樹屋.jpg", "alt": "Anping Tree House" },
            { "name": "孔廟", "img": "./景點圖片/台南/孔廟.jpg", "alt": "Confucius Temple" },
            { "name": "花園夜市", "img": "./景點圖片/台南/花園夜市.jpg", "alt": "Hua Yuan Night Market" },
            { "name": "安平老街", "img": "./景點圖片/台南/安平老街.jpg", "alt": "Anping Old Street" },
            { "name": "四草綠色隧道", "img": "./景點圖片/台南/四草綠色隧道.jpg", "alt": "Sicao Green Tunnel" },
            { "name": "鹽山觀光工廠", "img": "./景點圖片/台南/鹽山觀光工廠.jpg", "alt": "Salt Mountain Tourist Factory" },
            { "name": "海安路藝術街", "img": "./景點圖片/台南/海安路藝術街.jpg", "alt": "Hai'an Road Art Street" },
            { "name": "北門水晶教堂", "img": "./景點圖片/台南/北門水晶教堂.jpg", "alt": "Beimen Crystal Church" },
            { "name": "走馬瀨農場", "img": "./景點圖片/台南/走馬瀨農場.jpg", "alt": "Zou Ma Se Farm" },
            { "name": "十鼓文化村", "img": "./景點圖片/台南/十鼓文化村.jpg", "alt": "Ten Drum Cultural Village" },
            { "name": "台南孔廟文化園區", "img": "./景點圖片/台南/台南孔廟文化園區.jpg", "alt": "Tainan Confucius Temple Cultural Park" },
            { "name": "國立成功大學", "img": "./景點圖片/台南/國立成功大學.jpg", "alt": "National Cheng Kung University" }
        ]
        ,
        kaohsiung: [
            { "name": "旗津島", "img": "./景點圖片/高雄/旗津島.jpg", "alt": "Qijin Island" },
            { "name": "瑞豐夜市", "img": "./景點圖片/高雄/瑞豐夜市.jpg", "alt": "Ruifeng Night Market" },
            { "name": "蓮池潭", "img": "./景點圖片/高雄/蓮池潭.jpg", "alt": "Lotus Pond" },
            { "name": "高雄85大樓", "img": "./景點圖片/高雄/高雄85大樓.jpg", "alt": "85 Sky Tower" },
            { "name": "草衙飛行器館", "img": "./景點圖片/高雄/草衙飛行器館.jpg", "alt": "Ciaoyu Aviation Museum" },
            { "name": "佛光山", "img": "./景點圖片/高雄/佛光山.jpg", "alt": "Fo Guang Shan" },
            { "name": "西子灣", "img": "./景點圖片/高雄/西子灣.jpg", "alt": "Sizihwan" },
            { "name": "高雄市立美術館", "img": "./景點圖片/高雄/高雄市立美術館.jpg", "alt": "Kaohsiung Museum of Fine Arts" },
            { "name": "愛河", "img": "./景點圖片/高雄/愛河.jpg", "alt": "Love River" },
            { "name": "義大遊樂世界", "img": "./景點圖片/高雄/義大遊樂世界.jpg", "alt": "E-DA Theme Park" },
            { "name": "佛陀紀念館", "img": "./景點圖片/高雄/佛陀紀念館.jpg", "alt": "Fo Guang Shan Buddha Museum" },
            { "name": "高雄港", "img": "./景點圖片/高雄/高雄港.jpg", "alt": "Port of Kaohsiung" },
            { "name": "英明遺址公園", "img": "./景點圖片/高雄/英明遺址公園.jpg", "alt": "Yingmeng Remains Park" },
            { "name": "高雄展覽館", "img": "./景點圖片/高雄/高雄展覽館.jpg", "alt": "Kaohsiung Exhibition Center" },
            { "name": "大鵬灣國家風景區", "img": "./景點圖片/高雄/大鵬灣國家風景區.jpg", "alt": "Dapeng Bay National Scenic Area" }
        ]
        ,
        keelung: [
            { "name": "基隆廟口夜市", "img": "./景點圖片/基隆/基隆廟口夜市.jpg", "alt": "提供各種美食小吃，是夜間活動的好去處。" },
            { "name": "和平島公園", "img": "./景點圖片/基隆/和平島公園.jpg", "alt": "擁有壯麗的海岸線和地質景觀，是休閒放鬆的好地方。" },
            { "name": "正濱彩色屋", "img": "./景點圖片/基隆/正濱漁港彩色屋.jpg", "alt": "色彩繽紛的建築吸引大量攝影愛好者，體驗繽紛的漁港生活。" },
            { "name": "基隆海洋廣場", "img": "./景點圖片/基隆/基隆海洋廣場.jpg", "alt": "提供各種海上活動和美食，適合全家同遊。" },
            { "name": "市立文化中心", "img": "./景點圖片/基隆/基隆市立文化中心.jpg", "alt": "舉辦各種藝術展覽和表演活動，是文化愛好者的好去處。" },
            { "name": "八斗子漁港", "img": "./景點圖片/基隆/八斗子漁港.jpg", "alt": "提供新鮮海產和海釣活動，感受漁港的熱鬧氛圍。" },
            { "name": "情人湖", "img": "./景點圖片/基隆/情人湖.jpg", "alt": "風景優美，適合情侶散步和拍照，享受浪漫時光。" },
            { "name": "崁仔頂漁市", "img": "./景點圖片/基隆/崁仔頂漁市.jpg", "alt": "提供各種海鮮和漁獲，是美食愛好者的天堂。" },
            { "name": "基隆燈塔", "img": "./景點圖片/基隆/基隆燈塔.jpg", "alt": "提供壯麗的海景和歷史背景，是攝影愛好者的好地方。" },
            { "name": "獅球嶺炮台", "img": "./景點圖片/基隆/獅球嶺炮台.jpg", "alt": "提供壯麗的海景和歷史遺跡，是歷史愛好者的好去處。" },
            { "name": "中正公園", "img": "./景點圖片/基隆/中正公園.jpg", "alt": "擁有大型觀音像和優美的自然景觀，是市民放鬆的好地方。" },
            { "name": "二沙灣砲台", "img": "./景點圖片/基隆/二沙灣砲台.jpg", "alt": "保存良好的古老砲台和美麗的海景，是歷史愛好者的必訪之地。" },
            { "name": "龍崗步道", "img": "./景點圖片/基隆/龍崗步道.jpg", "alt": "空氣清新，樹林庇護。" },
            { "name": "基隆港", "img": "./景點圖片/基隆/基隆港.jpg", "alt": "觀賞繁忙的港口活動，感受海港的繁忙與活力。" },
            { "name": "基隆美術館", "img": "./景點圖片/基隆/基隆市立美術館.jpg", "alt": "舉辦各類現代藝術展覽和活動，是藝術愛好者的好去處。" }
        ]
        ,
        hsinchu: [
            { "name": "新竹城隍廟", "img": "./景點圖片/新竹/新竹城隍廟.jpg", "alt": "Hsinchu City God Temple" },
            { "name": "新竹十八尖山", "img": "./景點圖片/新竹/新竹十八尖山.jpg", "alt": "Hsinchu Eighteen Peaks" },
            { "name": "新竹動物園", "img": "./景點圖片/新竹/新竹市立動物園.jpg", "alt": "Hsinchu City Zoo" },
            { "name": "北埔老街", "img": "./景點圖片/新竹/北埔老街.jpg", "alt": "Beipu Old Street" },
            { "name": "內灣老街", "img": "./景點圖片/新竹/內灣老街.jpg", "alt": "Neiwan Old Street" },
            { "name": "香山濕地", "img": "./景點圖片/新竹/香山濕地.jpg", "alt": "Xiangshan Wetland" },
            { "name": "新竹科學園區", "img": "./景點圖片/新竹/新竹科學園區.jpg", "alt": "Hsinchu Science Park" },
            { "name": "玻璃博物館", "img": "./景點圖片/新竹/新竹玻璃工藝博物館.jpg", "alt": "Hsinchu Glass Museum" },
            { "name": "關西六福村", "img": "./景點圖片/新竹/關西六福村.jpg", "alt": "Leofoo Village Theme Park" },
            { "name": "新竹演藝廳", "img": "./景點圖片/新竹/新竹市立演藝廳.jpg", "alt": "Hsinchu Performing Arts Center" },
            { "name": "湖口老街", "img": "./景點圖片/新竹/湖口老街.jpg", "alt": "Hukou Old Street" },
            { "name": "寶山水庫", "img": "./景點圖片/新竹/寶山水庫.jpg", "alt": "Baoshan Reservoir" },
            { "name": "芎林富林園", "img": "./景點圖片/新竹/芎林富林園.jpg", "alt": "Fulin Farm in Qionglin" },
            { "name": "新竹圖書館", "img": "./景點圖片/新竹/新竹市立圖書館.jpg", "alt": "Hsinchu City Library" },
            { "name": "青草湖", "img": "./景點圖片/新竹/青草湖.jpg", "alt": "Qingcaohu Lake" }
        ],
        miaoli: [
            {
                "name": "勝興車站",
                "img": "./景點圖片/苗栗/苗栗縣勝興車站.jpg",
                "alt": "Shengxing Train Station"
            },
            {
                "name": "白沙岬燈塔",
                "img": "./景點圖片/苗栗/白沙岬燈塔.jpg",
                "alt": "Baishajiao Lighthouse"
            },
            {
                "name": "西湖渡假村",
                "img": "./景點圖片/苗栗/西湖渡假村.jpg",
                "alt": "Xihu Resort"
            },
            {
                "name": "清安豆腐街",
                "img": "./景點圖片/苗栗/清安豆腐街.jpg",
                "alt": "Qing'an Tofu Street"
            },
            {
                "name": "香遠蜂園",
                "img": "./景點圖片/苗栗/香遠蜂園.jpg",
                "alt": "Xiangyuan Bee Farm"
            },
            {
                "name": "南勢溪森林步道",
                "img": "./景點圖片/苗栗/南勢溪森林步道.jpg",
                "alt": "Nanshih Creek Forest Trail"
            },
            {
                "name": "客家圓樓",
                "img": "./景點圖片/苗栗/客家圓樓.jpg",
                "alt": "Hakka Round House"
            },
            {
                "name": "野馬騎士牧場",
                "img": "./景點圖片/苗栗/野馬騎士牧場.jpg",
                "alt": "Wild Horse Rider Ranch"
            },
            {
                "name": "好復紅茶故鄉",
                "img": "./景點圖片/苗栗/好復紅茶故鄉.jpg",
                "alt": "Haofu Black Tea Hometown"
            },
            {
                "name": "苑裡山城旅遊區",
                "img": "./景點圖片/苗栗/苑裡山城旅遊區.jpg",
                "alt": "Yuanli Shancheng Tourist Area"
            },
            {
                "name": "銅鑼灣溪生態園區",
                "img": "./景點圖片/苗栗/銅鑼灣溪生態園區.jpg",
                "alt": "Tongluowan Creek Ecological Park"
            },
            {
                "name": "後龍溪水岸景觀",
                "img": "./景點圖片/苗栗/後龍溪水岸景觀.jpg",
                "alt": "Houlongxi Riverside Landscape"
            },
            {
                "name": "三義木雕之鄉",
                "img": "./景點圖片/苗栗/三義木雕之鄉.jpg",
                "alt": "Sanyi Wood Carving Village"
            },
            {
                "name": "大湖酒莊",
                "img": "./景點圖片/苗栗/大湖酒莊.jpg",
                "alt": "Dahu Winery"
            },
            {
                "name": "龍騰斷橋",
                "img": "./景點圖片/苗栗/龍騰斷橋.jpg",
                "alt": "Longteng Bridge"
            },
            {
                "name": "國聯園藝場",
                "img": "./景點圖片/苗栗/國聯園藝場.jpg",
                "alt": "Guolian Horticultural Farm"
            }
        ]
        ,
        changhua: [
            { "name": "鹿港老街", "img": "./景點圖片/彰化/鹿港老街.jpg", "alt": "Lukang Old Street" },
            { "name": "八卦山大佛", "img": "./景點圖片/彰化/八卦山大佛風景區.jpg", "alt": "Baguashan Buddha Scenic Area" },
            { "name": "扇形車站", "img": "./景點圖片/彰化/扇形車站.jpg", "alt": "Changhua Fan-Shaped Train Station" },
            { "name": "鹿港龍山寺", "img": "./景點圖片/彰化/龍山寺.jpg", "alt": "Longshan Temple, Lukang" },
            { "name": "百果山", "img": "./景點圖片/彰化/百果山風景區.jpg", "alt": "Baiguo Mountain Scenic Area" },
            { "name": "鳳凰花田", "img": "./景點圖片/彰化/二林鳳凰花田.jpg", "alt": "Erlin Phoenix Flower Field" },
            { "name": "彰化孔廟", "img": "./景點圖片/彰化/彰化孔子家廟.jpg", "alt": "Confucius Temple, Changhua" },
            { "name": "鹿港老街", "img": "./景點圖片/彰化/鹿港老街.jpg", "alt": "Lukang Old Street" },
            { "name": "永興草漯", "img": "./景點圖片/彰化/永興草漯.jpg", "alt": "Yongxing Wetland" },
            { "name": "南蕃百年古樟", "img": "./景點圖片/彰化/東寧社區南蕃百年古樟.jpg", "alt": "Nanfan Ancient Camphor Tree, Dongning Community" },
            { "name": "許家古宅", "img": "./景點圖片/彰化/許家古宅.jpg", "alt": "Xu Family Residence" },
            { "name": "溪洲林場", "img": "./景點圖片/彰化/溪洲林場.jpg", "alt": "Xizhou Forest Recreation Area" },
            { "name": "菁芳園", "img": "./景點圖片/彰化/菁芳園.jpg", "alt": "Jingfang Garden" },
            { "name": "雲林布袋戲館", "img": "./景點圖片/彰化/雲林布袋戲館.jpg", "alt": "Yunlin Glove Puppetry Museum" },
            { "name": "棗玉老街", "img": "./景點圖片/彰化/棗玉老街.jpg", "alt": "Zaoyu Old Street" },
            { "name": "八卦山風景區", "img": "./景點圖片/彰化/八卦山風景區.jpg", "alt": "Baguashan Scenic Area" },
            { "name": "福興穀倉", "img": "./景點圖片/彰化/福興穀倉.jpg", "alt": "Fuxing Granary" }

        ],
        nantou: [
            { "name": "南投縣日月潭", "img": "./景點圖片/南投/日月潭.jpg", "alt": "Sun Moon Lake" },
            { "name": "南投縣九族文化村", "img": "./景點圖片/南投/九族文化村.jpg", "alt": "Formosan Aboriginal Culture Village" },
            { "name": "南投縣日光潭風景區", "img": "./景點圖片/南投/日光潭風景區.jpg", "alt": "Rihyitang Scenic Area" },
            { "name": "溪頭自然教育園區", "img": "./景點圖片/南投/溪頭自然教育園區.jpg", "alt": "Xitou Nature Education Area" },
            { "name": "九九峰forests", "img": "./景點圖片/南投/九九峰forests.jpg", "alt": "99 Peak Forests" },
            { "name": "日月老街", "img": "./景點圖片/南投/日月老街.jpg", "alt": "Sun Moon Old Street" },
            { "name": "集集綠菓園", "img": "./景點圖片/南投/集集綠菓園.jpg", "alt": "Jiji Green Fruit Garden" },
            { "name": "南投酒廠", "img": "./景點圖片/南投/南投酒廠.jpg", "alt": "Nantou Distillery" },
            { "name": "武岫農圃", "img": "./景點圖片/南投/武岫農圃.jpg", "alt": "Wuxiu Farm" },
            { "name": "竹山雲海茶園", "img": "./景點圖片/南投/竹山雲海茶園.jpg", "alt": "Zhushan Cloud Sea Tea Garden" },
            { "name": "杉林溪森林生態園區", "img": "./景點圖片/南投/杉林溪森林生態園區.jpg", "alt": "Shanlinxi Forest Ecological Garden" },
            { "name": "日月雕刻藝術廊道", "img": "./景點圖片/南投/日月雕刻藝術廊道.jpg", "alt": "Sun Moon Carving Art Gallery" },
            { "name": "青青草原", "img": "./景點圖片/南投/青青草原.jpg", "alt": "Green Green Grassland" },
            { "name": "港濱歷史園區", "img": "./景點圖片/南投/港濱歷史園區.jpg", "alt": "Gangbin Historical Park" },
            { "name": "日月雙心牆", "img": "./景點圖片/南投/日月雙心牆.jpg", "alt": "Sun Moon Twin Heart Stones" },
            { "name": "日月圍雷震宮", "img": "./景點圖片/南投/日月圍雷震宮.jpg", "alt": "Sun Moon Walled Temple" },
            { "name": "日月生態園區", "img": "./景點圖片/南投/日月生態園區.jpg", "alt": "Sun Moon Ecological Park" }
        ],
        yunlin: [
            { "name": "雲林縣雲林民俗村", "img": "./景點圖片/雲林/雲林民俗村.jpg", "alt": "Yunlin Folk Village" },
            { "name": "雲林縣林內紅茶園", "img": "./景點圖片/雲林/林內紅茶園.jpg", "alt": "Linne Tea Plantation, Yunlin" },
            { "name": "雲林縣古坑華山巖雕", "img": "./景點圖片/雲林/古坑華山巖雕.jpg", "alt": "Huashan Rock Carvings, Gukeng, Yunlin" },
            { "name": "雲林布袋戲館", "img": "./景點圖片/雲林/雲林布袋戲館.jpg", "alt": "Yunlin Glove Puppetry Museum" },
            { "name": "四湖火口", "img": "./景點圖片/雲林/四湖火口.jpg", "alt": "Sihu Crater" },
            { "name": "古坑華山休閒農場", "img": "./景點圖片/雲林/古坑華山休閒農場.jpg", "alt": "Gukeng Huashan Leisure Farm" },
            { "name": "林百蜜糖文化園區", "img": "./景點圖片/雲林/林百蜜糖文化園區.jpg", "alt": "Lin Bi Honey Culture Park" },
            { "name": "口湖遊憩區", "img": "./景點圖片/雲林/口湖遊憩區.jpg", "alt": "Kouhu Recreation Area" },
            { "name": "虎尾雲嘉南濱海國家風景區", "img": "./景點圖片/雲林/虎尾雲嘉南濱海國家風景區.jpg", "alt": "Huwei Yunlin Coast National Scenic Area" },
            { "name": "台西鹽田", "img": "./景點圖片/雲林/台西鹽田.jpg", "alt": "Taisi Salt Fields" },
            { "name": "崙背鄉神豬文化館", "img": "./景點圖片/雲林/崙背鄉神豬文化館.jpg", "alt": "Lunbei Township Pig Deity Museum" },
            { "name": "雲林斗煥國小", "img": "./景點圖片/雲林/雲林斗煥國小.jpg", "alt": "Dawuan Elementary School, Yunlin" },
            { "name": "寺廊社區", "img": "./景點圖片/雲林/寺廊社區.jpg", "alt": "Silang Community" },
            { "name": "北港天后宮", "img": "./景點圖片/雲林/北港天后宮.jpg", "alt": "Beigang Chaotian Temple" },
            { "name": "古坑農村社區", "img": "./景點圖片/雲林/古坑農村社區.jpg", "alt": "Gukeng Rural Community" },
            { "name": "雲林故事館", "img": "./景點圖片/雲林/雲林故事館.jpg", "alt": "Yunlin Story House" },
            { "name": "劍湖山世界", "img": "./景點圖片/雲林/劍湖山世界.jpg", "alt": "Jian Lake Park" },
            { "name": "虎尾景點一條遊", "img": "./景點圖片/雲林/虎尾景點一條遊.jpg", "alt": "Huwei One-Day Tourist Route" }
        ],
        chiayi: [
            { "name": "阿里山森林遊樂區", "img": "./景點圖片/嘉義/阿里山森林遊樂區.jpg", "alt": "Alishan Forest Recreation Area" },
            { "name": "佐登妮絲城堡", "img": "./景點圖片/嘉義/佐登妮絲城堡.jpg", "alt": "Chateau Reifeng, Chiayi" },
            { "name": "新嘉大昆蟲館", "img": "./景點圖片/嘉義/新嘉大昆蟲館.jpg", "alt": "Chiayi Insect Museum" },
            { "name": "奮起湖", "img": "./景點圖片/嘉義/奮起湖.jpg", "alt": "Fenqihu, Chiayi" },
            { "name": "隙頂二延平步道", "img": "./景點圖片/嘉義/隙頂二延平步道.jpg", "alt": "Xiding-Eryanping Trail, Chiayi" },
            { "name": "月影潭心", "img": "./景點圖片/嘉義/月影潭心.jpg", "alt": "Moon Shadow Lake Heart" },
            { "name": "東石漁人碼頭", "img": "./景點圖片/嘉義/東石漁人碼頭.jpg", "alt": "Dongshi Fisherman's Wharf" },
            { "name": "太平雲梯", "img": "./景點圖片/嘉義/太平雲梯.jpg", "alt": "Taiping Suspension Bridge, Chiayi" },
            { "name": "龍王金殿", "img": "./景點圖片/嘉義/龍王金殿.jpg", "alt": "Dragon King Golden Temple, Chiayi" },
            { "name": "白水湖壽島", "img": "./景點圖片/嘉義/白水湖壽島.jpg", "alt": "Baishuihu Shou Island, Chiayi" },
            { "name": "嘉義新港稻草捲", "img": "./景點圖片/嘉義/嘉義新港稻草捲.jpg", "alt": "Chiayi Xingang Rice Straw Rolls" },
            { "name": "嘉義市立美術館", "img": "./景點圖片/嘉義/嘉義市立美術館.jpg", "alt": "Chiayi City Art Museum" },
            { "name": "鄒族逐鹿文創園區", "img": "./景點圖片/嘉義/鄒族逐鹿文創園區.jpg", "alt": "Zou Tribe Chasing Deer Creative Park" },
            { "name": "故宮南院", "img": "./景點圖片/嘉義/故宮南院.jpg", "alt": "National Palace Museum Southern Branch" },
            { "name": "板陶窯交趾剪黏工藝園區", "img": "./景點圖片/嘉義/板陶窯交趾剪黏工藝園區.jpg", "alt": "Bantao Kiln, Chiayi" }
        ]
        ,
        pingtung: [
            { "name": "墾丁國家公園", "img": "./景點圖片/屏東/墾丁國家公園.jpg", "alt": "Kenting National Park" },
            { "name": "鵝鑾鼻燈塔", "img": "./景點圖片/屏東/鵝鑾鼻燈塔.jpg", "alt": "Eluanbi Lighthouse" },
            { "name": "南灣", "img": "./景點圖片/屏東/南灣.jpg", "alt": "Nanwan Beach" },
            { "name": "貓鼻頭", "img": "./景點圖片/屏東/貓鼻頭.jpg", "alt": "Cat's Nose" },
            { "name": "四重溪溫泉", "img": "./景點圖片/屏東/四重溪溫泉.jpg", "alt": "Sichongxi Hot Springs" },
            { "name": "琉球嶼", "img": "./景點圖片/屏東/琉球嶼.jpg", "alt": "Liuqiu Island" },
            { "name": "大鵬灣國家風景區", "img": "./景點圖片/屏東/大鵬灣國家風景區.jpg", "alt": "Dapeng Bay National Scenic Area" },
            { "name": "東港華僑市場", "img": "./景點圖片/屏東/東港華僑市場.jpg", "alt": "Donggang Fish Market" },
            { "name": "枋山海岸", "img": "./景點圖片/屏東/枋山海岸.jpg", "alt": "Fangshan Coast" },
            { "name": "國立海洋生物博物館", "img": "./景點圖片/屏東/國立海洋生物博物館.jpg", "alt": "National Museum of Marine Biology and Aquarium" },
            { "name": "瑪家茶園", "img": "./景點圖片/屏東/瑪家茶園.jpg", "alt": "Majia Tea Plantations" },
            { "name": "屏東夜市", "img": "./景點圖片/屏東/屏東夜市.jpg", "alt": "Pingtung Night Market" },
            { "name": "恆春古城", "img": "./景點圖片/屏東/恆春古城.jpg", "alt": "Hengchun Ancient City" },
            { "name": "雙流國家森林遊樂區", "img": "./景點圖片/屏東/雙流國家森林遊樂區.jpg", "alt": "Shuangliu National Forest Recreation Area" },
            { "name": "車城福安宮", "img": "./景點圖片/屏東/車城福安宮.jpg", "alt": "Checheng Fu'an Temple" }
        ]
        ,
        yilan: [
            { name: "羅東夜市", img: "", alt: "Luodong Night Market" },
            { name: "幾米公園", img: "", alt: "Jimmy Park" }
        ],
        hualien: [
            { name: "太魯閣國家公園", img: "", alt: "Taroko National Park" },
            { name: "七星潭", img: "", alt: "Qixingtan Beach" }
        ],
        taitung: [
            { name: "池上伯朗大道", img: "", alt: "Chishang Brown Boulevard" },
            { name: "三仙台", img: "", alt: "Sanxiantai" }
        ],
        penghu: [
            { name: "澎湖天后宮", img: "", alt: "Penghu Tianhou Temple" },
            { name: "澎湖跨海大橋", img: "", alt: "Penghu Great Bridge" }
        ],
        kinmen: [
            { name: "莒光樓", img: "", alt: "Juguang Tower" },
            { name: "翟山坑道", img: "", alt: "Zhaishan Tunnel" }
        ],
        lienchiang: [
            { name: "南竿清水古堡", img: "", alt: "Nangan Ching Shui Ancient Fort" },
            { name: "北竿芹壁村", img: "", alt: "Beigan Qinbi Village" }
        ]
    };


    // 清除行程表的函數
    function clearSchedule() {
        $('#first-day-morning, #first-day-afternoon, #first-day-evening, #first-day-night, #second-day-morning, #second-day-afternoon, #second-day-evening, #second-day-night, #third-day-morning, #third-day-afternoon, #third-day-evening, #third-day-night').empty();
    }


    // 初始化可拖動功能的函數
    function initializeDraggable() {
        $("li", "#gallery").draggable({
            cancel: "a.ui-icon",
            revert: "invalid",
            containment: "document",
            helper: "clone",
            cursor: "move"
        });

        // 設置圖庫的可放回去功能
        $("#gallery").droppable({
            accept: ".ui-draggable",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                recycleImage(ui.draggable); // 將圖片回收
            }
        });

        var $firstDayAreas = $("#first-day-morning, #first-day-afternoon, #first-day-evening, #first-day-night");
        var $secondDayAreas = $("#second-day-morning, #second-day-afternoon, #second-day-evening, #second-day-night");
        var $thirdDayAreas = $("#third-day-morning, #third-day-afternoon, #third-day-evening, #third-day-night");

        // 預設圖片還沒放
        var dropAreasStatus = {
            firstDay: {},
            secondDay: {},
            thirdDay: {}
        };

        $firstDayAreas.each(function () {
            dropAreasStatus.firstDay[this.id] = false;
        });

        $secondDayAreas.each(function () {
            dropAreasStatus.secondDay[this.id] = false;
        });

        $thirdDayAreas.each(function () {
            dropAreasStatus.thirdDay[this.id] = false;
        });

        // 分别檢查每一天的區塊是否都已經放置了圖片
        function checkDayAreasFilled(day) {
            for (var areaId in dropAreasStatus[day]) {
                if (!dropAreasStatus[day][areaId]) {
                    return false;
                }
            }
            return true;
        }

        // 統一的drop處理程序
        function handleDrop(event, ui, day) {
            var $trash = $(this);
            var $existingItem = $trash.find("li");

            if ($existingItem.length) {
                recycleImage($existingItem);
            }

            deleteImage(ui.draggable, $trash);

            // 標記該區塊已放置圖片
            dropAreasStatus[day][$trash.attr("id")] = true;

            // 檢查該天所有區塊是否已經放置了圖片
            if (checkDayAreasFilled(day)) {
                $("#" + day + "ConfirmCheckbox").prop("disabled", false);
            }
        }

        $firstDayAreas.droppable({
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                handleDrop.call(this, event, ui, 'firstDay');
            }
        });

        $secondDayAreas.droppable({
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                handleDrop.call(this, event, ui, 'secondDay');
            }
        });

        $thirdDayAreas.droppable({
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                handleDrop.call(this, event, ui, 'thirdDay');
            }
        });




        // 刪除圖片的函數
        function deleteImage($item, $trash) {
            var recycle_icon = "<a href='#' title='回收此圖片' class='ui-icon ui-icon-refresh'>回收圖片</a>";
            $item.fadeOut(function () {
                $item.find("a.ui-icon-arrowrefresh-1-s").remove();
                $item.append(recycle_icon).appendTo($trash).fadeIn();

                $item.find(".ui-icon-refresh").on("click", function () {
                    recycleImage($item);
                });
            });
        }

        // 回收圖片的函數
        function recycleImage($item) {
            var trash_icon = "<a href='#' title='刪除此圖片' class='ui-icon ui-icon-arrowrefresh-1-s'>刪除圖片</a>";
            $item.fadeOut(function () {
                $item.find("a.ui-icon-refresh").remove().end()
                    .append(trash_icon)
                    .appendTo("#gallery").fadeIn(function () {
                        $item.find('img').css('height', $item.data('original-height'));
                    });

                $item.draggable({
                    revert: true,
                    containment: "document",
                    cursor: "move",
                    helper: "original"
                });
            });
        }
    }

    // 對地點選擇下拉菜單變更的事件監聽器
    $("#locationSelect").on("change", function () {
        var location = $(this).val();
        var gallery = $("#gallery");
        gallery.empty();

        if (location) {
            spots[location].forEach(spot => {
                var listItem = `
                    <li class="ui-widget-content ui-corner-tr">
                        <h5 class="ui-widget-header">${spot.name}</h5>
                        <img src="${spot.img}" alt="${spot.alt}" width="96" height="72">
                        <br>
                        <a href="${spot.img}" title="查看較大的圖片" class="ui-icon ui-icon-zoomin">查看較大</a>
                    </li>`;
                gallery.append(listItem);
            });
            initializeDraggable();
        }
    });

    // 對地點選擇下拉菜單變更的事件監聽器
    $('#locationSelect').change(clearSchedule);

    // 點擊圖庫項目的事件監聽器
    $("li").on("click", function (event) {
        var $item = $(this),
            $target = $(event.target);

        if ($target.is("a.ui-icon-arrowrefresh-1-s")) {
            deleteImage($item);
        } else if ($target.is("a.ui-icon-zoomin")) {
            viewLargerImage($target);
        } else if ($target.is("a.ui-icon-refresh")) {
            recycleImage($item);
        }
        return false;
    });

    // 查看較大圖片的函數
    function viewLargerImage($link) {
        var src = $link.attr("href"),
            title = $link.siblings("img").attr("alt"),
            $modal = $("img[src$='" + src + "']");

        if ($modal.length) {
            $modal.dialog("open");
        } else {
            var img = $("<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />")
                .attr("src", src).appendTo("body");
            setTimeout(function () {
                img.dialog({
                    title: title,
                    width: 40,
                    modal: true
                });
            }, 1);
        }
    }

    // ---------------------------------------------
    //出遊天數 變動核取框
    document.getElementById('themeSelect').addEventListener('change', function () {
        var value = this.value;
        document.getElementById('firstDayContainer').style.display = 'none';
        document.getElementById('secondDayContainer').style.display = 'none';
        document.getElementById('thirdDayContainer').style.display = 'none';

        if (value === '1') {
            document.getElementById('firstDayContainer').style.display = 'block';
        } else if (value === '2') {
            document.getElementById('firstDayContainer').style.display = 'block';
            document.getElementById('secondDayContainer').style.display = 'block';
        } else if (value === '3') {
            document.getElementById('firstDayContainer').style.display = 'block';
            document.getElementById('secondDayContainer').style.display = 'block';
            document.getElementById('thirdDayContainer').style.display = 'block';
        }
    });
    // 換畫面要勾哪些的邏輯
    document.getElementById("findbtn").addEventListener("click", function () {
        var confirmCheckbox = document.getElementById("confirmCheckbox");
        var firstDayConfirmCheckbox = document.getElementById("firstDayConfirmCheckbox");
        var secondDayConfirmCheckbox = document.getElementById("secondDayConfirmCheckbox");
        var thirdDayConfirmCheckbox = document.getElementById("thirdDayConfirmCheckbox");

        if (confirmCheckbox.checked) {
            if (firstDayConfirmCheckbox.checked && secondDayConfirmCheckbox.checked && thirdDayConfirmCheckbox.checked) {
                // 三日遊勾選
                window.location.href = "找導遊.html";
            } else if (firstDayConfirmCheckbox.checked && secondDayConfirmCheckbox.checked) {
                // 二日遊勾選
                window.location.href = "找導遊.html";
            } else if (firstDayConfirmCheckbox.checked) {
                // 一日遊勾選
                window.location.href = "找導遊.html";
            } else {
                // 如果沒有任何一天被勾選就會顯示警告
                alert("請確定您的資訊都已填寫");
            }
        } else {
            // 如果確認核取方塊未被勾選就會顯示警告
            alert("請確定您的資訊都已填寫");
        }
    });


    // 地點人數日期 幾天都要選過 才可以啟用核取方塊
    const locationSelect = document.getElementById('locationSelect');
    const peopleSelect = document.getElementById('peopleSelect');
    const daysSelect = document.getElementById('themeSelect');
    const confirmCheckbox = document.getElementById('confirmCheckbox');
    const datepicker = document.getElementById('datepicker');

    function updateCheckboxState() {
        const locationValue = locationSelect.value;
        const peopleValue = peopleSelect.value;
        const daysValue = daysSelect.value;
        const departureDate = datepicker.value;

        if (locationValue === '' || peopleValue === '' || daysValue === '' || departureDate === '') {
            confirmCheckbox.disabled = true;
            confirmCheckbox.checked = false;
        } else {
            confirmCheckbox.disabled = false;
            confirmCheckbox.checked = false;
        }
    }

    locationSelect.addEventListener('change', updateCheckboxState);
    peopleSelect.addEventListener('change', updateCheckboxState);
    daysSelect.addEventListener('change', updateCheckboxState);
    datepicker.addEventListener('change', updateCheckboxState);



    // 手風琴動畫
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove("active");
            } else {
                var panels = document.getElementsByClassName("panel");
                for (var j = 0; j < panels.length; j++) {
                    panels[j].style.maxHeight = null;
                    panels[j].previousElementSibling.classList.remove("active");
                }
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active");
            }
        });
    }

    document.getElementById('themeSelect').addEventListener('change', function () {
        var days = parseInt(this.value, 10);
        for (i = 1; i <= 3; i++) {
            var dayButton = document.getElementById('day' + i);
            var dayPanel = document.getElementById('panel' + i);
            if (i <= days) {
                dayButton.style.display = 'block';
                dayPanel.style.display = 'block';
            } else {
                dayButton.style.display = 'none';
                dayPanel.style.display = 'none';
            }
        }
    });
    // 讓行程不會跑掉
    var day1Button = document.getElementById("day1");
    var day2Button = document.getElementById("day2");
    var day3Button = document.getElementById("day3");
    day1Button.addEventListener("click", scrollToTop);
    day2Button.addEventListener("click", scrollToTop);
    day3Button.addEventListener("click", scrollToTop);

    function scrollToTop() {
        var accordionContainer = document.getElementById("accordionContainer");
        var topPosition = accordionContainer.offsetTop - 100;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    }


});

