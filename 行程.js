$(function () {
    $("#datepicker").datepicker({
        minDate: 0, // 只能選擇當天及以後的日期
        dateFormat: 'yy/mm/dd' // 按照年月日的順序顯示日期
    });

    var spots = {
        taipei: [
            { name: "101大樓", img: "", alt: "Taipei 101" },
            { name: "木柵動物園", img: "", alt: "Muzha Zoo" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            { name: "台北101/世貿", img: "", alt: "Taipei 101/World Trade Center" },
            
        ],
        newtaipei: [
            { name: "九份老街", img: "", alt: "Jiufen Old Street" },
            { name: "淡水老街", img: "", alt: "Tamsui Old Street" }
        ],
        taoyuan: [
            { name: "大溪老街", img: "", alt: "Daxi Old Street" },
            { name: "小烏來天空步道", img: "", alt: "Xiao Wulai Sky Walk" }
        ],
        taichung: [
            { name: "台中公園", img: "", alt: "Taichung Park" },
            { name: "逢甲夜市", img: "", alt: "Fengjia Night Market" }
        ],
        tainan: [
            { name: "赤崁樓", img: "", alt: "Chihkan Tower" },
            { name: "安平古堡", img: "", alt: "Anping Fort" }
        ],
        kaohsiung: [
            { name: "愛河", img: "", alt: "Love River" },
            { name: "美麗島捷運站", img: "", alt: "Formosa Boulevard MRT Station" }
        ],
        keelung: [
            { name: "基隆廟口夜市", img: "", alt: "Keelung Miaokou Night Market" },
            { name: "和平島公園", img: "", alt: "Heping Island Park" }
        ],
        hsinchu: [
            { name: "新竹城隍廟", img: "", alt: "Hsinchu City God Temple" },
            { name: "新竹東門城", img: "", alt: "Hsinchu East Gate" }
        ],
        miaoli: [
            { name: "三義木雕博物館", img: "", alt: "Sanyi Wood Sculpture Museum" },
            { name: "鯉魚潭", img: "", alt: "Liyu Lake" }
        ],
        changhua: [
            { name: "八卦山大佛", img: "", alt: "Baguashan Great Buddha" },
            { name: "鹿港老街", img: "", alt: "Lukang Old Street" }
        ],
        nantou: [
            { name: "日月潭", img: "", alt: "Sun Moon Lake" },
            { name: "清境農場", img: "", alt: "Cingjing Farm" }
        ],
        yunlin: [
            { name: "北港朝天宮", img: "", alt: "Beigang Chao Tian Temple" },
            { name: "劍湖山世界", img: "", alt: "Janfusun Fancyworld" }
        ],
        chiayi: [
            { name: "阿里山", img: "", alt: "Alishan" },
            { name: "檜意森活村", img: "", alt: "Hinoki Village" }
        ],
        pingtung: [
            { name: "墾丁國家公園", img: "", alt: "Kenting National Park" },
            { name: "東港東隆宮", img: "", alt: "Donglong Temple" }
        ],
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

        var $trashAreas = $("#first-day-morning, #first-day-afternoon, #first-day-evening, #first-day-night, #second-day-morning, #second-day-afternoon, #second-day-evening, #second-day-night, #third-day-morning, #third-day-afternoon, #third-day-evening, #third-day-night");

        // 初始化每个区块的状态为未放置
        var dropAreasStatus = {};
        $trashAreas.each(function() {
            dropAreasStatus[this.id] = false;
        });
        
        // 检查是否所有区块都已经放置了图片
        function checkAllAreasFilled() {
            for (var areaId in dropAreasStatus) {
                if (!dropAreasStatus[areaId]) {
                    return false;
                }
            }
            return true;
        }
        
        $trashAreas.droppable({
            accept: "#gallery > li",
            classes: {
                "ui-droppable-active": "ui-state-highlight"
            },
            drop: function (event, ui) {
                var $trash = $(this);
                var $existingItem = $trash.find("li");
        
                if ($existingItem.length) {
                    recycleImage($existingItem);
                }
        
                deleteImage(ui.draggable, $trash);
        
                // 标记该区块已放置图片
                dropAreasStatus[$trash.attr("id")] = true;
        
                // 检查是否所有区块都已经放置了图片，如果是，则启用确认核取方块
                if (checkAllAreasFilled()) {
                    $("#confirmCheckbox2").prop("disabled", false);
                }
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
});

